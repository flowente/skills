import React from "react";
import { Logo } from "../core/Logo";
const DEFAULT_COLS = [
  { h: "Studio", links: ["Advisory", "Sviluppo app", "Modelli", "Lab"] },
  { h: "Risorse", links: ["Blog", "Casi studio", "Guide"] },
  { h: "Contatti", links: ["Parliamone", "LinkedIn", "Email"] },
];
// Footer: logo + tagline, 3 mono-headed link columns, hairline legal row.
export function Footer({ cols = DEFAULT_COLS, tagline = "Il lavoro che scorre.", legal = "© 2026 FLOWENTE · MILANO" }) {
  return (
    <footer>
      <div style={{ margin: "0 auto", maxWidth: "var(--max-content)", padding: "72px 40px 48px" }}>
        <div style={{ display: "grid", gap: 32, gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }}>
          <div>
            <Logo style={{ fontSize: "1.4rem" }} />
            <p style={{ color: "var(--text-2)", fontSize: "0.9rem", marginTop: 18, maxWidth: 230 }}>{tagline}</p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.025em", color: "var(--muted)", margin: "0 0 14px" }}>{c.h}</h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
                {c.links.map((l) => <li key={l}><a href="#" style={{ fontSize: "0.9rem" }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 52, paddingTop: 22, borderTop: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)", flexWrap: "wrap", gap: 12 }}>
          <span>{legal}</span>
          <span>Il lavoro che scorre</span>
        </div>
      </div>
    </footer>
  );
}
