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
  title: "Einsatzgebiet: Elektriker & Elektro-Notdienst in Deutschland",
  description:
    "Bundeslaender, Staedte und regionale Einsatzabdeckung fuer Elektroanfragen, Notdienst und planbare Arbeiten in Deutschland.",
  pathname: "/de/einsatzgebiet",
  locale: "de",
  localizedSlug: "einsatzgebiet",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Einsatzgebiet", "Elektroservice Deutschland", "Notdienst Regionen"],
});

const coverageCards = [
  {
    title: "Anfragen aus Deutschland",
    description:
      "Wir nehmen Anfragen aus diesen Regionen entgegen und koordinieren passende Elektro-Hilfe je nach Verfuegbarkeit.",
  },
  {
    title: "Verfuegbarkeit vorab bestaetigt",
    description:
      "Verfuegbarkeit, Anfahrt und Termin werden vorab bestaetigt, statt vorschnell zugesagt zu werden.",
  },
  {
    title: "Telegram und Rueckmeldung",
    description:
      "Auch ueber die Einsatzgebietsseite bleiben Kontaktweg, Rueckmeldung und Terminabstimmung klar und gut sichtbar.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Einsatzgebiet und Verfügbarkeit"
        title="Einsatzgebiet: Elektriker & Elektro-Notdienst in Deutschland"
        description="Wir nehmen Anfragen aus diesen Regionen entgegen und koordinieren passende Elektro-Hilfe je nach Verfuegbarkeit. Verfuegbarkeit, Anfahrt und Termin werden vorab bestaetigt."
        points={[
          "Bundeslaender und Staedte bleiben schnell scanbar",
          "Anfahrt und Termin werden vorab abgestimmt",
          "Telegram und Kontakt bleiben direkt verfuegbar",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Einsatzgebiet anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="coverage" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Regionale Anfrage"
          title="Erst den Einsatzort nennen, dann Verfuegbarkeit und Termin abstimmen."
          description="Wer nach einem Elektriker in einer Stadt oder Region sucht, soll sofort sehen, wie die Anfrage regional eingeordnet wird."
        />
        <FeatureGrid items={coverageCards} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Bundesländer"
          title="Aus diesen Regionen koennen Sie Ihre Anfrage direkt vorbereiten."
          description="Die genaue Einsatzplanung haengt von Verfuegbarkeit, Anfahrt und Auftragslage ab und wird im Kontakt abgestimmt."
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
          title="Wichtige Staedte und Suchorte bleiben direkt erfassbar."
          description="Wenn Sie ueber eine Stadt- oder Regionssuche kommen, koennen Sie den Einsatzort ohne Umwege direkt mitsenden."
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
        title="Region und Einsatz jetzt direkt anfragen"
        description="Teilen Sie Stadt, Region und Anliegen direkt mit. So laesst sich schneller klaeren, ob Rueckruf, Termin oder Notdienst der richtige naechste Schritt ist."
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
