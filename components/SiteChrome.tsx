"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import LanguageSelector from "@/components/LanguageSelector";
import type { LocaleCode } from "@/data/i18n/languages";
import { buildLocalizedPath, defaultLocale, isLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

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
    primaryCta: "Telegram starten",
    emergencyCta: "24h Notdienst",
    brandEyebrow: "Elektriker & Notdienst",
    footerTitle: "Schnelle Elektrohilfe, klare Preise und ein direkter Kontaktweg.",
    footerDescription:
      "Mr Spark begleitet Stromausfall, Fehlersuche, Sicherungskasten, Steckdosen, Lichtinstallation und planbare Elektroarbeiten fuer Kunden in Deutschland.",
    footerServices: "Leistungen",
    footerConversion: "Kontakt",
    footerLegal: "Rechtliches",
    footerServiceItems: ["Elektroinstallation", "Notdienst", "Sicherungskasten & Fehlersuche"],
    footerConversionItems: [
      "Telegram direkt aus dem Header oder Formular starten",
      "Notdienst und planbare Arbeiten klar unterscheiden",
      "Rueckmeldung, Anfahrt und naechste Schritte transparent abstimmen",
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
    primaryCta: "Start Telegram",
    emergencyCta: "24h Emergency",
    brandEyebrow: "Electrician & emergency",
    footerTitle: "Fast electrical help, clear pricing, and a direct contact path.",
    footerDescription:
      "Mr Spark handles emergency work, diagnostics, fuse boxes, sockets, lighting, and planned electrical jobs for customers across Germany.",
    footerServices: "Services",
    footerConversion: "Contact",
    footerLegal: "Legal",
    footerServiceItems: ["Electrical installation", "Emergency service", "Fuse box and diagnostics"],
    footerConversionItems: [
      "Start Telegram directly from the header or form",
      "Keep emergency and planned work clearly separated",
      "Clarify response time, travel, and next steps upfront",
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
    primaryCta: "Telegram başlat",
    emergencyCta: "7/24 Acil",
    brandEyebrow: "Elektrikçi ve acil servis",
    footerTitle: "Hızlı elektrik yardımı, net fiyatlar ve doğrudan iletişim.",
    footerDescription:
      "Mr Spark, Almanya genelinde acil elektrik işleri, arıza tespiti, sigorta kutusu, priz, aydınlatma ve planlı elektrik hizmetleri sunar.",
    footerServices: "Hizmetler",
    footerConversion: "İletişim",
    footerLegal: "Yasal",
    footerServiceItems: ["Elektrik tesisatı", "Acil servis", "Sigorta kutusu ve arıza tespiti"],
    footerConversionItems: [
      "Telegram'ı doğrudan başlıktan veya formdan başlatın",
      "Acil ve planlı işleri net şekilde ayırın",
      "Geri dönüş, ulaşım ve sonraki adımları baştan netleştirin",
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
    primaryCta: "ابدأ تيليجرام",
    emergencyCta: "طوارئ 24 ساعة",
    brandEyebrow: "كهربائي وطوارئ",
    footerTitle: "مساعدة كهربائية سريعة وأسعار واضحة وطريق اتصال مباشر.",
    footerDescription: "يقدم Mr Spark خدمات الطوارئ والتشخيص ولوحات الكهرباء والمقابس والإنارة والأعمال الكهربائية المخطط لها في ألمانيا.",
    footerServices: "الخدمات",
    footerConversion: "التواصل",
    footerLegal: "قانوني",
    footerServiceItems: ["تمديدات كهربائية", "خدمة طوارئ", "لوحة كهرباء وتشخيص الأعطال"],
    footerConversionItems: [
      "ابدأ تيليجرام مباشرة من الرأس أو النموذج",
      "فرّق بوضوح بين الطوارئ والأعمال المخطط لها",
      "وضّح وقت الرد والتنقل والخطوات التالية مسبقًا",
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
    primaryCta: "Открыть Telegram",
    emergencyCta: "24ч аварийно",
    brandEyebrow: "Электрик и аварийная помощь",
    footerTitle: "Быстрая электрическая помощь, прозрачные цены и прямой контакт.",
    footerDescription:
      "Mr Spark помогает с авариями, диагностикой, щитками, розетками, освещением и плановыми электрическими работами по всей Германии.",
    footerServices: "Услуги",
    footerConversion: "Контакт",
    footerLegal: "Правовая информация",
    footerServiceItems: ["Электромонтаж", "Аварийная служба", "Щиток и диагностика"],
    footerConversionItems: [
      "Запускайте Telegram прямо из шапки или формы",
      "Четко разделяйте аварийные и плановые работы",
      "Заранее поясняйте отклик, выезд и следующие шаги",
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
    primaryCta: "Uruchom Telegram",
    emergencyCta: "Pogotowie 24h",
    brandEyebrow: "Elektryk i pogotowie",
    footerTitle: "Szybka pomoc elektryczna, jasne ceny i bezpośredni kontakt.",
    footerDescription:
      "Mr Spark pomaga przy awariach, diagnostyce, rozdzielniach, gniazdkach, oświetleniu i planowych pracach elektrycznych w Niemczech.",
    footerServices: "Usługi",
    footerConversion: "Kontakt",
    footerLegal: "Informacje prawne",
    footerServiceItems: ["Instalacja elektryczna", "Pogotowie", "Rozdzielnia i diagnostyka"],
    footerConversionItems: [
      "Uruchom Telegram bezpośrednio z nagłówka lub formularza",
      "Wyraźnie oddziel nagłe i planowane prace",
      "Z góry wyjaśnij czas odpowiedzi, dojazd i kolejne kroki",
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
    primaryCta: "Відкрити Telegram",
    emergencyCta: "24г аварійно",
    brandEyebrow: "Електрик і аварійна допомога",
    footerTitle: "Швидка електродопомога, прозорі ціни та прямий контакт.",
    footerDescription:
      "Mr Spark допомагає з аваріями, діагностикою, щитками, розетками, освітленням і плановими електророботами по всій Німеччині.",
    footerServices: "Послуги",
    footerConversion: "Контакт",
    footerLegal: "Правова інформація",
    footerServiceItems: ["Електромонтаж", "Аварійна служба", "Щиток і діагностика"],
    footerConversionItems: [
      "Запускайте Telegram прямо з шапки або форми",
      "Чітко розділяйте аварійні та планові роботи",
      "Заздалегідь пояснюйте відгук, виїзд і наступні кроки",
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
    primaryCta: "Pornește Telegram",
    emergencyCta: "Urgență 24h",
    brandEyebrow: "Electrician și urgență",
    footerTitle: "Ajutor electric rapid, prețuri clare și contact direct.",
    footerDescription:
      "Mr Spark ajută cu urgențe, diagnoză, tablouri electrice, prize, iluminat și lucrări electrice planificate în Germania.",
    footerServices: "Servicii",
    footerConversion: "Contact",
    footerLegal: "Legal",
    footerServiceItems: ["Instalații electrice", "Serviciu de urgență", "Tablou și diagnosticare"],
    footerConversionItems: [
      "Porniți Telegram direct din antet sau formular",
      "Separați clar lucrările urgente de cele planificate",
      "Explicați din timp răspunsul, deplasarea și pașii următori",
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
  const telegramHref =
    siteConfig.telegramUrl && siteConfig.telegramUrl !== "#"
      ? siteConfig.telegramUrl
      : buildLocalizedPath(currentLocale, "kontakt");
  const telegramIsExternal = telegramHref.startsWith("http");
  const localizedLinks = links.map(([label, slug]) => ({
    label: copy.nav[label],
    href: buildLocalizedPath(currentLocale, slug || undefined),
  }));

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--surface-overlay)] shadow-[0_16px_36px_rgba(7,26,51,0.08)] backdrop-blur-xl">
      <div className="section flex min-h-24 items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line-strong)] bg-white text-[color:var(--ink)] shadow-[0_10px_24px_rgba(7,26,51,0.08)] lg:hidden"
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

          <Link href={buildLocalizedPath(currentLocale)} className="flex items-center">
            <BrandLogo size="header" className="h-11 w-auto md:h-[2.9rem]" />
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
                className={`text-sm font-semibold transition hover:text-[color:var(--brand)] ${
                  isActive ? "text-[color:var(--brand)]" : "text-[color:var(--ink)]/82"
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
            className="btn-base btn-small hidden md:inline-flex border border-[color:var(--brand)] bg-[color:var(--brand)] text-white shadow-[0_16px_36px_rgba(0,119,217,0.2)] hover:border-[color:var(--brand-strong)] hover:bg-[color:var(--brand-strong)]"
          >
            {copy.emergencyCta}
          </Link>
          <a
            href={telegramHref}
            className="btn-base btn-small border border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--ink)] shadow-[0_16px_36px_rgba(255,212,0,0.18)] hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--accent-strong)]"
            target={telegramIsExternal ? "_blank" : undefined}
            rel={telegramIsExternal ? "noreferrer" : undefined}
          >
            {copy.primaryCta}
          </a>
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
            <div className="mt-2 grid gap-2 border-t border-[color:var(--line)] pt-3 sm:grid-cols-2">
              <Link
                href={buildLocalizedPath(currentLocale, "notdienst")}
                className="btn-base btn-small justify-center border border-[color:var(--brand)] bg-[color:var(--brand)] text-white hover:border-[color:var(--brand-strong)] hover:bg-[color:var(--brand-strong)]"
              >
                {copy.emergencyCta}
              </Link>
              <a
                href={telegramHref}
                className="btn-base btn-small justify-center border border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--ink)] hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--accent-strong)]"
                target={telegramIsExternal ? "_blank" : undefined}
                rel={telegramIsExternal ? "noreferrer" : undefined}
              >
                {copy.primaryCta}
              </a>
            </div>
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
          <BrandLogo theme="light" size="footer" className="h-10 w-auto md:h-11" />
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
              <Link href={buildLocalizedPath(currentLocale, "impressum")} className="transition hover:text-white">
                {copy.legalNotice}
              </Link>
            </li>
            <li>
              <Link href={buildLocalizedPath(currentLocale, "datenschutz")} className="transition hover:text-white">
                {copy.privacyNotice}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
