import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/de" className="text-2xl font-black text-sky-700">
          Mr Spark
        </Link>

        <nav className="hidden gap-4 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-slate-700 hover:text-sky-700">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <Link href="/de/notdienst" className="rounded-full bg-sky-600 px-3 py-2 text-xs font-semibold text-white md:text-sm">
            24h Notdienst
          </Link>
          <Link href="/de/kontakt" className="rounded-full bg-amber-300 px-3 py-2 text-xs font-semibold md:text-sm">
            WhatsApp starten
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sky-100 bg-white">
      <div className="section grid gap-8 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-sky-700">Mr Spark</h3>
          <p className="mt-2 text-slate-600">
            Elektriker & Elektro-Notdienst für schnelle, sichere Hilfe.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Leistungen</h4>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>Elektroinstallation</li>
            <li>Sicherungskasten</li>
            <li>Steckdosen & Licht</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Notfall</h4>
          <p className="mt-2 text-slate-600">
            24h erreichbar bei Stromausfall, Kurzschluss oder FI-Problemen.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Rechtliches</h4>
          <ul className="mt-2 space-y-1 text-slate-600">
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