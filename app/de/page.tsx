import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import Faq from "@/components/Faq";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  NoticeCard,
  PageSection,
  SectionHeading,
  StatsBand,
  StepGrid,
} from "@/components/MarketingSections";
import { homePageContent } from "@/data/page-content/de";
import { buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: "Elektriker & Elektro-Notdienst in Deutschland",
  description:
    "Mr Spark koordiniert Elektroinstallation, Stoerungsbehebung und 24h Elektro-Notdienst fuer Anfragen in Deutschland.",
  pathname: "/de",
  locale: "de",
  localizedSlug: "",
  includeLocaleAlternates: true,
  keywords: [
    "Elektriker Deutschland",
    "Elektro-Notdienst",
    "Elektroinstallation",
    "Stromausfall Hilfe",
  ],
});

export default function Page() {
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: `${siteConfig.siteUrl}/de`,
    inLanguage: "de-DE",
  };

  return (
    <main className="gradient">
      <StructuredData data={websiteStructuredData} />

      <HeroSection
        eyebrow={homePageContent.hero.eyebrow}
        title={homePageContent.hero.title}
        description={homePageContent.hero.description}
        points={homePageContent.hero.points}
        primaryCta={{ href: "/de/notdienst", label: "Notdienst anfragen" }}
        secondaryCta={{ href: "/de/kontakt", label: "Telegram oeffnen", variant: "ghost" }}
        supportingCtas={[
          { href: "/de/leistungen", label: "Leistungen ansehen" },
          { href: "/de/preise", label: "Preise verstehen" },
        ]}
        stats={homePageContent.hero.stats}
        aside={<ElectricalPhotoShowcase variant="home" />}
      />

      <StatsBand items={homePageContent.trustBadges} />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungen im Überblick"
          title="Von Notdienst bis Neuinstallation finden Sie schnell den passenden Elektroservice."
          description="Die Startseite priorisiert dringende Kontakte, ohne planbare Elektroarbeiten, Sicherungskästen oder Preisfragen zu verstecken."
        />
        <FeatureGrid items={homePageContent.services} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="So läuft die Anfrage ab"
          title="Sie sehen sofort, was im Notfall wichtig ist und wie Ihre Anfrage weitergeht."
          description="Der Ablauf bleibt auf Startseite, Kontakt und Notdienst gleich, damit Ihre Angaben vollständig und ohne Umwege ankommen."
        />
        <StepGrid steps={homePageContent.steps} />
      </PageSection>

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Bei Gefahr immer zuerst absichern"
          description="Bei Brandgeruch, Funkenbildung, Stromausfall oder einem kritischen Sicherungskasten möglichst den betroffenen Stromkreis abschalten und Personen schützen. Danach den Notdienst anfragen."
        />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Preise verständlich erklärt"
          title="Transparenz entsteht durch klare Kostenblöcke statt durch unrealistische Lockpreise."
          description="Auf der Startseite sehen Sie die Grundlogik. Die Detailseite erklärt Anfahrt, Diagnose, Arbeitszeit und Notdienstzuschläge genauer."
        />
        <FeatureGrid items={homePageContent.pricingCards} />
      </PageSection>

      <Faq items={homePageContent.faq} />

      <LeadCaptureSection
        title="Kontakt jetzt mit allen wichtigen Einsatzdaten starten"
        description="Senden Sie Stadt, Problem oder gewünschte Arbeit und die passende Dringlichkeit direkt mit. So kann die Rückmeldung schneller und genauer erfolgen."
        sourcePage="/de"
        checklist={[
          "Stadt, Service und Dringlichkeit sofort angeben",
          "Rueckruf oder Telegram erreichbar halten",
          "Bei Notfall das Fehlerbild kurz beschreiben",
        ]}
      />
    </main>
  );
}
