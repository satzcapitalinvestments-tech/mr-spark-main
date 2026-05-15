import type { Metadata } from "next";
import type { LocaleCode } from "@/data/i18n/languages";
import {
  buildLocaleAlternates,
  buildLocalizedPath,
  defaultLocale,
  getOpenGraphLocale,
} from "@/lib/i18n";
import { buildSiteUrl, siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  noIndex?: boolean;
  locale?: LocaleCode;
  localizedSlug?: string;
  includeLocaleAlternates?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  keywords = [],
  noIndex = false,
  locale = defaultLocale,
  localizedSlug,
  includeLocaleAlternates = false,
}: PageMetadataInput): Metadata {
  const canonical = buildSiteUrl(pathname);
  const languageAlternates = includeLocaleAlternates
    ? buildLocaleAlternates(localizedSlug)
    : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      siteName: siteConfig.brandName,
      title,
      description,
      url: canonical,
    },
    robots: noIndex || !siteConfig.indexingEnabled
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export function buildLocalizedPageMetadata({
  locale,
  title,
  description,
  slug,
  keywords = [],
}: {
  locale: LocaleCode;
  title: string;
  description: string;
  slug?: string;
  keywords?: string[];
}) {
  const pathname = buildLocalizedPath(locale, slug);

  return buildPageMetadata({
    title,
    description,
    pathname,
    keywords,
    locale,
    localizedSlug: slug,
    includeLocaleAlternates: true,
  });
}

export function buildLocalBusinessStructuredData() {
  const sameAs = [siteConfig.siteUrl];
  const hasVerifiedPublicContactData = !siteConfig.usesPlaceholderContactData;

  if (hasVerifiedPublicContactData && siteConfig.hasDirectTelegramContact) {
    sameAs.push(siteConfig.telegramUrl);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    areaServed: siteConfig.serviceAreas,
    sameAs,
    ...(hasVerifiedPublicContactData
      ? {
          email: siteConfig.contactEmail,
          telephone: siteConfig.phoneDisplay,
          openingHours: siteConfig.emergencyHours,
        }
      : {}),
    ...(siteConfig.legal.publishReady
      ? {
          legalName: siteConfig.legal.companyName,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.legal.streetAddress,
            postalCode: siteConfig.legal.postalCode,
            addressLocality: siteConfig.legal.city,
            addressCountry: siteConfig.legal.country,
          },
        }
      : {}),
  };
}

export function buildContactPageStructuredData() {
  const hasVerifiedPublicContactData = !siteConfig.usesPlaceholderContactData;

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${siteConfig.brandName} Kontakt`,
    url: buildSiteUrl("/de/kontakt"),
    mainEntity: {
      "@type": "ContactPoint",
      contactType: "customer support",
      areaServed: "DE",
      availableLanguage: ["de", "en", "tr", "ar", "ru", "pl", "uk", "ro"],
      ...(hasVerifiedPublicContactData
        ? {
            telephone: siteConfig.phoneDisplay,
            email: siteConfig.contactEmail,
            hoursAvailable: siteConfig.emergencyHours,
            ...(siteConfig.hasDirectTelegramContact ? { url: siteConfig.telegramUrl } : {}),
          }
        : {}),
    },
  };
}

export function buildEmergencyServiceStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Elektro-Notdienst",
    provider: {
      "@type": "Electrician",
      name: siteConfig.brandName,
      url: siteConfig.siteUrl,
    },
    areaServed: siteConfig.serviceAreas,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: buildSiteUrl("/de/notdienst"),
      availableLanguage: ["de"],
    },
  };
}
