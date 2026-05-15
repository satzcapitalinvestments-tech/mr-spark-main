import type { ReactNode } from "react";
import Link from "next/link";
import MascotHero from "@/components/MascotHero";
import TelegramLeadForm from "@/components/TelegramLeadForm";
import { defaultLocale, isLocale } from "@/lib/i18n";

type Cta = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

type Feature = {
  title: string;
  description: string;
  badge?: string;
};

function getCtaClassName(variant: Cta["variant"] = "primary") {
  if (variant === "secondary") {
    return "border border-[color:var(--accent)] bg-[color:var(--accent)] text-[color:var(--ink)] shadow-[0_16px_40px_rgba(255,212,0,0.22)] hover:border-[color:var(--accent-strong)] hover:bg-[color:var(--accent-strong)]";
  }

  if (variant === "ghost") {
    return "border border-white/88 bg-white text-[color:var(--ink)] shadow-[0_14px_30px_rgba(7,26,51,0.12)] hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]";
  }

  return "border border-[color:var(--brand)] bg-[color:var(--brand)] text-white shadow-[0_18px_42px_rgba(0,119,217,0.24)] hover:border-[color:var(--brand-strong)] hover:bg-[color:var(--brand-strong)]";
}

export function HeroSection({
  eyebrow,
  title,
  description,
  points = [],
  primaryCta,
  secondaryCta,
  supportingCtas = [],
  stats = [],
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points?: string[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  supportingCtas?: Cta[];
  stats?: Array<{ value: string; label: string }>;
  aside?: ReactNode;
}) {
  return (
    <section className="hero-shell">
      <div className="section">
        <div className="hero-frame">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="section-eyebrow text-[#ffd15a]">{eyebrow}</p>
              <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl xl:text-[4.15rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--dark-surface-muted)]">
                {description}
              </p>

              {points.length > 0 ? (
                <ul className="mt-8 grid gap-3 text-sm text-[color:var(--dark-surface-muted)] md:grid-cols-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="rounded-2xl border border-[color:var(--dark-surface-line)] bg-[color:var(--dark-surface-card)] px-4 py-3 backdrop-blur"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={primaryCta.href} className={`btn-base ${getCtaClassName(primaryCta.variant)}`}>
                  {primaryCta.label}
                </Link>
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className={`btn-base ${getCtaClassName(secondaryCta.variant ?? "ghost")}`}
                  >
                  {secondaryCta.label}
                </Link>
              ) : null}
              </div>

              {supportingCtas.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  {supportingCtas.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      className={`btn-base btn-small ${getCtaClassName(cta.variant ?? "secondary")}`}
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              ) : null}

              {stats.length > 0 ? (
                <dl className="mt-10 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-3xl border border-[color:var(--dark-surface-line)] bg-[color:var(--dark-surface-card)] px-5 py-4 backdrop-blur"
                    >
                      <dt className="text-sm text-[color:var(--dark-surface-soft)]">{stat.label}</dt>
                      <dd className="mt-1 text-2xl font-semibold text-[color:var(--dark-surface-text)]">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>

            <div className="hero-aside">{aside ?? <MascotHero />}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[color:var(--ink)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-7 text-[color:var(--muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageSection({
  children,
  surface = false,
}: {
  children: ReactNode;
  surface?: boolean;
}) {
  return (
    <section className="section py-16 md:py-20">
          <div className={surface ? "panel-surface p-8 md:p-10" : ""}>{children}</div>
      </section>
  );
}

export function StatsBand({ items }: { items: string[] }) {
  return (
    <section className="section -mt-8 pb-6 md:-mt-10">
      <div className="grid gap-3 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item}
            className="glass-card border border-[color:var(--line)] py-5 text-center text-sm font-medium text-[color:var(--ink)]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: Feature[];
  columns?: 2 | 3 | 4;
}) {
  const gridClass =
    columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3";

  return (
    <div className={`mt-8 grid gap-4 ${gridClass}`}>
      {items.map((item) => (
        <article key={item.title} className="feature-card">
          {item.badge ? <p className="section-eyebrow">{item.badge}</p> : null}
          <h3 className="mt-3 text-xl font-semibold text-[color:var(--ink)]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function StepGrid({ steps }: { steps: Array<{ title: string; description: string }> }) {
  return (
    <ol className="mt-8 grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title} className="feature-card">
          <p className="section-eyebrow">Schritt {index + 1}</p>
          <h3 className="mt-3 text-xl font-semibold text-[color:var(--ink)]">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function NoticeCard({
  title,
  description,
  tone = "info",
}: {
  title: string;
  description: string;
  tone?: "warning" | "info";
}) {
  const toneClass =
    tone === "warning"
      ? "border-amber-300/90 bg-[color:var(--accent-soft)] text-amber-950"
      : "border-[color:var(--line-strong)] bg-white text-[color:var(--ink)]";

  return (
    <div className={`rounded-[2rem] border px-6 py-6 shadow-[var(--shadow-soft)] ${toneClass}`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7">{description}</p>
    </div>
  );
}

export function LeadCaptureSection({
  id,
  title,
  description,
  sourcePage,
  checklist = [],
  emergencyNote,
}: {
  id?: string;
  title: string;
  description: string;
  sourcePage: string;
  checklist?: string[];
  emergencyNote?: string;
}) {
  const localeSegment = sourcePage.split("/").filter(Boolean)[0];
  const locale = localeSegment && isLocale(localeSegment) ? localeSegment : defaultLocale;
  const eyebrowByLocale = {
    de: "Telegram & Kontakt",
    en: "Telegram & contact",
    tr: "Telegram ve iletisim",
    ar: "تيليجرام والتواصل",
    ru: "Telegram и контакт",
    pl: "Telegram i kontakt",
    uk: "Telegram і контакт",
    ro: "Telegram si contact",
  } as const;

  return (
    <section id={id} className="section py-16 md:py-20">
      <div className="cta-shell">
        <div className="space-y-6">
          <div>
            <p className="section-eyebrow text-[#ffd15a]">{eyebrowByLocale[locale]}</p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[color:var(--dark-surface-muted)] md:text-lg">
              {description}
            </p>
          </div>

          {checklist.length > 0 ? (
            <ul className="grid gap-3">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[color:var(--dark-surface-line)] bg-[color:var(--dark-surface-card)] px-4 py-3 text-sm text-[color:var(--dark-surface-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {emergencyNote ? (
            <div className="rounded-2xl border border-amber-300/70 bg-amber-300/12 px-4 py-4 text-sm text-[color:var(--dark-surface-text)]">
              {emergencyNote}
            </div>
          ) : null}

          <div className="hidden lg:block">
            <MascotHero compact />
          </div>
        </div>

        <TelegramLeadForm sourcePage={sourcePage} />
      </div>
    </section>
  );
}
