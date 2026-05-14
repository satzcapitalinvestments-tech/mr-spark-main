export default function Faq({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <section className="section py-16 md:py-20">
      <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--ink)] md:text-4xl">
        Häufige Fragen
      </h2>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <details key={item.q} className="feature-card">
            <summary className="cursor-pointer list-none text-lg font-semibold text-[color:var(--ink)] marker:content-none">
              {item.q}
            </summary>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
