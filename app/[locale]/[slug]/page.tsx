import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLocalizedRouteContent,
  getLocalizedSlugTitle,
  localizedPageCopy,
  localizedSlugLabels,
} from "@/data/i18n/localized-pages";
import { germanCities } from "@/data/germany/cities";
import { germanStates } from "@/data/germany/states";
import ElectricalPhotoShowcase from "@/components/ElectricalPhotoShowcase";
import {
  FeatureGrid,
  HeroSection,
  LeadCaptureSection,
  NoticeCard,
  PageSection,
  SectionHeading,
  StatsBand,
} from "@/components/MarketingSections";
import {
  getLocaleDirection,
  isLocale,
  isLocalizedRouteSlug,
  localeCodes,
  localizedRouteSlugs,
} from "@/lib/i18n";
import { buildLocalizedPageMetadata } from "@/lib/seo";

type SlugParams = Promise<{ locale: string; slug: string }>;

const showcaseVariantBySlug: Record<
  (typeof localizedRouteSlugs)[number],
  "services" | "emergency" | "coverage" | "pricing" | "contact"
> = {
  leistungen: "services",
  elektriker: "services",
  elektro: "services",
  notdienst: "emergency",
  einsatzgebiet: "coverage",
  preise: "pricing",
  kontakt: "contact",
  "ueber-uns": "services",
  impressum: "contact",
  datenschutz: "contact",
};

const emergencyWarningByLocale = {
  en: {
    title: "Safety warning",
    description:
      "If you notice burning smell, sparks, or immediate danger, switch off the affected circuit first and contact emergency services where required.",
  },
  tr: {
    title: "Guvenlik uyari",
    description:
      "Yanık kokusu, kıvılcım veya acil tehlike varsa önce ilgili devreyi kapatın ve gerekiyorsa acil yardım çağırın.",
  },
  ar: {
    title: "تحذير للسلامة",
    description:
      "عند وجود رائحة احتراق أو شرر أو خطر مباشر، أوقف الدائرة المتأثرة أولاً وتواصل مع خدمات الطوارئ عند الحاجة.",
  },
  ru: {
    title: "Предупреждение по безопасности",
    description:
      "При запахе гари, искрах или явной опасности сначала отключите затронутую линию и при необходимости обратитесь в экстренные службы.",
  },
  pl: {
    title: "Ostrzezenie bezpieczenstwa",
    description:
      "W razie zapachu spalenizny, iskier lub bezpośredniego zagrożenia najpierw wyłącz dany obwód i w razie potrzeby skontaktuj się ze służbami ratunkowymi.",
  },
  uk: {
    title: "Попередження з безпеки",
    description:
      "Якщо є запах горілого, іскри або безпосередня небезпека, спочатку вимкніть уражене коло та за потреби зверніться до екстрених служб.",
  },
  ro: {
    title: "Avertisment de siguranta",
    description:
      "Daca simti miros de ars, vezi scantei sau exista pericol imediat, opreste mai intai circuitul afectat si contacteaza serviciile de urgenta daca este necesar.",
  },
} as const;

export function generateStaticParams() {
  return localeCodes
    .filter((locale) => locale !== "de")
    .flatMap((locale) => localizedRouteSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: SlugParams;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale === "de" || !isLocalizedRouteSlug(slug)) {
    return {};
  }

  const title = getLocalizedSlugTitle(locale, slug);
  const content = getLocalizedRouteContent(locale, slug);

  return buildLocalizedPageMetadata({
    locale,
    slug,
    title: `${title} | Mr Spark`,
    description: content.description,
    keywords: [title, ...localizedPageCopy[locale].home.services],
  });
}

export default async function LocaleSlugPage({ params }: { params: SlugParams }) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "de" || !isLocalizedRouteSlug(slug)) return notFound();
  const content = getLocalizedRouteContent(locale, slug);
  const trustItems = [...content.points, ...content.checklist].slice(0, 4);
  const routeLabels = localizedSlugLabels[locale];

  return (
    <main className="gradient" dir={getLocaleDirection(locale)}>
      <HeroSection
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        points={content.points}
        primaryCta={{ href: "#lead-form", label: content.primaryCtaLabel }}
        secondaryCta={{ href: `/${locale}/notdienst`, label: content.secondaryCtaLabel, variant: "secondary" }}
        supportingCtas={[
          { href: `/${locale}/preise`, label: routeLabels.preise, variant: "ghost" },
          { href: `/${locale}/einsatzgebiet`, label: routeLabels.einsatzgebiet, variant: "ghost" },
        ]}
        aside={<ElectricalPhotoShowcase variant={showcaseVariantBySlug[slug]} />}
      />

      <StatsBand items={trustItems} />

      <PageSection>
        <SectionHeading
          eyebrow={content.sectionEyebrow}
          title={content.sectionTitle}
          description={content.sectionDescription}
        />
        <FeatureGrid items={content.cards} columns={slug === "einsatzgebiet" ? 2 : 3} />
      </PageSection>

      {slug === "notdienst" ? (
        <PageSection>
          <NoticeCard
            tone="warning"
            title={emergencyWarningByLocale[locale].title}
            description={emergencyWarningByLocale[locale].description}
          />
        </PageSection>
      ) : null}

      {slug === "einsatzgebiet" ? (
        <PageSection surface>
          <SectionHeading
            eyebrow={content.serviceAreaStatesLabel}
            title={content.title}
            description={content.serviceAreaIntro}
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {germanStates.map((state) => (
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-slate-900" key={state}>
                {state}
              </span>
            ))}
          </div>
          <div className="mt-10">
            <p className="section-eyebrow">{content.serviceAreaCitiesLabel}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {germanCities.slice(0, 72).map((city) => (
                <div className="feature-card py-4" key={city}>
                  <p className="text-base font-medium text-[color:var(--ink)]">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </PageSection>
      ) : null}

      <LeadCaptureSection
        id="lead-form"
        title={content.leadTitle}
        description={content.leadDescription}
        sourcePage={`/${locale}/${slug}`}
        checklist={content.checklist}
        emergencyNote={slug === "notdienst" ? emergencyWarningByLocale[locale].description : undefined}
      />
    </main>
  );
}
