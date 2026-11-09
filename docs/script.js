"use strict";

/* =================================
   INNVENLO - VERTALINGEN
================================= */

const translations = {
  nl: {
    calSel: "Uw verblijf",
    qkLabel: "Snel kiezen",
    qkFirst: "Eerst beschikbaar",
    qkWeekend: "Dit weekend",
    qkNextWeekend: "Volgend weekend",
    rgClear: "Wissen",
    rgPickOut: "Kies vertrek",
    msgBusy: "Deze nacht is al bezet. Kies een andere aankomstdag.",
    msgCross: "Uw verblijf kan niet over een bezette nacht lopen. Vertrek uiterlijk op {d}.",
    bkTotal: "vanaf € {p}",
    bkBarPick: "Kies uw datums",
    barPick: "Kies data",
    barPickOut: "Kies vertrek",
    barNext: "Verder",
    barSend: "Versturen",
    gMinus: "Minder gasten",
    gPlus: "Meer gasten",
    addNote: "+ Opmerking toevoegen",
    resErrDates: "Kies eerst uw aankomst- en vertrekdatum.",
    bkStep1b: "Kies appartement en datums",
    bkFrom: "Vanaf € 90 per nacht",
    resPrice: "Vanaf € 90 per nacht. De prijs kan variëren afhankelijk van het seizoen.",
    errName: "Vul uw naam in.",
    errEmail: "Vul een geldig e-mailadres in, bijvoorbeeld naam@voorbeeld.nl.",
    calBusy: "Bezet",
    calFree: "Beschikbaar",
    calUpdated: "Beschikbaarheid bijgewerkt:",
    calNotFree: "Deze datums zijn niet (meer) beschikbaar voor dit appartement. Kies andere datums.",
    bkTitle: "Reserveer uw verblijf in hartje Venlo",
    bkLead: "Kies uw datums en verstuur uw aanvraag. Vrijblijvend en zonder vooruitbetaling – u ontvangt een persoonlijke bevestiging per e-mail.",
    bkStep1: "Kies uw datums",
    bkStep2: "Uw gegevens",
    bkPriceNote: "De prijs kan variëren afhankelijk van het seizoen. U ontvangt de definitieve prijs bij de bevestiging.",
    bkNoPref: "Geen voorkeur",
    bkReassure: "Vrijblijvend · geen betaling nu · persoonlijke bevestiging per e-mail",
    bkAside: "Over uw verblijf",
    bkIncl: "Inbegrepen bij elk appartement",
    bkBath: "Eigen badkamer met bad en douche",
    bkTimes: "Inchecken vanaf 14:00 · uitchecken tot 11:00",
    bkPets: "Huisdieren welkom",
    bkHow: "Zo werkt het",
    bkHow1: "Kies uw datums en verstuur de aanvraag.",
    bkHow2: "Wij controleren de beschikbaarheid.",
    bkHow3: "U ontvangt een persoonlijke bevestiging per e-mail.",
    bkHelp: "Vragen? Wij helpen u graag.",
    bkBarBtn: "Aanvragen",
    titleReserve: "Reserveren | InnVenlo Apartments Venlo",
    resPick: "Kies uw aankomstdatum",
    resPickOut: "kies uw vertrekdatum",
    calPrev: "Vorige maand",
    calNext: "Volgende maand",
    contactDoneTitle: "Bedankt voor uw bericht",
    contactDoneText: "We nemen zo snel mogelijk contact met u op.",
    resLabel: "Reserveringsaanvraag",
    resTitle: "Direct bij ons aanvragen",
    resIntro: "Kies uw appartement en datums. U ontvangt binnen 24 uur een persoonlijke bevestiging per e-mail. Uw aanvraag is pas definitief na onze bevestiging.",
    resChoose: "Appartement",
    resIn: "Aankomst",
    resOut: "Vertrek",
    resGuests: "Gasten",
    resPhone: "Telefoon (optioneel)",
    resMsg: "Opmerking (optioneel)",
    resSend: "Reservering aanvragen",
    resNote: "Liever direct zeker van uw verblijf? Boek via Booking.com of Airbnb met de knoppen bij de appartementen.",
    resDoneTitle: "Bedankt voor uw aanvraag",
    resDoneText: "We hebben uw aanvraag ontvangen en bevestigen zo snel mogelijk per e-mail of de datums beschikbaar zijn.",
    resNight: "nacht",
    resNights: "nachten",
    resErrFields: "Vul alle verplichte velden correct in.",
    resErrSend: "Versturen is niet gelukt. Probeer het opnieuw of neem contact op via WhatsApp of e-mail.",
    resErrSetup: "Het aanvraagformulier is nog niet geactiveerd. Neem contact op via WhatsApp of e-mail.",
    aptType: "Appartement · eigen ingang",
    aptLead: "Ruim appartement met woonkamer, bank en flatscreen-tv, een eigen keuken en een eigen badkamer.",
    livingLbl: "Woonkamer",
    livingVal: "Met bank en flatscreen-tv",
    kitchenOwn: "Eigen keuken, volledig uitgerust",
    bathOwn: "Eigen badkamer met bad",
    faqLabel: "Praktische informatie",
    faqTitle: "Veelgestelde vragen",
    faqParkQ: "Is er parkeergelegenheid beschikbaar?",
    faqParkA: "Ja, parkeren is mogelijk in de omgeving. Houd er rekening mee dat parkeren betaald is.",
    faqTimeQ: "Wat zijn de in- en uitchecktijden?",
    faqTimeA: "Inchecken is mogelijk vanaf 14:00 uur. Uitchecken dient uiterlijk om 11:00 uur te gebeuren.",
    faqGuestsQ: "Hoeveel gasten kunnen er overnachten?",
    faqGuestsA: "Het appartement is geschikt voor maximaal 3 gasten.",
    faqPetsQ: "Zijn huisdieren toegestaan?",
    faqPetsA: "Ja, huisdieren zijn toegestaan.",
    faqWifiQ: "Is er wifi beschikbaar?",
    faqWifiA: "Ja, er is wifi beschikbaar in het appartement.",
    faqBedsQ: "Hoeveel slaapkamers heeft het appartement?",
    faqBedsA: "Het appartement beschikt over 1 slaapkamer.",
    oneType: "Appartement · 2 ruimtes",
    deluxeType: "Kamer · 1 ruimte",
    oneLead: "Ruim appartement met parketvloer, zithoek met flatscreen-tv en uitzicht over Venlo.",
    deluxeLead: "Ruime kamer met eigen ingang, koffiemachine en een bank om te ontspannen.",
    cmpLayout: "Indeling",
    oneLayout: "Woonkamer + aparte slaapkamer",
    deluxeLayout: "Eén ruimte met zit- en eethoek",
    oneKitchenVal: "Eigen keuken, volledig uitgerust",
    deluxeKitchenVal: "Toegang tot uitgeruste keuken",
    bathBoth: "Bad en douche",
    bathPriv: "Eigen badkamer",
    bathPrivText: "Met badkuip en douche, inclusief gratis bad- en toiletartikelen.",
    kitchenEquipped: "Goed uitgerust",
    reviewsLead: "Benieuwd wat gasten over ons zeggen? Lees hun ervaringen op",
    and: "en",
    ratings: "Beoordelingen",
    guestReviews: "Ervaringen van gasten",
    bookDirect: "Direct boeken",
    home: "Home",
    apartments: "Appartementen",
    contact: "Contact",

    homeTitle: "Overnachten in hartje Venlo",
    homeIntro: "Overnachten in Venlo in een ruim, comfortabel short stay appartement met eigen ingang, keuken en gratis WiFi.",
    view: "Bekijk de appartementen",
    about: "Comfortabel overnachten in Venlo – InnVenlo Apartments",
    why: "Waarom kiezen voor InnVenlo Apartments?",
    own: "Eigen ingang",
    kitchen: "Volledige keuken",
    wifi: "Gratis WiFi",
    city: "Stadsuitzicht",
    our: "Onze appartementen in Venlo",
    reviews: "Wat gasten over ons zeggen",
    short: "Short stay in Venlo: voor elk verblijf",

    apartmentsTitle: "Appartementen in Venlo",
    apartmentsIntro: "Kies uw short stay appartement in Venlo. Beide verblijven hebben een eigen ingang, koffiemachine, flatscreen-tv, gratis WiFi en stadsuitzicht. U bent op loopafstand van het centrum. Pretpark Toverland ligt op ongeveer 20 km.",

    oneBedroom: "Appartement 1",
    deluxe: "Appartement 2",
    beds: "Slaapplaatsen",
    rooms: "Kamers",
    bathroom: "Badkamer",
    floor: "Vloer",
    facilities: "Voorzieningen",
    bookBooking: "Bekijk beschikbaarheid op Booking.com",
    bookAirbnb: "Boek nu via Airbnb",
    questionStay: "Vragen over uw verblijf in Venlo?",
    contactUs: "Neem gerust contact met ons op voor informatie over de appartementen.",
    contactButton: "Contact opnemen",

    contactTitle: "Contact met InnVenlo Apartments",
    contactIntro: "Vragen over overnachten in Venlo of over onze appartementen? Stuur ons een bericht of bekijk de locatie op Google Maps.",
    address: "Adres en gegevens",
    message: "Stuur een bericht",
    name: "Naam",
    email: "E-mailadres",
    yourMessage: "Uw bericht",
    send: "Verstuur bericht",
    map: "Bekijk op Google Maps",
    phone: "Telefoon",
    directBooking: "Direct boeken? Bekijk de appartementen en boek via Booking.com of Airbnb.",

    titleHome: "Overnachten in Venlo centrum | InnVenlo Apartments",
    titleApartments: "Appartementen in Venlo huren | InnVenlo Apartments",
    titleContact: "Contact | InnVenlo Apartments Venlo",
    mainMenu: "Hoofdmenu",
    footerMenu: "Footermenu",
    chooseLanguage: "Kies taal",
    callUs: "Bel ons",
    footerTag: "Appartement huren in Venlo, Limburg",
    footerRights: "© 2026 InnVenlo Apartments. Alle rechten voorbehouden.",
    aboutP1: "Op zoek naar een comfortabel appartement in Venlo voor een weekendje weg, een zakelijke overnachting of een langer verblijf? Bij InnVenlo Apartments combineert u de luxe en het comfort van een hotel met de privacy en vrijheid van een volledig eigen appartement.",
    aboutP2: "Venlo ligt aan de Maas, vlak bij de Duitse grens, en is een ideale uitvalsbasis voor zowel toeristen als zakelijke reizigers. Ontdek de stad en de omgeving, bezoek Toverland (circa 20 km) of bekijk een wedstrijd in het Borussia-Park in Mönchengladbach (circa 34 km).",
    ownText: "Kom en ga wanneer het u uitkomt, met volledige privacy.",
    kitchenText: "Kookplaat, koelkast, vaatwasser en servies.",
    wifiText: "Snel internet voor werk, streaming en route plannen.",
    cityText: "Rustig wakker worden met uitzicht over Venlo en een eigen koffiemachine.",
    oneBedroomShort: "Appartement 1",
    deluxeShort: "Appartement 2",
    idxOneDesc: "Ruim appartement met aparte woonkamer, aparte slaapkamer en badkamer met bad. Parketvloer, zithoek met flatscreen-tv, eigen ingang en stadsuitzicht. 2 bedden.",
    idxDeluxeDesc: "Ruime kamer met eigen ingang, koffiemachine, eetgedeelte, bank en flatscreen-tv. Eigen badkamer met bad en douche en toegang tot een goed uitgeruste keuken. 2 bedden.",
    tagLiving: "Woonkamer",
    tagBedroom: "Slaapkamer",
    tagKitchen: "Keuken",
    tagBath: "Bad",
    tagBathShower: "Bad en douche",
    moreFeatures: "Alle kenmerken bekijken →",
    reviewsIntro: "Lees de ervaringen van eerdere gasten op de platforms waar u kunt boeken.",
    reviewsBooking: "Reviews op Booking.com",
    reviewsAirbnb: "Reviews op Airbnb",
    reviewsGoogle: "Reviews op Google",
    shortText: "Zoekt u een vakantiewoning in Venlo voor een korte vakantie, of een appartement voor een zakelijk verblijf? Onze appartementen combineren het gemak van een hotel met de ruimte en vrijheid van een eigen woning. Boek eenvoudig en veilig via Booking.com of Airbnb.",
    aptOneDesc: "Een ruim appartement met een aparte woonkamer en een aparte slaapkamer. U kookt in de goed uitgeruste keuken en ontspant in de zithoek met flatscreen-tv, met uitzicht over Venlo.",
    aptDeluxeDesc: "Een ruime kamer met eigen ingang, eetgedeelte en bank. Ideaal voor een korte stedentrip of zakelijk verblijf in Venlo, met toegang tot een goed uitgeruste keuken.",
    twoBeds: "2 bedden",
    roomsOne: "1 woonkamer, 1 slaapkamer",
    bathOne: "1, met bad en gratis toiletartikelen",
    floorParquet: "Parket",
    roomsDeluxe: "1 kamer met zit- en eetgedeelte",
    bathDeluxe: "1, met bad en douche",
    floorCarpet: "Tapijt",
    hob: "Kookplaat",
    fridge: "Koelkast",
    dishwasher: "Vaatwasser",
    utensils: "Keukengerei",
    coffeeMachine: "Koffiemachine",
    tv: "Flatscreen-tv",
    dining: "Eetgedeelte",
    couch: "Bank",
    alsoVia: "Ook beschikbaar via",
    emailLabel: "E-mail",
    region: "Limburg, Nederland"
  },

  en: {
    calSel: "Your stay",
    qkLabel: "Quick pick",
    qkFirst: "First available",
    qkWeekend: "This weekend",
    qkNextWeekend: "Next weekend",
    rgClear: "Clear",
    rgPickOut: "Choose departure",
    msgBusy: "This night is already booked. Please choose another arrival day.",
    msgCross: "Your stay cannot include a booked night. Latest departure: {d}.",
    bkTotal: "from € {p}",
    bkBarPick: "Choose your dates",
    barPick: "Choose dates",
    barPickOut: "Choose departure",
    barNext: "Continue",
    barSend: "Send",
    gMinus: "Fewer guests",
    gPlus: "More guests",
    addNote: "+ Add a comment",
    resErrDates: "Please choose your arrival and departure date first.",
    bkStep1b: "Choose apartment and dates",
    bkFrom: "From € 90 per night",
    resPrice: "From € 90 per night. Prices may vary by season.",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address, e.g. name@example.com.",
    calBusy: "Booked",
    calFree: "Available",
    calUpdated: "Availability updated:",
    calNotFree: "These dates are not available for this apartment. Please choose other dates.",
    bkTitle: "Book your stay in the heart of Venlo",
    bkLead: "Choose your dates and send your request. No obligation and no prepayment – you will receive a personal confirmation by email.",
    bkStep1: "Choose your dates",
    bkStep2: "Your details",
    bkPriceNote: "Prices may vary by season. You will receive the final price with the confirmation.",
    bkNoPref: "No preference",
    bkReassure: "No obligation · no payment now · personal confirmation by email",
    bkAside: "About your stay",
    bkIncl: "Included with every apartment",
    bkBath: "Private bathroom with bath and shower",
    bkTimes: "Check-in from 14:00 · check-out by 11:00",
    bkPets: "Pets welcome",
    bkHow: "How it works",
    bkHow1: "Choose your dates and send the request.",
    bkHow2: "We check availability.",
    bkHow3: "You receive a personal confirmation by email.",
    bkHelp: "Questions? We are happy to help.",
    bkBarBtn: "Request",
    titleReserve: "Book | InnVenlo Apartments Venlo",
    resPick: "Choose your arrival date",
    resPickOut: "choose your departure date",
    calPrev: "Previous month",
    calNext: "Next month",
    contactDoneTitle: "Thank you for your message",
    contactDoneText: "We will get back to you as soon as possible.",
    resLabel: "Booking request",
    resTitle: "Request directly with us",
    resIntro: "Choose your apartment and dates. You will receive a personal confirmation by email within 24 hours. Your request is only final after our confirmation.",
    resChoose: "Apartment",
    resIn: "Arrival",
    resOut: "Departure",
    resGuests: "Guests",
    resPhone: "Phone (optional)",
    resMsg: "Comment (optional)",
    resSend: "Request booking",
    resNote: "Prefer instant confirmation? Book via Booking.com or Airbnb using the buttons with each apartment.",
    resDoneTitle: "Thank you for your request",
    resDoneText: "We have received your request and will confirm by email as soon as possible whether the dates are available.",
    resNight: "night",
    resNights: "nights",
    resErrFields: "Please fill in all required fields correctly.",
    resErrSend: "Sending failed. Please try again or contact us via WhatsApp or email.",
    resErrSetup: "The booking form is not active yet. Please contact us via WhatsApp or email.",
    aptType: "Apartment · private entrance",
    aptLead: "Spacious apartment with a living room, sofa and flat-screen TV, a private kitchen and a private bathroom.",
    livingLbl: "Living room",
    livingVal: "With sofa and flat-screen TV",
    kitchenOwn: "Private, fully equipped kitchen",
    bathOwn: "Private bathroom with bathtub",
    faqLabel: "Practical information",
    faqTitle: "Frequently asked questions",
    faqParkQ: "Is parking available?",
    faqParkA: "Yes, parking is available nearby. Please note that parking is paid.",
    faqTimeQ: "What are the check-in and check-out times?",
    faqTimeA: "Check-in is from 14:00. Check-out is by 11:00 at the latest.",
    faqGuestsQ: "How many guests can stay?",
    faqGuestsA: "The apartment accommodates up to 3 guests.",
    faqPetsQ: "Are pets allowed?",
    faqPetsA: "Yes, pets are allowed.",
    faqWifiQ: "Is there WiFi?",
    faqWifiA: "Yes, WiFi is available in the apartment.",
    faqBedsQ: "How many bedrooms does the apartment have?",
    faqBedsA: "The apartment has 1 bedroom.",
    oneType: "Apartment · 2 rooms",
    deluxeType: "Room · 1 space",
    oneLead: "Spacious apartment with parquet flooring, a seating area with flat-screen TV and views over Venlo.",
    deluxeLead: "Spacious room with private entrance, coffee machine and a sofa to relax on.",
    cmpLayout: "Layout",
    oneLayout: "Living room + separate bedroom",
    deluxeLayout: "One room with seating and dining area",
    oneKitchenVal: "Private, fully equipped kitchen",
    deluxeKitchenVal: "Access to an equipped kitchen",
    bathBoth: "Bath and shower",
    bathPriv: "Private bathroom",
    bathPrivText: "With bathtub and shower, including free toiletries.",
    kitchenEquipped: "Well equipped",
    reviewsLead: "Curious what our guests say? Read their reviews on",
    and: "and",
    ratings: "Ratings",
    guestReviews: "Guest reviews",
    bookDirect: "Book now",
    home: "Home",
    apartments: "Apartments",
    contact: "Contact",

    homeTitle: "Stay in the heart of Venlo",
    homeIntro: "Stay in Venlo in a spacious, comfortable short-stay apartment with a private entrance, kitchen and free WiFi.",
    view: "View apartments",
    about: "Comfortable stays in Venlo – InnVenlo Apartments",
    why: "Why choose InnVenlo Apartments?",
    own: "Private entrance",
    kitchen: "Fully equipped kitchen",
    wifi: "Free WiFi",
    city: "City views",
    our: "Our apartments in Venlo",
    reviews: "What our guests say",
    short: "Short stays in Venlo for every occasion",

    apartmentsTitle: "Apartments in Venlo",
    apartmentsIntro: "Choose your short-stay apartment in Venlo. Both accommodations have a private entrance, coffee machine, flat-screen TV, free WiFi and city views. The city centre is within walking distance. Toverland theme park is approximately 20 km away.",

    oneBedroom: "Apartment 1",
    deluxe: "Apartment 2",
    beds: "Sleeping arrangements",
    rooms: "Rooms",
    bathroom: "Bathroom",
    floor: "Flooring",
    facilities: "Facilities",
    bookBooking: "Check availability on Booking.com",
    bookAirbnb: "Book now via Airbnb",
    questionStay: "Questions about your stay in Venlo?",
    contactUs: "Please contact us for more information about our apartments.",
    contactButton: "Contact us",

    contactTitle: "Contact InnVenlo Apartments",
    contactIntro: "Questions about staying in Venlo or about our apartments? Send us a message or find our location on Google Maps.",
    address: "Address and details",
    message: "Send a message",
    name: "Name",
    email: "Email address",
    yourMessage: "Your message",
    send: "Send message",
    map: "View on Google Maps",
    phone: "Phone",
    directBooking: "Want to book directly? View our apartments and book via Booking.com or Airbnb.",

    titleHome: "Stay in Venlo city centre | InnVenlo Apartments",
    titleApartments: "Rent apartments in Venlo | InnVenlo Apartments",
    titleContact: "Contact | InnVenlo Apartments Venlo",
    mainMenu: "Main menu",
    footerMenu: "Footer menu",
    chooseLanguage: "Choose language",
    callUs: "Call us",
    footerTag: "Rent an apartment in Venlo, Limburg",
    footerRights: "© 2026 InnVenlo Apartments. All rights reserved.",
    aboutP1: "Looking for a comfortable apartment in Venlo for a weekend away, a business trip or a longer stay? At InnVenlo Apartments you enjoy the luxury and comfort of a hotel, combined with the privacy and freedom of an apartment entirely your own.",
    aboutP2: "Venlo lies on the river Maas, close to the German border, and is an ideal base for tourists and business travellers alike. Explore the city and its surroundings, visit Toverland (about 20 km) or catch a match at Borussia-Park in Mönchengladbach (about 34 km).",
    ownText: "Come and go whenever suits you, with complete privacy.",
    kitchenText: "Hob, fridge, dishwasher and tableware.",
    wifiText: "Fast internet for work, streaming and route planning.",
    cityText: "Wake up peacefully with a view over Venlo and your own coffee machine.",
    oneBedroomShort: "Apartment 1",
    deluxeShort: "Apartment 2",
    idxOneDesc: "Spacious apartment with a separate living room, separate bedroom and bathroom with bath. Parquet flooring, seating area with flat-screen TV, private entrance and city views. 2 beds.",
    idxDeluxeDesc: "Spacious room with private entrance, coffee machine, dining area, sofa and flat-screen TV. Private bathroom with bath and shower and access to a well-equipped kitchen. 2 beds.",
    tagLiving: "Living room",
    tagBedroom: "Bedroom",
    tagKitchen: "Kitchen",
    tagBath: "Bath",
    tagBathShower: "Bath and shower",
    moreFeatures: "View all features →",
    reviewsIntro: "Read the experiences of previous guests on the platforms where you can book.",
    reviewsBooking: "Reviews on Booking.com",
    reviewsAirbnb: "Reviews on Airbnb",
    reviewsGoogle: "Reviews on Google",
    shortText: "Looking for a holiday home in Venlo for a short break, or an apartment for a business stay? Our apartments combine the convenience of a hotel with the space and freedom of your own home. Book easily and securely via Booking.com or Airbnb.",
    aptOneDesc: "A spacious apartment with a separate living room and a separate bedroom. Cook in the well-equipped kitchen and relax in the seating area with flat-screen TV, with views over Venlo.",
    aptDeluxeDesc: "A spacious room with private entrance, dining area and sofa. Ideal for a short city trip or business stay in Venlo, with access to a well-equipped kitchen.",
    twoBeds: "2 beds",
    roomsOne: "1 living room, 1 bedroom",
    bathOne: "1, with bath and free toiletries",
    floorParquet: "Parquet",
    roomsDeluxe: "1 room with sitting and dining area",
    bathDeluxe: "1, with bath and shower",
    floorCarpet: "Carpet",
    hob: "Hob",
    fridge: "Fridge",
    dishwasher: "Dishwasher",
    utensils: "Kitchen utensils",
    coffeeMachine: "Coffee machine",
    tv: "Flat-screen TV",
    dining: "Dining area",
    couch: "Sofa",
    alsoVia: "Also available via",
    emailLabel: "Email",
    region: "Limburg, Netherlands"
  },

  de: {
    calSel: "Ihr Aufenthalt",
    qkLabel: "Schnellauswahl",
    qkFirst: "Nächster freier Termin",
    qkWeekend: "Dieses Wochenende",
    qkNextWeekend: "Nächstes Wochenende",
    rgClear: "Löschen",
    rgPickOut: "Abreise wählen",
    msgBusy: "Diese Nacht ist bereits belegt. Bitte wählen Sie einen anderen Anreisetag.",
    msgCross: "Ihr Aufenthalt kann keine belegte Nacht enthalten. Späteste Abreise: {d}.",
    bkTotal: "ab {p} €",
    bkBarPick: "Daten wählen",
    barPick: "Daten wählen",
    barPickOut: "Abreise wählen",
    barNext: "Weiter",
    barSend: "Senden",
    gMinus: "Weniger Gäste",
    gPlus: "Mehr Gäste",
    addNote: "+ Anmerkung hinzufügen",
    resErrDates: "Bitte wählen Sie zuerst Ihr An- und Abreisedatum.",
    bkStep1b: "Apartment und Daten wählen",
    bkFrom: "Ab 90 € pro Nacht",
    resPrice: "Ab 90 € pro Nacht. Der Preis kann je nach Saison variieren.",
    errName: "Bitte geben Sie Ihren Namen ein.",
    errEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@beispiel.de.",
    calBusy: "Belegt",
    calFree: "Verfügbar",
    calUpdated: "Verfügbarkeit aktualisiert:",
    calNotFree: "Diese Daten sind für dieses Apartment nicht verfügbar. Bitte wählen Sie andere Daten.",
    bkTitle: "Reservieren Sie Ihren Aufenthalt im Herzen von Venlo",
    bkLead: "Wählen Sie Ihre Daten und senden Sie Ihre Anfrage. Unverbindlich und ohne Vorauszahlung – Sie erhalten eine persönliche Bestätigung per E-Mail.",
    bkStep1: "Daten wählen",
    bkStep2: "Ihre Angaben",
    bkPriceNote: "Der Preis kann je nach Saison variieren. Den endgültigen Preis erhalten Sie mit der Bestätigung.",
    bkNoPref: "Keine Präferenz",
    bkReassure: "Unverbindlich · keine Zahlung jetzt · persönliche Bestätigung per E-Mail",
    bkAside: "Über Ihren Aufenthalt",
    bkIncl: "Bei jedem Apartment inklusive",
    bkBath: "Eigenes Bad mit Badewanne und Dusche",
    bkTimes: "Check-in ab 14:00 · Check-out bis 11:00",
    bkPets: "Haustiere willkommen",
    bkHow: "So funktioniert es",
    bkHow1: "Wählen Sie Ihre Daten und senden Sie die Anfrage.",
    bkHow2: "Wir prüfen die Verfügbarkeit.",
    bkHow3: "Sie erhalten eine persönliche Bestätigung per E-Mail.",
    bkHelp: "Fragen? Wir helfen gerne.",
    bkBarBtn: "Anfragen",
    titleReserve: "Reservieren | InnVenlo Apartments Venlo",
    resPick: "Wählen Sie Ihr Anreisedatum",
    resPickOut: "wählen Sie Ihr Abreisedatum",
    calPrev: "Vorheriger Monat",
    calNext: "Nächster Monat",
    contactDoneTitle: "Vielen Dank für Ihre Nachricht",
    contactDoneText: "Wir melden uns so schnell wie möglich bei Ihnen.",
    resLabel: "Buchungsanfrage",
    resTitle: "Direkt bei uns anfragen",
    resIntro: "Wählen Sie Ihr Apartment und Ihre Daten. Sie erhalten innerhalb von 24 Stunden eine persönliche Bestätigung per E-Mail. Ihre Anfrage ist erst nach unserer Bestätigung verbindlich.",
    resChoose: "Apartment",
    resIn: "Anreise",
    resOut: "Abreise",
    resGuests: "Gäste",
    resPhone: "Telefon (optional)",
    resMsg: "Anmerkung (optional)",
    resSend: "Buchung anfragen",
    resNote: "Lieber sofort Gewissheit? Buchen Sie über Booking.com oder Airbnb mit den Buttons bei den Apartments.",
    resDoneTitle: "Vielen Dank für Ihre Anfrage",
    resDoneText: "Wir haben Ihre Anfrage erhalten und bestätigen so schnell wie möglich per E-Mail, ob die Daten verfügbar sind.",
    resNight: "Nacht",
    resNights: "Nächte",
    resErrFields: "Bitte füllen Sie alle Pflichtfelder korrekt aus.",
    resErrSend: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns per WhatsApp oder E-Mail.",
    resErrSetup: "Das Anfrageformular ist noch nicht aktiv. Bitte kontaktieren Sie uns per WhatsApp oder E-Mail.",
    aptType: "Apartment · eigener Eingang",
    aptLead: "Geräumiges Apartment mit Wohnzimmer, Sofa und Flachbildfernseher, eigener Küche und eigenem Badezimmer.",
    livingLbl: "Wohnzimmer",
    livingVal: "Mit Sofa und Flachbildfernseher",
    kitchenOwn: "Eigene, voll ausgestattete Küche",
    bathOwn: "Eigenes Bad mit Badewanne",
    faqLabel: "Praktische Informationen",
    faqTitle: "Häufig gestellte Fragen",
    faqParkQ: "Gibt es Parkmöglichkeiten?",
    faqParkA: "Ja, in der Umgebung kann geparkt werden. Bitte beachten Sie, dass das Parken kostenpflichtig ist.",
    faqTimeQ: "Wann sind An- und Abreise möglich?",
    faqTimeA: "Check-in ist ab 14:00 Uhr möglich. Check-out bis spätestens 11:00 Uhr.",
    faqGuestsQ: "Wie viele Gäste können übernachten?",
    faqGuestsA: "Das Apartment bietet Platz für maximal 3 Gäste.",
    faqPetsQ: "Sind Haustiere erlaubt?",
    faqPetsA: "Ja, Haustiere sind erlaubt.",
    faqWifiQ: "Gibt es WLAN?",
    faqWifiA: "Ja, im Apartment ist WLAN verfügbar.",
    faqBedsQ: "Wie viele Schlafzimmer hat das Apartment?",
    faqBedsA: "Das Apartment verfügt über 1 Schlafzimmer.",
    oneType: "Apartment · 2 Räume",
    deluxeType: "Zimmer · 1 Raum",
    oneLead: "Geräumiges Apartment mit Parkettboden, Sitzecke mit Flachbildfernseher und Blick über Venlo.",
    deluxeLead: "Geräumiges Zimmer mit eigenem Eingang, Kaffeemaschine und einem Sofa zum Entspannen.",
    cmpLayout: "Aufteilung",
    oneLayout: "Wohnzimmer + separates Schlafzimmer",
    deluxeLayout: "Ein Raum mit Sitz- und Essbereich",
    oneKitchenVal: "Eigene, voll ausgestattete Küche",
    deluxeKitchenVal: "Zugang zu ausgestatteter Küche",
    bathBoth: "Badewanne und Dusche",
    bathPriv: "Eigenes Badezimmer",
    bathPrivText: "Mit Badewanne und Dusche, inklusive kostenloser Pflegeprodukte.",
    kitchenEquipped: "Gut ausgestattet",
    reviewsLead: "Neugierig, was unsere Gäste sagen? Lesen Sie ihre Bewertungen auf",
    and: "und",
    ratings: "Bewertungen",
    guestReviews: "Gästebewertungen",
    bookDirect: "Jetzt buchen",
    home: "Startseite",
    apartments: "Apartments",
    contact: "Kontakt",

    homeTitle: "Übernachten im Herzen von Venlo",
    homeIntro: "Übernachten Sie in Venlo in einem geräumigen und komfortablen Apartment mit eigenem Eingang, Küche und kostenlosem WLAN.",
    view: "Apartments ansehen",
    about: "Komfortabel übernachten in Venlo – InnVenlo Apartments",
    why: "Warum InnVenlo Apartments wählen?",
    own: "Eigener Eingang",
    kitchen: "Voll ausgestattete Küche",
    wifi: "Kostenloses WLAN",
    city: "Stadtblick",
    our: "Unsere Apartments in Venlo",
    reviews: "Was unsere Gäste sagen",
    short: "Kurzaufenthalte in Venlo für jeden Anlass",

    apartmentsTitle: "Apartments in Venlo",
    apartmentsIntro: "Wählen Sie Ihr Apartment für einen Kurzaufenthalt in Venlo. Beide Unterkünfte verfügen über einen eigenen Eingang, eine Kaffeemaschine, einen Flachbildfernseher, kostenloses WLAN und Stadtblick. Das Stadtzentrum ist zu Fuß erreichbar. Der Freizeitpark Toverland liegt etwa 20 km entfernt.",

    oneBedroom: "Apartment 1",
    deluxe: "Apartment 2",
    beds: "Schlafplätze",
    rooms: "Zimmer",
    bathroom: "Badezimmer",
    floor: "Bodenbelag",
    facilities: "Ausstattung",
    bookBooking: "Verfügbarkeit auf Booking.com prüfen",
    bookAirbnb: "Jetzt über Airbnb buchen",
    questionStay: "Fragen zu Ihrem Aufenthalt in Venlo?",
    contactUs: "Kontaktieren Sie uns gerne für weitere Informationen über unsere Apartments.",
    contactButton: "Kontakt aufnehmen",

    contactTitle: "Kontakt mit InnVenlo Apartments",
    contactIntro: "Haben Sie Fragen zu Ihrem Aufenthalt in Venlo oder zu unseren Apartments? Senden Sie uns eine Nachricht oder finden Sie unseren Standort auf Google Maps.",
    address: "Adresse und Kontaktdaten",
    message: "Nachricht senden",
    name: "Name",
    email: "E-Mail-Adresse",
    yourMessage: "Ihre Nachricht",
    send: "Nachricht senden",
    map: "Auf Google Maps ansehen",
    phone: "Telefon",
    directBooking: "Direkt buchen? Sehen Sie sich unsere Apartments an und buchen Sie über Booking.com oder Airbnb.",

    titleHome: "Übernachten im Zentrum von Venlo | InnVenlo Apartments",
    titleApartments: "Apartments in Venlo mieten | InnVenlo Apartments",
    titleContact: "Kontakt | InnVenlo Apartments Venlo",
    mainMenu: "Hauptmenü",
    footerMenu: "Footermenü",
    chooseLanguage: "Sprache wählen",
    callUs: "Rufen Sie uns an",
    footerTag: "Apartment in Venlo mieten, Limburg",
    footerRights: "© 2026 InnVenlo Apartments. Alle Rechte vorbehalten.",
    aboutP1: "Sie suchen ein komfortables Apartment in Venlo für ein Wochenende, eine Geschäftsreise oder einen längeren Aufenthalt? Bei InnVenlo Apartments verbinden Sie den Luxus und Komfort eines Hotels mit der Privatsphäre und Freiheit eines ganz eigenen Apartments.",
    aboutP2: "Venlo liegt an der Maas, direkt an der deutschen Grenze, und ist ein idealer Ausgangspunkt für Touristen und Geschäftsreisende. Entdecken Sie die Stadt und die Umgebung, besuchen Sie Toverland (ca. 20 km) oder erleben Sie ein Spiel im Borussia-Park in Mönchengladbach (ca. 34 km).",
    ownText: "Kommen und gehen Sie, wann es Ihnen passt – mit voller Privatsphäre.",
    kitchenText: "Kochfeld, Kühlschrank, Geschirrspüler und Geschirr.",
    wifiText: "Schnelles Internet für Arbeit, Streaming und Routenplanung.",
    cityText: "Ruhig aufwachen mit Blick über Venlo und eigener Kaffeemaschine.",
    oneBedroomShort: "Apartment 1",
    deluxeShort: "Apartment 2",
    idxOneDesc: "Geräumiges Apartment mit separatem Wohnzimmer, separatem Schlafzimmer und Badezimmer mit Badewanne. Parkettboden, Sitzecke mit Flachbildfernseher, eigener Eingang und Stadtblick. 2 Betten.",
    idxDeluxeDesc: "Geräumiges Zimmer mit eigenem Eingang, Kaffeemaschine, Essbereich, Sofa und Flachbildfernseher. Eigenes Bad mit Badewanne und Dusche sowie Zugang zu einer gut ausgestatteten Küche. 2 Betten.",
    tagLiving: "Wohnzimmer",
    tagBedroom: "Schlafzimmer",
    tagKitchen: "Küche",
    tagBath: "Badewanne",
    tagBathShower: "Badewanne und Dusche",
    moreFeatures: "Alle Merkmale ansehen →",
    reviewsIntro: "Lesen Sie die Erfahrungen früherer Gäste auf den Plattformen, auf denen Sie buchen können.",
    reviewsBooking: "Bewertungen auf Booking.com",
    reviewsAirbnb: "Bewertungen auf Airbnb",
    reviewsGoogle: "Bewertungen auf Google",
    shortText: "Suchen Sie eine Ferienwohnung in Venlo für einen kurzen Urlaub oder ein Apartment für einen Geschäftsaufenthalt? Unsere Apartments verbinden den Komfort eines Hotels mit dem Platz und der Freiheit einer eigenen Wohnung. Buchen Sie einfach und sicher über Booking.com oder Airbnb.",
    aptOneDesc: "Ein geräumiges Apartment mit separatem Wohnzimmer und separatem Schlafzimmer. Sie kochen in der gut ausgestatteten Küche und entspannen in der Sitzecke mit Flachbildfernseher, mit Blick über Venlo.",
    aptDeluxeDesc: "Ein geräumiges Zimmer mit eigenem Eingang, Essbereich und Sofa. Ideal für einen kurzen Städtetrip oder einen Geschäftsaufenthalt in Venlo, mit Zugang zu einer gut ausgestatteten Küche.",
    twoBeds: "2 Betten",
    roomsOne: "1 Wohnzimmer, 1 Schlafzimmer",
    bathOne: "1, mit Badewanne und kostenlosen Pflegeprodukten",
    floorParquet: "Parkett",
    roomsDeluxe: "1 Zimmer mit Sitz- und Essbereich",
    bathDeluxe: "1, mit Badewanne und Dusche",
    floorCarpet: "Teppichboden",
    hob: "Kochfeld",
    fridge: "Kühlschrank",
    dishwasher: "Geschirrspüler",
    utensils: "Küchenutensilien",
    coffeeMachine: "Kaffeemaschine",
    tv: "Flachbildfernseher",
    dining: "Essbereich",
    couch: "Sofa",
    alsoVia: "Auch verfügbar über",
    emailLabel: "E-Mail",
    region: "Limburg, Niederlande"
  },

  fr: {
    calSel: "Votre séjour",
    qkLabel: "Choix rapide",
    qkFirst: "Première disponibilité",
    qkWeekend: "Ce week-end",
    qkNextWeekend: "Week-end prochain",
    rgClear: "Effacer",
    rgPickOut: "Choisir le départ",
    msgBusy: "Cette nuit est déjà réservée. Choisissez un autre jour d’arrivée.",
    msgCross: "Votre séjour ne peut pas inclure une nuit réservée. Départ au plus tard : {d}.",
    bkTotal: "à partir de {p} €",
    bkBarPick: "Choisissez vos dates",
    barPick: "Choisir les dates",
    barPickOut: "Choisir le départ",
    barNext: "Continuer",
    barSend: "Envoyer",
    gMinus: "Moins de personnes",
    gPlus: "Plus de personnes",
    addNote: "+ Ajouter une remarque",
    resErrDates: "Choisissez d'abord vos dates d'arrivée et de départ.",
    bkStep1b: "Choisissez appartement et dates",
    bkFrom: "À partir de 90 € par nuit",
    resPrice: "À partir de 90 € par nuit. Le prix peut varier selon la saison.",
    errName: "Veuillez indiquer votre nom.",
    errEmail: "Veuillez indiquer une adresse e-mail valide, p. ex. nom@exemple.fr.",
    calBusy: "Occupé",
    calFree: "Disponible",
    calUpdated: "Disponibilités mises à jour :",
    calNotFree: "Ces dates ne sont pas disponibles pour cet appartement. Veuillez choisir d'autres dates.",
    bkTitle: "Réservez votre séjour au cœur de Venlo",
    bkLead: "Choisissez vos dates et envoyez votre demande. Sans engagement et sans prépaiement – vous recevrez une confirmation personnelle par e-mail.",
    bkStep1: "Choisissez vos dates",
    bkStep2: "Vos coordonnées",
    bkPriceNote: "Le prix peut varier selon la saison. Vous recevrez le prix définitif avec la confirmation.",
    bkNoPref: "Pas de préférence",
    bkReassure: "Sans engagement · aucun paiement maintenant · confirmation personnelle par e-mail",
    bkAside: "À propos de votre séjour",
    bkIncl: "Inclus dans chaque appartement",
    bkBath: "Salle de bains privée avec baignoire et douche",
    bkTimes: "Arrivée à partir de 14h00 · départ avant 11h00",
    bkPets: "Animaux bienvenus",
    bkHow: "Comment ça marche",
    bkHow1: "Choisissez vos dates et envoyez la demande.",
    bkHow2: "Nous vérifions la disponibilité.",
    bkHow3: "Vous recevez une confirmation personnelle par e-mail.",
    bkHelp: "Des questions ? Nous sommes là pour vous aider.",
    bkBarBtn: "Demander",
    titleReserve: "Réserver | InnVenlo Apartments Venlo",
    resPick: "Choisissez votre date d'arrivée",
    resPickOut: "choisissez votre date de départ",
    calPrev: "Mois précédent",
    calNext: "Mois suivant",
    contactDoneTitle: "Merci pour votre message",
    contactDoneText: "Nous vous répondrons dans les plus brefs délais.",
    resLabel: "Demande de réservation",
    resTitle: "Réservez directement chez nous",
    resIntro: "Choisissez votre appartement et vos dates. Vous recevrez une confirmation personnelle par e-mail sous 24 heures. Votre demande n'est définitive qu'après notre confirmation.",
    resChoose: "Appartement",
    resIn: "Arrivée",
    resOut: "Départ",
    resGuests: "Personnes",
    resPhone: "Téléphone (facultatif)",
    resMsg: "Remarque (facultatif)",
    resSend: "Demander une réservation",
    resNote: "Vous préférez une confirmation immédiate ? Réservez via Booking.com ou Airbnb avec les boutons de chaque appartement.",
    resDoneTitle: "Merci pour votre demande",
    resDoneText: "Nous avons bien reçu votre demande et vous confirmerons au plus vite par e-mail si les dates sont disponibles.",
    resNight: "nuit",
    resNights: "nuits",
    resErrFields: "Veuillez remplir correctement tous les champs obligatoires.",
    resErrSend: "L'envoi a échoué. Réessayez ou contactez-nous via WhatsApp ou par e-mail.",
    resErrSetup: "Le formulaire de réservation n'est pas encore activé. Contactez-nous via WhatsApp ou par e-mail.",
    aptType: "Appartement · entrée privée",
    aptLead: "Appartement spacieux avec salon, canapé et télévision à écran plat, cuisine privée et salle de bains privée.",
    livingLbl: "Salon",
    livingVal: "Avec canapé et télévision à écran plat",
    kitchenOwn: "Cuisine privée entièrement équipée",
    bathOwn: "Salle de bains privée avec baignoire",
    faqLabel: "Informations pratiques",
    faqTitle: "Questions fréquentes",
    faqParkQ: "Peut-on se garer à proximité ?",
    faqParkA: "Oui, il est possible de se garer dans les environs. Veuillez noter que le stationnement est payant.",
    faqTimeQ: "Quels sont les horaires d'arrivée et de départ ?",
    faqTimeA: "L'arrivée est possible à partir de 14h00. Le départ doit se faire au plus tard à 11h00.",
    faqGuestsQ: "Combien de personnes peuvent séjourner ?",
    faqGuestsA: "L'appartement peut accueillir jusqu'à 3 personnes.",
    faqPetsQ: "Les animaux sont-ils acceptés ?",
    faqPetsA: "Oui, les animaux sont acceptés.",
    faqWifiQ: "Y a-t-il le Wi-Fi ?",
    faqWifiA: "Oui, le Wi-Fi est disponible dans l'appartement.",
    faqBedsQ: "Combien de chambres compte l'appartement ?",
    faqBedsA: "L'appartement dispose d'1 chambre.",
    oneType: "Appartement · 2 pièces",
    deluxeType: "Chambre · 1 pièce",
    oneLead: "Appartement spacieux avec parquet, coin salon avec télévision à écran plat et vue sur Venlo.",
    deluxeLead: "Chambre spacieuse avec entrée privée, machine à café et un canapé pour se détendre.",
    cmpLayout: "Agencement",
    oneLayout: "Salon + chambre séparée",
    deluxeLayout: "Une pièce avec coin salon et coin repas",
    oneKitchenVal: "Cuisine privée entièrement équipée",
    deluxeKitchenVal: "Accès à une cuisine équipée",
    bathBoth: "Baignoire et douche",
    bathPriv: "Salle de bains privée",
    bathPrivText: "Avec baignoire et douche, articles de toilette gratuits inclus.",
    kitchenEquipped: "Bien équipée",
    reviewsLead: "Curieux de savoir ce que disent nos clients ? Lisez leurs avis sur",
    and: "et",
    ratings: "Notes",
    guestReviews: "Avis des clients",
    bookDirect: "Réserver",
    home: "Accueil",
    apartments: "Appartements",
    contact: "Contact",

    homeTitle: "Séjourner au cœur de Venlo",
    homeIntro: "Séjournez à Venlo dans un appartement spacieux et confortable avec entrée privée, cuisine et Wi-Fi gratuit.",
    view: "Voir les appartements",
    about: "Séjourner confortablement à Venlo – InnVenlo Apartments",
    why: "Pourquoi choisir InnVenlo Apartments ?",
    own: "Entrée privée",
    kitchen: "Cuisine entièrement équipée",
    wifi: "Wi-Fi gratuit",
    city: "Vue sur la ville",
    our: "Nos appartements à Venlo",
    reviews: "Les avis de nos clients",
    short: "Séjours à Venlo pour toutes les occasions",

    apartmentsTitle: "Appartements à Venlo",
    apartmentsIntro: "Choisissez votre appartement pour un court séjour à Venlo. Les deux logements disposent d'une entrée privée, d'une machine à café, d'une télévision à écran plat, du Wi-Fi gratuit et d'une vue sur la ville. Le centre-ville est accessible à pied. Le parc d'attractions Toverland se trouve à environ 20 km.",

    oneBedroom: "Appartement 1",
    deluxe: "Appartement 2",
    beds: "Couchages",
    rooms: "Pièces",
    bathroom: "Salle de bains",
    floor: "Revêtement de sol",
    facilities: "Équipements",
    bookBooking: "Voir les disponibilités sur Booking.com",
    bookAirbnb: "Réserver maintenant sur Airbnb",
    questionStay: "Des questions sur votre séjour à Venlo ?",
    contactUs: "N'hésitez pas à nous contacter pour obtenir des informations sur nos appartements.",
    contactButton: "Nous contacter",

    contactTitle: "Contacter InnVenlo Apartments",
    contactIntro: "Des questions sur votre séjour à Venlo ou sur nos appartements ? Envoyez-nous un message ou consultez notre emplacement sur Google Maps.",
    address: "Adresse et coordonnées",
    message: "Envoyer un message",
    name: "Nom",
    email: "Adresse e-mail",
    yourMessage: "Votre message",
    send: "Envoyer le message",
    map: "Voir sur Google Maps",
    phone: "Téléphone",
    directBooking: "Vous souhaitez réserver directement ? Consultez nos appartements et réservez via Booking.com ou Airbnb.",

    titleHome: "Séjourner au centre de Venlo | InnVenlo Apartments",
    titleApartments: "Louer des appartements à Venlo | InnVenlo Apartments",
    titleContact: "Contact | InnVenlo Apartments Venlo",
    mainMenu: "Menu principal",
    footerMenu: "Menu de pied de page",
    chooseLanguage: "Choisir la langue",
    callUs: "Appelez-nous",
    footerTag: "Louer un appartement à Venlo, Limbourg",
    footerRights: "© 2026 InnVenlo Apartments. Tous droits réservés.",
    aboutP1: "Vous cherchez un appartement confortable à Venlo pour un week-end, un déplacement professionnel ou un séjour plus long ? Chez InnVenlo Apartments, vous profitez du luxe et du confort d'un hôtel, avec l'intimité et la liberté d'un appartement entièrement à vous.",
    aboutP2: "Venlo se trouve au bord de la Meuse, près de la frontière allemande, et constitue un point de départ idéal pour les touristes comme pour les voyageurs d'affaires. Découvrez la ville et ses environs, visitez Toverland (environ 20 km) ou assistez à un match au Borussia-Park de Mönchengladbach (environ 34 km).",
    ownText: "Allez et venez à votre guise, en toute intimité.",
    kitchenText: "Plaque de cuisson, réfrigérateur, lave-vaisselle et vaisselle.",
    wifiText: "Internet rapide pour le travail, le streaming et la planification d'itinéraires.",
    cityText: "Réveillez-vous au calme avec vue sur Venlo et votre propre machine à café.",
    oneBedroomShort: "Appartement 1",
    deluxeShort: "Appartement 2",
    idxOneDesc: "Appartement spacieux avec salon séparé, chambre séparée et salle de bains avec baignoire. Parquet, coin salon avec télévision à écran plat, entrée privée et vue sur la ville. 2 lits.",
    idxDeluxeDesc: "Chambre spacieuse avec entrée privée, machine à café, coin repas, canapé et télévision à écran plat. Salle de bains privée avec baignoire et douche et accès à une cuisine bien équipée. 2 lits.",
    tagLiving: "Salon",
    tagBedroom: "Chambre",
    tagKitchen: "Cuisine",
    tagBath: "Baignoire",
    tagBathShower: "Baignoire et douche",
    moreFeatures: "Voir toutes les caractéristiques →",
    reviewsIntro: "Lisez les expériences des anciens clients sur les plateformes où vous pouvez réserver.",
    reviewsBooking: "Avis sur Booking.com",
    reviewsAirbnb: "Avis sur Airbnb",
    reviewsGoogle: "Avis sur Google",
    shortText: "Vous cherchez une maison de vacances à Venlo pour un court séjour, ou un appartement pour un séjour professionnel ? Nos appartements allient le confort d'un hôtel à l'espace et à la liberté d'un logement privé. Réservez simplement et en toute sécurité via Booking.com ou Airbnb.",
    aptOneDesc: "Un appartement spacieux avec salon séparé et chambre séparée. Vous cuisinez dans la cuisine bien équipée et vous détendez dans le coin salon avec télévision à écran plat, avec vue sur Venlo.",
    aptDeluxeDesc: "Une chambre spacieuse avec entrée privée, coin repas et canapé. Idéale pour une courte escapade urbaine ou un séjour professionnel à Venlo, avec accès à une cuisine bien équipée.",
    twoBeds: "2 lits",
    roomsOne: "1 salon, 1 chambre",
    bathOne: "1, avec baignoire et produits de toilette gratuits",
    floorParquet: "Parquet",
    roomsDeluxe: "1 pièce avec coin salon et coin repas",
    bathDeluxe: "1, avec baignoire et douche",
    floorCarpet: "Moquette",
    hob: "Plaque de cuisson",
    fridge: "Réfrigérateur",
    dishwasher: "Lave-vaisselle",
    utensils: "Ustensiles de cuisine",
    coffeeMachine: "Machine à café",
    tv: "Télévision à écran plat",
    dining: "Coin repas",
    couch: "Canapé",
    alsoVia: "Également disponible via",
    emailLabel: "E-mail",
    region: "Limbourg, Pays-Bas"
  }
};


