import { languages, type LocaleCode } from "@/data/i18n/languages";

export const localeCodes = languages.map((l) => l.code);
export const defaultLocale: LocaleCode = "de";
export const localizedRouteSlugs = [
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
] as const;
export type LocalizedRouteSlug = (typeof localizedRouteSlugs)[number];

const localeSwitchAliases: Record<string, LocalizedRouteSlug> = {
  standorte: "einsatzgebiet",
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

export function buildLocalizedPath(locale: LocaleCode, slug?: string) {
  const normalizedSlug = slug ? `/${slug.replace(/^\/+/, "")}` : "";
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

  const [, ...rest] = isLocale(parts[0]) ? parts : [defaultLocale, ...parts];
  const [firstSegment] = rest;

  if (!firstSegment) {
    return buildLocalizedPath(nextLocale);
  }

  const normalizedSlug = localeSwitchAliases[firstSegment] ?? firstSegment;
  if (!isLocalizedRouteSlug(normalizedSlug)) {
    return buildLocalizedPath(nextLocale);
  }

  return buildLocalizedPath(nextLocale, normalizedSlug);
}

export function switchLocalePath(pathname: string, nextLocale: LocaleCode) {
  return resolvePathForLocale(pathname, nextLocale);
}
