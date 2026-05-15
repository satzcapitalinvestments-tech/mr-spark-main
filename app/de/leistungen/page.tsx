import type { Metadata } from "next";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";
import VisualDepthSection from "@/components/VisualDepthSection";
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
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "secondary" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungskategorien"
          title="Elektroarbeiten, die Nutzer schnell einordnen koennen."
          description="So bleibt das Leistungsangebot klar, vertrauenswuerdig und leicht vergleichbar."
        />
        <FeatureGrid items={servicesPageContent.categories} />
      </PageSection>

      <VisualDepthSection
        eyebrow="Bildsprache"
        title="Leistungen brauchen sichtbare Elektro-Motive statt nur ruhige Textflaechen."
        description="Messung, Verteilung und Montage bleiben ueber die ganze Seite sichtbar und staerken den Serviceeindruck."
        variant="services"
      />

      <LeadCaptureSection
        title="Passende Elektrohilfe direkt anfragen"
        description="Nennen Sie kurz Ort, gewuenschte Leistung und Dringlichkeit. So kann Mr Spark die passende Rueckmeldung schnell vorbereiten."
        sourcePage="/de/leistungen"
        checklist={["Service konkret benennen", "Stadt angeben", "Dringlichkeit markieren"]}
      />
    </main>
  );
}
