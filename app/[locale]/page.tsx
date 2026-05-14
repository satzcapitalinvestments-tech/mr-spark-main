import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { LocalizedPage } from "@/components/LocalizedPage";

type LocaleParams = Promise<{ locale: string }>;

const copy: Record<string, { title: string; lead: string; services: string[] }> = {
  en: { title: "Mr Spark — Electrician & Emergency Electrical Service", lead: "Electrician, electrical installation, emergency electrical service, fuse box, sockets, lighting and power outage support.", services: ["Electrician", "Electrical installation", "Emergency electrical service", "Fuse box", "Sockets", "Lighting", "Power outage"] },
  tr: { title: "Mr Spark — Elektrikçi ve Acil Elektrik Servisi", lead: "Elektrikçi, elektrik tesisatı, acil elektrik servisi, sigorta kutusu, prizler, aydınlatma ve elektrik kesintisi desteği.", services: ["Elektrikçi", "Elektrik tesisatı", "Acil elektrik servisi", "Sigorta kutusu", "Prizler", "Aydınlatma", "Elektrik kesintisi"] },
  ar: { title: "Mr Spark — كهربائي وخدمة طوارئ كهربائية", lead: "كهربائي، تمديدات كهربائية، خدمة طوارئ كهربائية، لوحة الكهرباء، المقابس، الإضاءة ودعم انقطاع الكهرباء.", services: ["كهربائي", "تمديدات كهربائية", "خدمة طوارئ كهربائية", "لوحة الكهرباء", "المقابس", "الإضاءة", "انقطاع الكهرباء"] },
  ru: { title: "Mr Spark — Электрик и аварийная электрослужба", lead: "Электрик, электромонтаж, аварийная электрослужба, электрощит, розетки, освещение и помощь при отключении электричества.", services: ["Электрик", "Электромонтаж", "Аварийная электрослужба", "Электрощит", "Розетки", "Освещение", "Отключение электричества"] },
  pl: { title: "Mr Spark — Elektryk i pogotowie elektryczne", lead: "Elektryk, instalacje elektryczne, pogotowie elektryczne, skrzynka bezpieczników, gniazdka, oświetlenie i wsparcie przy awarii prądu.", services: ["Elektryk", "Instalacje elektryczne", "Pogotowie elektryczne", "Skrzynka bezpieczników", "Gniazdka", "Oświetlenie", "Awaria prądu"] },
  uk: { title: "Mr Spark — Електрик та аварійна електрослужба", lead: "Електрик, електромонтаж, аварійна електрослужба, електрощит, розетки, освітлення та допомога при відключенні електроенергії.", services: ["Електрик", "Електромонтаж", "Аварійна електрослужба", "Електрощит", "Розетки", "Освітлення", "Відключення електроенергії"] },
  ro: { title: "Mr Spark — Electrician și serviciu electric de urgență", lead: "Electrician, instalații electrice, serviciu electric de urgență, tablou electric, prize, iluminat și suport pentru pană de curent.", services: ["Electrician", "Instalații electrice", "Serviciu electric de urgență", "Tablou electric", "Prize", "Iluminat", "Pană de curent"] },
};

export default async function LocalePage({ params }: { params: LocaleParams }) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "de") return notFound();
  const t = copy[locale];
  return <LocalizedPage t={t} locale={locale} dir={locale === "ar" ? "rtl" : "ltr"} />;
}
