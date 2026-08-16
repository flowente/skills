import React from "react";
import { Button } from "../core/Button";
import { MarkBadge } from "../core/MarkBadge";
// Homepage hero: huge display headline (muted "che"), lede, primary+ghost CTAs, dot-grid panel with coil MarkBadge.
export function Hero({
  title = <>Il lavoro<br /><span style={{ color: "var(--muted)", fontWeight: 400 }}>che</span> scorre.</>,
  text = "Studio di AI applicata. Trasformiamo i processi più lenti in flussi che vanno da soli — dalla strategia al modello in produzione.",
  primaryCta = "Parliamone",
  ghostCta = "Come lavoriamo",
}) {
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ margin: "0 auto", maxWidth: "var(--max-content)", padding: "96px 40px", display: "grid", gap: 40, alignItems: "center", gridTemplateColumns: "1.05fr 0.95fr" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.04em", fontSize: "clamp(2.8rem, 6vw, 4.6rem)", lineHeight: 0.98, margin: 0 }}>{title}</h1>
          <p style={{ marginTop: 24, maxWidth: 440, color: "var(--text-2)", fontSize: "1.12rem" }}>{text}</p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button href="#" size="lg">{primaryCta}</Button>
            <Button href="#" variant="ghost" size="lg">{ghostCta}</Button>
          </div>
        </div>
        <div className="dot-grid" style={{ position: "relative", height: 340, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 14 }}>
          <MarkBadge mark="coil" shape="square" boxW={340} boxH={230} shapeSize={190} markW={340} markH={230} rotate={6} />
        </div>
      </div>
    </section>
  );
}
