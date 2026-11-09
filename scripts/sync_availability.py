#!/usr/bin/env python3
"""Haalt de iCal-agenda's van Airbnb en Booking.com op en schrijft de bezette
nachten naar docs/availability.json voor de kalender op reserveren.html.

De agenda-links staan als GitHub Actions-secrets (nooit in de repository):
  ICAL_APT1_AIRBNB, ICAL_APT1_BOOKING, ICAL_APT2_AIRBNB, ICAL_APT2_BOOKING

Een bezette nacht is elke datum d met DTSTART <= d < DTEND (de vertrekdag zelf
is dus vrij, zodat aansluitende boekingen mogelijk blijven).
Mislukt het ophalen van een agenda, dan blijven de vorige gegevens van die
agenda staan: liever een datum te veel bezet dan een dubbele boeking.
"""
import datetime as dt
import json
import os
import re
import sys
import urllib.request

OUT = os.path.join(os.path.dirname(__file__), "..", "docs", "availability.json")
SOURCES = {
    ("1", "airbnb"): "ICAL_APT1_AIRBNB",
    ("1", "booking"): "ICAL_APT1_BOOKING",
    ("2", "airbnb"): "ICAL_APT2_AIRBNB",
    ("2", "booking"): "ICAL_APT2_BOOKING",
}
HORIZON_DAYS = 550


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "InnVenlo-availability-sync/1.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="replace")


def parse_date(value):
    m = re.match(r"(\d{4})(\d{2})(\d{2})", value)
    return dt.date(int(m[1]), int(m[2]), int(m[3])) if m else None


def busy_nights(ics, today):
    text = re.sub(r"\r?\n[ \t]", "", ics)  # gevouwen regels samenvoegen
    nights = set()
    for block in re.findall(r"BEGIN:VEVENT(.*?)END:VEVENT", text, re.S):
        start = re.search(r"^DTSTART[^:]*:(\S+)", block, re.M)
        end = re.search(r"^DTEND[^:]*:(\S+)", block, re.M)
        if not start:
            continue
        s = parse_date(start[1])
        e = parse_date(end[1]) if end else s + dt.timedelta(days=1)
        if not s or not e:
            continue
        if e <= s:
            e = s + dt.timedelta(days=1)
        d = max(s, today)
        last = min(e, today + dt.timedelta(days=HORIZON_DAYS))
        while d < last:
            nights.add(d.isoformat())
            d += dt.timedelta(days=1)
    return nights


def main():
    today = dt.date.today()
    try:
        with open(OUT, encoding="utf-8") as f:
            previous = json.load(f)
    except (OSError, ValueError):
        previous = {}
    prev_sources = previous.get("sources", {})

    sources, status = {}, {}
    for (apt, platform), env in SOURCES.items():
        key = f"{apt}-{platform}"
        url = os.environ.get(env, "").strip()
        if not url:
            status[key] = "niet ingesteld"
            continue
        try:
            nights = busy_nights(fetch(url), today)
            sources[key] = sorted(nights)
            status[key] = f"ok ({len(nights)} nachten bezet)"
        except Exception as exc:  # noqa: BLE001
            kept = [d for d in prev_sources.get(key, []) if d >= today.isoformat()]
            sources[key] = kept
            status[key] = f"FOUT, vorige gegevens behouden: {exc}"

    apartments = {}
    for apt in ("1", "2"):
        merged = set()
        for key, nights in sources.items():
            if key.startswith(apt + "-"):
                merged.update(nights)
        apartments[apt] = sorted(merged)

    data = {
        "updated": dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat(),
        "apartments": apartments,
        "sources": sources,
    }
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
        f.write("\n")
    for key, msg in status.items():
        print(f"{key}: {msg}")
    if any(m.startswith("FOUT") for m in status.values()):
        sys.exit(1)


if __name__ == "__main__":
    main()
