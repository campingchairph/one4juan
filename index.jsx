import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const C = {
  ink:       "#0F0D0A",
  inkMid:    "#3D3828",
  inkSoft:   "#7A7060",
  inkFaint:  "#B8AFA0",
  bg:        "#F5F0E8",
  surface:   "#FDFAF4",
  card:      "#FFFFFF",
  border:    "#E2DAC8",
  borderSoft:"#EDE8DC",
  sun:       "#E8991A",
  sunLight:  "#FDF0D0",
  sunDark:   "#B06E08",
  ember:     "#D63E1E",
  emberLight:"#FDEEE8",
  emberDark: "#962A10",
  verified:  "#1F8A4C",
  verifiedBg:"#EAF5EE",
  night:     "#0F0D18",
  nightMid:  "#1E1C30",
  pixelFont: "'Press Start 2P', monospace",
  bodyFont:  "'DM Sans', sans-serif",
};

// ─── PIXEL ART SPRITES (inline SVG components) ────────────────────────────────

function SpriteHero({ size = 80, outfit = "bayani", skinTone = "#E8A060" }) {
  const bodyColor = outfit === "bayani" ? "#1F8A4C" : "#C8B880";
  const accentColor = outfit === "bayani" ? "#F5E070" : "#8A6820";
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 40 44"
      style={{ imageRendering: "pixelated", display: "block" }}>
      {/* hair */}
      <rect x="10" y="1" width="20" height="5" fill={C.ink} />
      <rect x="8" y="3" width="4" height="8" fill={C.ink} />
      <rect x="28" y="3" width="4" height="8" fill={C.ink} />
      {/* head */}
      <rect x="10" y="4" width="20" height="16" fill={skinTone} />
      {/* eyes */}
      <rect x="14" y="9" width="5" height="5" fill={C.ink} />
      <rect x="21" y="9" width="5" height="5" fill={C.ink} />
      <rect x="15" y="10" width="3" height="3" fill="#4080F0" />
      <rect x="22" y="10" width="3" height="3" fill="#4080F0" />
      <rect x="16" y="11" width="1" height="1" fill="#fff" />
      <rect x="23" y="11" width="1" height="1" fill="#fff" />
      {/* mouth */}
      <rect x="15" y="17" width="10" height="2" fill="#B06848" />
      <rect x="16" y="16" width="8" height="1" fill={skinTone} />
      {/* body */}
      <rect x="10" y="20" width="20" height="14" fill={bodyColor} />
      {/* arms */}
      <rect x="4"  y="21" width="7" height="11" fill={bodyColor} />
      <rect x="29" y="21" width="7" height="11" fill={bodyColor} />
      {/* sash/detail */}
      <rect x="16" y="21" width="8" height="13" fill={accentColor} opacity="0.35" />
      <rect x="17" y="23" width="6" height="2" fill={accentColor} opacity="0.6" />
      <rect x="17" y="27" width="6" height="2" fill={accentColor} opacity="0.6" />
      {/* hands */}
      <rect x="4"  y="32" width="7" height="4" fill={skinTone} />
      <rect x="29" y="32" width="7" height="4" fill={skinTone} />
      {/* legs */}
      <rect x="12" y="34" width="7" height="8" fill={C.inkMid} />
      <rect x="21" y="34" width="7" height="8" fill={C.inkMid} />
      {/* shoes */}
      <rect x="10" y="41" width="10" height="3" fill={C.ink} />
      <rect x="20" y="41" width="10" height="3" fill={C.ink} />
      {/* verified star */}
      {outfit === "bayani" && (
        <>
          <rect x="30" y="1" width="8" height="8" fill={C.sun} />
          <rect x="32" y="3" width="4" height="4" fill={C.sunDark} />
        </>
      )}
    </svg>
  );
}

function SpriteLakan({ size = 80, skinTone = "#C87848" }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 40 44"
      style={{ imageRendering: "pixelated", display: "block" }}>
      <rect x="10" y="1" width="20" height="5" fill={C.ink} />
      <rect x="8" y="3" width="4" height="8" fill={C.ink} />
      <rect x="28" y="3" width="4" height="8" fill={C.ink} />
      {/* crown */}
      <rect x="10" y="0" width="20" height="4" fill={C.sun} />
      <rect x="12" y="-2" width="4" height="4" fill={C.sun} />
      <rect x="18" y="-3" width="4" height="5" fill={C.sun} />
      <rect x="24" y="-2" width="4" height="4" fill={C.sun} />
      <rect x="13" y="1" width="2" height="2" fill={C.ember} />
      <rect x="19" y="0" width="2" height="2" fill={C.ember} />
      <rect x="25" y="1" width="2" height="2" fill={C.ember} />
      {/* head */}
      <rect x="10" y="4" width="20" height="16" fill={skinTone} />
      <rect x="14" y="9" width="5" height="5" fill={C.ink} />
      <rect x="21" y="9" width="5" height="5" fill={C.ink} />
      <rect x="15" y="10" width="3" height="3" fill="#60A0E0" />
      <rect x="22" y="10" width="3" height="3" fill="#60A0E0" />
      <rect x="16" y="11" width="1" height="1" fill="#fff" />
      <rect x="23" y="11" width="1" height="1" fill="#fff" />
      <rect x="15" y="17" width="10" height="2" fill="#B06848" />
      {/* barong */}
      <rect x="10" y="20" width="20" height="14" fill="#F0E8D0" />
      <rect x="4"  y="21" width="7" height="11" fill="#F0E8D0" />
      <rect x="29" y="21" width="7" height="11" fill="#F0E8D0" />
      <rect x="17" y="21" width="6" height="13" fill="#E0D4B8" />
      <rect x="18" y="24" width="4" height="2" fill="#C8B890" />
      <rect x="18" y="28" width="4" height="2" fill="#C8B890" />
      <rect x="18" y="32" width="4" height="2" fill="#C8B890" />
      <rect x="4"  y="32" width="7" height="4" fill={skinTone} />
      <rect x="29" y="32" width="7" height="4" fill={skinTone} />
      <rect x="12" y="34" width="7" height="8" fill="#383870" />
      <rect x="21" y="34" width="7" height="8" fill="#383870" />
      <rect x="10" y="41" width="10" height="3" fill={C.ink} />
      <rect x="20" y="41" width="10" height="3" fill={C.ink} />
    </svg>
  );
}

