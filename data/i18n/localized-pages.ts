import type { LocaleCode } from "@/data/i18n/languages";
import type { LocalizedRouteSlug } from "@/lib/i18n";

type LocalizedHomePageContent = {
  title: string;
  lead: string;
  eyebrow: string;
  services: string[];
  points: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesDescription: string;
  serviceCardDescription: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  leadTitle: string;
  leadDescription: string;
  checklist: string[];
};

type LocalizedRoutePageContent = {
  title: string;
  description: string;
  eyebrow: string;
  points: string[];
  cards: Array<{ title: string; description: string }>;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionDescription: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  leadTitle: string;
  leadDescription: string;
  checklist: string[];
  serviceAreaIntro?: string;
  serviceAreaStatesLabel?: string;
  serviceAreaCitiesLabel?: string;
};

type LocaleUiCopy = {
  home: LocalizedHomePageContent;
  slugs: Record<LocalizedRouteSlug, LocalizedRoutePageContent>;
};

const slugKeys: LocalizedRouteSlug[] = [
  "leistungen",
  "elektriker",
  "elektro",
  "notdienst",
  "einsatzgebiet",
  "preise",
  "kontakt",
  "ueber-uns",
  "impressum",
  "datenschutz",
];

const localizedSlugLabels: Record<Exclude<LocaleCode, "de">, Record<LocalizedRouteSlug, string>> = {
  en: {
    leistungen: "Services",
    elektriker: "Electrician",
    elektro: "Electrical work",
    notdienst: "Emergency service",
    einsatzgebiet: "Service area",
    preise: "Pricing",
    kontakt: "Contact",
    "ueber-uns": "About us",
    impressum: "Legal notice",
    datenschutz: "Privacy policy",
  },
  tr: {
    leistungen: "Hizmetler",
    elektriker: "Elektrikçi",
    elektro: "Elektrik işleri",
    notdienst: "Acil servis",
    einsatzgebiet: "Hizmet bölgesi",
    preise: "Fiyatlar",
    kontakt: "İletişim",
    "ueber-uns": "Hakkımızda",
    impressum: "Yasal bildirim",
    datenschutz: "Gizlilik politikası",
  },
  ar: {
    leistungen: "الخدمات",
    elektriker: "كهربائي",
    elektro: "الأعمال الكهربائية",
    notdienst: "خدمة الطوارئ",
    einsatzgebiet: "منطقة الخدمة",
    preise: "الأسعار",
    kontakt: "اتصل بنا",
    "ueber-uns": "من نحن",
    impressum: "الإشعار القانوني",
    datenschutz: "سياسة الخصوصية",
  },
  ru: {
    leistungen: "Услуги",
    elektriker: "Электрик",
    elektro: "Электромонтаж",
    notdienst: "Аварийная служба",
    einsatzgebiet: "Зона обслуживания",
    preise: "Цены",
    kontakt: "Контакты",
    "ueber-uns": "О нас",
    impressum: "Юридическая информация",
    datenschutz: "Политика конфиденциальности",
  },
  pl: {
    leistungen: "Usługi",
    elektriker: "Elektryk",
    elektro: "Prace elektryczne",
    notdienst: "Pogotowie elektryczne",
    einsatzgebiet: "Obszar działania",
    preise: "Ceny",
    kontakt: "Kontakt",
    "ueber-uns": "O nas",
    impressum: "Nota prawna",
    datenschutz: "Polityka prywatności",
  },
  uk: {
    leistungen: "Послуги",
    elektriker: "Електрик",
    elektro: "Електромонтажні роботи",
    notdienst: "Аварійна служба",
    einsatzgebiet: "Зона обслуговування",
    preise: "Ціни",
    kontakt: "Контакти",
    "ueber-uns": "Про нас",
    impressum: "Юридична інформація",
    datenschutz: "Політика конфіденційності",
  },
  ro: {
    leistungen: "Servicii",
    elektriker: "Electrician autorizat",
    elektro: "Lucrări electrice",
    notdienst: "Serviciu de urgență",
    einsatzgebiet: "Zona de serviciu",
    preise: "Prețuri",
    kontakt: "Contact direct",
    "ueber-uns": "Despre noi",
    impressum: "Notificare legală",
    datenschutz: "Politica de confidențialitate",
  },
};

