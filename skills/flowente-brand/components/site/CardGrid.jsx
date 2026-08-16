import React from "react";
import { Card } from "./Card";
const DEFAULT_CARDS = [
  { title: "−70% sul lavoro ripetitivo", meta: "Case study · 4 min", tag: "Advisory", mark: "flusso", shape: "square" },
  { title: "Come scegliere il modello giusto", meta: "Guida · 6 min", tag: "Studio", mark: "onda", shape: "circle" },
  { title: "n8n + AI: workflow senza attrito", meta: "Tutorial · 8 min", tag: "Lab", mark: "freccia", shape: "triangle" },
];
// Centered section header + 3-column card grid.
export function CardGrid({ heading = "Storie e risorse", sub = "Casi, guide e approfondimenti su come far scorrere il lavoro con l'AI.", cards = DEFAULT_CARDS }) {
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ margin: "0 auto", maxWidth: "var(--max-content)", padding: "88px 40px" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-0.03em", margin: 0 }}>{heading}</h2>
          <p style={{ color: "var(--text-2)", marginTop: 14 }}>{sub}</p>
        </div>
        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(3, 1fr)" }}>
          {cards.map((c, i) => <Card key={i} {...c} />)}
        </div>
      </div>
    </section>
  );
}
