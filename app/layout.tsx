import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";
import LocaleRuntime from "@/components/LocaleRuntime";
import StructuredData from "@/components/StructuredData";
import { defaultLocale, getLocaleDirection, getLocaleLanguageTag } from "@/lib/i18n";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={getLocaleLanguageTag(defaultLocale)}
      dir={getLocaleDirection(defaultLocale)}
      className={`${headingFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <LocaleRuntime />
        <StructuredData data={buildLocalBusinessStructuredData()} />
        <Header />
        <div id="page-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
