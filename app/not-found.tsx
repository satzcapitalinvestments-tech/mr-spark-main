import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section py-24">
      <div className="panel-surface max-w-3xl p-8 md:p-10">
        <p className="section-eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--ink)] md:text-5xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)] md:text-lg">
          Die angeforderte Seite existiert nicht oder wurde verschoben. Nutzen Sie die Hauptnavigation
          oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/de" className="btn-base bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-strong)]">
            Zur Startseite
          </Link>
          <Link
            href="/de/kontakt"
            className="btn-base border border-[color:var(--line-strong)] bg-white text-[color:var(--ink)] hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </main>
  );
}