/* =================================
   ELEMENTEN VERTALEN
================================= */

function translatePage(lang) {
  const words = translations[lang] || translations.nl;

  // Alle extra teksten met data-i18n vertalen.
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (words[key]) {
      element.textContent = words[key];
    } else {
      console.warn(`Vertaling ontbreekt: "${key}" (${lang})`);
    }
  });

  // aria-label (en bijbehorende title) vertalen.
  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    const key = element.dataset.i18nAria;

    if (words[key]) {
      element.setAttribute("aria-label", words[key]);

      if (element.hasAttribute("title")) {
        element.setAttribute("title", words[key]);
      }
    }
  });

  // Formulierlabels en placeholders.
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;

    if (words[key]) {
      element.placeholder = words[key];
    }
  });

  // HTML-taal instellen.
  document.documentElement.lang = lang;

  // Taalmenu bijwerken.
  document.querySelectorAll(".language-current").forEach(button => {
    const languageText = button.querySelector(".current-language");

    if (languageText) {
      languageText.textContent = lang.toUpperCase();
    } else {
      button.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent = "";
        }
      });

      const arrow = button.querySelector(".language-arrow");

      button.prepend(document.createTextNode(lang.toUpperCase() + " "));
      if (arrow) {
        button.appendChild(arrow);
      }
    }
  });

  document.querySelectorAll("[data-lang]").forEach(button => {
    const active = button.dataset.lang === lang;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("innvenlo-language", lang);
  } catch (error) {
    console.warn("Taal opslaan is niet mogelijk.", error);
  }
}


