import WhatsAppLeadForm from "@/components/WhatsAppLeadForm";
import MascotHero from "@/components/MascotHero";

type T={title:string;lead:string;cta:string;services:string[]};
export function LocalizedPage({t, locale, dir}:{t:T;locale:string;dir?:"ltr"|"rtl"}){return <main className="section py-14" dir={dir}><h1 className="text-4xl font-black">{t.title}</h1><p className="mt-3 text-slate-700">{t.lead}</p><div className="mt-6 grid gap-4 md:grid-cols-3">{t.services.map(s=><article className="card" key={s}><h2 className="text-xl font-semibold">{s}</h2><p className="mt-2 text-slate-600">Mr Spark</p></article>)}</div><section className="mt-8 grid gap-6 md:grid-cols-2"><WhatsAppLeadForm sourcePage={`/${locale}`} /><MascotHero compact /></section></main>}
