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

const urgentActionCards = [
  {
    badge: "Sofort Hilfe",
    title: "24h Notdienst anfragen",
    description:
      "Bei Stromausfall, Brandgeruch, Kurzschluss oder gefaehrlichen Steckdosen sehen Sie sofort den richtigen Kontaktweg.",
  },
  {
    badge: "Direkter Kontakt",
    title: "Telegram starten",
    description:
      "Beschreiben Sie Ihr Elektroproblem kurz und starten Sie die Abstimmung mit vorbereiteten Angaben direkt ueber Telegram.",
  },
  {
    badge: "Planbare Arbeiten",
    title: "Preise und Leistungen prüfen",
    description:
      "Auch Lichtinstallation, Sicherungskasten, Steckdosen oder Modernisierung bleiben klar strukturiert sichtbar.",
  },
];

const coverageTeaserCards = [
  {
    badge: "Deutschlandweit",
    title: "Einsatzgebiet klar erklaert",
    description:
      "Mr Spark nimmt Anfragen aus Deutschland entgegen und bestaetigt Verfuegbarkeit, Anfahrt und Termin immer vorab.",
  },
  {
    badge: "Wohnungen & Gewerbe",
    title: "Fuer private und gewerbliche Elektroarbeiten",
    description:
      "Vom kleinen Defekt bis zur planbaren Installation bleibt der naechste Schritt fuer Wohn- und Gewerbeobjekte sauber erkennbar.",
  },
  {
    badge: "Transparent",
    title: "Rueckmeldung ohne Ratespiel",
    description:
      "Stadt, Dringlichkeit und Problem werden frueh genannt, damit Kosten und weitere Schritte besser abgestimmt werden koennen.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "Elektriker & Elektro-Notdienst in Deutschland",
  description:
    "Mr Spark begleitet Elektroinstallation, Fehlersuche und 24h Elektro-Notdienst fuer Wohnungen, Haeuser und Gewerbeobjekte in Deutschland.",
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
        secondaryCta={{ href: siteConfig.telegramUrl, label: "Telegram starten", variant: "ghost" }}
        supportingCtas={[
          { href: "/de/preise", label: "Preise ansehen" },
          { href: "/de/einsatzgebiet", label: "Einsatzgebiet pruefen" },
        ]}
        stats={homePageContent.hero.stats}
        aside={<ElectricalPhotoShowcase variant="home" />}
      />

      <StatsBand items={homePageContent.trustBadges} />

      <PageSection>
        <SectionHeading
          eyebrow="Schnell den richtigen Weg finden"
          title="Notdienst, Telegram und planbare Elektroarbeiten liegen direkt im ersten Sichtbereich bereit."
          description="Mr Spark fuehrt akute Stoerungen und geplante Leistungen sichtbar zusammen, ohne dass Sie erst lange suchen muessen."
        />
        <FeatureGrid items={urgentActionCards} columns={3} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Leistungen im Überblick"
          title="Von Notdienst bis Neuinstallation finden Sie schnell den passenden Elektroservice."
          description="Die Startseite zeigt akute Hilfe, geplante Elektroarbeiten und wichtige Preisfragen in einer klaren, kundenfreundlichen Reihenfolge."
        />
        <FeatureGrid items={homePageContent.services} />
      </PageSection>

      <PageSection>
        <NoticeCard
          tone="warning"
          title="Bei Gefahr immer zuerst absichern"
          description="Bei Brandgeruch, Funkenbildung oder einem kritischen Sicherungskasten moeglichst den betroffenen Stromkreis abschalten, Personen schuetzen und anschliessend den Notdienst anfragen."
        />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="So läuft die Anfrage ab"
          title="Von der ersten Beschreibung bis zur Rueckmeldung bleibt der Ablauf klar und gut erklaert."
          description="Sie sehen sofort, welche Angaben fuer Notfall, Rueckruf oder planbare Arbeit wichtig sind und wie der Kontakt weitergeht."
        />
        <StepGrid steps={homePageContent.steps} />
      </PageSection>

      <PageSection>
        <SectionHeading
          eyebrow="Preise verständlich erklärt"
          title="Transparenz entsteht durch klare Kostenbloecke statt durch unrealistische Lockpreise."
          description="Auf der Startseite sehen Sie die Grundlogik. Die Detailseite erklaert Anfahrt, Diagnose, Arbeitszeit und Notdienstzuschlaege genauer."
        />
        <FeatureGrid items={homePageContent.pricingCards} />
      </PageSection>

      <PageSection surface>
        <SectionHeading
          eyebrow="Einsatzgebiet"
          title="Anfragen aus Deutschland werden sauber regional eingeordnet."
          description="Ob Grossstadt, Umland oder Gewerbestandort: Verfuegbarkeit, Anfahrt und Termin werden vorab bestaetigt, statt vorschnell versprochen zu werden."
        />
        <FeatureGrid items={coverageTeaserCards} />
      </PageSection>

      <Faq items={homePageContent.faq} />

      <LeadCaptureSection
        title="Anfrage direkt an Mr Spark senden"
        description="Beschreiben Sie kurz Ihr Elektroproblem. Wir bereiten eine schnelle Rueckmeldung vor und leiten Ihre Anfrage ueber Telegram weiter."
        sourcePage="/de"
        checklist={[
          "Stadt, Service und Dringlichkeit direkt angeben",
          "Telefon, E-Mail oder Telegram erreichbar halten",
          "Bei Notfall das Fehlerbild moeglichst konkret beschreiben",
        ]}
      />
    </main>
  );
}