/* =================================
   TAAL OPHALEN
================================= */

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("innvenlo-language");

    return translations[saved] ? saved : "nl";
  } catch (error) {
    return "nl";
  }
}


/* =================================
   TAALMENU
================================= */

function closeLanguageMenus() {
  document.querySelectorAll(".language-switch").forEach(menu => {
    menu.classList.remove("open");

    const toggle = menu.querySelector(".language-current");

    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function initLanguageMenu() {
  document.querySelectorAll(".language-switch").forEach(menu => {
    const toggle = menu.querySelector(".language-current");

    if (!toggle) return;

    toggle.addEventListener("click", event => {
      event.stopPropagation();

      const isOpen = !menu.classList.contains("open");

      closeLanguageMenus();

      menu.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll(".language-switch [data-lang]").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();

      translatePage(button.dataset.lang);
      closeLanguageMenus();
    });
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".language-switch")) {
      closeLanguageMenus();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeLanguageMenus();
    }
  });
}


/* =================================
   AUTOMATISCHE FOTOPRESENTATIE
================================= */

function initImageSliders() {
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const labels = {
    nl: ["Vorige foto", "Volgende foto", "Foto"],
    en: ["Previous photo", "Next photo", "Photo"],
    de: ["Vorheriges Foto", "Nächstes Foto", "Foto"],
    fr: ["Photo précédente", "Photo suivante", "Photo"]
  };
  const t = labels[document.documentElement.lang] || labels.nl;

  document.querySelectorAll("[data-slider]").forEach(slider => {
    const images = [...slider.querySelectorAll("img")];
    if (images.length < 2) return;

    // Foto's in een veegbare strook zetten (scroll-snap: werkt native met aanraking).
    const track = document.createElement("div");
    track.className = "track";
    images.forEach(img => {
      img.classList.remove("active");
      img.draggable = false;
      track.appendChild(img);
    });
    slider.appendChild(track);

    const prev = document.createElement("button");
    const next = document.createElement("button");
    prev.type = next.type = "button";
    prev.className = "gal-btn gal-prev";
    next.className = "gal-btn gal-next";
    prev.setAttribute("aria-label", t[0]);
    next.setAttribute("aria-label", t[1]);

    const dots = document.createElement("div");
    dots.className = "gal-dots";
    const dotEls = images.map((_, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.setAttribute("aria-label", `${t[2]} ${i + 1} / ${images.length}`);
      d.addEventListener("click", () => { go(i); pause(); });
      dots.appendChild(d);
      return d;
    });
    slider.append(prev, next, dots);

    let current = 0;
    let pausedUntil = 0;
    let visible = false;

    const setActive = i => {
      current = i;
      dotEls.forEach((d, k) => d.classList.toggle("on", k === i));
    };
    const go = i => {
      const n = (i + images.length) % images.length;
      track.scrollTo({ left: n * track.clientWidth, behavior: reduceMotion ? "auto" : "smooth" });
      setActive(n);
    };
    const pause = () => { pausedUntil = Date.now() + 8000; };

    prev.addEventListener("click", () => { go(current - 1); pause(); });
    next.addEventListener("click", () => { go(current + 1); pause(); });
    track.addEventListener("pointerdown", pause, { passive: true });
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("wheel", pause, { passive: true });

    let raf = 0;
    track.addEventListener("scroll", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        if (i !== current) setActive(Math.max(0, Math.min(images.length - 1, i)));
      });
    }, { passive: true });

    slider.addEventListener("keydown", e => {
      if (e.key === "ArrowRight") { go(current + 1); pause(); }
      if (e.key === "ArrowLeft") { go(current - 1); pause(); }
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
      }, { threshold: 0.4 }).observe(slider);
    } else {
      visible = true;
    }

    setActive(0);

    if (!reduceMotion) {
      setInterval(() => {
        if (visible && Date.now() > pausedUntil && !document.hidden) go(current + 1);
      }, 3500);
    }
  });
}