function PixelBuildings() {
  return (
    <svg width="100%" viewBox="0 0 400 180" style={{ imageRendering: "pixelated", display: "block" }} preserveAspectRatio="xMidYMax meet">
      {/* sky */}
      <rect width="400" height="180" fill="#1A1830" />
      {/* moon */}
      <rect x="340" y="14" width="28" height="28" fill="#F5E890" rx="2" />
      <rect x="344" y="10" width="20" height="6" fill="#1A1830" />
      {/* stars */}
      {[[30,12],[80,22],[150,8],[210,18],[280,10],[60,35],[190,28],[320,30],[100,40]].map(([x,y],i) => (
        <rect key={i} x={x} y={y} width={i%3===0?2:1} height={i%3===0?2:1} fill={i%4===0?"#FFFFAA":"#FFFFFF"} />
      ))}
      {/* ground */}
      <rect y="130" width="400" height="50" fill="#C8A060" />
      {/* road */}
      <rect y="140" width="400" height="28" fill="#B4A484" />
      <rect y="152" width="400" height="4" fill="#888060" opacity="0.5" />
      {/* road dashes */}
      {[0,50,100,150,200,250,300,350].map(x => (
        <rect key={x} x={x} y="153" width="32" height="3" fill="#E0D090" />
      ))}
      {/* sidewalk */}
      <rect y="130" width="400" height="10" fill="#D4C880" />
      {/* MALL */}
      <rect x="20" y="40" width="100" height="92" fill="#7080B8" />
      <rect x="18" y="38" width="104" height="5" fill={C.ink} />
      <rect x="36" y="38" width="60" height="10" fill={C.sun} />
      <text x="66" y="47" textAnchor="middle" fontFamily="'Press Start 2P'" fontSize="6" fill={C.ink}>SM</text>
      {[[28,52],[44,52],[60,52],[76,52],[28,68],[44,68],[60,68],[76,68]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="14" height="10" fill={i%3===2?"#3848A0":"#F5E890"} />
      ))}
      <rect x="48" y="110" width="30" height="22" fill="#2838A0" />
      {/* SMALL STORE */}
      <rect x="148" y="88" width="50" height="44" fill="#D09868" />
      <rect x="146" y="86" width="54" height="5" fill={C.ink} />
      <rect x="154" y="94" width="14" height="12" fill="#F5E890" />
      <rect x="172" y="94" width="14" height="12" fill="#F5E890" />
      <rect x="160" y="108" width="14" height="24" fill="#603818" />
      <text x="173" y="92" textAnchor="middle" fontFamily="'Press Start 2P'" fontSize="5" fill={C.ink}>7-11</text>
      {/* GOVT */}
      <rect x="272" y="56" width="90" height="76" fill="#C8B888" />
      <rect x="270" y="54" width="94" height="5" fill={C.ink} />
      <rect x="282" y="66" width="14" height="10" fill="#F5E890" />
      <rect x="300" y="66" width="14" height="10" fill="#3848A0" />
      <rect x="318" y="66" width="14" height="10" fill="#F5E890" />
      <rect x="290" y="84" width="22" height="28" fill="#7A6040" />
      <text x="317" y="62" textAnchor="middle" fontFamily="'Press Start 2P'" fontSize="5" fill={C.ink}>LTO</text>
      {/* flag */}
      <rect x="358" y="24" width="3" height="34" fill={C.ink} />
      <rect x="361" y="24" width="20" height="12" fill="#0038A8" />
      <rect x="361" y="24" width="20" height="6" fill={C.ember} />
      {/* TREE */}
      <rect x="228" y="110" width="10" height="22" fill="#8A5020" />
      <rect x="214" y="86" width="38" height="30" fill="#3A8020" rx="2" />
      <rect x="220" y="80" width="26" height="14" fill="#5AAA30" rx="2" />
      {/* Walking sprites */}
      {/* sprite 1 */}
      <rect x="118" y="122" width="10" height="10" fill="#E8A060" />
      <rect x="116" y="120" width="14" height="4" fill={C.ink} />
      <rect x="118" y="132" width="10" height="10" fill="#1F8A4C" />
      <rect x="114" y="134" width="6" height="7" fill="#1F8A4C" />
      <rect x="126" y="134" width="6" height="7" fill="#1F8A4C" />
      <rect x="118" y="142" width="4" height="8" fill="#7A5020" />
      <rect x="124" y="142" width="4" height="8" fill="#7A5020" />
      {/* sprite 2 */}
      <rect x="248" y="120" width="10" height="10" fill="#C87848" />
      <rect x="246" y="118" width="14" height="4" fill={C.ink} />
      <rect x="248" y="130" width="10" height="10" fill={C.ember} />
      <rect x="244" y="132" width="6" height="7" fill={C.ember} />
      <rect x="256" y="132" width="6" height="7" fill={C.ember} />
      <rect x="248" y="140" width="4" height="8" fill="#602810" />
      <rect x="254" y="140" width="4" height="8" fill="#602810" />
    </svg>
  );
}

