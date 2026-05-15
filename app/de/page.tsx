import Link from "next/link";
import MascotHero from "@/components/MascotHero";
import { TrustStrip } from "@/components/SectionBlocks";
import TelegramLeadForm from "@/components/TelegramLeadForm";
import Faq from "@/components/Faq";

export default function Page() {
  return (
    <main className="gradient">
      <section className="section grid items-center gap-10 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-black md:text-6xl">Mr Spark — Elektriker & Elektro-Notdienst</h1>
          <p className="mt-4 text-lg text-slate-700">
            Schnelle Hilfe bei Stromausfall, Kurzschluss, FI-Schalter-Problemen, Sicherungskasten, Steckdosen, Lichtinstallation und planbaren Elektroarbeiten. Anfrage senden, Rückmeldung erhalten und transparent klären lassen, was als Nächstes passiert.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/de/notdienst" className="rounded-full bg-sky-600 px-5 py-3 font-semibold text-white">
              Notdienst anfragen
            </Link>
            <Link href="/de/kontakt" className="rounded-full bg-amber-300 px-5 py-3 font-semibold">
              Telegram starten
            </Link>
            <Link href="/de/einsatzgebiet" className="rounded-full border border-sky-300 px-5 py-3 font-semibold">
              Einsatzgebiet prüfen
            </Link>
            <Link href="/de/preise" className="rounded-full border border-sky-300 px-5 py-3 font-semibold">
              Preise ansehen
            </Link>
          </div>
        </div>
        <MascotHero />
      </section>

      <TrustStrip />

      <section className="section py-12">
        <h2 className="text-3xl font-bold">Leistungen</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Elektriker",
            "Elektroinstallation",
            "Elektro-Notdienst",
            "Sicherungskasten",
            "Steckdosen & Licht",
            "Störung beheben",
          ].map((service) => (
            <article key={service} className="card">
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="mt-2 text-slate-700">
                Professionelle Durchführung mit transparentem Ablauf und sauberer Kommunikation.
              </p>
            </article>
          ))}
        </div>
      </section>


      <section className="section py-10">
        <div className="rounded-3xl bg-rose-50 p-6">
          <h2 className="text-2xl font-bold">Akute Elektro-Probleme?</h2>
          <p className="mt-2">
            Stromausfall, Kurzschluss, FI-Schalter löst aus, Brandgeruch oder Sicherungskasten-Probleme:
            wir koordinieren schnelle Hilfe.
          </p>
        </div>
      </section>

      <section className="section py-12">
        <h2 className="text-3xl font-bold">Preise & Transparenz</h2>
        <p className="mt-3 text-slate-700">
          Faire Preisstruktur mit nachvollziehbaren Positionen für Anfahrt, Diagnose, Arbeitszeit und Material.
        </p>
      </section>

      <Faq
        items={[
          {
            q: "Wie schnell kommt ein Elektriker?",
            a: "Bei Notfällen priorisieren wir sofortige Rückmeldung und schnellstmögliche Einsatzplanung.",
          },
          {
            q: "Gibt es 24h Notdienst?",
            a: "Ja, wir bieten rund um die Uhr Erreichbarkeit für elektrische Notfälle.",
          },
        ]}
      />

      <section className="section py-12">
        <h2 className="text-3xl font-bold">Kontakt per Telegram</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <TelegramLeadForm sourcePage="/de" />
          <MascotHero compact />
        </div>
      </section>
    </main>
  );
}