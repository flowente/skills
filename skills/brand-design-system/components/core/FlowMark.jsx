import React from "react";
// Flow Marks — gestural strokes. Each draw() receives the pencil-filter id (one per boiling frame).
export const Marks = {
  coil: { viewBox: "0 0 340 230", draw: (f) => <path className="mark-stroke" filter={`url(#${f})`} d="M20,150 C20,105 60,105 60,150 C60,105 100,105 100,150 C100,105 140,105 145,150 C152,190 200,190 205,140 C210,95 250,95 258,150 C265,195 315,195 320,120" /> },
  onde: { viewBox: "0 0 280 150", draw: (f) => <g filter={`url(#${f})`}><path className="mark-stroke" d="M12,40 Q52,15 92,40 T172,40 T268,40" /><path className="mark-stroke" d="M12,80 Q52,55 92,80 T172,80 T268,80" /><path className="mark-stroke" d="M12,120 Q52,95 92,120 T172,120 T268,120" /></g> },
  flusso: { viewBox: "0 0 120 80", draw: (f) => <path className="mark-stroke" filter={`url(#${f})`} d="M12,55 C34,55 28,25 48,38 C68,52 36,72 45,50 C52,32 78,42 108,48" /> },
  onda: { viewBox: "0 0 120 80", draw: (f) => <path className="mark-stroke" filter={`url(#${f})`} d="M10,42 Q40,15 70,42 T112,40" /> },
  freccia: { viewBox: "0 0 120 80", draw: (f) => <path className="mark-stroke" filter={`url(#${f})`} d="M20,58 C50,18 75,70 108,44" /> },
};
const FRAMES = ["flowente-p1", "flowente-p2", "flowente-p3"];
// Renders a mark as 3 stacked frames (boiling) or static if animated=false. `mark` = name string or Mark object.
export function FlowMark({ mark = "coil", className = "", style, animated = true }) {
  const m = typeof mark === "string" ? Marks[mark] : mark;
  const frames = animated ? FRAMES : [FRAMES[0]];
  return (
    <span className={`boil ${className}`} style={style} aria-hidden="true">
      {frames.map((f) => (
        <svg key={f} viewBox={m.viewBox}>{m.draw(f)}</svg>
      ))}
    </span>
  );
}
