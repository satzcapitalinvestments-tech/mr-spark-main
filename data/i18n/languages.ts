export const languages = [
  { code: "de", label: "Deutsch", short: "DE", dir: "ltr" },
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "tr", label: "Türkçe", short: "TR", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
  { code: "ru", label: "Русский", short: "RU", dir: "ltr" },
  { code: "pl", label: "Polski", short: "PL", dir: "ltr" },
  { code: "uk", label: "Українська", short: "UK", dir: "ltr" },
  { code: "ro", label: "Română", short: "RO", dir: "ltr" }
] as const;
export type LocaleCode = (typeof languages)[number]["code"];
