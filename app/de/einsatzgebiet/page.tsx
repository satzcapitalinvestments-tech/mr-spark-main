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
import VisualDepthSection from "@/components/VisualDepthSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Einsatzgebiet: Elektriker & Elektro-Notdienst in Deutschland",
  description:
    "Mr Spark nimmt Elektroanfragen aus Deutschland entgegen und bestaetigt Verfuegbarkeit, Anfahrt und Termin vorab.",
  pathname: "/de/einsatzgebiet",
  locale: "de",
  localizedSlug: "einsatzgebiet",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Einsatzgebiet", "Elektroservice Deutschland", "Notdienst Regionen"],
});

const coverageCards = [
  {
    badge: "Region",
    title: "Deutschlandweite Anfrageannahme",
    description:
      "Wir nehmen Anfragen aus diesen Regionen entgegen und koordinieren passende Elektro-Hilfe je nach Verfuegbarkeit.",
  },
  {
    badge: "Planung",
    title: "Verfuegbarkeit vorab bestaetigt",
    description:
      "Verfuegbarkeit, Anfahrt und Termin werden vorab bestaetigt, bevor ein Einsatz fest eingeplant wird.",
  },
  {
    badge: "Privat & Gewerbe",
    title: "Wohnungen, Haeuser und Gewerbe",
    description:
      "Vom Elektro-Notdienst bis zur planbaren Installation bleibt der Kontaktweg fuer unterschiedliche Einsatzorte klar.",
  },
];

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Einsatzgebiet und Verfuegbarkeit"
        title="Einsatzgebiet: Elektriker & Elektro-Notdienst in Deutschland"
        description="Wir nehmen Anfragen aus diesen Regionen entgegen und koordinieren passende Elektro-Hilfe je nach Verfuegbarkeit. Verfuegbarkeit, Anfahrt und Termin werden vorab bestaetigt."
        points={[
          "Bundeslaender und Staedte bleiben schnell scanbar",
          "Wohnung, Haus, Buero und Gewerbe koennen direkt angefragt werden",
          "Telegram-Kontakt startet ohne Umwege zur passenden Rueckmeldung",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Verfuegbarkeit anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "Notdienst starten", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="coverage" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Regionale Orientierung"
          title="So wird Ihr Einsatzort fuer Elektrohilfe klar eingeordnet."
          description="Das Einsatzgebiet bleibt klar erklaert, ohne falsche Standortversprechen oder ueberladene Texte."
        />
        <FeatureGrid items={coverageCards} />
      </PageSection>

      <VisualDepthSection
        eyebrow="Region und Einsatz"
        title="Einsatzgebiet braucht neben Kartenlogik auch sichtbare Elektroarbeit und Markenpraesenz."
        description="So wirkt die Seite wie ein echter Elektroservice mit Reichweite und klarer Kontaktmoeglichkeit."
        variant="coverage"
      />

      <PageSection surface>
        <SectionHeading
          eyebrow="Bundeslaender"
          title="Aus diesen Regionen koennen Sie Ihre Anfrage direkt vorbereiten."
          description="Die genaue Einsatzplanung haengt von Verfuegbarkeit, Anfahrt und Auftragslage ab und wird vorab abgestimmt."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {germanStates.map((state) => (
            <span
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-[color:var(--ink)]"
              key={state}
            >
              {state}
            </span>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Staedte und Orte"
          title="Wichtige Staedte und Suchorte bleiben direkt erfassbar."
          description="Wenn Sie ueber eine Stadt- oder Regionssuche kommen, koennen Sie den Einsatzort direkt mitsenden."
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
        id="lead-form"
        title="Verfuegbarkeit fuer Ihren Ort anfragen"
        description="Teilen Sie Stadt, Region und Anliegen direkt mit. So laesst sich schneller klaeren, ob Rueckruf, Termin oder Notdienst der richtige naechste Schritt ist."
        sourcePage="/de/einsatzgebiet"
        checklist={[
          "Ort oder Stadt direkt nennen",
          "Service oder Stoerung beschreiben",
          "Dringlichkeit und Kontaktweg angeben",
        ]}
      />
    </main>
  );
}
