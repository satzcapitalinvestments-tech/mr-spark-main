import { languages, type LocaleCode } from "@/data/i18n/languages";

export const localeCodes = languages.map((l) => l.code);
export const defaultLocale: LocaleCode = "de";
export const localizedRouteSlugs = [
  "leistungen",
  "notdienst",
  "einsatzgebiet",
  "preise",
  "kontakt",
  "ueber-uns",
  "impressum",
  "datenschutz",
] as const;
export type LocalizedRouteSlug = (typeof localizedRouteSlugs)[number];

const defaultRouteSegments: Record<LocalizedRouteSlug, string> = {
  leistungen: "leistungen",
  notdienst: "notdienst",
  einsatzgebiet: "einsatzgebiet",
  preise: "preise",
  kontakt: "kontakt",
  "ueber-uns": "ueber-uns",
  impressum: "impressum",
  datenschutz: "datenschutz",
};

const localizedRouteSegments: Record<LocaleCode, Record<LocalizedRouteSlug, string>> = {
  de: defaultRouteSegments,
  en: {
    ...defaultRouteSegments,
    leistungen: "services",
    notdienst: "emergency",
    einsatzgebiet: "coverage",
    preise: "pricing",
    kontakt: "contact",
    "ueber-uns": "about-us",
    impressum: "legal-notice",
    datenschutz: "privacy",
  },
  tr: defaultRouteSegments,
  ar: defaultRouteSegments,
  ru: defaultRouteSegments,
  pl: defaultRouteSegments,
  uk: defaultRouteSegments,
  ro: defaultRouteSegments,
};

const legacyRouteAliases: Record<LocaleCode, Record<string, LocalizedRouteSlug>> = {
  de: {
    elektriker: "leistungen",
    elektro: "leistungen",
    standorte: "einsatzgebiet",
  },
  en: {
    leistungen: "leistungen",
    elektriker: "leistungen",
    elektro: "leistungen",
    electrician: "leistungen",
    electrical: "leistungen",
    notdienst: "notdienst",
    einsatzgebiet: "einsatzgebiet",
    preise: "preise",
    kontakt: "kontakt",
    "ueber-uns": "ueber-uns",
    impressum: "impressum",
    datenschutz: "datenschutz",
    standorte: "einsatzgebiet",
  },
  tr: {
    elektriker: "leistungen",
    elektro: "leistungen",
    standorte: "einsatzgebiet",
  },
  ar: {
    elektriker: "leistungen",
    elektro: "leistungen",
    standorte: "einsatzgebiet",
  },
  ru: {
    elektriker: "leistungen",
    elektro: "leistungen",
    standorte: "einsatzgebiet",
  },
  pl: {
    elektriker: "leistungen",
    elektro: "leistungen",
    standorte: "einsatzgebiet",
  },
  uk: {
    elektriker: "leistungen",
    elektro: "leistungen",
    standorte: "einsatzgebiet",
  },
  ro: {
    elektriker: "leistungen",
    elektro: "leistungen",
    standorte: "einsatzgebiet",
  },
};

export const isLocale = (v: string): v is LocaleCode => localeCodes.includes(v as LocaleCode);

export function getLocaleDirection(locale: LocaleCode) {
  return languages.find((language) => language.code === locale)?.dir ?? "ltr";
}

export function getLocaleLanguageTag(locale: LocaleCode) {
  switch (locale) {
    case "de":
      return "de-DE";
    case "en":
      return "en";
    case "tr":
      return "tr";
    case "ar":
      return "ar";
    case "ru":
      return "ru";
    case "pl":
      return "pl";
    case "uk":
      return "uk";
    case "ro":
      return "ro";
    default:
      return locale;
  }
}

export function getOpenGraphLocale(locale: LocaleCode) {
  return getLocaleLanguageTag(locale).replace("-", "_");
}

export function isLocalizedRouteSlug(slug: string): slug is LocalizedRouteSlug {
  return localizedRouteSlugs.includes(slug as LocalizedRouteSlug);
}

export function getLocalizedRouteSegment(locale: LocaleCode, slug: LocalizedRouteSlug) {
  return localizedRouteSegments[locale][slug];
}

export function getLocalizedStaticParams(locale: LocaleCode) {
  return localizedRouteSlugs.map((slug) => ({
    locale,
    slug: getLocalizedRouteSegment(locale, slug),
  }));
}

export function resolveLocalizedRouteSlug(locale: LocaleCode, segment: string) {
  const canonicalMatch = (
    Object.entries(localizedRouteSegments[locale]) as Array<[LocalizedRouteSlug, string]>
  ).find(([, localizedSegment]) => localizedSegment === segment);

  if (canonicalMatch) {
    return canonicalMatch[0];
  }

  return legacyRouteAliases[locale][segment] ?? null;
}

export function resolveLocalizedRoute(locale: LocaleCode, segment: string) {
  const slug = resolveLocalizedRouteSlug(locale, segment);
  if (!slug) {
    return null;
  }

  const canonicalSegment = getLocalizedRouteSegment(locale, slug);

  return {
    slug,
    canonicalPath: buildLocalizedPath(locale, slug),
    isCanonical: segment === canonicalSegment,
  };
}

export function buildLocalizedPath(locale: LocaleCode, slug?: string) {
  const normalizedSlug = slug && isLocalizedRouteSlug(slug)
    ? `/${getLocalizedRouteSegment(locale, slug)}`
    : slug
      ? `/${slug.replace(/^\/+/, "")}`
      : "";
  return `/${locale}${normalizedSlug}`;
}

export function buildLocaleAlternates(slug?: string) {
  if (slug && !isLocalizedRouteSlug(slug)) {
    return undefined;
  }

  return Object.fromEntries(
    localeCodes.map((locale) => [locale, buildLocalizedPath(locale, slug || undefined)]),
  ) as Record<LocaleCode, string>;
}

export function resolvePathForLocale(pathname: string, nextLocale: LocaleCode) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) {
    return buildLocalizedPath(nextLocale);
  }

  const currentLocale = isLocale(parts[0]) ? parts[0] : defaultLocale;
  const [, ...rest] = isLocale(parts[0]) ? parts : [defaultLocale, ...parts];
  const [firstSegment] = rest;

  if (!firstSegment) {
    return buildLocalizedPath(nextLocale);
  }

  const normalizedSlug = resolveLocalizedRouteSlug(currentLocale, firstSegment);
  if (!normalizedSlug) {
    return buildLocalizedPath(nextLocale);
  }

  return buildLocalizedPath(nextLocale, normalizedSlug);
}

export function switchLocalePath(pathname: string, nextLocale: LocaleCode) {
  return resolvePathForLocale(pathname, nextLocale);
}
