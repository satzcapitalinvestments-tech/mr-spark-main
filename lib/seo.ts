import type { Metadata } from "next";
import { buildSiteUrl, siteConfig } from "@/lib/site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  keywords = [],
  noIndex = false,
}: PageMetadataInput): Metadata {
  const canonical = buildSiteUrl(pathname);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
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

export function buildLocalBusinessStructuredData() {
  const sameAs = [siteConfig.siteUrl];

  if (siteConfig.telegramUrl !== "#") {
    sameAs.push(siteConfig.telegramUrl);
  }

  return {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    areaServed: siteConfig.serviceAreas,
    email: siteConfig.contactEmail,
    telephone: siteConfig.phoneDisplay,
    openingHours: siteConfig.emergencyHours,
    sameAs,
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
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.contactEmail,
      hoursAvailable: siteConfig.emergencyHours,
      url: siteConfig.telegramUrl,
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