function VerifiedShield({ color = C.verified, size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M8 1.5L2 4v4c0 3.3 2.5 6.4 6 7.2 3.5-.8 6-3.9 6-7.2V4L8 1.5z"
        fill={color + "20"} stroke={color} strokeWidth="1.2" />
      <path d="M5.5 8l1.8 1.8 3.2-3.6" stroke={color} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PixelDot({ color, size = 8 }) {
  return (
    <span style={{
      display: "inline-block", width: size, height: size,
      background: color, borderRadius: 1,
      imageRendering: "pixelated", flexShrink: 0,
    }} />
  );
}

function ProgressBar({ value, color = C.ember }) {
  return (
    <div style={{ background: C.borderSoft, borderRadius: 2, height: 6, overflow: "hidden" }}>
      <div style={{
        height: "100%", width: `${value}%`,
        background: color, borderRadius: 2,
        transition: "width 0.4s ease",
      }} />
    </div>
  );
}

function PxBtn({ children, onClick, variant = "primary", style = {} }) {
  const base = {
    width: "100%", border: "none", borderRadius: 10, padding: "14px 20px",
    fontFamily: C.pixelFont, fontSize: 9, letterSpacing: 1,
    cursor: "pointer", transition: "transform 0.1s, opacity 0.15s",
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
    lineHeight: 1.6,
  };
  const variants = {
    primary: { background: C.ember, color: "#fff", borderBottom: `3px solid ${C.emberDark}` },
    ghost:   { background: "transparent", color: C.inkSoft, border: `1px solid ${C.border}` },
    green:   { background: C.verified, color: "#fff", borderBottom: `3px solid #145E34` },
    dark:    { background: C.ink, color: C.sun, borderBottom: `3px solid #000` },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseDown={e => e.currentTarget.style.transform = "translateY(2px)"}
      onMouseUp={e => e.currentTarget.style.transform = "none"}
    >{children}</button>
  );
}

function SectionLabel({ children, style = {} }) {
  return (
    <div style={{
      fontFamily: C.pixelFont, fontSize: 8, color: C.inkFaint,
      letterSpacing: 2, textTransform: "uppercase",
      marginBottom: 10, ...style,
    }}>{children}</div>
  );
}

function Card({ children, style = {}, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: C.card, border: `1px solid ${C.border}`,
        borderRadius: 14, padding: "16px 18px",
        cursor: onClick ? "pointer" : "default",
        transition: onClick ? "box-shadow 0.15s, transform 0.15s" : "none",
        ...style,
      }}
      onMouseEnter={onClick ? e => {
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(-1px)";
      } : undefined}
      onMouseLeave={onClick ? e => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      } : undefined}
    >{children}</div>
  );
}

function Badge({ children, color = C.verified, style = {} }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      background: color + "18", color,
      border: `1px solid ${color}40`,
      borderRadius: 5, padding: "2px 8px",
      fontSize: 10, fontWeight: 700,
      fontFamily: C.bodyFont, ...style,
    }}>{children}</span>
  );
}

function FormInput({ label, placeholder, type = "text", value, helpText, style = {} }) {
  const [val, setVal] = useState(value || "");
  return (
    <div style={{ marginBottom: 14, ...style }}>
      {label && (
        <label style={{ display: "block", fontSize: 11, fontWeight: 700,
          color: C.inkMid, marginBottom: 5, letterSpacing: 0.3 }}>{label}</label>
      )}
      <input
        type={type}
        value={val}
        onChange={e => setVal(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%", background: C.bg, border: `1px solid ${C.border}`,
          borderRadius: 9, padding: "11px 14px", fontSize: 14,
          fontFamily: C.bodyFont, color: C.ink, outline: "none",
          boxSizing: "border-box", transition: "border-color 0.15s",
        }}
        onFocus={e => e.target.style.borderColor = C.ember}
        onBlur={e => e.target.style.borderColor = C.border}
      />
      {helpText && (
        <div style={{ fontSize: 11, color: C.inkFaint, marginTop: 4 }}>{helpText}</div>
      )}
    </div>
  );
}

function UploadBox({ icon, label, sublabel, accent = false }) {
  const [uploaded, setUploaded] = useState(false);
  return (
    <div
      onClick={() => setUploaded(true)}
      style={{
        border: `2px dashed ${uploaded ? C.verified : C.border}`,
        borderRadius: 12, padding: "20px 16px", textAlign: "center",
        cursor: "pointer", transition: "all 0.2s",
        background: uploaded ? C.verifiedBg : C.surface,
        marginBottom: 10,
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 6 }}>{uploaded ? "✅" : icon}</div>
      <div style={{ fontWeight: 600, fontSize: 13, color: C.ink }}>
        {uploaded ? "Uploaded successfully" : label}
      </div>
      <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 3 }}>
        {uploaded ? "Tap to replace" : sublabel}
      </div>
      {accent && !uploaded && (
        <div style={{ fontSize: 11, color: C.ember, fontWeight: 700, marginTop: 4 }}>
          Stored privately — never shown publicly
        </div>
      )}
    </div>
  );
}

function InfoBox({ icon, children, color = C.verified, style = {} }) {
  return (
    <div style={{
      background: color + "0E", border: `1px solid ${color}33`,
      borderRadius: 10, padding: "10px 14px",
      display: "flex", gap: 10, alignItems: "flex-start",
      fontSize: 12, color: color === C.verified ? "#1A5C38" : C.inkMid,
      fontWeight: 500, lineHeight: 1.6, ...style,
    }}>
      <span style={{ fontSize: 16, flexShrink: 0 }}>{icon}</span>
      <div>{children}</div>
    </div>
  );
}

// ─── SCREEN COMPONENTS ────────────────────────────────────────────────────────

