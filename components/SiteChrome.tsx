"use client";

import Link from "next/link";
import { useState } from "react";
import LanguageSelector from "@/components/LanguageSelector";

const links = [
  ["Startseite", "/de"],
  ["Leistungen", "/de/leistungen"],
  ["Elektriker", "/de/elektriker"],
  ["Elektro", "/de/elektro"],
  ["Notdienst", "/de/notdienst"],
  ["Einsatzgebiet", "/de/einsatzgebiet"],
  ["Preise", "/de/preise"],
  ["Kontakt", "/de/kontakt"],
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[color:var(--surface-overlay)]/86 backdrop-blur-xl">
      <div className="section flex min-h-20 items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Navigation öffnen</span>
            <span className="space-y-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>

          <Link href="/de" className="flex flex-col">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-white/52">
              Elektriker Deutschland
            </span>
            <span className="text-2xl font-semibold tracking-tight text-white">Mr Spark</span>
          </Link>
        </div>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-white/78 transition hover:text-white">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Link
            href="/de/notdienst"
            className="btn-base btn-small hidden md:inline-flex bg-white text-[color:var(--ink)] hover:bg-white/92"
          >
            24h Notdienst
          </Link>
          <Link
            href="/de/kontakt"
            className="btn-base btn-small bg-[color:var(--accent)] text-[color:var(--ink)] hover:bg-[#ffd36c]"
          >
            Kontakt
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="section pb-5 lg:hidden">
          <nav className="panel-surface grid gap-2 p-4">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--brand-soft)]"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface-strong)]">
      <div className="section grid gap-8 py-14 md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
        <div>
          <p className="section-eyebrow text-white/54">Mr Spark</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Elektriker- und Notdienstseiten mit klarer Anfrageführung.
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
            Fokus auf schnelle Anfrageaufnahme, transparente Kommunikation und saubere Übergaben in die operative Bearbeitung.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Leistungen</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/66">
            <li>Elektroinstallation</li>
            <li>Notdienst</li>
            <li>Sicherungskasten & Fehlersuche</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Conversion</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/66">
            <li>Servergestuetzter Telegram-Leadflow</li>
            <li>Mobil priorisierte CTA-Platzierung</li>
            <li>Mehrsprachige Route-Seams erhalten</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/66">
            <li>
              <Link href="/de/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/de/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
