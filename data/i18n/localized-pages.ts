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
      "Telegram contact and clear next steps",
    ],
    points: [
      "Emergency requests stay visible without hiding planned electrical work",
      "Every route keeps the same clear contact path and customer-facing next steps",
    ],
    servicesEyebrow: "Service overview",
    servicesTitle: "Relevant electrical topics remain easy to scan in every language.",
    servicesDescription: "Electrical help, pricing clarity, and contact options stay direct and customer-facing on every route.",
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
      "Telegram ile iletisim ve net sonraki adimlar",
    ],
    points: [
      "Acil talepler görünür kalır, planlı işler kaybolmaz",
      "Tum sayfalar ayni net iletisim yolunu ve musteri icin sonraki adimlari korur",
    ],
    servicesEyebrow: "Hizmet özeti",
    servicesTitle: "Önemli elektrik konuları her dilde hızlıca taranabilir kalır.",
    servicesDescription: "Elektrik yardimi, fiyat seffafligi ve iletisim adimlari her rotada net ve musteri odakli kalir.",
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
      "التواصل عبر تيليجرام والخطوات التالية الواضحة",
    ],
    points: [
      "تبقى طلبات الطوارئ واضحة من دون إخفاء الأعمال الكهربائية المخطط لها",
      "تحافظ جميع الصفحات على نفس طريق التواصل الواضح ونفس الخطوات التالية للعميل",
    ],
    servicesEyebrow: "نظرة على الخدمات",
    servicesTitle: "تبقى موضوعات الكهرباء المهمة سهلة المسح في كل لغة.",
    servicesDescription: "تبقى المساعدة الكهربائية والأسعار الواضحة وخيارات التواصل مباشرة وواضحة للعميل في كل صفحة.",
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
      "Контакт в Telegram и понятные следующие шаги",
    ],
    points: [
      "Экстренные обращения заметны, но плановые работы не теряются",
      "Все страницы сохраняют один и тот же понятный контактный путь и следующие шаги для клиента",
    ],
    servicesEyebrow: "Обзор услуг",
    servicesTitle: "Ключевые электротехнические темы легко просматривать на любом языке.",
    servicesDescription: "Электротехническая помощь, понятные цены и контактные шаги остаются прямыми и клиентскими на каждой странице.",
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
      "Kontakt przez Telegram i jasne kolejne kroki",
    ],
    points: [
      "Pilne zgłoszenia pozostają widoczne bez ukrywania prac planowanych",
      "Każda strona zachowuje ten sam czytelny kontakt i jasne kolejne kroki dla klienta",
    ],
    servicesEyebrow: "Przegląd usług",
    servicesTitle: "Najważniejsze tematy elektryczne pozostają czytelne w każdym języku.",
    servicesDescription: "Pomoc elektryczna, przejrzyste ceny i kontakt pozostają bezpośrednie oraz czytelne na każdej stronie.",
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
      "Контакт у Telegram і зрозумілі наступні кроки",
    ],
    points: [
      "Термінові звернення залишаються видимими без приховування планових робіт",
      "Усі сторінки зберігають однаково зрозумілий контактний шлях і наступні кроки для клієнта",
    ],
    servicesEyebrow: "Огляд послуг",
    servicesTitle: "Ключові електротехнічні теми легко переглядати будь-якою мовою.",
    servicesDescription: "Електрична допомога, зрозумілі ціни та контактні кроки залишаються прямими й клієнтськими на кожному маршруті.",
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
      "Contact pe Telegram si pasi urmatori clari",
    ],
    points: [
      "Solicitările urgente rămân vizibile fără a ascunde lucrările planificate",
      "Toate paginile pastreaza acelasi contact clar si pasii urmatori pentru client",
    ],
    servicesEyebrow: "Prezentare servicii",
    servicesTitle: "Subiectele electrice importante rămân ușor de scanat în fiecare limbă.",
    servicesDescription: "Ajutorul electric, preturile clare si pasii de contact raman directi si orientati spre client pe fiecare pagina.",
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
