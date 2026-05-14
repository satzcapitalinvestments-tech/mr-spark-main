"use client";
import { usePathname } from "next/navigation";
import { languages, type LocaleCode } from "@/data/i18n/languages";
import { switchLocalePath } from "@/lib/i18n";

export default function LanguageSelector() {
  const pathname = usePathname() || "/de";
  return (
    <select className="rounded-full border px-3 py-2 text-sm" value={(pathname.split('/')[1]||'de')} onChange={(e)=>{window.location.href=switchLocalePath(pathname,e.target.value as LocaleCode);}}>
      {languages.map((l)=><option key={l.code} value={l.code}>{l.short} · {l.label}</option>)}
    </select>
  );
}
