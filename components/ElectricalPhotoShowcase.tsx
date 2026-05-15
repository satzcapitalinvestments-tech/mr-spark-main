"use client";

import Image from "next/image";
import BrandLogo from "@/components/BrandLogo";
import MascotHero from "@/components/MascotHero";

type ShowcaseVariant = "home" | "emergency" | "coverage" | "services" | "pricing" | "contact";

type ShowcaseImage = {
  src: string;
  alt: string;
};

const panelImage: ShowcaseImage = {
  src: "/imagery/electrician-panel-drill.jpg",
  alt: "Elektriker arbeitet mit Werkzeug an einem geoeffneten Schaltschrank.",
};

const meterImage: ShowcaseImage = {
  src: "/imagery/electrician-multimeter.jpg",
  alt: "Elektriker misst eine Elektroverteilung mit einem Multimeter.",
};

const inspectionImage: ShowcaseImage = {
  src: "/imagery/electrician-inspection.jpg",
  alt: "Techniker prueft eine elektrische Anlage vor Ort.",
};

const variantContent: Record<
  ShowcaseVariant,
  {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
    primaryImage: ShowcaseImage;
    secondaryImage: ShowcaseImage;
    tertiaryImage: ShowcaseImage;
    showMascot?: boolean;
  }
> = {
  home: {
    eyebrow: "Echte Elektroarbeit",
    title: "Notdienst, Fehlersuche und Installationen bleiben sofort sichtbar.",
    description:
      "Die Startseite kombiniert echte Schaltschrank-, Diagnose- und Vor-Ort-Situationen mit einer klaren Kontaktmoeglichkeit.",
    highlights: ["24h Notdienst", "Wohnung & Gewerbe", "Transparente Rueckmeldung"],
    primaryImage: panelImage,
    secondaryImage: meterImage,
    tertiaryImage: inspectionImage,
    showMascot: true,
  },
  emergency: {
    eyebrow: "Notdienst vor Ort",
    title: "Stromausfall, Kurzschluss und FI-Probleme muessen sofort erkennbar sein.",
    description:
      "Die Notdienstseite zeigt echte Stoerungs- und Diagnosesituationen statt abstrakter Werbegrafik.",
    highlights: ["Stromausfall", "Kurzschluss", "Sicherungskasten"],
    primaryImage: meterImage,
    secondaryImage: inspectionImage,
    tertiaryImage: panelImage,
  },
  coverage: {
    eyebrow: "Einsatz in Deutschland",
    title: "Verfuegbarkeit, Anfahrt und Einsatzort werden sauber vorbereitet.",
    description:
      "Die Einsatzgebietsseite verknuepft regionale Orientierung mit sichtbarer Elektroarbeit im Wohn- und Gewerbeumfeld.",
    highlights: ["Bundeslaender", "Staedte", "Telegram Anfrage"],
    primaryImage: inspectionImage,
    secondaryImage: panelImage,
    tertiaryImage: meterImage,
  },
  services: {
    eyebrow: "Leistungen im Fokus",
    title: "Von Steckdose bis Unterverteilung bleibt jede Leistung klar eingeordnet.",
    description:
      "Die Leistungsseiten nutzen echte Motive aus Diagnose, Installation und Sicherungstechnik fuer mehr Vertrauen.",
    highlights: ["Installation", "Fehlersuche", "Modernisierung"],
    primaryImage: panelImage,
    secondaryImage: inspectionImage,
    tertiaryImage: meterImage,
  },
  pricing: {
    eyebrow: "Kosten mit Kontext",
    title: "Anfahrt, Diagnose und Material werden als reale Arbeitsleistung verankert.",
    description:
      "Auch die Preisroute bleibt visuell geerdet und zeigt, worum es bei typischen Elektroeinsaetzen geht.",
    highlights: ["Anfahrt", "Diagnose", "Material"],
    primaryImage: inspectionImage,
    secondaryImage: meterImage,
    tertiaryImage: panelImage,
  },
  contact: {
    eyebrow: "Direkter Kontakt",
    title: "Die Anfrage bleibt persoenlich, schnell auffindbar und klar auf Elektrohilfe ausgerichtet.",
    description:
      "Kontaktseite und Telegram-Formular werden von echten Arbeitsmotiven und dem Maskottchen als Markenakzent begleitet.",
    highlights: ["Telegram zuerst", "Schnelle Einordnung", "Klare Naechste Schritte"],
    primaryImage: meterImage,
    secondaryImage: panelImage,
    tertiaryImage: inspectionImage,
    showMascot: true,
  },
};

function PhotoTile({ image, priority = false }: { image: ShowcaseImage; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--dark-surface-line)] bg-[color:var(--dark-surface-card)] shadow-[0_18px_48px_rgba(6,18,31,0.22)]">
      <div className="relative aspect-[4/5]">
        <Image src={image.src} alt={image.alt} fill priority={priority} className="object-cover" />
      </div>
    </div>
  );
}

export default function ElectricalPhotoShowcase({ variant }: { variant: ShowcaseVariant }) {
  const content = variantContent[variant];

  return (
    <div className="rounded-[2.4rem] border border-[color:var(--dark-surface-line)] bg-[color:var(--dark-surface-card)] p-4 shadow-[0_28px_80px_rgba(6,18,31,0.24)] backdrop-blur">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <PhotoTile image={content.primaryImage} priority={variant === "home"} />

        <div className="grid gap-4">
          <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-[color:var(--dark-surface-line)] bg-slate-950/82 p-5 text-[color:var(--dark-surface-text)] shadow-[0_18px_50px_rgba(6,18,31,0.22)]">
            <BrandLogo theme="light" size="header" className="h-10 w-auto" />
            <div className="mt-5 flex flex-wrap gap-2">
              {["24h", "Telegram", "DE"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--dark-surface-line)] bg-white/8 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-[color:var(--dark-surface-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PhotoTile image={content.secondaryImage} />
            {content.showMascot ? (
              <div className="flex min-h-full items-center justify-center rounded-[1.5rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.9))] p-4 shadow-[0_18px_48px_rgba(6,18,31,0.16)]">
                <MascotHero compact />
              </div>
            ) : (
              <PhotoTile image={content.tertiaryImage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