function initLogoReveal() {
  const logo = document.querySelector(".logo");
  if (!logo || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  logo.setAttribute("aria-label", logo.textContent);
  let i = 0;

  const split = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        [...n.textContent].forEach(c => {
          const s = document.createElement("span");
          s.className = "l";
          s.setAttribute("aria-hidden", "true");
          s.style.setProperty("--i", i++);
          s.textContent = c;
          frag.appendChild(s);
        });
        n.replaceWith(frag);
      } else {
        split(n);
      }
    });
  };

  split(logo);
  logo.style.setProperty("--reveal-end", `${200 + 55 * (i - 1) + 500}ms`);
  logo.classList.add("bubble");
}


/* =================================
   RECENSIES IN DE HERO
================================= */

function initQuoteRotator() {
  document.querySelectorAll("[data-rotator]").forEach(list => {
    const items = list.querySelectorAll("li");
    if (items.length < 2) return;

    let current = 0;
    setInterval(() => {
      items[current].classList.remove("is-active");
      current = (current + 1) % items.length;
      items[current].classList.add("is-active");
      if (list.classList.contains("quotes")) fitQuoteBoxes();
    }, 6500);
  });
}


/* Vlak achter een recensie precies zo breed maken als de langste tekstregel.
   (CSS maakt een blok met afgebroken tekst altijd even breed als de beschikbare ruimte.) */
