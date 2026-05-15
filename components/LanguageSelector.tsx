"use client";
import { startTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { languages, type LocaleCode } from "@/data/i18n/languages";
import { defaultLocale, isLocale, switchLocalePath } from "@/lib/i18n";

const languageSelectorLabels: Record<LocaleCode, string> = {
  de: "Sprache wählen",
  en: "Choose language",
  tr: "Dil seçin",
  ar: "اختر اللغة",
  ru: "Выберите язык",
  pl: "Wybierz język",
  uk: "Оберіть мову",
  ro: "Alege limba",
};

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname() || "/de";
  const localeSegment = pathname.split("/")[1];
  const currentLocale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;
  const selectorLabel = languageSelectorLabels[currentLocale];

  return (
    <>
      <label className="sr-only" htmlFor="language-selector">
        {selectorLabel}
      </label>
      <select
        id="language-selector"
        aria-label={selectorLabel}
        className="rounded-full border border-white/18 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(7,26,51,0.18)] outline-none transition focus:border-[color:var(--accent)]"
        value={currentLocale}
        onChange={(event) => {
          const nextPath = switchLocalePath(pathname, event.target.value as LocaleCode);
          startTransition(() => {
            router.push(nextPath);
          });
        }}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code} className="text-slate-900">
            {language.short} · {language.label}
          </option>
        ))}
      </select>
    </>
  );
}
