import type { Metadata } from "next";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import { germanCities } from "@/data/germany/cities";
import { germanStates } from "@/data/germany/states";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Einsatzgebiet in Deutschland",
  description:
    "Bundesländer, Städte und regionale Einsatzabdeckung für Elektroanfragen, Rückruf und Notdienstkoordination.",
  pathname: "/de/einsatzgebiet",
  locale: "de",
  localizedSlug: "einsatzgebiet",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Einsatzgebiet", "Elektroservice Deutschland", "Notdienst Regionen"],
});

const coverageCards = [
  {
    title: "Deutschlandweite Anfrageannahme",
    description:
      "Die Route schafft Klarheit darüber, dass Mr Spark Anfragen aus vielen Regionen koordiniert, Verfügbarkeit und Anfahrt aber immer vorab bestätigt.",
  },
  {
    title: "Saubere Erwartungssteuerung",
    description:
      "Statt falscher Sofort-Zusagen priorisiert die Seite Transparenz zu Rückmeldung, Terminfenster und tatsächlicher Einsatzplanung.",
  },
  {
    title: "Gleicher Leadflow wie auf den Kernseiten",
    description:
      "Auch die Gebietsseite führt in dieselbe servergestützte Intake-Strecke und verhindert damit Datenbrüche zwischen SEO-Einstieg und Kontakt.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Einsatzgebiet und Verfügbarkeit"
        title="Elektriker-Anfragen aus Deutschland sauber aufnehmen und regional einordnen."
        description="Ob Großstadt, Umland oder Gewerbestandort: Über diese Seite können Sie Ihren Einsatzort direkt angeben und die Anfrage für Rückruf oder Notdienst vorbereiten."
        points={[
          "Bundesländer und Städte bleiben schnell scanbar",
          "Anfahrt und Termin werden vorab abgestimmt",
          "Auch regionale Suchanfragen führen direkt in den Kontaktweg",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Einsatzgebiet anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Notdienst öffnen", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="coverage" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Regionale Anfrage"
          title="Erst den Einsatzort nennen, dann Verfügbarkeit und Termin abstimmen."
          description="Wer nach einem Elektriker in einer Stadt oder Region sucht, soll sofort sehen, wie die Anfrage vorbereitet und regional eingeordnet wird."
        />
        <FeatureGrid items={coverageCards} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Bundesländer"
          title="Aus diesen Regionen können Sie Ihre Anfrage direkt vorbereiten."
          description="Die genaue Einsatzplanung hängt von Verfügbarkeit, Anfahrt und Auftragslage ab und wird im Rückruf oder in Telegram abgestimmt."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {germanStates.map((state) => (
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-slate-900" key={state}>
              {state}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Städte und Orte"
          title="Wichtige Städte und Suchorte bleiben direkt erfassbar."
          description="Wenn Sie über eine Stadt- oder Regionssuche kommen, können Sie den Einsatzort ohne Umwege direkt mitsenden."
        />
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {germanCities.map((city) => (
            <div className="feature-card py-4" key={city}>
              <p className="text-base font-medium text-[color:var(--ink)]">{city}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <LeadCaptureSection
        title="Region und Einsatz jetzt strukturiert anfragen"
        description="Teilen Sie Stadt, Region und Anliegen direkt mit. So lässt sich schneller klären, ob Rückruf, Termin oder Notdienst der richtige nächste Schritt ist."
        sourcePage="/de/einsatzgebiet"
        checklist={[
          "Ort oder Stadt direkt nennen",
          "Service oder Störung beschreiben",
          "Dringlichkeit und Rückkanal angeben",
        ]}
      />
    </main>
  );
}
