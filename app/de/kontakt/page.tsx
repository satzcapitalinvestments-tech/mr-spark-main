import MascotHero from "@/components/MascotHero";
import WhatsAppLeadForm from "@/components/WhatsAppLeadForm";

export default function Page(){return <main className="gradient"><section className="section py-14"><h1 className="text-4xl font-black">Kontakt zu Mr Spark</h1><p className="mt-3 text-slate-700">Senden Sie Ihre Anfrage mit Service, Stadt und Dringlichkeit direkt per WhatsApp.</p></section><section className="section grid gap-6 pb-14 md:grid-cols-2"><WhatsAppLeadForm sourcePage="/de/kontakt" /><div className="space-y-4"><MascotHero compact={false} /><div className="card"><h2 className="text-2xl font-bold">Schnelle Terminannahme</h2><p className="mt-2 text-slate-700">Wir melden uns zügig mit Rückruf und nächstem freien Zeitfenster.</p></div></div></section></main>}