function fitQuoteBoxes() {
  document.querySelectorAll(".quotes li.is-active figure").forEach(figure => {
    figure.style.width = "";
    const range = document.createRange();
    let widest = 0;

    // Breedte van de langste regel (werkt bij links- én rechts uitgelijnde tekst).
    figure.querySelectorAll("blockquote, figcaption").forEach(el => {
      range.selectNodeContents(el);
      for (const rect of range.getClientRects()) {
        widest = Math.max(widest, rect.width);
      }
    });

    const style = getComputedStyle(figure);
    const pad = (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.paddingRight) || 0);
    if (widest > 0) figure.style.width = Math.ceil(widest + pad + 1) + "px";
  });
}

/* =================================
   UITKLAPBLOKKEN OPENEN BIJ SCROLLEN
================================= */

// Opent een uitklapblok één keer zodra het in beeld scrolt.
// Klapt de bezoeker het daarna zelf dicht, dan blijft het dicht.
function initAutoOpen() {
  const blocks = document.querySelectorAll("details.why");
  if (!blocks.length) return;

  if (!("IntersectionObserver" in window)) {
    blocks.forEach(block => { block.open = true; });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.open = true;
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -25% 0px" });

  blocks.forEach(block => {
    // Handmatig gebruik gaat voor: dan niet meer automatisch openen.
    block.querySelector("summary")?.addEventListener("click", () => observer.unobserve(block), { once: true });
    observer.observe(block);
  });
}


/* =================================
   RESERVERINGSAANVRAAG
================================= */

/* ---------------------------------------------------------------
   RESERVERING – 1. Datumhulpjes
   Datums zijn overal tekst "JJJJ-MM-DD" (een kalenderdag, geen tijdstip).
   Rekenen gebeurt in UTC, zodat zomer-/wintertijd nooit dagen verschuift.
--------------------------------------------------------------- */
const DateKey = {
  today: () => new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()),
  toDate: key => { const [y, m, d] = key.split("-").map(Number); return new Date(Date.UTC(y, m - 1, d)); },
  from: (y, m, d) => new Date(Date.UTC(y, m, d)).toISOString().slice(0, 10),
  add: (key, n) => { const d = DateKey.toDate(key); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); },
  diff: (a, b) => Math.round((DateKey.toDate(b) - DateKey.toDate(a)) / 864e5),
  weekday: key => (DateKey.toDate(key).getUTCDay() + 6) % 7, // 0 = maandag
  format: (key, lang, opts) => new Intl.DateTimeFormat(lang, { timeZone: "UTC", ...opts }).format(DateKey.toDate(key))
};


