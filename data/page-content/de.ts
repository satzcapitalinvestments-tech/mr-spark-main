export const homePageContent = {
  hero: {
    eyebrow: "Elektriker · Installation · Notdienst",
    title: "Elektriker-Seiten mit klarer Anfrageführung für Notdienst und planbare Elektroarbeiten.",
    description:
      "Mr Spark bündelt Elektroinstallation, Fehlersuche, Sicherungskasten-Themen und 24h Notdienst in einer Conversion-orientierten Nutzerführung für den deutschen Markt.",
    points: [
      "Priorisierte Notdienst-CTAs ohne das restliche Leistungsangebot zu verstecken",
      "Leadanfrage mit strukturierter Übergabe an den vorhandenen Backend-Intake",
      "Mobil optimierte Seitenarchitektur für Stadt, Service und Dringlichkeit",
    ],
    stats: [
      { value: "24h", label: "Erreichbarkeit für Notfälle" },
      { value: "1 Flow", label: "Einheitliche Lead-Übergabe" },
      { value: "DE + 7", label: "Sprachrouten auf derselben Architektur" },
    ],
  },
  trustBadges: [
    "24h erreichbar bei akuten Elektrostoerungen",
    "Transparente Kostenlogik statt Lockpreis-Rhetorik",
    "Strukturierte Anfrage mit Stadt, Service und Dringlichkeit",
    "Mehrsprachige Route-Seams bleiben erhalten",
  ],
  services: [
    {
      badge: "Installation",
      title: "Elektroinstallation",
      description: "Neue Stromkreise, Leitungen, Steckdosen, Schalter und Lichtpunkte mit klarer Abstimmung zum Leistungsumfang.",
    },
    {
      badge: "Diagnose",
      title: "Stoerungen und Fehlersuche",
      description: "FI, Sicherungskasten, Kurzschluss oder sporadische Ausfaelle werden mit nachvollziehbarer Diagnose strukturiert aufgenommen.",
    },
    {
      badge: "Notdienst",
      title: "Akute Elektroprobleme",
      description: "Brandgeruch, Stromausfall und gefaehrliche Defekte werden in der Navigation und im Hero sichtbar priorisiert.",
    },
    {
      badge: "Modernisierung",
      title: "Sicherungskasten und Unterverteilung",
      description: "Austausch, Erweiterung und Einordnung bestehender Anlagen mit Fokus auf Sicherheit und Transparenz.",
    },
    {
      badge: "Innenraum",
      title: "Steckdosen, Schalter und Licht",
      description: "Kleinere Arbeiten bleiben auffindbar, ohne die Conversion fuer Notfallanfragen zu verwässern.",
    },
    {
      badge: "Planung",
      title: "Rueckruf und Einsatzkoordination",
      description: "Alle Kernseiten verweisen konsistent auf denselben Leadflow und dieselbe Rueckruflogik.",
    },
  ],
  steps: [
    {
      title: "Anliegen einordnen",
      description: "Nutzer nennen Stadt, Service und Dringlichkeit direkt im ersten Kontaktpunkt.",
    },
    {
      title: "Lead erfassen",
      description: "Die Anfrage geht ueber den vorhandenen `/api/leads`-Pfad und kann zusaetzlich an ein Webhook-Ziel gesendet werden.",
    },
    {
      title: "Rueckmeldung vorbereiten",
      description: "Telegram wird mit einer strukturierten Nachricht oder dem konfigurierten Kontaktziel geoeffnet.",
    },
    {
      title: "Einsatz steuern",
      description: "Das Team priorisiert Notfall- oder Standardanfragen anhand derselben Datenstruktur.",
    },
  ],
  pricingCards: [
    {
      title: "Anfahrt und Diagnose",
      description: "Die erste Kostenebene wird als separater Block kommuniziert statt in unklare Pauschalen gepackt.",
    },
    {
      title: "Arbeitszeit und Material",
      description: "Leistungsumfang und benoetigte Teile werden nachvollziehbar in den Preistexten eingeordnet.",
    },
    {
      title: "Notdienstzuschlaege",
      description: "Nacht-, Wochenend- oder Feiertagseinsaetze sind als Sonderfall sichtbar und nicht versteckt.",
    },
  ],
  faq: [
    {
      q: "Wie schnell reagiert Mr Spark auf Notfaelle?",
      a: "Der Leadflow markiert akute Elektroprobleme sichtbar, damit Rueckruf und Einsatzpriorisierung darauf reagieren koennen.",
    },
    {
      q: "Ist das Kontaktformular schon serverseitig angebunden?",
      a: "Ja. Die Seite nutzt bereits den bestehenden `/api/leads`-Endpoint und oeffnet danach Telegram oder den konfigurierten Kontaktlink.",
    },
  ],
};

