"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import MascotHero from "@/components/MascotHero";
import type { LocaleCode } from "@/data/i18n/languages";
import { defaultLocale, isLocale } from "@/lib/i18n";

type ShowcaseVariant = "home" | "emergency" | "coverage" | "services" | "pricing" | "contact";

type ShowcaseImage = {
  src: string;
  alt: string;
};

type ShowcaseImageKey = "panel" | "meter" | "inspection";
type ShowcaseEmphasis = "hero" | "section";

const panelImageSrc = {
  src: "/imagery/electrician-panel-drill.jpg",
};

const meterImageSrc = {
  src: "/imagery/electrician-multimeter.jpg",
};

const inspectionImageSrc = {
  src: "/imagery/electrician-inspection.jpg",
};

const showcaseAltByLocale: Record<
  LocaleCode,
  {
    panel: string;
    meter: string;
    inspection: string;
  }
> = {
  de: {
    panel: "Elektriker arbeitet mit Werkzeug an einem geöffneten Schaltschrank.",
    meter: "Elektriker misst eine Elektroverteilung mit einem Multimeter.",
    inspection: "Techniker prüft eine elektrische Anlage vor Ort.",
  },
  en: {
    panel: "Electrician working with tools on an open distribution cabinet.",
    meter: "Electrician measuring an electrical panel with a multimeter.",
    inspection: "Technician inspecting an electrical installation on site.",
  },
  tr: {
    panel: "Elektrikci acik bir elektrik panosunda aletlerle calisiyor.",
    meter: "Elektrikci bir multimetre ile elektrik panosunu olcuyor.",
    inspection: "Teknisyen sahada bir elektrik tesisatini kontrol ediyor.",
  },
  ar: {
    panel: "كهربائي يعمل بأدوات داخل لوحة توزيع كهربائية مفتوحة.",
    meter: "كهربائي يقيس لوحة كهربائية باستخدام جهاز متعدد القياس.",
    inspection: "فني يفحص تركيبًا كهربائيًا في الموقع.",
  },
  ru: {
    panel: "Электрик работает инструментом у открытого электрического шкафа.",
    meter: "Электрик измеряет электрощит мультиметром.",
    inspection: "Техник проверяет электрическую установку на месте.",
  },
  pl: {
    panel: "Elektryk pracuje narzedziami przy otwartej rozdzielni elektrycznej.",
    meter: "Elektryk mierzy rozdzielnie elektryczna multimetrem.",
    inspection: "Technik sprawdza instalacje elektryczna na miejscu.",
  },
  uk: {
    panel: "Електрик працює інструментом біля відкритої електрощитової шафи.",
    meter: "Електрик вимірює електрощит мультиметром.",
    inspection: "Технік перевіряє електричну установку на місці.",
  },
  ro: {
    panel: "Electricianul lucreaza cu unelte la un tablou electric deschis.",
    meter: "Electricianul masoara un panou electric cu un multimetru.",
    inspection: "Tehnicianul verifica o instalatie electrica la fata locului.",
  },
};

const variantContent: Record<
  ShowcaseVariant,
  {
    primaryImage: ShowcaseImageKey;
    secondaryImage: ShowcaseImageKey;
    chips: [string, string, string];
  }
> = {
  home: {
    primaryImage: "inspection",
    secondaryImage: "meter",
    chips: ["24h", "Telegram", "DE"],
  },
  emergency: {
    primaryImage: "panel",
    secondaryImage: "inspection",
    chips: ["24h", "Sofort", "DE"],
  },
  coverage: {
    primaryImage: "inspection",
    secondaryImage: "meter",
    chips: ["Vor Ort", "DE", "Planbar"],
  },
  services: {
    primaryImage: "meter",
    secondaryImage: "panel",
    chips: ["Messung", "Montage", "DE"],
  },
  pricing: {
    primaryImage: "panel",
    secondaryImage: "meter",
    chips: ["Klar", "Diagnose", "DE"],
  },
  contact: {
    primaryImage: "inspection",
    secondaryImage: "panel",
    chips: ["Kontakt", "Telegram", "DE"],
  },
};

function PhotoTile({
  image,
  priority = false,
  ratio = "4 / 5",
}: {
  image: ShowcaseImage;
  priority?: boolean;
  ratio?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white shadow-[0_20px_54px_rgba(7,26,51,0.14)]">
      <div className="relative" style={{ aspectRatio: ratio }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

export default function ElectricalPhotoShowcase({
  variant,
  emphasis = "hero",
}: {
  variant: ShowcaseVariant;
  emphasis?: ShowcaseEmphasis;
}) {
  const pathname = usePathname() || `/${defaultLocale}`;
  const localeSegment = pathname.split("/")[1];
  const locale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;
  const altCopy = showcaseAltByLocale[locale];
  const panelImage: ShowcaseImage = { ...panelImageSrc, alt: altCopy.panel };
  const meterImage: ShowcaseImage = { ...meterImageSrc, alt: altCopy.meter };
  const inspectionImage: ShowcaseImage = { ...inspectionImageSrc, alt: altCopy.inspection };
  const content = variantContent[variant];
  const imageByKey: Record<ShowcaseImageKey, ShowcaseImage> = {
    panel: panelImage,
    meter: meterImage,
    inspection: inspectionImage,
  };
  const primaryImage = imageByKey[content.primaryImage];
  const secondaryImage = imageByKey[content.secondaryImage];

  if (emphasis === "section") {
    return (
      <div className="relative overflow-hidden rounded-[2.2rem] border border-[color:var(--line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(236,248,255,0.96))] p-3 shadow-[0_28px_72px_rgba(7,26,51,0.14)]">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-[color:var(--line)] bg-white shadow-[0_18px_46px_rgba(7,26,51,0.12)]">
          <div className="relative" style={{ aspectRatio: "7 / 4.6" }}>
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
            {content.chips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--line)] bg-white/94 px-3 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-[color:var(--ink)] shadow-[0_10px_24px_rgba(7,26,51,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 w-[42%] min-w-[8.25rem] max-w-[12.5rem] overflow-hidden rounded-[1.35rem] border border-white/85 bg-white shadow-[0_16px_40px_rgba(7,26,51,0.18)]">
            <div className="relative" style={{ aspectRatio: "4 / 3" }}>
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[2.45rem] border border-[color:var(--line-strong)] bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(236,248,255,0.96))] p-4 shadow-[0_32px_86px_rgba(7,26,51,0.16)] md:p-5">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(9.75rem,11.75rem)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white shadow-[0_20px_54px_rgba(7,26,51,0.14)]">
          <div className="relative" style={{ aspectRatio: "5 / 6" }}>
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              priority={variant === "home"}
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
            {content.chips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[color:var(--line)] bg-white/94 px-3 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-[color:var(--ink)] shadow-[0_10px_24px_rgba(7,26,51,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(7,26,51,0.98),rgba(12,90,152,0.96))] px-3 pb-3 pt-1 shadow-[0_18px_42px_rgba(7,26,51,0.24)]">
            <MascotHero compact surface="plain" className="mx-auto -mt-4 max-w-[7.6rem]" />
            <p className="mt-1 text-center text-[0.68rem] font-semibold tracking-[0.24em] text-white/74">
              MR SPARK
            </p>
          </div>
          <PhotoTile image={secondaryImage} ratio="4 / 5" />
        </div>
      </div>
    </div>
  );
}
