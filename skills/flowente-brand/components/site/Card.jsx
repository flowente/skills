import React from "react";
import { MarkBadge } from "../core/MarkBadge";
// Content card: mark thumbnail on surface-2, display title, mono meta, mono uppercase tag with accent dot.
export function Card({ title, meta, tag, mark, shape = "square", href = "#" }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "block", borderRadius: "var(--radius-card)", overflow: "hidden", border: "1px solid var(--border)", background: "var(--surface)", color: "inherit", transition: "transform .2s, box-shadow .2s", transform: hover ? "translateY(-2px)" : "none", boxShadow: hover ? "var(--shadow-card-hover)" : "none" }}>
      <div style={{ height: 164, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-2)" }}>
        <MarkBadge mark={mark} shape={shape} boxW={132} boxH={104} shapeSize={86} markW={130} markH={86} />
      </div>
      <div style={{ padding: 22 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.15rem", letterSpacing: "-0.01em", margin: 0, color: "var(--text)" }}>{title}</h3>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", marginTop: 8 }}>{meta}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.64rem", color: "var(--text-2)", marginTop: 16, display: "inline-flex", alignItems: "center", gap: 6, textTransform: "uppercase", letterSpacing: "0.025em" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          {tag}
        </div>
      </div>
    </a>
  );
}