function ScreenSplash({ onNext }) {
  const [tick, setTick] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setTick(v => !v), 700);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{
      background: C.night, minHeight: "100%",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", padding: "20px 0",
    }}>
      {/* pixel starfield */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${(i * 37 + 11) % 100}%`,
            top: `${(i * 53 + 7) % 55}%`,
            width: i % 4 === 0 ? 3 : 2,
            height: i % 4 === 0 ? 3 : 2,
            background: i % 5 === 0 ? "#FFFFAA" : "#FFFFFF",
            opacity: 0.4 + (i % 3) * 0.2,
            imageRendering: "pixelated",
            animation: `twinkle ${1.5 + (i % 3) * 0.7}s step-end infinite`,
            animationDelay: `${(i * 0.13) % 2}s`,
          }} />
        ))}
      </div>

      <div style={{ width: "100%", marginBottom: 8 }}>
        <PixelBuildings />
      </div>

      {/* logo block */}
      <div style={{ textAlign: "center", padding: "0 24px", zIndex: 2 }}>
        <div style={{
          fontFamily: C.pixelFont, fontSize: 8, color: "#A09080",
          letterSpacing: 3, marginBottom: 10,
        }}>THERE ALWAYS</div>

        <div style={{ marginBottom: 6 }}>
          <span style={{
            fontFamily: C.pixelFont, fontSize: 28, color: "#FFF",
            textShadow: `3px 3px 0 ${C.sunDark}, -1px -1px 0 ${C.sunDark}`,
            display: "inline",
          }}>ONE</span>
          <span style={{
            fontFamily: C.pixelFont, fontSize: 28, color: C.sun,
            textShadow: `3px 3px 0 ${C.sunDark}`,
            display: "inline",
          }}>for</span>
          <span style={{
            fontFamily: C.pixelFont, fontSize: 28, color: C.ember,
            textShadow: `3px 3px 0 ${C.emberDark}`,
            display: "inline",
          }}>Juan</span>
        </div>

        <div style={{
          fontFamily: C.pixelFont, fontSize: 7, color: "#706858",
          letterSpacing: 2, marginBottom: 28,
        }}>FAVOR QUEST · NCR EDITION</div>

        {/* start button */}
        <button
          onClick={onNext}
          style={{
            fontFamily: C.pixelFont, fontSize: 9,
            background: C.ember, color: "#fff",
            border: "none", padding: "14px 32px",
            borderBottom: `4px solid ${C.emberDark}`,
            borderRight: `4px solid ${C.emberDark}`,
            cursor: "pointer", letterSpacing: 2,
            opacity: tick ? 1 : 0.5, transition: "opacity 0s",
            imageRendering: "pixelated",
          }}
          onMouseDown={e => { e.currentTarget.style.transform = "translate(2px,2px)"; e.currentTarget.style.borderBottomWidth = "2px"; e.currentTarget.style.borderRightWidth = "2px"; }}
          onMouseUp={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderBottomWidth = "4px"; e.currentTarget.style.borderRightWidth = "4px"; }}
        >▶  START GAME</button>

        <div style={{ marginTop: 16, fontFamily: C.pixelFont, fontSize: 6, color: "#504838", letterSpacing: 1 }}>
          v1.0.0 · METRO MANILA PILOT
        </div>
      </div>
    </div>
  );
}

function ScreenOnboarding({ onNext }) {
  const [slide, setSlide] = useState(0);
  const slides = [
    {
      sprite: <SpriteHero size={90} outfit="bayani" skinTone="#E8A060" />,
      title: "Be a Bayani",
      body: "Head to a nearby mall, LTO, or market — and earn by helping people with tasks you're already doing.",
      accent: C.verified,
      bg: C.verifiedBg,
    },
    {
      sprite: <SpriteLakan size={90} skinTone="#C87848" />,
      title: "Or be a Lakan",
      body: "Find a verified Bayani near your target location. Post a detailed quest, set your offer, and wait for confirmation.",
      accent: C.sun,
      bg: C.sunLight,
    },
    {
      sprite: (
        <div style={{ position: "relative", width: 90, display: "flex", justifyContent: "center" }}>
          <SpriteHero size={70} outfit="bayani" skinTone="#E8A060" />
          <div style={{ position: "absolute", right: 0, bottom: 0 }}>
            <SpriteLakan size={70} skinTone="#C87848" />
          </div>
        </div>
      ),
      title: "Safe. Verified. Always.",
      body: "Every user — Bayani and Lakan — is ID-verified before any quest can be posted or accepted. No strangers. No surprises.",
      accent: C.ember,
      bg: C.emberLight,
    },
  ];
  const s = slides[slide];

  return (
    <div style={{ minHeight: "100%", display: "flex", flexDirection: "column", background: C.bg }}>
      {/* progress dots */}
      <div style={{ display: "flex", gap: 6, padding: "20px 24px 0", justifyContent: "center" }}>
        {slides.map((_, i) => (
          <div key={i} style={{
            width: i === slide ? 24 : 8, height: 8,
            background: i === slide ? s.accent : C.border,
            borderRadius: 2, transition: "all 0.3s",
            imageRendering: "pixelated",
          }} />
        ))}
      </div>

      {/* content */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "24px 28px",
        animation: "fadeSlide 0.3s ease",
      }}>
        <div style={{
          background: s.bg, border: `2px solid ${s.accent}30`,
          borderRadius: 20, padding: "32px 24px",
          width: "100%", textAlign: "center",
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            {s.sprite}
          </div>
          <div style={{
            fontFamily: C.pixelFont, fontSize: 13, color: C.ink,
            marginBottom: 14, lineHeight: 1.7,
          }}>{s.title}</div>
          <div style={{ fontSize: 14, color: C.inkMid, lineHeight: 1.7, fontWeight: 500 }}>
            {s.body}
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, width: "100%" }}>
          {slide > 0 && (
            <PxBtn variant="ghost" onClick={() => setSlide(s => s - 1)} style={{ flex: "0 0 auto", width: "auto", padding: "14px 20px" }}>←</PxBtn>
          )}
          <PxBtn onClick={() => slide < slides.length - 1 ? setSlide(s => s + 1) : onNext()}>
            {slide < slides.length - 1 ? "NEXT →" : "GET STARTED →"}
          </PxBtn>
        </div>

        {slide < slides.length - 1 && (
          <button onClick={onNext} style={{
            marginTop: 12, background: "none", border: "none",
            fontSize: 12, color: C.inkFaint, cursor: "pointer",
            fontFamily: C.bodyFont,
          }}>Skip intro</button>
        )}
      </div>
    </div>
  );
}

function ScreenVerifyStep1({ onNext }) {
  return (
    <div style={{ background: C.bg, minHeight: "100%" }}>
      {/* header */}
      <div style={{ background: C.ink, padding: "20px 24px 16px" }}>
        <div style={{ fontFamily: C.pixelFont, fontSize: 9, color: C.sun, marginBottom: 2 }}>
          ONEforJuan
        </div>
        <div style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", letterSpacing: 1 }}>
          IDENTITY QUEST
        </div>
      </div>

      {/* step bar */}
      <VerifyStepBar current={1} />

      <div style={{ padding: "20px 20px 100px" }}>
        <SectionLabel style={{ marginBottom: 14 }}>Step 1 of 3 — Basic Info</SectionLabel>

        <Card style={{ marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 18 }}>👤</span>
            <span style={{ fontFamily: C.pixelFont, fontSize: 8, color: C.ink }}>Your Details</span>
          </div>
          <FormInput label="Full Name (as on ID)" placeholder="e.g. Maria Santos dela Cruz" value="Seph Reyes" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormInput label="Mobile Number" placeholder="+63 9XX XXX XXXX" value="+63 917 xxx xxxx" />
            <FormInput label="Home Barangay" placeholder="Brgy. San Mateo" value="Brgy. Sto. Nino" />
          </div>
          <FormInput label="City / Municipality" placeholder="e.g. Quezon City" value="San Mateo, Rizal" style={{ marginBottom: 0 }} />
        </Card>

        <Card style={{ marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: 18 }}>📷</span>
            <span style={{ fontFamily: C.pixelFont, fontSize: 8, color: C.ink }}>Your Face Photo</span>
          </div>
          <UploadBox icon="🤳" label="Upload a clear selfie" sublabel="No filters. Face fully visible. Good lighting." accent />
        </Card>

        <InfoBox icon="🔒" style={{ marginBottom: 20 }}>
          Your real photo and ID are only revealed to the other party <strong>after a task is accepted</strong> — never before. On the public map you appear as your pixel character only.
        </InfoBox>

        <PxBtn onClick={onNext}>NEXT: UPLOAD ID →</PxBtn>
      </div>
    </div>
  );
}

function VerifyStepBar({ current }) {
  const steps = ["Identity", "ID Check", "Face Match"];
  return (
    <div style={{ background: C.card, borderBottom: `1px solid ${C.border}`, padding: "14px 24px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : "none" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%",
                background: i + 1 < current ? C.verified : i + 1 === current ? C.ember : C.borderSoft,
                color: i + 1 <= current ? "#fff" : C.inkFaint,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: C.pixelFont, fontSize: 8,
                border: `1px solid ${i + 1 < current ? C.verified : i + 1 === current ? C.ember : C.border}`,
                zIndex: 1, position: "relative",
              }}>
                {i + 1 < current ? "✓" : i + 1}
              </div>
              <div style={{
                fontFamily: C.pixelFont, fontSize: 6,
                color: i + 1 === current ? C.ember : i + 1 < current ? C.verified : C.inkFaint,
                letterSpacing: 0.5,
              }}>{s}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{
                flex: 1, height: 2,
                background: i + 1 < current ? C.verified : C.borderSoft,
                margin: "0 6px", marginBottom: 16,
                transition: "background 0.3s",
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenVerifyStep2({ onNext, onBack }) {
  const [selectedId, setSelectedId] = useState("philsys");
  const idTypes = [
    { id: "philsys", icon: "🪪", label: "PhilSys" },
    { id: "license", icon: "🚗", label: "Driver's License" },
    { id: "passport", icon: "📘", label: "Passport" },
    { id: "umid", icon: "🏢", label: "UMID / SSS" },
    { id: "postal", icon: "📮", label: "Postal ID" },
    { id: "voters", icon: "🗳️", label: "Voter's ID" },
  ];
  return (
    <div style={{ background: C.bg, minHeight: "100%" }}>
      <div style={{ background: C.ink, padding: "20px 24px 16px" }}>
        <button onClick={onBack} style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", background: "none", border: "none", cursor: "pointer", marginBottom: 8, letterSpacing: 1 }}>← BACK</button>
        <div style={{ fontFamily: C.pixelFont, fontSize: 9, color: C.sun }}>ONEforJuan</div>
        <div style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", letterSpacing: 1 }}>IDENTITY QUEST</div>
      </div>
      <VerifyStepBar current={2} />
      <div style={{ padding: "20px 20px 100px" }}>
        <SectionLabel style={{ marginBottom: 14 }}>Step 2 of 3 — Government ID</SectionLabel>

        <Card style={{ marginBottom: 14 }}>
          <SectionLabel style={{ marginBottom: 10 }}>Choose ID Type</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 0 }}>
            {idTypes.map(id => (
              <div
                key={id.id}
                onClick={() => setSelectedId(id.id)}
                style={{
                  background: selectedId === id.id ? C.emberLight : C.surface,
                  border: `1px solid ${selectedId === id.id ? C.ember : C.border}`,
                  borderRadius: 9, padding: "10px 12px",
                  cursor: "pointer", display: "flex", alignItems: "center", gap: 8,
                  fontSize: 13, fontWeight: 500,
                  color: selectedId === id.id ? C.ember : C.inkMid,
                  transition: "all 0.15s",
                }}
              >
                <span style={{ fontSize: 16 }}>{id.icon}</span>
                {id.label}
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ marginBottom: 14 }}>
          <SectionLabel style={{ marginBottom: 12 }}>Upload ID Photos</SectionLabel>
          <UploadBox icon="🪪" label="Front of ID" sublabel="All 4 corners visible. No glare or blur." />
          <UploadBox icon="🔄" label="Back of ID" sublabel="Required for most ID types." />
        </Card>

        <InfoBox icon="⏱️" color={C.sun} style={{ marginBottom: 20 }}>
          Manual review typically takes <strong>1–4 hours</strong>. You'll receive an SMS once approved. You can browse the app while waiting.
        </InfoBox>

        <PxBtn onClick={onNext}>NEXT: FACE MATCH →</PxBtn>
        <PxBtn variant="ghost" onClick={onBack} style={{ marginTop: 8 }}>← Back</PxBtn>
      </div>
    </div>
  );
}

function ScreenVerifyStep3({ onNext, onBack }) {
  const [scanning, setScanning] = useState(false);
  const [done, setDone] = useState(false);
  const [tick, setTick] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setTick(v => !v), 600);
    return () => clearInterval(t);
  }, []);

  function startScan() {
    setScanning(true);
    setTimeout(() => { setScanning(false); setDone(true); }, 2500);
  }

  return (
    <div style={{ background: C.bg, minHeight: "100%" }}>
      <div style={{ background: C.ink, padding: "20px 24px 16px" }}>
        <button onClick={onBack} style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", background: "none", border: "none", cursor: "pointer", marginBottom: 8, letterSpacing: 1 }}>← BACK</button>
        <div style={{ fontFamily: C.pixelFont, fontSize: 9, color: C.sun }}>ONEforJuan</div>
        <div style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", letterSpacing: 1 }}>IDENTITY QUEST</div>
      </div>
      <VerifyStepBar current={3} />
      <div style={{ padding: "20px 20px 100px" }}>
        <SectionLabel style={{ marginBottom: 14 }}>Step 3 of 3 — Face Match</SectionLabel>

        <Card style={{ textAlign: "center", padding: "28px 20px", marginBottom: 14 }}>
          {/* pixel face scan */}
          <div style={{
            width: 130, height: 130, margin: "0 auto 16px",
            border: `4px solid ${done ? C.verified : scanning ? C.sun : C.border}`,
            borderRadius: 14, background: C.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", transition: "border-color 0.4s",
          }}>
            <svg width="80" height="88" viewBox="0 0 40 44" style={{ imageRendering: "pixelated" }}>
              <rect x="10" y="4" width="20" height="16" fill="#E8A060" />
              <rect x="8" y="2" width="24" height="5" fill={C.ink} />
              <rect x="14" y="9" width="5" height="5" fill={C.ink} />
              <rect x="21" y="9" width="5" height="5" fill={C.ink} />
              <rect x="15" y="10" width="3" height="3" fill="#4080F0" />
              <rect x="22" y="10" width="3" height="3" fill="#4080F0" />
              <rect x="15" y="17" width="10" height="2" fill="#B06848" />
              <rect x="10" y="20" width="20" height="14" fill="#2060D0" />
              <rect x="4" y="22" width="7" height="10" fill="#2060D0" />
              <rect x="29" y="22" width="7" height="10" fill="#2060D0" />
              <rect x="12" y="34" width="7" height="10" fill="#7A5020" />
              <rect x="21" y="34" width="7" height="10" fill="#7A5020" />
            </svg>
            {/* scan overlay */}
            {scanning && (
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: "60%", background: `${C.sun}30`,
                animation: "scanLine 1.2s linear infinite",
                borderBottom: `2px solid ${C.sun}`,
              }} />
            )}
            {done && (
              <div style={{
                position: "absolute", inset: 0, borderRadius: 10,
                background: `${C.verified}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 40 }}>✅</span>
              </div>
            )}
          </div>

          <div style={{ fontFamily: C.pixelFont, fontSize: 9, color: C.ink, marginBottom: 8, lineHeight: 1.8 }}>
            {done ? "MATCH CONFIRMED!" : scanning ? "SCANNING..." : "READY TO SCAN"}
          </div>
          <div style={{ fontSize: 13, color: C.inkMid, lineHeight: 1.6, marginBottom: 20 }}>
            {done
              ? "Your face matches your ID. Verification complete."
              : "We'll compare your selfie against your uploaded ID to confirm it's really you."
            }
          </div>

          {!done && !scanning && (
            <PxBtn variant="green" onClick={startScan}>START FACE SCAN</PxBtn>
          )}
          {scanning && (
            <div style={{
              fontFamily: C.pixelFont, fontSize: 8, color: C.sun,
              opacity: tick ? 1 : 0.3, transition: "opacity 0s",
            }}>SCANNING FACE...</div>
          )}
        </Card>

        <InfoBox icon="✅" style={{ marginBottom: 20 }}>
          After approval you'll unlock your pixel character and be able to choose your role. Your real face is <strong>never shown on the public map</strong>.
        </InfoBox>

        {done && <PxBtn onClick={onNext}>SUBMIT & ENTER WORLD →</PxBtn>}
        {!done && <PxBtn variant="ghost" onClick={onBack} style={{ marginTop: 8 }}>← Back</PxBtn>}
      </div>
    </div>
  );
}

