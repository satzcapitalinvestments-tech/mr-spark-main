import type { Metadata } from "next";
import { headers } from "next/headers";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";
import StructuredData from "@/components/StructuredData";
import { defaultLocale, getLocaleDirection, isLocale } from "@/lib/i18n";
import { buildLocalBusinessStructuredData } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brandName} — Elektriker & Elektro-Notdienst`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Elektriker, Elektroinstallation, Stoerung beheben und 24h Elektro-Notdienst fuer den deutschen Markt.",
  keywords: [
    "Elektriker",
    "Elektroinstallation",
    "Elektro-Notdienst",
    "Sicherungskasten",
    "Steckdosen",
    "Lichtinstallation",
  ],
  robots: !siteConfig.indexingEnabled
    ? {
        index: false,
        follow: false,
      }
    : undefined,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const requestHeaders = await headers();
  const localeHeader = requestHeaders.get("x-locale");
  const locale = localeHeader && isLocale(localeHeader) ? localeHeader : defaultLocale;

  return (
    <html
      lang={locale}
      dir={getLocaleDirection(locale)}
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <StructuredData data={buildLocalBusinessStructuredData()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
