import React from "react";
import { Logo } from "../core/Logo";
import { Button } from "../core/Button";
// Sticky translucent nav: logo left, links center, ghost Login + primary CTA right.
export function Nav({ links = ["Studio", "Advisory", "Lavori", "Blog"], cta = "Parliamone" }) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid var(--border)", background: "color-mix(in srgb, var(--bg) 88%, transparent)", backdropFilter: "blur(12px)" }}>
      <div style={{ margin: "0 auto", maxWidth: "var(--max-content)", padding: "0 40px", height: "var(--nav-h)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Logo style={{ fontSize: "1.25rem" }} />
        <nav style={{ display: "flex", gap: 28, fontSize: "0.9rem", color: "var(--text-2)" }}>
          {links.map((l) => <a key={l} href="#">{l}</a>)}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Button variant="ghost" href="#">Login</Button>
          <Button variant="primary" href="#">{cta}</Button>
        </div>
      </div>
    </header>
  );
}
