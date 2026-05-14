export default function Faq({ items }: { items: Array<{ q: string; a: string }> }) {
  return <section className="section py-12"><h2 className="text-3xl font-bold">Häufige Fragen</h2><div className="mt-6 space-y-3">{items.map((it)=><details key={it.q} className="card"><summary className="cursor-pointer font-semibold">{it.q}</summary><p className="mt-3 text-slate-700">{it.a}</p></details>)}</div></section>
}
