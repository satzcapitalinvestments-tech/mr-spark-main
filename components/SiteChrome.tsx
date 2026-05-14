"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nav = [
  ["Elektriker", "/de/elektriker"], ["Elektro", "/de/elektro"], ["Notdienst", "/de/notdienst"],
  ["Preise", "/de/preise"], ["Kontakt", "/de/kontakt"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/de" className="text-lg font-semibold">Mr Spark</Link>
        <nav className="hidden gap-5 md:flex">{nav.map(([l, h]) => <Link key={h} href={h} className="text-sm text-slate-300 hover:text-white">{l}</Link>)}</nav>
        <Link href="/de/notdienst" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950">24h Notdienst</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 py-12">
      <div className="section grid gap-8 md:grid-cols-3">
        <div><h3 className="text-xl font-semibold">Mr Spark</h3><p className="mt-2 text-slate-300">Elektriker & Elektro-Notdienst in Ihrer Stadt.</p></div>
        <div><h4 className="font-semibold">Leistungen</h4><ul className="mt-3 space-y-2 text-slate-300"><li>Elektroinstallation</li><li>Sicherungskasten</li><li>Lichtinstallation</li><li>Störung beheben</li></ul></div>
        <div><h4 className="font-semibold">Rechtliches</h4><ul className="mt-3 space-y-2 text-slate-300"><li><Link href="/de/impressum">Impressum</Link></li><li><Link href="/de/datenschutz">Datenschutz</Link></li></ul></div>
      </div>
    </footer>
  );
}

export function Hero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section py-16 md:py-24">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 text-lg text-slate-300">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/de/notdienst" className="rounded-full bg-accent px-5 py-3 font-semibold text-slate-950">Elektro-Notdienst anfragen</Link>
          <Link href="/de/kontakt" className="rounded-full border border-white/20 px-5 py-3 font-semibold">Kontakt aufnehmen</Link>
        </div>
      </motion.div>
    </section>
  );
}
