import { Hero } from "@/components/SiteChrome";

export default function DeHome() {
  return (
    <main>
      <Hero title="Mr Spark — Elektriker & Elektro-Notdienst" subtitle="Schnelle Hilfe für Elektroinstallation, Sicherungskasten, Steckdosen und Lichtinstallation. Wir beheben Störungen zuverlässig – auch als 24h Notdienst." />
      <section className="section grid gap-4 md:grid-cols-3">
        {[
          ["Elektriker vor Ort", "Geprüfte Fachkräfte für Neuinstallation, Reparatur und Erweiterung."],
          ["Störung beheben", "Kurzschluss, Ausfall oder FI-Problem? Wir sind schnell einsatzbereit."],
          ["24h Notdienst", "Elektro-Notdienst für dringende Fälle – Tag und Nacht erreichbar."],
        ].map(([t, d]) => <article key={t} className="card"><h2 className="text-xl font-semibold">{t}</h2><p className="mt-2 text-slate-300">{d}</p></article>)}
      </section>
    </main>
  );
}