function ScreenVerifyApproved({ onNext }) {
  const [revealed, setRevealed] = useState(false);
  const skinTones = ["#E8A060", "#C87848", "#A05028", "#D4A878", "#F0C898"];
  const [skin, setSkin] = useState(0);

  return (
    <div style={{ background: C.ink, minHeight: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 24px 60px" }}>
      {/* confetti-like pixel burst */}
      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", marginBottom: 24 }}>
        {!revealed ? (
          <div style={{
            width: 120, height: 120, background: C.sunLight,
            borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
            border: `4px solid ${C.sun}`, cursor: "pointer",
            fontSize: 48, animation: "popIn 0.4s both",
          }} onClick={() => setRevealed(true)}>
            ?
          </div>
        ) : (
          <div style={{ animation: "popIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275) both" }}>
            <SpriteHero size={100} outfit="bayani" skinTone={skinTones[skin]} />
          </div>
        )}
      </div>

      {!revealed ? (
        <>
          <div style={{ fontFamily: C.pixelFont, fontSize: 12, color: C.sun, textAlign: "center", marginBottom: 12, lineHeight: 1.8 }}>
            VERIFICATION<br />APPROVED!
          </div>
          <div style={{ fontSize: 14, color: "#A09080", textAlign: "center", marginBottom: 24, lineHeight: 1.6 }}>
            Welcome to ONEforJuan.<br />Tap below to reveal your pixel character.
          </div>
          <PxBtn onClick={() => setRevealed(true)}>REVEAL MY CHARACTER ✨</PxBtn>
        </>
      ) : (
        <>
          <div style={{ fontFamily: C.pixelFont, fontSize: 11, color: C.sun, textAlign: "center", marginBottom: 8, lineHeight: 1.8 }}>
            MEET YOUR<br />PIXEL SELF!
          </div>
          <Badge color={C.verified} style={{ marginBottom: 16, fontSize: 11 }}>
            <VerifiedShield size={13} /> Verified Account
          </Badge>
          <div style={{ fontSize: 13, color: "#A09080", textAlign: "center", marginBottom: 16, lineHeight: 1.6 }}>
            Choose your skin tone:
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
            {skinTones.map((t, i) => (
              <div
                key={i}
                onClick={() => setSkin(i)}
                style={{
                  width: 32, height: 32, borderRadius: 6,
                  background: t, cursor: "pointer",
                  border: `3px solid ${i === skin ? C.sun : "transparent"}`,
                  imageRendering: "pixelated",
                  transition: "border-color 0.15s",
                }}
              />
            ))}
          </div>

          <div style={{
            background: C.nightMid, borderRadius: 12, padding: "14px 18px",
            width: "100%", marginBottom: 24, border: `1px solid #2A2820`,
          }}>
            {[
              ["Name", "Seph Reyes"],
              ["ID Verified", "PhilSys ✓"],
              ["Status", "Active"],
              ["Level", "1 — Bago"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13 }}>
                <span style={{ color: "#706050", fontWeight: 600 }}>{k}</span>
                <span style={{ color: "#EEE0C0", fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>

          <PxBtn onClick={onNext}>ENTER THE WORLD →</PxBtn>
        </>
      )}
    </div>
  );
}

function ScreenRoleSelect({ onBayani, onLakan }) {
  const [selected, setSelected] = useState(null);
  const [tick, setTick] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setTick(v => !v), 800);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: C.bg, minHeight: "100%", display: "flex", flexDirection: "column" }}>
      {/* dark header */}
      <div style={{ background: C.ink, padding: "18px 24px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", letterSpacing: 1, marginBottom: 3 }}>
              GOOD MORNING, PLAYER
            </div>
            <div style={{ fontFamily: C.pixelFont, fontSize: 11, color: C.sun }}>SEPH REYES</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              background: "#2A2010", border: `1px solid ${C.sun}55`,
              borderRadius: 6, padding: "4px 10px",
              fontFamily: C.pixelFont, fontSize: 7, color: C.sun,
            }}>
              LVL 3 · Tapat na Tao
            </div>
            <div style={{ fontSize: 11, color: "#706050", marginTop: 4 }}>🔥 5-week streak</div>
          </div>
        </div>

        {/* live stats */}
        <div style={{ display: "flex", marginTop: 14, background: "#1A1810", borderRadius: 10, overflow: "hidden" }}>
          {[["61", "Bayanis online"], ["8", "Open quests"], ["₱340", "Avg earned today"]].map(([v, l], i) => (
            <div key={i} style={{
              flex: 1, textAlign: "center", padding: "10px 6px",
              borderRight: i < 2 ? `1px solid #2A2820` : "none",
            }}>
              <div style={{ fontFamily: C.pixelFont, fontSize: 12, color: C.sun }}>{v}</div>
              <div style={{ fontSize: 9, color: "#706050", marginTop: 2, lineHeight: 1.4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, padding: "20px 20px", overflowY: "auto" }}>
        <div style={{
          fontFamily: C.pixelFont, fontSize: 10, color: C.ink,
          textAlign: "center", marginBottom: 20, lineHeight: 1.8,
        }}>WHO ARE YOU TODAY?</div>

        {/* role cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
          {/* BAYANI */}
          <div
            onClick={() => setSelected("bayani")}
            style={{
              background: C.card, borderRadius: 16, padding: "20px 14px 16px",
              border: `2px solid ${selected === "bayani" ? C.verified : C.border}`,
              cursor: "pointer", transition: "all 0.2s", textAlign: "center",
              position: "relative", overflow: "hidden",
              boxShadow: selected === "bayani" ? `0 0 0 3px ${C.verified}20` : "none",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 4,
              background: `linear-gradient(90deg, ${C.verified}, #40CC80)`,
            }} />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
              <SpriteHero size={72} outfit="bayani" skinTone="#E8A060" />
            </div>
            <div style={{ fontFamily: C.pixelFont, fontSize: 8, color: C.ink, marginBottom: 6 }}>
              BAYANI
            </div>
            <div style={{ fontSize: 11, color: C.inkSoft, lineHeight: 1.5, marginBottom: 10 }}>
              I'm ready to help someone today
            </div>
            <Badge color={C.verified} style={{ fontSize: 10 }}>Earn rewards</Badge>
          </div>

          {/* LAKAN */}
          <div
            onClick={() => setSelected("lakan")}
            style={{
              background: C.card, borderRadius: 16, padding: "20px 14px 16px",
              border: `2px solid ${selected === "lakan" ? C.sun : C.border}`,
              cursor: "pointer", transition: "all 0.2s", textAlign: "center",
              position: "relative", overflow: "hidden",
              boxShadow: selected === "lakan" ? `0 0 0 3px ${C.sun}20` : "none",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 4,
              background: `linear-gradient(90deg, ${C.sun}, ${C.ember})`,
            }} />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
              <SpriteLakan size={72} skinTone="#C87848" />
            </div>
            <div style={{ fontFamily: C.pixelFont, fontSize: 8, color: C.ink, marginBottom: 6 }}>
              LAKAN
            </div>
            <div style={{ fontSize: 11, color: C.inkSoft, lineHeight: 1.5, marginBottom: 10 }}>
              I need a Bayani's help today
            </div>
            <Badge color={C.sun} style={{ fontSize: 10 }}>Post a quest</Badge>
          </div>
        </div>

        {/* rules reminder */}
        <Card style={{ marginBottom: 16, padding: "14px 16px" }}>
          <div style={{ fontFamily: C.pixelFont, fontSize: 7, color: C.inkSoft, marginBottom: 10, letterSpacing: 1 }}>
            SAFETY RULES · ALWAYS APPLY
          </div>
          {[
            ["🏛️", "Bayanis only pin to public landmarks"],
            ["📋", "All tasks must be fully itemized"],
            ["🚫", "No picking up from strangers — ever"],
            ["✅", "Both sides verified before any quest"],
          ].map(([ic, txt]) => (
            <div key={txt} style={{ display: "flex", gap: 10, marginBottom: 8, fontSize: 12, color: C.inkMid, alignItems: "flex-start" }}>
              <span style={{ fontSize: 14, flexShrink: 0 }}>{ic}</span>
              <span>{txt}</span>
            </div>
          ))}
        </Card>

        {selected && (
          <PxBtn
            onClick={selected === "bayani" ? onBayani : onLakan}
            variant={selected === "bayani" ? "green" : "primary"}
            style={{ animation: "popIn 0.25s both" }}
          >
            ENTER AS {selected.toUpperCase()} →
          </PxBtn>
        )}
      </div>
    </div>
  );
}

// ─── BOTTOM NAV ───────────────────────────────────────────────────────────────
function BottomNav({ active = "map", mode = "bayani", onNav }) {
  const items = [
    { id: "map", label: "MAP", icon: "⊞" },
    { id: "quests", label: "QUESTS", icon: "⚔" },
    { id: "wallet", label: "WALLET", icon: "◈" },
    { id: "profile", label: "PROFILE", icon: "◉" },
  ];
  return (
    <div style={{
      position: "sticky", bottom: 0,
      background: C.ink, borderTop: `2px solid #2A2820`,
      display: "flex", padding: "8px 0 16px", zIndex: 50,
    }}>
      {items.map(item => (
        <button
          key={item.id}
          onClick={() => onNav && onNav(item.id)}
          style={{
            flex: 1, background: "none", border: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            padding: "4px 0",
          }}
        >
          <div style={{
            width: 34, height: 26, borderRadius: 8,
            background: active === item.id ? (mode === "bayani" ? C.verified + "22" : C.sun + "22") : "transparent",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16,
            color: active === item.id ? (mode === "bayani" ? C.verified : C.sun) : "#504838",
            transition: "all 0.15s",
          }}>
            {item.icon}
          </div>
          <div style={{
            fontFamily: C.pixelFont, fontSize: 6, letterSpacing: 0.5,
            color: active === item.id ? (mode === "bayani" ? C.verified : C.sun) : "#504838",
          }}>{item.label}</div>
        </button>
      ))}
    </div>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
const FLOW = [
  "splash", "onboarding", "verify1", "verify2", "verify3",
  "approved", "roleselect",
  // bayani branch
  "bayani_map",
  // lakan branch
  "lakan_map",
];

export default function ONEforJuan() {
  const [screen, setScreen] = useState("splash");
  const [navActive, setNavActive] = useState("map");
  const showNav = ["bayani_map", "lakan_map"].includes(screen);
  const mode = screen.startsWith("bayani") ? "bayani" : "lakan";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #D8D1C7; border-radius: 4px; }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0% { transform: scale(0.85); opacity: 0; }
          70% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; } 50% { opacity: 0.2; }
        }
        @keyframes scanLine {
          0% { height: 0%; top: 0; }
          50% { height: 60%; top: 0; }
          100% { height: 0%; top: 100%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
      `}</style>

      <div style={{
        fontFamily: C.bodyFont,
        background: C.bg,
        maxWidth: 480,
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 0 60px rgba(0,0,0,0.15)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>

          {screen === "splash" && (
            <ScreenSplash onNext={() => setScreen("onboarding")} />
          )}
          {screen === "onboarding" && (
            <ScreenOnboarding onNext={() => setScreen("verify1")} />
          )}
          {screen === "verify1" && (
            <ScreenVerifyStep1 onNext={() => setScreen("verify2")} />
          )}
          {screen === "verify2" && (
            <ScreenVerifyStep2
              onNext={() => setScreen("verify3")}
              onBack={() => setScreen("verify1")}
            />
          )}
          {screen === "verify3" && (
            <ScreenVerifyStep3
              onNext={() => setScreen("approved")}
              onBack={() => setScreen("verify2")}
            />
          )}
          {screen === "approved" && (
            <ScreenVerifyApproved onNext={() => setScreen("roleselect")} />
          )}
          {screen === "roleselect" && (
            <ScreenRoleSelect
              onBayani={() => setScreen("bayani_map")}
              onLakan={() => setScreen("lakan_map")}
            />
          )}

          {/* placeholder screens for batch 2 & 3 */}
          {screen === "bayani_map" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ background: C.ink, padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button onClick={() => setScreen("roleselect")} style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", background: "none", border: "none", cursor: "pointer", letterSpacing: 1 }}>← SWITCH ROLE</button>
                <div style={{ fontFamily: C.pixelFont, fontSize: 7, color: C.verified, background: C.verified + "18", border: `1px solid ${C.verified}`, borderRadius: 4, padding: "4px 10px" }}>BAYANI MODE</div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, gap: 16, background: C.bg }}>
                <SpriteHero size={80} outfit="bayani" />
                <div style={{ fontFamily: C.pixelFont, fontSize: 10, color: C.ink, textAlign: "center", lineHeight: 1.8 }}>BAYANI MAP</div>
                <div style={{ fontSize: 13, color: C.inkSoft, textAlign: "center", lineHeight: 1.6 }}>Full Bayani flow coming in Batch 2 — Map, Spot Declaration, Quest Cards, Task Execution, Earnings.</div>
                <PxBtn variant="green" onClick={() => setScreen("roleselect")}>← Back to Role Select</PxBtn>
              </div>
            </div>
          )}

          {screen === "lakan_map" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ background: C.ink, padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button onClick={() => setScreen("roleselect")} style={{ fontFamily: C.pixelFont, fontSize: 7, color: "#706050", background: "none", border: "none", cursor: "pointer", letterSpacing: 1 }}>← SWITCH ROLE</button>
                <div style={{ fontFamily: C.pixelFont, fontSize: 7, color: C.sun, background: C.sun + "18", border: `1px solid ${C.sun}`, borderRadius: 4, padding: "4px 10px" }}>LAKAN MODE</div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, gap: 16, background: C.bg }}>
                <SpriteLakan size={80} />
                <div style={{ fontFamily: C.pixelFont, fontSize: 10, color: C.ink, textAlign: "center", lineHeight: 1.8 }}>LAKAN MAP</div>
                <div style={{ fontSize: 13, color: C.inkSoft, textAlign: "center", lineHeight: 1.6 }}>Full Lakan flow coming in Batch 3 — Map Browse, Bayani Selection, Quest Builder, Live Tracking, Completion.</div>
                <PxBtn onClick={() => setScreen("roleselect")}>← Back to Role Select</PxBtn>
              </div>
            </div>
          )}

        </div>

        {showNav && (
          <BottomNav active={navActive} mode={mode} onNav={setNavActive} />
        )}
      </div>
    </>
  );
}