export const emergencyPageContent = {
  hero: {
    eyebrow: "24h Elektro-Notdienst",
    title: "Akute Elektrostoerungen sofort einordnen und priorisiert weiterleiten.",
    description:
      "Die Notdienstseite fuehrt auf Gefahrensignale, Sicherheitsverhalten und den vorhandenen Leadflow, ohne die Anfrage mit generischem Marketingtext zu überladen.",
    points: [
      "Brandgeruch, Funkenbildung und gefaehrliche Defekte werden sofort sichtbar adressiert",
      "Der Backend-Leadflow behaelt Dringlichkeit und Quellseite fuer die operative Triage",
      "Preis- und Ablauftexte bleiben auch im Notfall nachvollziehbar",
    ],
  },
  symptoms: [
    {
      title: "Stromausfall oder Teil-Ausfall",
      description: "Haus, Wohnung oder einzelne Stromkreise ohne Versorgung nach Sicherungs- oder Netzproblem.",
    },
    {
      title: "Kurzschluss und FI-Ausloesung",
      description: "Wiederkehrende Abschaltungen, Funken oder nicht reproduzierbare Fehlerbilder im laufenden Betrieb.",
    },
    {
      title: "Sicherungskasten / Unterverteilung",
      description: "Defekte Automaten, verschmorte Gerueche oder sichtbare Schaeden an Verteilungen.",
    },
    {
      title: "Gefaehrliche Steckdosen oder Leitungen",
      description: "Warme Steckdosen, verfärbte Abdeckungen, Lichtflackern oder Brandgeruch.",
    },
  ],
  steps: [
    {
      title: "Gefahr absichern",
      description: "Wenn moeglich den betroffenen Stromkreis abschalten und Personen aus dem Gefahrenbereich bringen.",
    },
    {
      title: "Stoerung kurz beschreiben",
      description: "Im Leadflow reichen Stadt, Symptom und Dringlichkeit fuer die erste operative Einordnung.",
    },
    {
      title: "Rueckruf vorbereiten",
      description: "Die strukturierte Telegram-Nachricht dient als gemeinsame Basis fuer Rueckmeldung und Einsatz.",
    },
    {
      title: "Elektriker koordinieren",
      description: "Nach Rueckmeldung werden Verfuegbarkeit, Anfahrt und Sicherheitslage abgestimmt.",
    },
  ],
  pricing: [
    {
      title: "Anfahrt",
      description: "Die Einsatzanfahrt bleibt als eigener Preistreiber sichtbar und wird nicht mit Arbeitszeit vermischt.",
    },
    {
      title: "Diagnose",
      description: "Fehlersuche und erste Sicherheitspruefung werden transparent eingeordnet.",
    },
    {
      title: "Notdienstzuschlag",
      description: "Nacht-, Feiertags- und Wochenendkosten werden vor Arbeitsbeginn angesprochen.",
    },
  ],
  faq: [
    {
      q: "Was soll ich bei akuter Gefahr zuerst tun?",
      a: "Wenn gefahrlos moeglich den betroffenen Stromkreis abschalten. Bei Rauch, Feuer oder unmittelbarer Gefahr zusaetzlich Feuerwehr oder Notruf kontaktieren.",
    },
    {
      q: "Geht die Anfrage auch ausserhalb normaler Arbeitszeiten raus?",
      a: "Ja. Die Seite priorisiert Notdiensteingaben und der Leadflow uebergibt die Dringlichkeit mit.",
    },
  ],
};

