import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { hasPublishedLegalDetails } from "@/lib/site-config";

const legalReady = hasPublishedLegalDetails();

export const metadata: Metadata = buildPageMetadata({
  title: "Datenschutz",
  description: "Datenschutzhinweise fuer Lead Intake, Rueckrufe und Serviceabwicklung bei Mr Spark.",
  pathname: "/de/datenschutz",
  noIndex: !legalReady,
});

export default function Page() {
  return (
    <main className="section py-14 space-y-8">
      <h1 className="text-4xl font-black">Datenschutz</h1>
      <section className="card">
        <p className="font-semibold">
          {!legalReady
            ? "Hinweis: Diese Datenschutzseite ist bis zur juristischen Freigabe als Entwurf markiert und wird nicht indexiert."
            : "Diese Hinweise beschreiben die Verarbeitung von Kontakt- und Einsatzanfragen."}
        </p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold">Verarbeitete Daten</h2>
        <p>Kontakt- und Anfragedaten aus Formular und Telegram, soweit zur Bearbeitung erforderlich.</p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold">Zweck</h2>
        <p>Terminierung, Rueckruf, Priorisierung von Notfaellen und Angebots- bzw. Serviceabwicklung.</p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold">Speicher- und Weitergabepfade</h2>
        <p>
          Formularanfragen werden serverseitig validiert und optional an ein konfiguriertes Intake-Ziel uebermittelt,
          bevor der Telegram-Kontakt geoeffnet wird.
        </p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold">Betroffenenrechte</h2>
        <p>Auskunft, Berichtigung, Loeschung und weitere Rechte gemaess DSGVO.</p>
      </section>
    </main>
  );
}
