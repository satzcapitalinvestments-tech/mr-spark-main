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
  title: "Leistungen im Überblick",
  description:
    "Elektroinstallation, Fehlersuche, Sicherungskasten, Steckdosen, Licht und Elektro-Notdienst auf einer klaren Leistungsseite fuer Kunden.",
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
        eyebrow="Leistungsübersicht"
        title="Leistungen fuer Notdienst, Reparatur und Elektroinstallation auf einen Blick."
        description="Von Fehlersuche bis Modernisierung zeigt Mr Spark die wichtigsten Elektroarbeiten in einer klaren, kundenfreundlichen Struktur."
        points={[
          "Notdienst, Diagnose und planbare Leistungen bleiben gleich gut sichtbar",
          "Steckdosen, Licht und Sicherungskasten werden konkret benannt",
          "Telegram und Kontakt bleiben direkt anschlussfaehig",
        ]}
        primaryCta={{ href: "/de/kontakt", label: "Leistung anfragen" }}
        secondaryCta={{ href: "/de/notdienst", label: "24h Notdienst", variant: "ghost" }}
        aside={<ElectricalPhotoShowcase variant="services" />}
      />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungskategorien"
          title="Elektroarbeiten, die Sie schnell einordnen koennen."
          description="Die Kategorien sind bewusst so formuliert, dass Notfaelle, Reparaturen und geplante Arbeiten sofort klar werden."
        />
        <FeatureGrid items={servicesPageContent.categories} />
      </PageSection>

      <LeadCaptureSection
        title="Leistung direkt anfragen"
        description="Sie muessen nicht zur Startseite zurueck. Beschreiben Sie Ihre Elektroarbeit direkt hier und starten Sie die Anfrage ueber Telegram."
        sourcePage="/de/leistungen"
        checklist={[
          "Service konkret benennen",
          "Stadt angeben",
          "Dringlichkeit markieren",
        ]}
      />
    </main>
  );
}
