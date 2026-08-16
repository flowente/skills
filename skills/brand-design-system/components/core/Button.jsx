import React from "react";
// Button: primary = ink fill; ghost = hairline. Hover = micro-zoom (CSS .btn). No arrows by default. Never Flow Blue.
export function Button({ children, href, variant = "primary", size = "md", className = "", onClick }) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${size === "lg" ? "btn-lg" : ""} ${className}`;
  if (href) return <a href={href} className={cls} onClick={onClick}>{children}</a>;
  return <button className={cls} onClick={onClick}>{children}</button>;
}
