"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSelector from "@/components/LanguageSelector";
import type { LocaleCode } from "@/data/i18n/languages";
import { buildLocalizedPath, defaultLocale, isLocale } from "@/lib/i18n";

const links = [
  ["home", ""],
  ["services", "leistungen"],
  ["electrician", "elektriker"],
  ["electrical", "elektro"],
  ["emergency", "notdienst"],
  ["coverage", "einsatzgebiet"],
  ["pricing", "preise"],
  ["contact", "kontakt"],
] as const;

const shellCopy: Record<
  LocaleCode,
  {
    nav: Record<(typeof links)[number][0], string>;
    toggleOpen: string;
    toggleClose: string;
    primaryCta: string;
    emergencyCta: string;
    brandEyebrow: string;
    footerTitle: string;
    footerDescription: string;
    footerServices: string;
    footerConversion: string;
    footerLegal: string;
    footerServiceItems: [string, string, string];
    footerConversionItems: [string, string, string];
    legalNotice: string;
    privacyNotice: string;
    desktopNavLabel: string;
    mobileNavLabel: string;
  }
> = {
  de: {
    nav: {
      home: "Startseite",
      services: "Leistungen",
      electrician: "Elektriker",
      electrical: "Elektro",
      emergency: "Notdienst",
      coverage: "Einsatzgebiet",
      pricing: "Preise",
      contact: "Kontakt",
    },
    toggleOpen: "Navigation öffnen",
    toggleClose: "Navigation schließen",
    primaryCta: "Kontakt",
    emergencyCta: "24h Notdienst",
    brandEyebrow: "Elektriker Deutschland",
    footerTitle: "Elektriker, Notdienst und planbare Elektroarbeiten mit klarem Kontaktweg.",
    footerDescription:
      "Mr Spark verbindet schnelle Hilfe bei Störungen mit sauber vorbereiteten Anfragen für Reparaturen, Sicherungskästen und neue Installationen.",
    footerServices: "Leistungen",
    footerConversion: "Kontakt & Ablauf",
    footerLegal: "Rechtliches",
    footerServiceItems: ["Elektroinstallation", "Notdienst", "Sicherungskasten & Fehlersuche"],
    footerConversionItems: [
      "Telegram oder Rueckruf direkt vorbereiten",
      "Stadt, Service und Dringlichkeit sauber uebermitteln",
      "Schnelle Rueckmeldung fuer Notfall und Standardauftrag",
    ],
    legalNotice: "Impressum",
    privacyNotice: "Datenschutz",
    desktopNavLabel: "Hauptnavigation",
    mobileNavLabel: "Mobile Navigation",
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      electrician: "Electrician",
      electrical: "Electrical",
      emergency: "Emergency",
      coverage: "Coverage",
      pricing: "Pricing",
      contact: "Contact",
    },
    toggleOpen: "Open navigation",
    toggleClose: "Close navigation",
    primaryCta: "Contact",
    emergencyCta: "24h Emergency",
    brandEyebrow: "Electrician Germany",
    footerTitle: "Electrician and emergency pages with a clear request flow.",
    footerDescription:
      "Built for fast lead capture, transparent communication, and cleaner operational handoff.",
    footerServices: "Services",
    footerConversion: "Conversion",
    footerLegal: "Legal",
    footerServiceItems: ["Electrical installation", "Emergency service", "Fuse box and diagnostics"],
    footerConversionItems: [
      "Server-backed Telegram lead flow",
      "Mobile-first CTA placement",
      "Multilingual route seams preserved",
    ],
    legalNotice: "Legal notice",
    privacyNotice: "Privacy",
    desktopNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
  },
  tr: {
    nav: {
      home: "Ana sayfa",
      services: "Hizmetler",
      electrician: "Elektrikçi",
      electrical: "Elektrik",
      emergency: "Acil servis",
      coverage: "Hizmet bölgesi",
      pricing: "Fiyatlar",
      contact: "İletişim",
    },
    toggleOpen: "Menüyü aç",
    toggleClose: "Menüyü kapat",
    primaryCta: "İletişim",
    emergencyCta: "7/24 Acil",
    brandEyebrow: "Almanya Elektrikçi",
    footerTitle: "Net talep akışına sahip elektrikçi ve acil servis sayfaları.",
    footerDescription:
      "Hızlı lead toplama, şeffaf iletişim ve temiz operasyon devri için kurgulandı.",
    footerServices: "Hizmetler",
    footerConversion: "Dönüşüm",
    footerLegal: "Yasal",
    footerServiceItems: ["Elektrik tesisatı", "Acil servis", "Sigorta kutusu ve arıza tespiti"],
    footerConversionItems: [
      "Sunucu destekli Telegram lead akışı",
      "Mobil öncelikli CTA yerleşimi",
      "Çok dilli rota yapısı korunur",
    ],
    legalNotice: "Yasal bildirim",
    privacyNotice: "Gizlilik",
    desktopNavLabel: "Ana gezinme",
    mobileNavLabel: "Mobil gezinme",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      electrician: "كهربائي",
      electrical: "الكهرباء",
      emergency: "الطوارئ",
      coverage: "نطاق الخدمة",
      pricing: "الأسعار",
      contact: "اتصال",
    },
    toggleOpen: "فتح التنقل",
    toggleClose: "إغلاق التنقل",
    primaryCta: "اتصال",
    emergencyCta: "طوارئ 24 ساعة",
    brandEyebrow: "كهربائي ألمانيا",
    footerTitle: "صفحات كهربائي وطوارئ بمسار طلب واضح.",
    footerDescription: "مصممة لالتقاط الطلبات بسرعة وتواصل أوضح وتسليم تشغيلي أنظف.",
    footerServices: "الخدمات",
    footerConversion: "التحويل",
    footerLegal: "قانوني",
    footerServiceItems: ["تمديدات كهربائية", "خدمة طوارئ", "لوحة كهرباء وتشخيص الأعطال"],
    footerConversionItems: [
      "مسار Telegram مدعوم من الخادم",
      "مواضع CTA مهيأة للموبايل",
      "الحفاظ على بنية المسارات متعددة اللغات",
    ],
    legalNotice: "إشعار قانوني",
    privacyNotice: "الخصوصية",
    desktopNavLabel: "التنقل الرئيسي",
    mobileNavLabel: "التنقل على الجوال",
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      electrician: "Электрик",
      electrical: "Электрика",
      emergency: "Аварийная служба",
      coverage: "Зона обслуживания",
      pricing: "Цены",
      contact: "Контакты",
    },
    toggleOpen: "Открыть навигацию",
    toggleClose: "Закрыть навигацию",
    primaryCta: "Контакты",
    emergencyCta: "24ч аварийно",
    brandEyebrow: "Электрик Германия",
    footerTitle: "Страницы электрика и аварийной службы с понятным сценарием заявки.",
    footerDescription:
      "Фокус на быстром захвате лида, прозрачной коммуникации и чистой передаче в операционную работу.",
    footerServices: "Услуги",
    footerConversion: "Конверсия",
    footerLegal: "Правовая информация",
    footerServiceItems: ["Электромонтаж", "Аварийная служба", "Щиток и диагностика"],
    footerConversionItems: [
      "Серверный Telegram-поток заявок",
      "Мобильный приоритет CTA",
      "Сохранены швы мультиязычных маршрутов",
    ],
    legalNotice: "Юридическая информация",
    privacyNotice: "Конфиденциальность",
    desktopNavLabel: "Основная навигация",
    mobileNavLabel: "Мобильная навигация",
  },
  pl: {
    nav: {
      home: "Start",
      services: "Usługi",
      electrician: "Elektryk",
      electrical: "Elektryka",
      emergency: "Pogotowie",
      coverage: "Obszar działania",
      pricing: "Ceny",
      contact: "Kontakt",
    },
    toggleOpen: "Otwórz nawigację",
    toggleClose: "Zamknij nawigację",
    primaryCta: "Kontakt",
    emergencyCta: "Pogotowie 24h",
    brandEyebrow: "Elektryk Niemcy",
    footerTitle: "Strony elektryka i pogotowia z czytelnym przepływem zgłoszeń.",
    footerDescription:
      "Nastawione na szybkie przechwycenie leadu, przejrzystą komunikację i czystsze przekazanie do operacji.",
    footerServices: "Usługi",
    footerConversion: "Konwersja",
    footerLegal: "Informacje prawne",
    footerServiceItems: ["Instalacja elektryczna", "Pogotowie", "Rozdzielnia i diagnostyka"],
    footerConversionItems: [
      "Serwerowy przepływ leadów Telegram",
      "Mobilnie priorytetyzowane CTA",
      "Zachowane wielojęzyczne połączenia tras",
    ],
    legalNotice: "Nota prawna",
    privacyNotice: "Prywatność",
    desktopNavLabel: "Nawigacja główna",
    mobileNavLabel: "Nawigacja mobilna",
  },
  uk: {
    nav: {
      home: "Головна",
      services: "Послуги",
      electrician: "Електрик",
      electrical: "Електрика",
      emergency: "Аварійна служба",
      coverage: "Зона обслуговування",
      pricing: "Ціни",
      contact: "Контакти",
    },
    toggleOpen: "Відкрити навігацію",
    toggleClose: "Закрити навігацію",
    primaryCta: "Контакти",
    emergencyCta: "24г аварійно",
    brandEyebrow: "Електрик Німеччина",
    footerTitle: "Сторінки електрика й аварійної служби з чітким сценарієм заявки.",
    footerDescription:
      "Фокус на швидкому захопленні ліда, прозорій комунікації та чистішій передачі в операційну роботу.",
    footerServices: "Послуги",
    footerConversion: "Конверсія",
    footerLegal: "Правова інформація",
    footerServiceItems: ["Електромонтаж", "Аварійна служба", "Щиток і діагностика"],
    footerConversionItems: [
      "Серверний Telegram-потік заявок",
      "CTA з мобільним пріоритетом",
      "Збережені стики багатомовних маршрутів",
    ],
    legalNotice: "Юридична інформація",
    privacyNotice: "Конфіденційність",
    desktopNavLabel: "Основна навігація",
    mobileNavLabel: "Мобільна навігація",
  },
  ro: {
    nav: {
      home: "Acasă",
      services: "Servicii",
      electrician: "Electrician",
      electrical: "Electric",
      emergency: "Urgență",
      coverage: "Zona de serviciu",
      pricing: "Prețuri",
      contact: "Contact",
    },
    toggleOpen: "Deschide navigarea",
    toggleClose: "Închide navigarea",
    primaryCta: "Contact",
    emergencyCta: "Urgență 24h",
    brandEyebrow: "Electrician Germania",
    footerTitle: "Pagini de electrician și urgențe cu un flux clar de solicitare.",
    footerDescription:
      "Concepute pentru captare rapidă de leaduri, comunicare transparentă și predare operațională mai curată.",
    footerServices: "Servicii",
    footerConversion: "Conversie",
    footerLegal: "Legal",
    footerServiceItems: ["Instalații electrice", "Serviciu de urgență", "Tablou și diagnosticare"],
    footerConversionItems: [
      "Flux Telegram susținut de server",
      "CTA prioritizate pentru mobil",
      "Structura rutelor multilingve păstrată",
    ],
    legalNotice: "Notificare legală",
    privacyNotice: "Confidențialitate",
    desktopNavLabel: "Navigare principală",
    mobileNavLabel: "Navigare mobilă",
  },
};

