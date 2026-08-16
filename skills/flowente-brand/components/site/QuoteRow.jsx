import React from "react";
const DEFAULT_QUOTES = [
  { name: "PMI manifattura", text: "Preventivi pronti in minuti invece che in un giorno. Il team ha ripreso a pensare.", who: "Direttore operations" },
  { name: "Studio legale", text: "La rassegna documentale che ci portava via ore, ora scorre da sola.", who: "Partner" },
  { name: "E-commerce", text: "Supporto clienti più rapido e costante, senza aumentare il personale.", who: "Founder" },
  { name: "Scale-up SaaS", text: "Dalla strategia al modello in produzione con un solo partner. Zero dispersione.", who: "CTO" },
];
// 4-up testimonial row divided by hairlines. No photos, no logos — text only.
export function QuoteRow({ quotes = DEFAULT_QUOTES }) {
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ margin: "0 auto", maxWidth: "var(--max-content)", padding: "80px 40px", display: "grid", gridTemplateColumns: `repeat(${quotes.length}, 1fr)` }}>
        {quotes.map((q, i) => (
          <div key={i} style={{ padding: "0 24px", borderLeft: i > 0 ? "1px solid var(--border)" : "none" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", marginBottom: 14 }}>{q.name}</div>
            <p style={{ color: "var(--text-2)", fontSize: "0.9rem", margin: 0 }}>&ldquo;{q.text}&rdquo;</p>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", color: "var(--muted)", marginTop: 18 }}>{q.who}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
