import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n";
import { germanCities } from "@/data/germany/cities";
import { germanStates } from "@/data/germany/states";
import TelegramLeadForm from "@/components/TelegramLeadForm";

type SlugParams = Promise<{ locale: string; slug: string }>;
const allowed=["leistungen","elektriker","elektro","notdienst","einsatzgebiet","preise","kontakt","ueber-uns","impressum","datenschutz"];

export default async function LocaleSlugPage({ params }: { params: SlugParams }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "de" || !allowed.includes(slug)) return notFound();
  return <main className="section py-14" dir={locale === "ar" ? "rtl" : "ltr"}><h1 className="text-4xl font-black capitalize">{slug.replace('-', ' ')} · Mr Spark</h1><p className="mt-3 text-slate-700">Service information for {locale.toUpperCase()}.</p>{slug==='einsatzgebiet'&&<><p className="mt-4">Coverage areas and appointment details are confirmed before dispatch.</p><div className="mt-4 flex flex-wrap gap-2">{germanStates.map(s=><span className="rounded-full bg-sky-100 px-3 py-1 text-sm" key={s}>{s}</span>)}</div><div className="mt-4 grid gap-2 md:grid-cols-3">{germanCities.slice(0,80).map(c=><div className="rounded-xl border p-2" key={c}>{c}</div>)}</div></>}<section className="mt-8"><TelegramLeadForm sourcePage={`/${locale}/${slug}`} /></section></main>;
}
