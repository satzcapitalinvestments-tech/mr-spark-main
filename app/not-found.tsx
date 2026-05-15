import Link from "next/link";
import { headers } from "next/headers";
import type { LocaleCode } from "@/data/i18n/languages";
import { buildLocalizedPath, defaultLocale, isLocale } from "@/lib/i18n";

const notFoundCopy: Record<
  LocaleCode,
  {
    title: string;
    description: string;
    home: string;
    contact: string;
  }
> = {
  de: {
    title: "Seite nicht gefunden",
    description:
      "Die angeforderte Seite existiert nicht oder wurde verschoben. Nutzen Sie die Hauptnavigation oder kehren Sie zur Startseite zurück.",
    home: "Zur Startseite",
    contact: "Kontakt aufnehmen",
  },
  en: {
    title: "Page not found",
    description:
      "The requested page does not exist or has moved. Use the main navigation or return to the homepage.",
    home: "Back to home",
    contact: "Contact us",
  },
  tr: {
    title: "Sayfa bulunamadı",
    description:
      "İstenen sayfa mevcut değil veya taşınmış olabilir. Ana gezinmeyi kullanın ya da ana sayfaya dönün.",
    home: "Ana sayfaya dön",
    contact: "İletişime geç",
  },
  ar: {
    title: "الصفحة غير موجودة",
    description:
      "الصفحة المطلوبة غير موجودة أو تم نقلها. استخدم التنقل الرئيسي أو ارجع إلى الصفحة الرئيسية.",
    home: "العودة إلى الرئيسية",
    contact: "تواصل معنا",
  },
  ru: {
    title: "Страница не найдена",
    description:
      "Запрошенная страница не существует или была перемещена. Используйте основную навигацию или вернитесь на главную.",
    home: "На главную",
    contact: "Связаться",
  },
  pl: {
    title: "Nie znaleziono strony",
    description:
      "Żądana strona nie istnieje lub została przeniesiona. Skorzystaj z głównej nawigacji albo wróć na stronę główną.",
    home: "Wróć do strony głównej",
    contact: "Skontaktuj się",
  },
  uk: {
    title: "Сторінку не знайдено",
    description:
      "Запитувана сторінка не існує або була переміщена. Скористайтеся основною навігацією або поверніться на головну.",
    home: "На головну",
    contact: "Зв'язатися",
  },
  ro: {
    title: "Pagina nu a fost găsită",
    description:
      "Pagina solicitată nu există sau a fost mutată. Folosiți navigarea principală sau reveniți la pagina principală.",
    home: "Înapoi la pagina principală",
    contact: "Contactează-ne",
  },
};

export default async function NotFound() {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;
  const copy = notFoundCopy[locale];

  return (
    <main className="section py-24">
      <div className="panel-surface max-w-3xl p-8 md:p-10">
        <p className="section-eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--ink)] md:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
          {copy.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={buildLocalizedPath(locale)}
            className="btn-base bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-strong)]"
          >
            {copy.home}
          </Link>
          <Link
            href={buildLocalizedPath(locale, "kontakt")}
            className="btn-base border border-[color:var(--line-strong)] bg-white text-[color:var(--ink)] hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
          >
            {copy.contact}
          </Link>
        </div>
      </div>
    </main>
  );
}
