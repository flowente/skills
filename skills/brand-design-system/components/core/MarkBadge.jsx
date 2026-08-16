import React from "react";
import { AccentShape } from "./AccentShape";
import { FlowMark } from "./FlowMark";
// Signature composition: accent shape behind + Flow Mark overflowing its perimeter.
export function MarkBadge({ mark, shape = "square", boxW, boxH, shapeSize, markW, markH, rotate = -4, filter, animated = true }) {
  return (
    <span className="relative inline-flex items-center justify-center" style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: boxW, height: boxH }}>
      <AccentShape kind={shape} filter={filter} style={{ position: "absolute", width: shapeSize, height: shapeSize, left: "50%", top: "50%", transform: `translate(-50%, -50%) rotate(${rotate}deg)`, zIndex: 0 }} />
      <FlowMark mark={mark} animated={animated} style={{ position: "relative", zIndex: 1, width: markW, height: markH }} />
    </span>
  );
}
