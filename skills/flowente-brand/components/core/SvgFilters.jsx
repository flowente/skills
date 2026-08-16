import React from "react";
// 3 "pencil" filters with different seeds = 3 hand-drawn frames (boiling effect). Render ONCE per page.
export function SvgFilters() {
  const filters = [{ id: "flowente-p1", seed: 1 }, { id: "flowente-p2", seed: 7 }, { id: "flowente-p3", seed: 13 }];
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        {filters.map((f) => (
          <filter key={f.id} id={f.id} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves={2} seed={f.seed} result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="6" />
          </filter>
        ))}
      </defs>
    </svg>
  );
}