/* ---------------------------------------------------------------
   RESERVERING – 2. Beschikbaarheid (data uit availability.json)
   Een "nacht" is de datum waarop je overnacht; de vertrekdag is geen nacht.
--------------------------------------------------------------- */
const Availability = {
  busy: { "1": new Set(), "2": new Set() },
  updated: null,
  MAX_NIGHTS: 60,

  load() {
    return fetch("availability.json?ts=" + Date.now(), { cache: "no-store" })
      .then(r => (r.ok ? r.json() : null))
      .then(data => {
        if (!data?.apartments) return;
        ["1", "2"].forEach(a => { this.busy[a] = new Set(data.apartments[a] || []); });
        this.updated = data.updated ? new Date(data.updated) : null;
      })
      .catch(() => {});
  },
  nightFree(key, apts) { return apts.some(a => !this.busy[a].has(key)); },
  // Laatst mogelijke vertrekdag vanaf aankomst `from` (per appartement de eerste bezette nacht).
  maxDeparture(from, apts) {
    let best = from;
    for (const a of apts) {
      let k = from;
      for (let i = 0; i < this.MAX_NIGHTS && !this.busy[a].has(k); i++) k = DateKey.add(k, 1);
      if (k > best) best = k;
    }
    return best;
  },
  stayFree(from, to, apts) {
    return apts.some(a => { for (let k = from; k < to; k = DateKey.add(k, 1)) if (this.busy[a].has(k)) return false; return true; });
  },
  // Eerstvolgende aankomstdag (vanaf `from`) met `nights` vrije nachten op rij.
  findStay(from, nights, apts, horizon = 180) {
    for (let i = 0, k = from; i < horizon; i++, k = DateKey.add(k, 1)) {
      if (this.stayFree(k, DateKey.add(k, nights), apts)) return k;
    }
    return null;
  }
};


