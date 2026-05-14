export default function Preise() {
  return <main className="section py-16"><h1 className="text-4xl font-bold">Preise</h1><div className="mt-8 grid gap-4 md:grid-cols-3">{[["Servicecheck", "ab 89€"],["Elektroinstallation", "ab 149€"],["24h Notdienst", "ab 189€"]].map(([t,p])=><article key={t} className="card"><h2 className="text-xl font-semibold">{t}</h2><p className="mt-3 text-3xl font-bold text-accent">{p}</p><p className="mt-2 text-slate-300">Transparente Preise nach Aufwand und Material.</p></article>)}</div></main>;
}
