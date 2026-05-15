import TelegramLeadForm from "@/components/TelegramLeadForm";
import MascotHero from "@/components/MascotHero";
import Link from "next/link";

type T={title:string;lead:string;services:string[]};
export function LocalizedPage({t, locale, dir}:{t:T;locale:string;dir?:"ltr"|"rtl"}){
  const isEn=locale==='en';
  return <main className="section py-14" dir={dir}><h1 className="text-4xl font-black text-slate-950">{t.title}</h1><p className="mt-3 text-slate-700">{t.lead}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={`/${locale}/notdienst`} className="rounded-full bg-sky-600 px-5 py-3 font-semibold text-white">{isEn?'Request emergency help':'Notdienst anfragen'}</Link><Link href={`/${locale}/kontakt`} className="rounded-full bg-amber-300 px-5 py-3 font-semibold text-slate-900">{isEn?'Start Telegram':'Telegram starten'}</Link><Link href={`/${locale}/preise`} className="rounded-full border border-sky-300 px-5 py-3 font-semibold">{isEn?'View pricing':'Preise ansehen'}</Link><Link href={`/${locale}/einsatzgebiet`} className="rounded-full border border-sky-300 px-5 py-3 font-semibold">{isEn?'Check coverage':'Einsatzgebiet prüfen'}</Link></div><div className="mt-6 grid gap-4 md:grid-cols-3">{t.services.map(s=><article className="card" key={s}><h2 className="text-xl font-semibold text-slate-950">{s}</h2><p className="mt-2 text-slate-700">Mr Spark</p></article>)}</div><section className="mt-8 grid gap-6 md:grid-cols-2"><TelegramLeadForm sourcePage={`/${locale}`} /><MascotHero compact /></section></main>
}
