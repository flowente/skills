import React from "react";
import { Button } from "../core/Button";
import { MarkBadge } from "../core/MarkBadge";
// Two-column feature: display title + text + ghost CTA, panel with MarkBadge. reverse flips columns.
export function FeatureSection({ title, text, ctaLabel, ctaHref, mark, shape = "square", reverse }) {
  const content = (
    <div>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.02, margin: 0 }}>{title}</h2>
      <p style={{ marginTop: 20, maxWidth: 420, color: "var(--text-2)", fontSize: "1.06rem" }}>{text}</p>
      {ctaLabel && <div style={{ marginTop: 24 }}><Button variant="ghost" href={ctaHref || "#"}>{ctaLabel}</Button></div>}
    </div>
  );
  const panel = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-panel)", background: "var(--surface-2)", height: 260 }}>
      <MarkBadge mark={mark} shape={shape} boxW={280} boxH={160} shapeSize={120} markW={250} markH={140} />
    </div>
  );
  return (
    <section style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ margin: "0 auto", maxWidth: "var(--max-content)", padding: "96px 40px", display: "grid", gap: 56, alignItems: "center", gridTemplateColumns: "1fr 1fr" }}>
        {reverse ? <>{panel}{content}</> : <>{content}{panel}</>}
      </div>
    </section>
  );
}
