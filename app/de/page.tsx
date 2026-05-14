import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
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
      />

      <StatsBand items={homePageContent.trustBadges} />

      <PageSection>
        <SectionHeading
          eyebrow="Leistungsarchitektur"
          title="Die wichtigsten Services bleiben auffindbar und führen in denselben Anfragefluss."
          description="Die Startseite priorisiert dringende Kontakte, ohne planbare Elektroarbeiten oder Transparenzthemen im Layout zu verstecken."
        />
        <FeatureGrid items={homePageContent.services} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Leadflow"
          title="Ein konsistenter Seitenaufbau reduziert Reibung zwischen Klick und operativer Bearbeitung."
          description="Die UI führt bewusst auf dieselbe servergestützte Intake-Strecke, damit CTA-Platzierung, Tracking und Lead-Inhalt nicht pro Route auseinanderlaufen."
        />
        <StepGrid steps={homePageContent.steps} />
      </PageSection>

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Akute Elektro-Probleme sichtbar priorisieren"
          description="Brandgeruch, Funkenbildung, Stromausfall oder ein kritischer Sicherungskasten müssen in der Navigation, im Hero und im Kontaktbereich klar als Notfall erkennbar bleiben."
        />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Preisführung"
          title="Transparenz entsteht durch saubere Preislogik statt durch aggressive Pauschalversprechen."
          description="Die Startseite setzt nur die Preisstruktur, während die Detailseite die einzelnen Kostenblöcke vertieft."
        />
        <FeatureGrid items={homePageContent.pricingCards} />
      </PageSection>

      <Faq items={homePageContent.faq} />

      <LeadCaptureSection
        title="Kontakt direkt mit verwertbaren Einsatzdaten starten"
        description="Der gleiche Flow bleibt auf Startseite, Notdienst und Kontakt erhalten. Das reduziert technische Reibung und vereinfacht die spätere Backend-Erweiterung."
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
