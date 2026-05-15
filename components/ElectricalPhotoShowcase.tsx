"use client";

import Image from "next/image";
import MascotHero from "@/components/MascotHero";

type ShowcaseVariant = "home" | "emergency" | "coverage";

const variantContent: Record<
  ShowcaseVariant,
  {
    eyebrow: string;
    title: string;
    description: string;
    primaryImage: {
      src: string;
      alt: string;
    };
    secondaryImage: {
      src: string;
      alt: string;
    };
  }
> = {
  home: {
    eyebrow: "Echte Elektroarbeit",
    title: "Notdienst, Fehlersuche und Installationen mit sichtbarer Handwerksnähe.",
    description:
      "Keine Symbolbilder ohne Bezug: Die Startseite zeigt echte Arbeit an Verteilungen, Messungen und Reparaturen.",
    primaryImage: {
      src: "/imagery/electrician-panel-drill.jpg",
      alt: "Elektriker arbeitet mit Werkzeug an einem geöffneten Schaltschrank.",
    },
    secondaryImage: {
      src: "/imagery/electrician-multimeter.jpg",
      alt: "Elektriker misst eine Elektroverteilung mit einem Multimeter.",
    },
  },
  emergency: {
    eyebrow: "Notdienst vor Ort",
    title: "Schnelle Einordnung beginnt mit klar sichtbaren Gefahrensituationen.",
    description:
      "Die Notdienstseite zeigt echte Verteilungen und Diagnosesituationen statt abstrakter Icons oder generischer Werbebilder.",
    primaryImage: {
      src: "/imagery/electrician-multimeter.jpg",
      alt: "Elektriker misst eine Elektroverteilung bei der Fehlersuche.",
    },
    secondaryImage: {
      src: "/imagery/electrician-inspection.jpg",
      alt: "Techniker prüft eine elektrische Anlage vor Ort.",
    },
  },
  coverage: {
    eyebrow: "Einsatz in der Region",
    title: "Für Anfragen aus Stadt, Umland und Gewerbe zählt eine saubere Vorbereitung.",
    description:
      "Die Einsatzgebietsseite verbindet regionale Suche mit echten Eindrücken aus Prüfung, Diagnose und Elektroservice.",
    primaryImage: {
      src: "/imagery/electrician-inspection.jpg",
      alt: "Techniker prüft eine elektrische Anlage mit Tablet im Einsatzgebiet.",
    },
    secondaryImage: {
      src: "/imagery/electrician-panel-drill.jpg",
      alt: "Elektriker arbeitet an einer elektrischen Anlage im Innenbereich.",
    },
  },
};

export default function ElectricalPhotoShowcase({ variant }: { variant: ShowcaseVariant }) {
  const content = variantContent[variant];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-white/14 bg-white/10 shadow-[0_30px_80px_rgba(6,18,31,0.28)] backdrop-blur">
        <div className="relative aspect-[4/5]">
          <Image
            src={content.primaryImage.src}
            alt={content.primaryImage.alt}
            fill
            priority={variant === "home"}
            className="object-cover"
            sizes="(min-width: 768px) 28rem, 100vw"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,1.15fr)_minmax(11rem,0.85fr)]">
        <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 text-white shadow-[0_18px_50px_rgba(6,18,31,0.2)] backdrop-blur">
          <p className="section-eyebrow text-white/72">{content.eyebrow}</p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{content.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/78">{content.description}</p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-white/14 bg-white/10 shadow-[0_18px_50px_rgba(6,18,31,0.24)] backdrop-blur">
          <div className="relative aspect-[4/5]">
            <Image
              src={content.secondaryImage.src}
              alt={content.secondaryImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 16rem, 50vw"
            />
          </div>
        </div>
      </div>

      {variant === "home" ? (
        <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-4 shadow-[0_18px_50px_rgba(6,18,31,0.2)] backdrop-blur">
          <MascotHero compact />
        </div>
      ) : null}
    </div>
  );
}