/* ---------------------------------------------------------------
   RESERVERING – 3. Interface
--------------------------------------------------------------- */
function initReservation() {
  const form = document.getElementById("res-form");
  if (!form) return;

  const $ = id => document.getElementById(id);
  const lang = () => document.documentElement.lang || "nl";
  const tr = key => (translations[lang()] || translations.nl)[key] || translations.nl[key];
  const PRICE_FROM = 90;
  const euro = v => new Intl.NumberFormat(lang(), { maximumFractionDigits: 0 }).format(v);
  const desktop = matchMedia("(min-width: 901px)");

  const el = {
    months: $("cal-months"), prev: form.querySelector(".cal-prev"), next: form.querySelector(".cal-next"),
    msg: $("cal-msg"), quick: $("bk-quick"), updated: $("cal-updated"),
    rgIn: $("rg-in"), rgOut: $("rg-out"), total: $("bk-total"), clear: $("rg-clear"),
    inArrive: $("res-in"), inLeave: $("res-out"),
    error: $("res-error"), done: $("res-done"), submit: form.querySelector(".res-submit"),
    bar: $("bk-bar"), barDates: $("bk-bar-dates"), barPrice: $("bk-bar-price"), barBtn: $("bk-bar-btn"),
    guestsOut: $("guests-out"), guests: $("res-guests")
  };

  // ---- Toestand (één bron van waarheid) ----
  const today = DateKey.today();
  const state = {
    start: null, end: null, maxDep: null, hover: null,
    view: today.slice(0, 8) + "01" // eerste dag van de getoonde maand
  };
  const apts = () => {
    const v = form.querySelector('input[name="appartement"]:checked')?.value || "";
    return v.endsWith("1") ? ["1"] : v.endsWith("2") ? ["2"] : ["1", "2"];
  };
  const nights = () => (state.start && state.end ? DateKey.diff(state.start, state.end) : 0);
  const fmtShort = k => DateKey.format(k, lang(), { weekday: "short", day: "numeric", month: "short" });
  const fmtDay = k => DateKey.format(k, lang(), { day: "numeric", month: "short" });

  const say = text => { el.msg.textContent = text || ""; };

  const setRange = (start, end, view = true) => {
    state.start = start; state.end = end;
    state.maxDep = start && !end ? Availability.maxDeparture(start, apts()) : null;
    el.inArrive.value = start || ""; el.inLeave.value = end || "";
    if (view && start) state.view = start.slice(0, 8) + "01";
    update();
  };

  // ---- Kalender tekenen ----
  const dayState = key => {
    const a = apts();
    if (key < today) return "past";
    const s = state.start, e = state.end;
    if (key === s) return "start";
    if (key === e) return "end";
    if (s && e && key > s && key < e) return "range";
    if (s && !e && key > s) {
      if (key > state.maxDep) return Availability.nightFree(key, a) ? "unreachable" : "busy";
      if (state.hover && key <= state.hover) return "preview";
      return Availability.nightFree(key, a) ? "free" : "checkout";
    }
    return Availability.nightFree(key, a) ? "free" : "busy";
  };

  const monthHTML = first => {
    const [y, m] = first.split("-").map(Number);
    const days = new Date(Date.UTC(y, m, 0)).getUTCDate();
    const title = DateKey.format(first, lang(), { month: "long", year: "numeric" });
    const wd = Array.from({ length: 7 }, (_, i) =>
      `<span>${DateKey.format(DateKey.from(2024, 0, 1 + i), lang(), { weekday: "short" }).replace(".", "").slice(0, 2)}</span>`).join("");
    let cells = "";
    // Weken die volledig voorbij zijn overslaan.
    let d1 = 1;
    if (first === today.slice(0, 8) + "01") d1 = Math.max(1, Number(today.slice(8)) - DateKey.weekday(today));
    const lead = DateKey.weekday(DateKey.from(y, m - 1, d1));
    cells += "<span></span>".repeat(lead);
    for (let d = d1; d <= days; d++) {
      const key = DateKey.from(y, m - 1, d);
      const st = dayState(key);
      const label = DateKey.format(key, lang(), { weekday: "long", day: "numeric", month: "long" });
      const dis = st === "past" ? " disabled" : "";
      const ariaDis = ["busy", "unreachable"].includes(st) ? ' aria-disabled="true"' : "";
      const sel = st === "start" || st === "end";
      cells += `<button type="button" class="cd is-${st}${key === today ? " is-today" : ""}" data-date="${key}" tabindex="-1" aria-label="${label}${st === "busy" ? " – " + tr("calBusy") : ""}" aria-pressed="${sel}"${dis}${ariaDis}><span>${d}</span></button>`;
    }
    return `<div class="cm"><p class="cm-title">${title}</p><div class="cm-wd" aria-hidden="true">${wd}</div><div class="cm-grid" role="group" aria-label="${title}">${cells}</div></div>`;
  };

  const render = () => {
    const count = desktop.matches ? 2 : 1;
    let html = "", k = state.view;
    for (let i = 0; i < count; i++) {
      html += monthHTML(k);
      const [y, m] = k.split("-").map(Number);
      k = DateKey.from(y, m, 1);
    }
    el.months.innerHTML = html;
    el.prev.disabled = state.view <= today.slice(0, 8) + "01";
    // Eén tabstop in de kalender (pijltjestoetsen voor de rest).
    const focusable = el.months.querySelector(".is-start, .is-end") || el.months.querySelector(".cd:not([disabled]):not([aria-disabled])");
    if (focusable) focusable.tabIndex = 0;
  };

  // ---- Samenvatting, CTA en snelkeuzes ----
  const summary = () => {
    const n = nights();
    el.rgIn.textContent = state.start ? fmtShort(state.start) : "–";
    el.rgOut.textContent = state.end ? fmtShort(state.end) : (state.start ? tr("rgPickOut") : "–");
    el.total.textContent = n > 0
      ? `${n} ${n === 1 ? tr("resNight") : tr("resNights")} · ${tr("bkTotal").replace("{p}", euro(n * PRICE_FROM))}`
      : tr("bkFrom");
    el.clear.hidden = !state.start;
    form.querySelector("#bk-range").classList.toggle("is-set", n > 0);
    if (Availability.updated) {
      el.updated.textContent = `${tr("calUpdated")} ${new Intl.DateTimeFormat(lang(), { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(Availability.updated)}`;
    }
  };

  const detailsValid = () => form.querySelector("#res-name").checkValidity() && form.querySelector("#res-email").checkValidity();
  const updateBar = () => {
    if (!el.bar) return;
    const n = nights();
    let label, btn;
    if (!state.start) { label = tr("bkBarPick"); btn = tr("barPick"); }
    else if (!state.end) { label = `${fmtDay(state.start)} – …`; btn = tr("barPickOut"); }
    else { label = `${fmtDay(state.start)} – ${fmtDay(state.end)} · ${n} ${n === 1 ? tr("resNight") : tr("resNights")}`; btn = detailsValid() ? tr("barSend") : tr("barNext"); }
    el.barDates.textContent = label;
    el.barPrice.textContent = n > 0 ? tr("bkTotal").replace("{p}", euro(n * PRICE_FROM)) : tr("bkFrom");
    el.barBtn.textContent = btn;
    el.bar.classList.toggle("is-ready", n > 0);
  };

  const quickPicks = () => {
    const a = apts();
    const picks = [];
    const first = Availability.findStay(today, 2, a);
    if (first) picks.push([tr("qkFirst"), first, DateKey.add(first, 2)]);
    // Eerstvolgende vrijdag (vandaag telt mee) en de vrijdag daarna.
    const fri = DateKey.add(today, (4 - DateKey.weekday(today) + 7) % 7);
    [[tr("qkWeekend"), fri], [tr("qkNextWeekend"), DateKey.add(fri, 7)]].forEach(([label, f]) => {
      if (Availability.stayFree(f, DateKey.add(f, 2), a) && !(first === f)) picks.push([label, f, DateKey.add(f, 2)]);
    });
    el.quick.innerHTML = picks.map(([label, s, e]) =>
      `<button type="button" class="qk" data-s="${s}" data-e="${e}"><b>${label}</b><span>${fmtDay(s)} – ${fmtDay(e)}</span></button>`).join("");
    el.quick.hidden = !picks.length;
  };

  const update = () => { render(); summary(); updateBar(); };

  // ---- Interactie kalender ----
  el.months.addEventListener("click", event => {
    const b = event.target.closest(".cd");
    if (!b || b.disabled) return;
    const key = b.dataset.date;
    const st = dayState(key);
    const a = apts();
    const choosingEnd = state.start && !state.end && key > state.start;

    if (choosingEnd) {
      if (key > state.maxDep) {
        say(tr("msgCross").replace("{d}", fmtShort(state.maxDep)));
        return;
      }
      say("");
      setRange(state.start, key, false);
      return;
    }
    if (!Availability.nightFree(key, a)) {
      say(st === "busy" ? tr("msgBusy") : "");
      return;
    }
    say("");
    setRange(key, null, false);
    el.months.querySelector(`[data-date="${key}"]`)?.focus();
  });

  // Voorbeeld van het verblijf bij aanwijzen (alleen met muis).
  el.months.addEventListener("pointerover", event => {
    if (event.pointerType !== "mouse" || !state.start || state.end) return;
    const k = event.target.closest(".cd")?.dataset.date || null;
    const hover = k && k > state.start && k <= state.maxDep ? k : null;
    if (hover === state.hover) return;
    state.hover = hover;
    el.months.querySelectorAll(".cd").forEach(b => {
      const d = b.dataset.date;
      b.classList.toggle("is-preview", Boolean(hover) && d > state.start && d <= hover);
    });
  });
  el.months.addEventListener("pointerleave", () => {
    state.hover = null;
    el.months.querySelectorAll(".is-preview").forEach(b => b.classList.remove("is-preview"));
  });

  // Pijltjestoetsen: dag ±1, week ±7.
  el.months.addEventListener("keydown", event => {
    const step = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }[event.key];
    const cur = event.target.closest(".cd");
    if (!step || !cur) return;
    event.preventDefault();
    const target = DateKey.add(cur.dataset.date, step);
    if (target < today) return;
    let btn = el.months.querySelector(`[data-date="${target}"]`);
    if (!btn) { state.view = target.slice(0, 8) + "01"; render(); btn = el.months.querySelector(`[data-date="${target}"]`); }
    if (btn) { el.months.querySelectorAll(".cd").forEach(b => (b.tabIndex = -1)); btn.tabIndex = 0; btn.focus(); }
  });

  const shiftMonth = n => {
    const [y, m] = state.view.split("-").map(Number);
    state.view = DateKey.from(y, m - 1 + n, 1);
    render();
  };
  el.prev.addEventListener("click", () => shiftMonth(-1));
  el.next.addEventListener("click", () => shiftMonth(1));

  // Vegen op telefoon: volgende/vorige maand.
  let touchX = null;
  el.months.addEventListener("touchstart", e => { touchX = e.touches[0].clientX; }, { passive: true });
  el.months.addEventListener("touchend", e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 60) { if (dx < 0) shiftMonth(1); else if (!el.prev.disabled) shiftMonth(-1); }
  }, { passive: true });

  el.quick.addEventListener("click", event => {
    const q = event.target.closest(".qk");
    if (!q) return;
    say("");
    setRange(q.dataset.s, q.dataset.e);
  });
  el.clear.addEventListener("click", () => { say(""); setRange(null, null, false); });

  form.querySelectorAll('input[name="appartement"]').forEach(r => r.addEventListener("change", () => {
    const a = apts();
    if (state.start && state.end && !Availability.stayFree(state.start, state.end, a)) {
      setRange(null, null, false);
      say(tr("calNotFree"));
    } else if (state.start && !state.end && !Availability.nightFree(state.start, a)) {
      setRange(null, null, false);
      say(tr("calNotFree"));
    } else {
      setRange(state.start, state.end, false);
    }
    quickPicks();
  }));

  // ---- Gasten en opmerking ----
  const MAX_GUESTS = 3;
  form.querySelectorAll(".st-btn").forEach(btn => btn.addEventListener("click", () => {
    const v = Math.min(MAX_GUESTS, Math.max(1, Number(el.guests.value) + Number(btn.dataset.step)));
    el.guests.value = v; el.guestsOut.textContent = v;
    form.querySelector('.st-btn[data-step="-1"]').disabled = v <= 1;
    form.querySelector('.st-btn[data-step="1"]').disabled = v >= MAX_GUESTS;
  }));
  const noteBtn = $("add-note");
  noteBtn?.addEventListener("click", () => {
    $("note-wrap").hidden = false; noteBtn.hidden = true; noteBtn.setAttribute("aria-expanded", "true");
    $("res-msg").focus();
  });

  // ---- Validatie per veld ----
  const fields = [...form.querySelectorAll("input[aria-describedby]")];
  const checkField = input => {
    const err = $(input.getAttribute("aria-describedby"));
    const bad = !input.checkValidity();
    input.setAttribute("aria-invalid", String(bad));
    input.closest(".bk-f")?.classList.toggle("has-error", bad);
    if (err) err.textContent = bad ? tr(err.dataset.msg) : "";
    return !bad;
  };
  fields.forEach(input => {
    input.addEventListener("blur", () => { if (input.value || input.getAttribute("aria-invalid")) checkField(input); });
    input.addEventListener("input", () => { if (input.getAttribute("aria-invalid") === "true") checkField(input); updateBar(); });
  });

  // ---- Vaste knop onderin (telefoon) ----
  el.barBtn?.addEventListener("click", () => {
    if (!state.start || !state.end) { $("step-dates").scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (!detailsValid()) { $("step-details").scrollIntoView({ behavior: "smooth", block: "center" }); setTimeout(() => form.querySelector("#res-name").focus({ preventScroll: true }), 400); return; }
    form.requestSubmit();
  });
  if (el.bar && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => el.bar.classList.toggle("is-hidden", e.isIntersecting), { threshold: 0.4 }).observe(el.submit);
  }

  // ---- Verzenden ----
  form.addEventListener("submit", async event => {
    event.preventDefault();
    el.error.textContent = "";
    if (nights() < 1) {
      say(tr("resErrDates"));
      $("step-dates").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (!Availability.stayFree(state.start, state.end, apts())) { say(tr("calNotFree")); return; }
    const okFields = fields.map(checkField).every(Boolean);
    if (!okFields || !form.checkValidity()) {
      form.querySelector('[aria-invalid="true"], :invalid')?.focus();
      return;
    }
    el.submit.disabled = true;
    try {
      const data = new FormData(form);
      data.append("nachten", String(nights()));
      data.append("taal", lang());
      const response = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || response.status);
      form.hidden = true;
      el.done.hidden = false;
      el.done.focus();
      el.bar?.remove();
    } catch (error) {
      el.error.textContent = tr("resErrSend");
    } finally {
      el.submit.disabled = false;
    }
  });

  // ---- Start ----
  desktop.addEventListener("change", render);
  new MutationObserver(() => { update(); quickPicks(); }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  update();
  Availability.load().then(() => {
    if (state.start && state.end && !Availability.stayFree(state.start, state.end, apts())) setRange(null, null, false);
    update();
    quickPicks();
  });
}