const localizedHomePageCopy: Record<Exclude<LocaleCode, "de">, LocalizedHomePageContent> = {
  en: {
    title: "Mr Spark — Electrician & Emergency Electrical Service",
    lead: "Electrician, electrical installation, emergency response, fuse box work, sockets, lighting and power outage support across Germany.",
    eyebrow: "Electrician · Installations · Emergency support",
    services: [
      "Electrical installation",
      "Fault diagnosis",
      "Emergency electrical service",
      "Fuse box and distribution board work",
      "Sockets, switches and lighting",
      "Telegram contact and fast follow-up",
    ],
    points: [
      "Emergency callouts and planned electrical work are both easy to request",
      "Telegram, pricing, and contact details stay clear from first click to callback",
    ],
    servicesEyebrow: "Service overview",
    servicesTitle: "Electrical help stays clear, urgent and easy to compare.",
    servicesDescription: "Installations, diagnostics, pricing, and contact options are presented in a direct service-first format.",
    serviceCardDescription: "Mr Spark coordinates suitable electrical support depending on the issue, urgency and region.",
    primaryCtaLabel: "Start Telegram",
    secondaryCtaLabel: "24h Emergency",
    leadTitle: "Send a structured request",
    leadDescription: "Name, city, service and urgency are prepared before Telegram opens, so the request starts with the right details.",
    checklist: [
      "State the city and issue",
      "Mark the urgency correctly",
      "Keep Telegram or phone reachable",
    ],
  },
  tr: {
    title: "Mr Spark — Elektrikçi ve Acil Elektrik Servisi",
    lead: "Elektrikçi, elektrik tesisatı, acil müdahale, sigorta kutusu, priz, aydınlatma ve elektrik kesintisi desteği Almanya genelinde.",
    eyebrow: "Elektrikçi · Kurulum · Acil destek",
    services: [
      "Elektrik tesisatı",
      "Arıza tespiti",
      "Acil elektrik servisi",
      "Sigorta kutusu ve dağıtım panosu işleri",
      "Priz, anahtar ve aydınlatma",
      "Telegram ile iletisim ve hizli geri donus",
    ],
    points: [
      "Acil arizalar ve planli elektrik isleri ayni netlikle talep edilebilir",
      "Telegram, fiyat bilgisi ve iletisim ayrintilari ilk andan itibaren acik kalir",
    ],
    servicesEyebrow: "Hizmet özeti",
    servicesTitle: "Elektrik yardimi acik, hizli ve karsilastirmasi kolay kalir.",
    servicesDescription: "Kurulum, ariza tespiti, fiyat bilgisi ve iletisim adimlari dogrudan hizmet odakli sunulur.",
    serviceCardDescription: "Mr Spark, soruna, aciliyete ve bölgeye göre uygun elektrik desteğini koordine eder.",
    primaryCtaLabel: "Telegram baslat",
    secondaryCtaLabel: "7/24 Acil",
    leadTitle: "Yapılandırılmış talep gönder",
    leadDescription: "Isim, sehir, hizmet ve aciliyet Telegram acilmadan once hazirlanir, boylece talep dogru bilgilerle baslar.",
    checklist: [
      "Şehri ve sorunu yazın",
      "Aciliyeti doğru işaretleyin",
      "Telegram veya telefon erişilebilir olsun",
    ],
  },
  ar: {
    title: "Mr Spark — كهربائي وخدمة طوارئ كهربائية",
    lead: "كهربائي وتمديدات كهربائية واستجابة طارئة ولوحات كهرباء ومقابس وإنارة ودعم انقطاع الكهرباء في جميع أنحاء ألمانيا.",
    eyebrow: "كهربائي · تركيبات · دعم طارئ",
    services: [
      "تركيبات كهربائية",
      "تشخيص الأعطال",
      "خدمة طوارئ كهربائية",
      "أعمال لوحة الكهرباء والتوزيع",
      "المقابس والمفاتيح والإنارة",
      "التواصل عبر تيليجرام والمتابعة السريعة",
    ],
    points: [
      "يسهل طلب حالات الطوارئ والأعمال الكهربائية المخطط لها بالوضوح نفسه",
      "يبقى تيليجرام والأسعار وبيانات التواصل واضحة من البداية حتى الرد",
    ],
    servicesEyebrow: "نظرة على الخدمات",
    servicesTitle: "تبقى المساعدة الكهربائية واضحة وعاجلة وسهلة المقارنة.",
    servicesDescription: "تُعرض التركيبات والتشخيص والأسعار ووسائل التواصل بصيغة مباشرة تركّز على الخدمة.",
    serviceCardDescription: "ينسق Mr Spark الدعم الكهربائي المناسب حسب نوع المشكلة ومستوى الاستعجال والمنطقة.",
    primaryCtaLabel: "ابدأ تيليجرام",
    secondaryCtaLabel: "طوارئ 24 ساعة",
    leadTitle: "أرسل طلبًا منظمًا",
    leadDescription: "يتم تجهيز الاسم والمدينة ونوع الخدمة ودرجة الاستعجال قبل فتح تيليجرام حتى يبدأ الطلب بالمعلومات الصحيحة.",
    checklist: [
      "اذكر المدينة والمشكلة",
      "حدد درجة الاستعجال بدقة",
      "أبقِ تيليجرام أو الهاتف متاحًا",
    ],
  },
  ru: {
    title: "Mr Spark — Электрик и аварийная электрослужба",
    lead: "Электрик, электромонтаж, аварийная помощь, электрощит, розетки, освещение и поддержка при отключении электричества по всей Германии.",
    eyebrow: "Электрик · Монтаж · Экстренная помощь",
    services: [
      "Электромонтаж",
      "Диагностика неисправностей",
      "Аварийная электрослужба",
      "Щиты и распределение",
      "Розетки, выключатели и освещение",
      "Контакт в Telegram и быстрый ответ",
    ],
    points: [
      "Срочный вызов и плановые электрические работы одинаково легко запросить",
      "Telegram, цены и контактные данные остаются понятными с первого обращения до ответа",
    ],
    servicesEyebrow: "Обзор услуг",
    servicesTitle: "Электротехническая помощь остается понятной, срочной и удобной для сравнения.",
    servicesDescription: "Монтаж, диагностика, цены и контактные варианты представлены прямо и по делу.",
    serviceCardDescription: "Mr Spark координирует подходящую электротехническую помощь в зависимости от проблемы, срочности и региона.",
    primaryCtaLabel: "Открыть Telegram",
    secondaryCtaLabel: "24ч аварийно",
    leadTitle: "Отправить структурированный запрос",
    leadDescription: "Имя, город, услуга и срочность подготавливаются до открытия Telegram, чтобы заявка начиналась с нужных деталей.",
    checklist: [
      "Укажите город и проблему",
      "Корректно отметьте срочность",
      "Оставайтесь доступными в Telegram или по телефону",
    ],
  },
  pl: {
    title: "Mr Spark — Elektryk i pogotowie elektryczne",
    lead: "Elektryk, instalacje elektryczne, interwencje awaryjne, rozdzielnia, gniazdka, oświetlenie i wsparcie przy awarii prądu w całych Niemczech.",
    eyebrow: "Elektryk · Instalacje · Pomoc awaryjna",
    services: [
      "Instalacje elektryczne",
      "Diagnostyka usterek",
      "Pogotowie elektryczne",
      "Rozdzielnie i zabezpieczenia",
      "Gniazdka, włączniki i oświetlenie",
      "Kontakt przez Telegram i szybka odpowiedz",
    ],
    points: [
      "Pilne zgloszenia i planowane prace elektryczne mozna zglosic z taka sama latwoscia",
      "Telegram, ceny i dane kontaktowe pozostaja jasne od pierwszego klikniecia do odpowiedzi",
    ],
    servicesEyebrow: "Przegląd usług",
    servicesTitle: "Pomoc elektryczna pozostaje jasna, pilna i latwa do porownania.",
    servicesDescription: "Instalacje, diagnostyka, ceny i kontakt sa pokazane w prosty, uslugowy sposob.",
    serviceCardDescription: "Mr Spark koordynuje odpowiednie wsparcie elektryczne w zależności od problemu, pilności i regionu.",
    primaryCtaLabel: "Uruchom Telegram",
    secondaryCtaLabel: "Pogotowie 24h",
    leadTitle: "Wyślij uporządkowane zgłoszenie",
    leadDescription: "Imię, miasto, usługa i pilność są przygotowywane przed otwarciem Telegrama, aby dalszy kontakt startował z właściwymi informacjami.",
    checklist: [
      "Podaj miasto i problem",
      "Oznacz właściwy poziom pilności",
      "Pozostań dostępny przez Telegram lub telefon",
    ],
  },
  uk: {
    title: "Mr Spark — Електрик та аварійна електрослужба",
    lead: "Електрик, електромонтаж, аварійна допомога, електрощит, розетки, освітлення та підтримка при знеструмленні по всій Німеччині.",
    eyebrow: "Електрик · Монтаж · Аварійна допомога",
    services: [
      "Електромонтаж",
      "Діагностика несправностей",
      "Аварійна електрослужба",
      "Щити та розподіл",
      "Розетки, вимикачі й освітлення",
      "Контакт у Telegram і швидкий зворотний зв'язок",
    ],
    points: [
      "Терміновий виклик і планові електророботи однаково легко подати",
      "Telegram, ціни та контактні дані залишаються зрозумілими від першого звернення до відповіді",
    ],
    servicesEyebrow: "Огляд послуг",
    servicesTitle: "Електродопомога залишається зрозумілою, терміновою та зручною для порівняння.",
    servicesDescription: "Монтаж, діагностика, ціни й контакти подані прямо та по суті.",
    serviceCardDescription: "Mr Spark координує відповідну електротехнічну допомогу залежно від проблеми, терміновості та регіону.",
    primaryCtaLabel: "Відкрити Telegram",
    secondaryCtaLabel: "24г аварійно",
    leadTitle: "Надіслати структурований запит",
    leadDescription: "Ім'я, місто, послуга та терміновість готуються до відкриття Telegram, щоб запит починався з правильних деталей.",
    checklist: [
      "Вкажіть місто та проблему",
      "Правильно позначте терміновість",
      "Залишайтеся доступними в Telegram або телефоном",
    ],
  },
  ro: {
    title: "Mr Spark — Electrician și serviciu electric de urgență",
    lead: "Electrician, instalații electrice, intervenții de urgență, tablou electric, prize, iluminat și suport pentru pene de curent în toată Germania.",
    eyebrow: "Electrician · Instalații · Suport de urgență",
    services: [
      "Instalații electrice",
      "Diagnosticarea defecțiunilor",
      "Serviciu electric de urgență",
      "Tablouri și distribuție",
      "Prize, întrerupătoare și iluminat",
      "Contact pe Telegram si raspuns rapid",
    ],
    points: [
      "Urgentele si lucrarile electrice planificate pot fi cerute la fel de usor",
      "Telegram, preturile si datele de contact raman clare de la primul mesaj pana la raspuns",
    ],
    servicesEyebrow: "Prezentare servicii",
    servicesTitle: "Ajutorul electric ramane clar, urgent si usor de comparat.",
    servicesDescription: "Instalarile, diagnosticarea, preturile si contactul sunt prezentate direct, in format orientat spre servicii.",
    serviceCardDescription: "Mr Spark coordonează sprijinul electric potrivit în funcție de problemă, urgență și regiune.",
    primaryCtaLabel: "Porneste Telegram",
    secondaryCtaLabel: "Urgenta 24h",
    leadTitle: "Trimite o solicitare structurată",
    leadDescription: "Numele, orasul, serviciul si urgenta sunt pregatite inainte de deschiderea Telegram, astfel incat solicitarea sa porneasca cu detaliile corecte.",
    checklist: [
      "Precizează orașul și problema",
      "Marchează corect urgența",
      "Rămâi disponibil pe Telegram sau telefon",
    ],
  },
};

