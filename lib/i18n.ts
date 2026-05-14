import { languages, type LocaleCode } from "@/data/i18n/languages";

export const localeCodes = languages.map((l) => l.code);
export const defaultLocale: LocaleCode = "de";
export const isLocale = (v: string): v is LocaleCode => localeCodes.includes(v as LocaleCode);
export function switchLocalePath(pathname: string, nextLocale: LocaleCode) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  if (isLocale(parts[0])) parts[0] = nextLocale;
  else parts.unshift(nextLocale);
  return `/${parts.join("/")}`;
}