function isActivePath(currentPath: string, href: string) {
  return currentPath === href;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || `/${defaultLocale}`;
  const localeSegment = pathname.split("/")[1];
  const currentLocale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;
  const copy = shellCopy[currentLocale];
  const localizedLinks = links.map(([label, slug]) => ({
    label: copy.nav[label],
    href: buildLocalizedPath(currentLocale, slug || undefined),
  }));

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[color:var(--surface-overlay)]/86 backdrop-blur-xl">
      <div className="section flex min-h-20 items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? copy.toggleClose : copy.toggleOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="space-y-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <Link href={buildLocalizedPath(currentLocale)} className="flex flex-col">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-white/52">
              {copy.brandEyebrow}
            </span>
            <span className="text-2xl font-semibold tracking-tight text-white">Mr Spark</span>
          </Link>
        </div>

        <nav aria-label={copy.desktopNavLabel} className="hidden items-center gap-5 lg:flex">
          {localizedLinks.map(({ label, href }) => {
            const isActive = isActivePath(pathname, href);

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition hover:text-white ${
                  isActive ? "text-white" : "text-white/78"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Link
            href={buildLocalizedPath(currentLocale, "notdienst")}
            className="btn-base btn-small hidden md:inline-flex bg-white text-[color:var(--ink)] hover:bg-white/92"
          >
            {copy.emergencyCta}
          </Link>
          <Link
            href={buildLocalizedPath(currentLocale, "kontakt")}
            className="btn-base btn-small bg-[color:var(--accent)] text-[color:var(--ink)] hover:bg-[#ffd36c]"
          >
            {copy.primaryCta}
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="section pb-5 lg:hidden">
          <nav aria-label={copy.mobileNavLabel} className="panel-surface grid gap-2 p-4">
            {localizedLinks.map(({ label, href }) => {
              const isActive = isActivePath(pathname, href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium hover:bg-[color:var(--brand-soft)] ${
                    isActive
                      ? "bg-[color:var(--brand-soft)] text-[color:var(--brand)]"
                      : "text-[color:var(--ink)]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  const pathname = usePathname() || `/${defaultLocale}`;
  const localeSegment = pathname.split("/")[1];
  const currentLocale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;
  const copy = shellCopy[currentLocale];

  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface-strong)]">
      <div className="section grid gap-8 py-14 md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
        <div>
          <p className="section-eyebrow text-white/54">Mr Spark</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            {copy.footerTitle}
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
            {copy.footerDescription}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">{copy.footerServices}</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/66">
            {copy.footerServiceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">{copy.footerConversion}</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/66">
            {copy.footerConversionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">{copy.footerLegal}</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/66">
            <li>
              <Link href={buildLocalizedPath(currentLocale, "impressum")}>{copy.legalNotice}</Link>
            </li>
            <li>
              <Link href={buildLocalizedPath(currentLocale, "datenschutz")}>{copy.privacyNotice}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