/* =================================
   CONTACTFORMULIER
================================= */

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const tr = key => (translations[document.documentElement.lang] || translations.nl)[key] || translations.nl[key];
  const errorOut = document.getElementById("contact-error");
  const done = document.getElementById("contact-done");
  const submit = form.querySelector("button[type=submit]");

  form.addEventListener("submit", async event => {
    event.preventDefault();
    errorOut.textContent = "";
    if (!form.checkValidity()) {
      errorOut.textContent = tr("resErrFields");
      form.querySelector(":invalid")?.focus();
      return;
    }
    submit.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || response.status);
      form.hidden = true;
      done.hidden = false;
      done.focus();
    } catch (error) {
      errorOut.textContent = tr("resErrSend");
    } finally {
      submit.disabled = false;
    }
  });
}


/* =================================
   HERO: TEKSTBLOK IN HET MIDDEN (TELEFOON)
================================= */

// Zet kop + tekst + knop in het verticale midden van het scherm,
// maar nooit over de reviews heen.
function initHeroCenter() {
  const hero = document.querySelector(".hero");
  const main = hero?.querySelector(".hero-main");
  const proof = hero?.querySelector(".proof");
  const header = document.querySelector(".hd");
  if (!main) return;
  const mq = matchMedia("(max-width: 780px) and (min-height: 640px)");

  const reset = () => {
    main.style.top = ""; main.style.transform = "";
    if (proof) { proof.classList.remove("proof-low"); proof.style.top = ""; }
  };

  const place = () => {
    if (!mq.matches) { reset(); return; }
    const heroBox = hero.getBoundingClientRect();
    const rel = r => r - heroBox.top;

    // 1. Kop, tekst en knop in het midden van het scherm (maar onder het menu).
    const minTop = header ? rel(header.getBoundingClientRect().bottom) + 16 : 0;
    const top = Math.max(heroBox.height / 2 - main.offsetHeight / 2, minTop);
    main.style.transform = "none";
    main.style.top = Math.round(top) + "px";

    // 2. Review in het midden van de ruimte tussen knop en onderrand
    //    (boven de zwevende contactknoppen).
    if (proof) {
      proof.classList.add("proof-low");
      const cb = document.querySelector(".cb");
      const floor = heroBox.height - (cb ? cb.offsetHeight + 28 : 24);
      const from = top + main.offsetHeight;
      const proofTop = from + (floor - from) / 2 - proof.offsetHeight / 2;
      proof.style.top = Math.round(Math.max(proofTop, from + 16)) + "px";
    }
  };

  place();
  window.addEventListener("resize", place);
  if (document.fonts) document.fonts.ready.then(place);
  // De review wisselt van lengte: opnieuw centreren na elke wissel.
  proof?.querySelectorAll(".quotes li").forEach(li =>
    new MutationObserver(place).observe(li, { attributes: true, attributeFilter: ["class"] })
  );
}


/* =================================
   WEBSITE STARTEN
================================= */

document.addEventListener("DOMContentLoaded", () => {
  initLanguageMenu();
  initImageSliders();
	initLogoReveal();
  initQuoteRotator();
  initHeroCenter();
  initAutoOpen();
  initReservation();
  initContactForm();
  fitQuoteBoxes();
  if (document.fonts) document.fonts.ready.then(fitQuoteBoxes);
  window.addEventListener("resize", fitQuoteBoxes);
  translatePage(getSavedLanguage());
});

