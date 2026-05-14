export function TrustStrip() {
  const items = ["24h erreichbar", "Transparente Preise", "Schnelle Terminannahme", "Geprüfte Elektro-Partner"];
  return <section className="section py-8"><div className="grid gap-3 md:grid-cols-4">{items.map((i)=><div key={i} className="card py-4 text-center font-semibold text-sky-900">{i}</div>)}</div></section>;
}

export function ProcessSteps() {
  const steps=["Anfrage senden","Problem beschreiben","Rückruf / Termin","Elektriker kommt"];
  return <section className="section py-12"><h2 className="text-3xl font-bold">So funktioniert es</h2><div className="mt-6 grid gap-4 md:grid-cols-4">{steps.map((s,idx)=><div className="card" key={s}><p className="text-sm text-sky-700">Schritt {idx+1}</p><h3 className="mt-1 text-xl font-semibold">{s}</h3></div>)}</div></section>
}