export const contactPageContent = {
  cards: [
    {
      title: "Schneller Rueckkanal",
      description: "Telegram bleibt der sichtbare Hauptkanal, der Lead wird aber zunaechst serverseitig vorbereitet.",
    },
    {
      title: "Klare Einsatzdaten",
      description: "Name, Kontakt, Stadt, Service und Dringlichkeit werden auf jeder Conversion-Seite einheitlich abgefragt.",
    },
    {
      title: "Notfall priorisieren",
      description: "Akute Anfragen werden bereits im Formular kenntlich gemacht und spaeter fuer die operative Triage nutzbar.",
    },
  ],
  checklist: [
    "Ort oder Stadt nennen",
    "Service oder Fehlerbild kurz beschreiben",
    "Dringlichkeit passend markieren",
    "Rueckruf oder Telegram erreichbar halten",
  ],
};

export const servicesPageContent = {
  categories: [
    {
      badge: "Kernleistung",
      title: "Elektroinstallation",
      description: "Neue Stromkreise, Erweiterungen, Licht, Steckdosen und klassische Elektroarbeiten fuer Wohn- und Gewerbeumfelder.",
    },
    {
      badge: "Kernleistung",
      title: "Fehlersuche",
      description: "Analyse wiederkehrender Ausfaelle, FI-Probleme, flackernder Beleuchtung oder unklarer Defekte.",
    },
    {
      badge: "Kernleistung",
      title: "Elektro-Notdienst",
      description: "Akute Stoerungen werden innerhalb derselben Architektur priorisiert und nicht als Sonderseite ohne Kontext behandelt.",
    },
    {
      badge: "Anlage",
      title: "Sicherungskasten und Verteilung",
      description: "Einordnung, Austausch und Erweiterung von Unterverteilungen und relevanten Schutzorganen.",
    },
    {
      badge: "Innenraum",
      title: "Schalter, Steckdosen, Licht",
      description: "Kleinere Arbeiten bleiben auffindbar und führen dennoch in denselben Anfrageflow.",
    },
    {
      badge: "Modernisierung",
      title: "Bestandsaufnahme und Planung",
      description: "Vor-Ort-Themen, Sanierungsbedarf und Materialfragen koennen vor dem Einsatz sauber vorbereitet werden.",
    },
  ],
};

export const pricingPageContent = {
  pillars: [
    {
      badge: "Kostenbaustein",
      title: "Anfahrt",
      description: "Die Seite benoetigt keine Fantasiepreise. Sie erklaert, dass Anfahrt je nach Region und Einsatzkontext beruecksichtigt wird.",
    },
    {
      badge: "Kostenbaustein",
      title: "Diagnose und Arbeitszeit",
      description: "Fehlersuche, Instandsetzung und Umsetzungsaufwand werden als getrennte Leistungsbestandteile kommuniziert.",
    },
    {
      badge: "Kostenbaustein",
      title: "Material",
      description: "Ersatzteile oder neue Komponenten bleiben als nachvollziehbarer Preisblock sichtbar.",
    },
    {
      badge: "Sonderfall",
      title: "Notdienstzuschlaege",
      description: "Nacht, Feiertag oder Soforteinsatz werden explizit als Sonderbedingungen benannt.",
    },
  ],
  examples: [
    {
      title: "Kurzdiagnose bei Stoerung",
      description: "Geeignet fuer Nutzer, die einen Fehler einordnen lassen muessen, bevor groessere Arbeiten freigegeben werden.",
    },
    {
      title: "Kleinere Standardarbeiten",
      description: "Steckdosen, Schalter oder einzelne Leuchten profitieren von klarer Erwartungssteuerung statt unklarer Pauschalen.",
    },
    {
      title: "Akute Notfalleinsaetze",
      description: "Die Seite schafft Transparenz fuer dringliche Einsaetze, ohne die Einsatzlogik zu verharmlosen.",
    },
  ],
};
