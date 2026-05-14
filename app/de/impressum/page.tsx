import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { hasPublishedLegalDetails, siteConfig } from "@/lib/site-config";

const legalReady = hasPublishedLegalDetails();

export const metadata: Metadata = buildPageMetadata({
  title: "Impressum",
  description: "Anbieterkennzeichnung und rechtliche Pflichtangaben fuer Mr Spark.",
  pathname: "/de/impressum",
  noIndex: !legalReady,
});

export default function Page() {
  return (
    <main className="section py-14 space-y-8">
      <h1 className="text-4xl font-black">Impressum</h1>
      {!legalReady ? (
        <section className="card">
          <p className="font-semibold">
            Hinweis: Dieses Impressum bleibt bis zur finalen Unternehmens- und Rechtsfreigabe bewusst unvollstaendig
            und wird nicht indexiert.
          </p>
        </section>
      ) : null}
      <section className="card">
        <h2 className="text-2xl font-bold">Anbieter</h2>
        <p>{siteConfig.legal.companyName}</p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold">Vertreten durch</h2>
        <p>{siteConfig.legal.representative || "Ausstehend"}</p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold">Kontakt</h2>
        <p>{siteConfig.phoneDisplay}</p>
        <p>{siteConfig.contactEmail}</p>
        <p>
          {siteConfig.legal.streetAddress || "Adresse ausstehend"}
          {siteConfig.legal.streetAddress ? ", " : ""}
          {siteConfig.legal.postalCode || ""}
          {siteConfig.legal.postalCode ? " " : ""}
          {siteConfig.legal.city || ""}
        </p>
      </section>
      <section className="card">
        <h2 className="text-2xl font-bold">Register und Steuerdaten</h2>
        <p>Handelsregister: {siteConfig.legal.tradeRegister || "Ausstehend"}</p>
        <p>Registernummer: {siteConfig.legal.tradeRegisterNumber || "Ausstehend"}</p>
        <p>USt-IdNr.: {siteConfig.legal.vatId || "Ausstehend"}</p>
      </section>
    </main>
  );
}