function buildCards(...cards: Array<{ title: string; description: string }>) {
  return cards;
}

const localizedCoverageLabels: Record<Exclude<LocaleCode, "de">, { states: string; cities: string }> = {
  en: { states: "States / regions", cities: "Cities" },
  tr: { states: "Eyaletler / bolgeler", cities: "Sehirler" },
  ar: { states: "الولايات / المناطق", cities: "المدن" },
  ru: { states: "Регионы / земли", cities: "Города" },
  pl: { states: "Kraje / regiony", cities: "Miasta" },
  uk: { states: "Землі / регіони", cities: "Міста" },
  ro: { states: "Regiuni / landuri", cities: "Orase" },
};

function buildRouteCopy(locale: Exclude<LocaleCode, "de">): Record<LocalizedRouteSlug, LocalizedRoutePageContent> {
  const home = localizedHomePageCopy[locale];
  const labels = localizedSlugLabels[locale];
  const coverageLabels = localizedCoverageLabels[locale];

  return {
    leistungen: {
      title: labels.leistungen,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.leistungen}`,
      points: home.points,
      cards: buildCards(
        { title: labels.leistungen, description: home.serviceCardDescription },
        { title: labels.elektro, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    elektriker: {
      title: labels.elektriker,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.elektriker}`,
      points: home.points,
      cards: buildCards(
        { title: labels.elektriker, description: home.serviceCardDescription },
        { title: labels.notdienst, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    elektro: {
      title: labels.elektro,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.elektro}`,
      points: home.points,
      cards: buildCards(
        { title: labels.elektro, description: home.serviceCardDescription },
        { title: labels.leistungen, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    notdienst: {
      title: labels.notdienst,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.notdienst}`,
      points: home.points,
      cards: buildCards(
        { title: labels.notdienst, description: home.serviceCardDescription },
        { title: labels.preise, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    einsatzgebiet: {
      title: labels.einsatzgebiet,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.einsatzgebiet}`,
      points: home.points,
      cards: buildCards(
        { title: labels.einsatzgebiet, description: home.serviceCardDescription },
        { title: labels.kontakt, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
      serviceAreaIntro: home.lead,
      serviceAreaStatesLabel: coverageLabels.states,
      serviceAreaCitiesLabel: coverageLabels.cities,
    },
    preise: {
      title: labels.preise,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.preise}`,
      points: home.points,
      cards: buildCards(
        { title: labels.preise, description: home.serviceCardDescription },
        { title: labels.notdienst, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    kontakt: {
      title: labels.kontakt,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.kontakt}`,
      points: home.points,
      cards: buildCards(
        { title: labels.kontakt, description: home.serviceCardDescription },
        { title: labels.notdienst, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    "ueber-uns": {
      title: labels["ueber-uns"],
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels["ueber-uns"]}`,
      points: home.points,
      cards: buildCards(
        { title: labels["ueber-uns"], description: home.serviceCardDescription },
        { title: labels.leistungen, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    impressum: {
      title: labels.impressum,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.impressum}`,
      points: home.points,
      cards: buildCards(
        { title: labels.impressum, description: home.serviceCardDescription },
        { title: labels.datenschutz, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
    datenschutz: {
      title: labels.datenschutz,
      description: home.lead,
      eyebrow: `${home.eyebrow} · ${labels.datenschutz}`,
      points: home.points,
      cards: buildCards(
        { title: labels.datenschutz, description: home.serviceCardDescription },
        { title: labels.impressum, description: home.servicesDescription },
        { title: home.primaryCtaLabel, description: home.leadDescription },
      ),
      sectionEyebrow: home.servicesEyebrow,
      sectionTitle: home.servicesTitle,
      sectionDescription: home.servicesDescription,
      primaryCtaLabel: home.primaryCtaLabel,
      secondaryCtaLabel: home.secondaryCtaLabel,
      leadTitle: home.leadTitle,
      leadDescription: home.leadDescription,
      checklist: home.checklist,
    },
  };
}

export const localizedPageCopy: Record<Exclude<LocaleCode, "de">, LocaleUiCopy> = {
  en: {
    home: localizedHomePageCopy.en,
    slugs: buildRouteCopy("en"),
  },
  tr: {
    home: localizedHomePageCopy.tr,
    slugs: buildRouteCopy("tr"),
  },
  ar: {
    home: localizedHomePageCopy.ar,
    slugs: buildRouteCopy("ar"),
  },
  ru: {
    home: localizedHomePageCopy.ru,
    slugs: buildRouteCopy("ru"),
  },
  pl: {
    home: localizedHomePageCopy.pl,
    slugs: buildRouteCopy("pl"),
  },
  uk: {
    home: localizedHomePageCopy.uk,
    slugs: buildRouteCopy("uk"),
  },
  ro: {
    home: localizedHomePageCopy.ro,
    slugs: buildRouteCopy("ro"),
  },
};

export function getLocalizedSlugTitle(locale: Exclude<LocaleCode, "de">, slug: LocalizedRouteSlug) {
  return localizedSlugLabels[locale][slug];
}

export function getLocalizedRouteContent(
  locale: Exclude<LocaleCode, "de">,
  slug: LocalizedRouteSlug,
) {
  return localizedPageCopy[locale].slugs[slug];
}

export { localizedHomePageCopy, localizedSlugLabels, slugKeys };
