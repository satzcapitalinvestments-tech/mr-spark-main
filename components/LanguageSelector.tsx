"use client";
import { startTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { languages, type LocaleCode } from "@/data/i18n/languages";
import { switchLocalePath } from "@/lib/i18n";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname() || "/de";

  return (
    <>
      <label className="sr-only" htmlFor="language-selector">
        Sprache wählen
      </label>
      <select
        id="language-selector"
        className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-sm text-white outline-none transition focus:border-white/30"
        value={pathname.split("/")[1] || "de"}
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
