"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { LocaleCode } from "@/data/i18n/languages";
import {
  defaultLocale,
  getLocaleDirection,
  getLocaleLanguageTag,
  isLocale,
} from "@/lib/i18n";

const skipLinkLabels: Record<LocaleCode, string> = {
  de: "Zum Inhalt springen",
  en: "Skip to content",
  tr: "Icerige gec",
  ar: "انتقل إلى المحتوى",
  ru: "Перейти к содержимому",
  pl: "Przejdz do tresci",
  uk: "Перейти до вмісту",
  ro: "Mergi la continut",
};

export default function LocaleRuntime() {
  const pathname = usePathname() || `/${defaultLocale}`;
  const localeSegment = pathname.split("/")[1];
  const locale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;

  useEffect(() => {
    document.documentElement.lang = getLocaleLanguageTag(locale);
    document.documentElement.dir = getLocaleDirection(locale);
  }, [locale]);

  return (
    <a href="#page-content" className="skip-link">
      {skipLinkLabels[locale]}
    </a>
  );
}
