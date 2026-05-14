import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  PageSection,
  SectionHeading,
} from "@/components/MarketingSections";

type T = {
  title: string;
  lead: string;
  eyebrow: string;
  services: string[];
  points: string[];
  servicesEyebrow: string;
  servicesTitle: string;
  servicesDescription: string;
  serviceCardDescription: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  leadTitle: string;
  leadDescription: string;
  checklist: string[];
};

export function LocalizedPage({
  t,
  locale,
  dir,
}: {
  t: T;
  locale: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <main dir={dir}>
      <HeroSection
        eyebrow={`${t.eyebrow} · ${locale.toUpperCase()}`}
        title={t.title}
        description={t.lead}
        points={t.points}
        primaryCta={{ href: `/${locale}/kontakt`, label: t.primaryCtaLabel }}
        secondaryCta={{ href: `/${locale}/notdienst`, label: t.secondaryCtaLabel, variant: "ghost" }}
      />

      <PageSection>
        <SectionHeading
          eyebrow={t.servicesEyebrow}
          title={t.servicesTitle}
          description={t.servicesDescription}
        />
        <FeatureGrid
          items={t.services.map((service) => ({
            title: service,
            description: t.serviceCardDescription,
          }))}
        />
      </PageSection>

      <LeadCaptureSection
        title={t.leadTitle}
        description={t.leadDescription}
        sourcePage={`/${locale}`}
        checklist={t.checklist}
      />
    </main>
  );
}
