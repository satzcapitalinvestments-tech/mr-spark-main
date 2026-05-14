import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { germanCities } from "@/data/germany/cities";
import { germanStates } from "@/data/germany/states";
import WhatsAppLeadForm from "@/components/WhatsAppLeadForm";

const allowed=["leistungen","elektriker","elektro","notdienst","einsatzgebiet","preise","kontakt","ueber-uns","impressum","datenschutz"];
export default function Page({params}:{params:{locale:string;slug:string}}){
 if(!isLocale(params.locale)||params.locale==='de'||!allowed.includes(params.slug)) return notFound();
 const title = `${params.slug.replace('-', ' ')} · Mr Spark`;
 return <main className="section py-14" dir={params.locale==='ar'?'rtl':'ltr'}><h1 className="text-4xl font-black capitalize">{title}</h1><p className="mt-3 text-slate-700">Mr Spark — lokalisierte Service-Informationen für {params.locale.toUpperCase()}.</p>{params.slug==='einsatzgebiet'&&<><h2 className="mt-6 text-2xl font-bold">Regionen</h2><p className="mt-2">Wir nehmen Anfragen aus diesen Regionen entgegen und koordinieren passende Elektro-Hilfe je nach Verfügbarkeit. Verfügbarkeit, Anfahrt und Termin werden vorab bestätigt.</p><div className="mt-4 flex flex-wrap gap-2">{germanStates.map(s=><span key={s} className="rounded-full bg-sky-100 px-3 py-1 text-sm">{s}</span>)}</div><div className="mt-4 grid gap-2 md:grid-cols-3">{germanCities.slice(0,60).map(c=><div key={c} className="rounded-xl border p-2">{c}</div>)}</div></>}<section className="mt-8"><WhatsAppLeadForm sourcePage={`/${params.locale}/${params.slug}`} /></section></main>
}
