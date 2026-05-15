import type { Metadata } from "next";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import { servicesPageContent } from "@/data/page-content/de";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Leistungen im Ueberblick",
  description:
    "Elektroinstallation, Fehlersuche, Sicherungskasten, Steckdosen, Licht und Elektro-Notdienst uebersichtlich auf einer Seite.",
  pathname: "/de/leistungen",
  locale: "de",
  localizedSlug: "leistungen",
  includeLocaleAlternates: true,
  keywords: ["Elektriker Leistungen", "Elektroinstallation", "Fehlersuche", "Notdienst"],
});

export default function Page() {
  return (
    <main className="gradient">
      <HeroSection
        eyebrow="Leistungen im Ueberblick"
        title="Elektrohilfe fuer Notdienst, Reparatur, Installation und Modernisierung."
        description="Von der schnellen Fehlersuche bis zur planbaren Elektroinstallation sehen Sie auf einen Blick, welche Leistungen Mr Spark fuer Wohn- und Gewerbeobjekte anbietet."
        points={[
          "Kernleistungen bleiben klar und scanbar",
          "Notdienst und planbare Arbeiten stehen gleichwertig im Blick",
          "Telegram-Kontakt ist direkt von der Leistungsseite aus erreichbar",
        ]}
        primaryCta={{ href: "/de/kontakt#lead-form", label: "Leistung anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungskategorien"
          title="Elektroarbeiten, die Nutzer schnell einordnen koennen."
          description="So wirkt die Leistungsseite wie ein starkes Serviceangebot und nicht wie eine technische Projektbeschreibung."
        />
        <FeatureGrid items={servicesPageContent.categories} />
      </PageSection>

      <LeadCaptureSection
        title="Passende Elektrohilfe direkt anfragen"
        description="Nennen Sie kurz Ort, gewuenschte Leistung und Dringlichkeit. So kann Mr Spark die passende Rueckmeldung schnell vorbereiten."
        sourcePage="/de/leistungen"
        checklist={["Service konkret benennen", "Stadt angeben", "Dringlichkeit markieren"]}
      />
    </main>
  );
}
