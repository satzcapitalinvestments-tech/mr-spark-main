import Faq from "@/components/Faq";
import MascotHero from "@/components/MascotHero";
import WhatsAppLeadForm from "@/components/WhatsAppLeadForm";

export default function Page() {
  return (
    <main className="gradient">
      <section className="section grid gap-8 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-black">Elektro-Notdienst rund um die Uhr</h1>
          <p className="mt-4 text-slate-700">
            Hilfe bei Stromausfall, Kurzschluss, FI-Schalter löst aus, Sicherungskasten defekt,
            Steckdose gefährlich, Lichtausfall und Brandgeruch / verschmorte Leitung.
          </p>
          <p className="mt-4 rounded-2xl bg-amber-50 p-4 font-medium">
            Bei Brandgeruch, Funkenbildung oder akuter Gefahr sofort den Stromkreis abschalten und bei Gefahr Feuerwehr/Notruf kontaktieren.
          </p>
        </div>
        <MascotHero compact />
      </section>

      <section className="section py-10">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "Stromausfall",
            "Kurzschluss",
            "FI-Schalter löst aus",
            "Sicherungskasten defekt",
            "Steckdose gefährlich",
            "Lichtausfall",
            "Brandgeruch / verschmorte Leitung",
          ].map((item) => (
            <div key={item} className="card">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section py-10">
        <h2 className="text-3xl font-bold">Ablauf im Notfall</h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-4">
          {["Anfrage", "Sicherheitscheck", "Rückruf / Termin", "Elektriker kommt"].map((step) => (
            <li key={step} className="card">
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="section py-10">
        <h2 className="text-3xl font-bold">Preis-Transparenz</h2>
        <p className="mt-3 text-slate-700">
          Wir erklären vorab Anfahrt, Diagnose, Arbeitszeit und Material. Keine verdeckten Positionen.
        </p>
      </section>

      <section className="section grid gap-6 py-12 md:grid-cols-2">
        <WhatsAppLeadForm sourcePage="/de/notdienst" />
        <MascotHero compact />
      </section>

      <Faq
        items={[
          { q: "Ist nachts Hilfe möglich?", a: "Ja, unser Notdienst ist 24h erreichbar." },
          { q: "Was soll ich zuerst tun?", a: "Bei Gefahr absichern, Stromkreis abschalten und uns sofort kontaktieren." },
        ]}
      />
    </main>
  );
}