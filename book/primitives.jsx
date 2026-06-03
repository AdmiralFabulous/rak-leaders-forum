/* ============================================================================
   Kai Kata — shared spread primitives
   Exported to window for use by spreads.jsx + index.html
============================================================================ */
const { useState, useEffect } = React;

/* Brand mark (inline SVG so it inherits currentColor cleanly) */
function Mark({ size = 40, style }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" style={style} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 30 Q32 13 50 30" />
        <path d="M32 47 L14 30" /><path d="M32 47 L50 30" />
        <path d="M32 47 L20.5 28.6" opacity=".55" strokeWidth="1" />
        <path d="M32 47 L26 26" opacity=".55" strokeWidth="1" />
        <path d="M32 47 L32 25" opacity=".55" strokeWidth="1" />
        <path d="M32 47 L38 26" opacity=".55" strokeWidth="1" />
        <path d="M32 47 L43.5 28.6" opacity=".55" strokeWidth="1" />
      </g>
      <circle cx="32" cy="16" r="4.4" fill="currentColor" />
      <circle cx="32" cy="16" r="6.8" stroke="currentColor" strokeWidth="1" opacity=".35" />
    </svg>
  );
}

function Eyebrow({ children, style }) {
  return <div className="kk-eyebrow" style={style}>{children}</div>;
}

function PearlRule({ width = 160, style }) {
  return (
    <div className="kk-pearl-rule" style={{ width, ...style }}>
      <span className="kk-pearl-rule__dot"></span>
    </div>
  );
}

function WaveDivider({ width = 320, style }) {
  return (
    <div className="wave" style={style}>
      <img src="assets/ornament-wave.svg" alt="" style={{ width }} />
    </div>
  );
}

function Folio({ side = "l", n, label = "RAK Rising" }) {
  return <div className={`folio folio--${side}`}>{String(n).padStart(2, "0")} · {label}</div>;
}

/* Big statistic */
function Stat({ n, unit, caption }) {
  return (
    <div className="stat">
      <div className="n">{n}{unit && <span className="u">{unit}</span>}</div>
      <div className="c">{caption}</div>
    </div>
  );
}

/* Photograph slot with optional protection scrim + caption */
function Photo({ id, placeholder, src, flip, pos, eyebrow, title, scrim = "scrim", children, style }) {
  return (
    <div className="photo" style={style}>
      {src
        ? <img className="photo-img" src={src} alt={title || ""} style={{ ...(flip ? { transform: "scaleX(-1)" } : null), ...(pos ? { objectPosition: pos } : null) }} />
        : <div className="photo-ph">
            <span className="photo-ph__label">Photograph</span>
            <span className="photo-ph__desc">{placeholder || "Image to be supplied"}</span>
          </div>}
      {src && (eyebrow || title) && <div className={`scrim ${scrim === "soft" ? "scrim--soft" : ""}`}></div>}
      {(eyebrow || title) && (
        <div className="photo-cap">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && <h3>{title}</h3>}
        </div>
      )}
      {children}
    </div>
  );
}

/* Corner-bracketed title plate */
function Plate({ eyebrow, title, children }) {
  return (
    <div className="plate anim d1">
      <img className="corner tl" src="assets/ornament-corner.svg" alt="" />
      <img className="corner br" src="assets/ornament-corner.svg" alt="" />
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <div className="kk-h2" style={{ margin: "10px 0 0" }}>{title}</div>}
      {children}
      <PearlRule width={150} style={{ margin: "18px auto 0" }} />
    </div>
  );
}

Object.assign(window, { Mark, Eyebrow, PearlRule, WaveDivider, Folio, Stat, Photo, Plate });
