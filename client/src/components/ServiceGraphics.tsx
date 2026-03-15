/* ==========================================================================
   SERVICE GRAPHICS, Unique animated SVG illustrations for each service page
   Brand: Navy #04315b · Yellow #ffdb14 · Off-white #F8F7F3
   Each graphic is self-contained, interactive, and animated
   ========================================================================== */

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

/* ── Shared animation helpers ── */
const pulse = {
  animate: { scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
};

/* ══════════════════════════════════════════════════════════
   1. LOCAL SEO, Google Maps pin cluster with rank rings
   ══════════════════════════════════════════════════════════ */
export function LocalSEOGraphic() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);

  const pins = [
    { cx: 160, cy: 120, rank: "#1", size: 1.2 },
    { cx: 260, cy: 180, rank: "#2", size: 1 },
    { cx: 100, cy: 220, rank: "#3", size: 0.9 },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 280" className="w-full h-auto drop-shadow-xl">
        {/* Map background */}
        <rect x="10" y="10" width="340" height="260" rx="16" fill="#F8F7F3" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.15" />

        {/* Grid lines */}
        {[60, 110, 160, 210].map((y) => (
          <line key={y} x1="10" y1={y} x2="350" y2={y} stroke="#04315b" strokeWidth="0.5" strokeOpacity="0.08" />
        ))}
        {[80, 140, 200, 260, 320].map((x) => (
          <line key={x} x1={x} y1="10" x2={x} y2="270" stroke="#04315b" strokeWidth="0.5" strokeOpacity="0.08" />
        ))}

        {/* Roads */}
        <path d="M10 155 Q120 140 180 155 Q240 170 350 150" stroke="#04315b" strokeWidth="6" strokeOpacity="0.08" fill="none" strokeLinecap="round" />
        <path d="M180 10 Q175 100 180 155 Q185 210 180 270" stroke="#04315b" strokeWidth="6" strokeOpacity="0.08" fill="none" strokeLinecap="round" />
        <path d="M10 155 Q120 140 180 155 Q240 170 350 150" stroke="white" strokeWidth="2" strokeOpacity="0.6" fill="none" strokeLinecap="round" strokeDasharray="8 6" />

        {/* Suburb blocks */}
        <rect x="30" y="30" width="60" height="40" rx="4" fill="#04315b" fillOpacity="0.05" />
        <rect x="200" y="50" width="80" height="50" rx="4" fill="#04315b" fillOpacity="0.05" />
        <rect x="220" y="190" width="100" height="55" rx="4" fill="#04315b" fillOpacity="0.05" />
        <rect x="30" y="180" width="55" height="60" rx="4" fill="#04315b" fillOpacity="0.05" />

        {/* Rank rings + pins */}
        {pins.map((pin, i) => (
          <g key={i}>
            {/* Pulse ring */}
            <motion.circle
              cx={pin.cx} cy={pin.cy} r={active === i ? 36 : 0}
              fill="none" stroke="#ffdb14" strokeWidth="2" strokeOpacity="0.5"
              animate={{ r: active === i ? [0, 36] : 0, opacity: active === i ? [1, 0] : 0 }}
              transition={{ duration: 1.2, repeat: active === i ? Infinity : 0 }}
            />
            <motion.circle
              cx={pin.cx} cy={pin.cy} r={active === i ? 22 : 0}
              fill="none" stroke="#ffdb14" strokeWidth="1.5" strokeOpacity="0.3"
              animate={{ r: active === i ? [0, 22] : 0, opacity: active === i ? [0.8, 0] : 0 }}
              transition={{ duration: 1.2, delay: 0.3, repeat: active === i ? Infinity : 0 }}
            />

            {/* Pin shadow */}
            <ellipse cx={pin.cx} cy={pin.cy + 22} rx={10 * pin.size} ry={4} fill="#04315b" fillOpacity="0.15" />

            {/* Pin body */}
            <motion.g
              animate={{ y: active === i ? [-4, 0, -4] : 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path
                d={`M${pin.cx} ${pin.cy + 18} C${pin.cx - 14 * pin.size} ${pin.cy + 5} ${pin.cx - 14 * pin.size} ${pin.cy - 14} ${pin.cx} ${pin.cy - 14} C${pin.cx + 14 * pin.size} ${pin.cy - 14} ${pin.cx + 14 * pin.size} ${pin.cy + 5} ${pin.cx} ${pin.cy + 18}Z`}
                fill={active === i ? "#ffdb14" : "#04315b"}
                stroke="white" strokeWidth="1.5"
              />
              <circle cx={pin.cx} cy={pin.cy - 2} r={5 * pin.size} fill="white" fillOpacity="0.9" />
              <text x={pin.cx} y={pin.cy + 1} textAnchor="middle" dominantBaseline="middle"
                fontSize={7 * pin.size} fontWeight="800" fill={active === i ? "#ffdb14" : "#04315b"}
                fontFamily="Plus Jakarta Sans, sans-serif"
              >
                {i + 1}
              </text>
            </motion.g>
          </g>
        ))}

        {/* Map pack card */}
        <rect x="200" y="12" width="140" height="70" rx="10" fill="white" stroke="#04315b" strokeWidth="1" strokeOpacity="0.15" filter="url(#shadow)" />
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#04315b" floodOpacity="0.1" />
          </filter>
        </defs>
        <text x="215" y="32" fontSize="7" fontWeight="700" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif">MAP PACK</text>
        {["Khalis Marketing", "Melbourne Plumber", "Local Tradie"].map((name, i) => (
          <g key={name}>
            <rect x="215" y={40 + i * 13} width="6" height="6" rx="1" fill={i === 0 ? "#ffdb14" : "#04315b"} fillOpacity={i === 0 ? 1 : 0.3} />
            <text x="225" y={47 + i * 13} fontSize="6.5" fill={i === 0 ? "#04315b" : "#888"} fontFamily="DM Sans, sans-serif" fontWeight={i === 0 ? "700" : "400"}>{name}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   2. TECHNICAL SEO, Crawl graph / site architecture
   ══════════════════════════════════════════════════════════ */
export function TechnicalSEOGraphic() {
  const nodes = [
    { id: "home", x: 180, y: 50, label: "Home", status: "ok" },
    { id: "services", x: 80, y: 130, label: "Services", status: "ok" },
    { id: "blog", x: 180, y: 130, label: "Blog", status: "warn" },
    { id: "contact", x: 280, y: 130, label: "Contact", status: "ok" },
    { id: "p1", x: 40, y: 210, label: "Page", status: "ok" },
    { id: "p2", x: 120, y: 210, label: "Page", status: "error" },
    { id: "p3", x: 200, y: 210, label: "Post", status: "ok" },
    { id: "p4", x: 280, y: 210, label: "Form", status: "ok" },
  ];
  const edges = [
    ["home", "services"], ["home", "blog"], ["home", "contact"],
    ["services", "p1"], ["services", "p2"], ["blog", "p3"], ["contact", "p4"],
  ];
  const getNode = (id: string) => nodes.find((n) => n.id === id)!;
  const colors = { ok: "#04315b", warn: "#ffdb14", error: "#ef4444" };

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 270" className="w-full h-auto">
        <rect x="5" y="5" width="350" height="260" rx="16" fill="#F8F7F3" stroke="#04315b" strokeWidth="1" strokeOpacity="0.12" />

        {/* Edges */}
        {edges.map(([a, b]) => {
          const na = getNode(a), nb = getNode(b);
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.2"
              strokeDasharray="4 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.g key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <circle cx={node.x} cy={node.y} r={22} fill="white" stroke={colors[node.status as keyof typeof colors]} strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r={18} fill={colors[node.status as keyof typeof colors]} fillOpacity="0.1" />
            <text x={node.x} y={node.y + 1} textAnchor="middle" dominantBaseline="middle"
              fontSize="7" fontWeight="700" fill={colors[node.status as keyof typeof colors]}
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              {node.label}
            </text>
            {/* Status dot */}
            <circle cx={node.x + 14} cy={node.y - 14} r={5} fill={colors[node.status as keyof typeof colors]} stroke="white" strokeWidth="1.5" />
          </motion.g>
        ))}

        {/* Legend */}
        <rect x="240" y="230" width="110" height="30" rx="8" fill="white" stroke="#04315b" strokeWidth="1" strokeOpacity="0.15" />
        {[["ok", "#04315b", "Healthy"], ["warn", "#ffdb14", "Warning"], ["error", "#ef4444", "Error"]].map(([, color, label], i) => (
          <g key={label}>
            <circle cx={252 + i * 37} cy={245} r={4} fill={color} />
            <text x={258 + i * 37} y={249} fontSize="6" fill="#666" fontFamily="DM Sans, sans-serif">{label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   3. ON-PAGE SEO, Document editor with keyword highlights
   ══════════════════════════════════════════════════════════ */
export function OnPageSEOGraphic() {
  const [highlighted, setHighlighted] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHighlighted((p) => (p + 1) % 4), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 280" className="w-full h-auto drop-shadow-xl">
        {/* Browser window */}
        <rect x="10" y="10" width="340" height="260" rx="14" fill="white" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.15" />
        {/* Browser chrome */}
        <rect x="10" y="10" width="340" height="36" rx="14" fill="#04315b" />
        <rect x="10" y="30" width="340" height="16" fill="#04315b" />
        <circle cx="30" cy="28" r="5" fill="white" fillOpacity="0.3" />
        <circle cx="48" cy="28" r="5" fill="white" fillOpacity="0.3" />
        <circle cx="66" cy="28" r="5" fill="white" fillOpacity="0.3" />
        <rect x="85" y="21" width="200" height="14" rx="7" fill="white" fillOpacity="0.15" />
        <text x="185" y="31" textAnchor="middle" fontSize="7" fill="white" fillOpacity="0.7" fontFamily="DM Sans, sans-serif">yoursite.com.au</text>

        {/* Score badge */}
        <rect x="270" y="55" width="70" height="50" rx="10" fill="#04315b" />
        <text x="305" y="73" textAnchor="middle" fontSize="8" fill="#ffdb14" fontFamily="DM Sans, sans-serif" fontWeight="700">SEO SCORE</text>
        <text x="305" y="93" textAnchor="middle" fontSize="22" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">94</text>

        {/* Title tag */}
        <rect x="20" y="55" width="235" height="22" rx="6" fill={highlighted === 0 ? "#ffdb14" : "#F8F7F3"} stroke="#04315b" strokeWidth="1" strokeOpacity="0.2" />
        <text x="28" y="64" fontSize="6" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700">TITLE TAG</text>
        <text x="28" y="72" fontSize="8" fill="#04315b" fontFamily="DM Sans, sans-serif">SEO Agency Melbourne | Khalis Marketing</text>

        {/* Meta description */}
        <rect x="20" y="83" width="235" height="28" rx="6" fill={highlighted === 1 ? "#ffdb14" : "#F8F7F3"} stroke="#04315b" strokeWidth="1" strokeOpacity="0.2" />
        <text x="28" y="92" fontSize="6" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700">META DESCRIPTION</text>
        <text x="28" y="101" fontSize="7" fill="#555" fontFamily="DM Sans, sans-serif">Melbourne's leading SEO agency. Get found on Google...</text>
        <text x="28" y="108" fontSize="7" fill="#555" fontFamily="DM Sans, sans-serif">No contracts. Free audit available.</text>

        {/* H1 */}
        <rect x="20" y="117" width="235" height="20" rx="6" fill={highlighted === 2 ? "#ffdb14" : "#F8F7F3"} stroke="#04315b" strokeWidth="1" strokeOpacity="0.2" />
        <text x="28" y="126" fontSize="6" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700">H1 HEADING</text>
        <text x="28" y="133" fontSize="9" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">Melbourne's SEO Agency</text>

        {/* Content lines with keyword highlights */}
        <rect x="20" y="143" width="235" height="60" rx="6" fill="#F8F7F3" stroke="#04315b" strokeWidth="1" strokeOpacity="0.12" />
        <text x="28" y="154" fontSize="6" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700">BODY CONTENT</text>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x="28" y={160 + i * 8} width={[180, 140, 160, 100, 120][i]} height="5" rx="2"
            fill={highlighted === 3 && i % 2 === 0 ? "#ffdb14" : "#04315b"} fillOpacity={highlighted === 3 && i % 2 === 0 ? 0.6 : 0.08}
          />
        ))}

        {/* Internal links */}
        <rect x="20" y="210" width="235" height="20" rx="6" fill="#04315b" fillOpacity="0.05" stroke="#04315b" strokeWidth="1" strokeOpacity="0.12" />
        <text x="28" y="219" fontSize="6" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700">INTERNAL LINKS</text>
        <text x="28" y="226" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" textDecoration="underline">Services</text>
        <text x="68" y="226" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" textDecoration="underline">Case Studies</text>
        <text x="120" y="226" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" textDecoration="underline">Contact</text>

        {/* Check marks */}
        {[55, 83, 117, 143, 210].map((y, i) => (
          <g key={y}>
            <circle cx={248} cy={y + 11} r={7} fill={i < 4 ? "#04315b" : "#04315b"} fillOpacity="0.9" />
            <path d={`M${244} ${y + 11} L${247} ${y + 14} L${252} ${y + 8}`} stroke="#ffdb14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   4. LINK BUILDING, Network graph of backlinks
   ══════════════════════════════════════════════════════════ */
export function LinkBuildingGraphic() {
  const center = { x: 180, y: 140 };
  const sources = [
    { x: 60, y: 60, label: "News", da: 78 },
    { x: 300, y: 55, label: "Industry", da: 65 },
    { x: 320, y: 190, label: "Directory", da: 52 },
    { x: 250, y: 240, label: "Partner", da: 44 },
    { x: 80, y: 230, label: "Blog", da: 38 },
    { x: 40, y: 155, label: "Forum", da: 31 },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 280" className="w-full h-auto">
        <rect x="5" y="5" width="350" height="270" rx="16" fill="#04315b" />
        {/* Stars */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={i} cx={20 + (i * 167) % 320} cy={15 + (i * 113) % 250} r={1} fill="white" fillOpacity={0.2 + (i % 3) * 0.15} />
        ))}

        {/* Link lines */}
        {sources.map((s, i) => (
          <motion.line
            key={i}
            x1={s.x} y1={s.y} x2={center.x} y2={center.y}
            stroke="#ffdb14" strokeWidth="1.5" strokeOpacity="0.4"
            strokeDasharray="5 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.15 }}
          />
        ))}

        {/* Source nodes */}
        {sources.map((s, i) => (
          <motion.g key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
          >
            <circle cx={s.x} cy={s.y} r={24} fill="white" fillOpacity="0.08" stroke="#ffdb14" strokeWidth="1" strokeOpacity="0.4" />
            <text x={s.x} y={s.y - 4} textAnchor="middle" fontSize="7" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="700">{s.label}</text>
            <text x={s.x} y={s.y + 7} textAnchor="middle" fontSize="8" fill="#ffdb14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">DA{s.da}</text>
          </motion.g>
        ))}

        {/* Center node, your site */}
        <motion.g animate={pulse.animate} transition={pulse.transition}>
          <circle cx={center.x} cy={center.y} r={40} fill="#ffdb14" fillOpacity="0.15" />
        </motion.g>
        <circle cx={center.x} cy={center.y} r={32} fill="#ffdb14" stroke="white" strokeWidth="2" />
        <text x={center.x} y={center.y - 6} textAnchor="middle" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700">YOUR</text>
        <text x={center.x} y={center.y + 5} textAnchor="middle" fontSize="8" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">SITE</text>
        <text x={center.x} y={center.y + 16} textAnchor="middle" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif">DA 58↑</text>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   5. SEO AUDIT, Checklist / health dashboard
   ══════════════════════════════════════════════════════════ */
export function SEOAuditGraphic() {
  const checks = [
    { label: "Site Speed", score: 94, status: "pass" },
    { label: "Mobile Friendly", score: 100, status: "pass" },
    { label: "Title Tags", score: 72, status: "warn" },
    { label: "Backlink Profile", score: 58, status: "warn" },
    { label: "Core Web Vitals", score: 88, status: "pass" },
    { label: "Broken Links", score: 30, status: "fail" },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 280" className="w-full h-auto drop-shadow-xl">
        <rect x="5" y="5" width="350" height="270" rx="16" fill="white" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.12" />

        {/* Header */}
        <rect x="5" y="5" width="350" height="44" rx="16" fill="#04315b" />
        <rect x="5" y="28" width="350" height="21" fill="#04315b" />
        <text x="24" y="32" fontSize="10" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">SEO AUDIT REPORT</text>
        <text x="24" y="43" fontSize="7" fill="white" fillOpacity="0.6" fontFamily="DM Sans, sans-serif">khalismarketing.com.au · March 2025</text>

        {/* Overall score ring */}
        <circle cx="300" cy="100" r="35" fill="none" stroke="#04315b" strokeWidth="2" strokeOpacity="0.1" />
        <motion.circle
          cx="300" cy="100" r="35"
          fill="none" stroke="#ffdb14" strokeWidth="5"
          strokeDasharray="220" strokeDashoffset="220"
          strokeLinecap="round"
          style={{ transformOrigin: "300px 100px", transform: "rotate(-90deg)" }}
          animate={{ strokeDashoffset: 220 * (1 - 0.82) }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
        <text x="300" y="96" textAnchor="middle" fontSize="20" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">82</text>
        <text x="300" y="108" textAnchor="middle" fontSize="7" fill="#888" fontFamily="DM Sans, sans-serif">/100</text>

        {/* Check items */}
        {checks.map((c, i) => {
          const barW = (c.score / 100) * 160;
          const color = c.status === "pass" ? "#04315b" : c.status === "warn" ? "#ffdb14" : "#ef4444";
          return (
            <g key={c.label}>
              <text x="24" y={68 + i * 34} fontSize="8" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="600">{c.label}</text>
              <rect x="24" y={73 + i * 34} width="160" height="8" rx="4" fill="#04315b" fillOpacity="0.08" />
              <motion.rect
                x="24" y={73 + i * 34} width={0} height="8" rx="4" fill={color}
                animate={{ width: barW }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
              />
              <text x="192" y={81 + i * 34} fontSize="8" fill={color} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">{c.score}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   6. AEO / LLM SEO, AI chat interface
   ══════════════════════════════════════════════════════════ */
export function AEOGraphic() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setPulse((p) => !p), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 300" className="w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="aeoCardGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8f7f3" />
          </linearGradient>
          <linearGradient id="aeoCiteBg" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#04315b" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#ffdb14" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Card background */}
        <rect x="5" y="5" width="350" height="290" rx="16" fill="url(#aeoCardGrad)" stroke="#04315b" strokeWidth="1" strokeOpacity="0.1" />

        {/* Header bar — Perplexity-style */}
        <rect x="5" y="5" width="350" height="42" rx="16" fill="#04315b" />
        <rect x="5" y="30" width="350" height="17" fill="#04315b" />
        {/* Logo mark */}
        <circle cx="28" cy="26" r="11" fill="#ffdb14" />
        <text x="28" y="30" textAnchor="middle" fontSize="9" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900">AI</text>
        <text x="47" y="23" fontSize="9" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">Perplexity</text>
        <text x="47" y="34" fontSize="7" fill="white" fillOpacity="0.55" fontFamily="DM Sans, sans-serif">AI Answer Engine</text>
        {/* Live dot */}
        <motion.circle cx="330" cy="26" r="5" fill="#22c55e"
          animate={{ opacity: pulse ? 1 : 0.4 }}
          transition={{ duration: 0.5 }} />

        {/* Query bubble */}
        <rect x="20" y="56" width="230" height="22" rx="11" fill="#04315b" fillOpacity="0.08" />
        <text x="32" y="71" fontSize="8" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="600">Best SEO specialist in Melbourne?</text>

        {/* AI response label */}
        <text x="20" y="96" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.08em">AI ANSWER</text>

        {/* Response text lines */}
        <rect x="20" y="102" width="320" height="52" rx="10" fill="url(#aeoCiteBg)" stroke="#04315b" strokeWidth="1" strokeOpacity="0.08" />
        <text x="32" y="116" fontSize="7.5" fill="#1a1a1a" fontFamily="DM Sans, sans-serif">Based on search results, <tspan fontWeight="700" fill="#04315b">Khalis Marketing</tspan> is a</text>
        <text x="32" y="127" fontSize="7.5" fill="#1a1a1a" fontFamily="DM Sans, sans-serif">highly recommended Melbourne SEO specialist,</text>
        <text x="32" y="138" fontSize="7.5" fill="#1a1a1a" fontFamily="DM Sans, sans-serif">known for transparent strategies and real results.</text>
        <text x="32" y="149" fontSize="7.5" fill="#1a1a1a" fontFamily="DM Sans, sans-serif">No lock-in contracts. <tspan fill="#04315b" fontWeight="600">khalismarketing.com.au</tspan></text>

        {/* Citations row */}
        <text x="20" y="170" fontSize="7" fill="#888" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.08em">CITED SOURCES</text>
        {[
          { label: "khalismarketing.com.au", color: "#04315b" },
          { label: "clutch.co/profile", color: "#0a4a85" },
          { label: "google.com/maps", color: "#22c55e" },
        ].map((src, i) => (
          <g key={src.label}>
            <rect x={20 + i * 112} y="176" width="106" height="18" rx="9"
              fill={src.color} fillOpacity="0.1"
              stroke={src.color} strokeWidth="1" strokeOpacity="0.25" />
            <circle cx={32 + i * 112} cy="185" r="4" fill={src.color} fillOpacity="0.7" />
            <text x={40 + i * 112} y="189" fontSize="6.5" fill={src.color} fontFamily="DM Sans, sans-serif" fontWeight="600">{src.label}</text>
          </g>
        ))}

        {/* Also appears in */}
        <text x="20" y="213" fontSize="7" fill="#888" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.08em">ALSO RECOMMENDED BY</text>
        {[
          { name: "ChatGPT", icon: "G", bg: "#10a37f" },
          { name: "Google AI", icon: "G", bg: "#4285f4" },
          { name: "Copilot", icon: "C", bg: "#0078d4" },
          { name: "Gemini", icon: "✦", bg: "#8b5cf6" },
        ].map((tool, i) => (
          <g key={tool.name}>
            <rect x={20 + i * 84} y="220" width="78" height="28" rx="8"
              fill="white" stroke="#e5e7eb" strokeWidth="1" />
            <circle cx={34 + i * 84} cy="234" r="7" fill={tool.bg} />
            <text x={34 + i * 84} y="238" textAnchor="middle" fontSize="6" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">{tool.icon}</text>
            <text x={46 + i * 84} y="232" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="600">{tool.name}</text>
            <text x={46 + i * 84} y="242" fontSize="6" fill="#22c55e" fontFamily="DM Sans, sans-serif" fontWeight="700">✓ Cited</text>
          </g>
        ))}

        {/* Bottom confidence bar */}
        <rect x="20" y="262" width="320" height="22" rx="11" fill="#04315b" fillOpacity="0.05" stroke="#04315b" strokeWidth="1" strokeOpacity="0.1" />
        <text x="32" y="277" fontSize="7.5" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="600">AI Visibility Score</text>
        <rect x="150" y="267" width="120" height="12" rx="6" fill="#e5e7eb" />
        <motion.rect x="150" y="267" width="0" height="12" rx="6" fill="#04315b"
          animate={{ width: 96 }}
          transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }} />
        <text x="278" y="277" fontSize="7.5" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">80%</text>
        <text x="300" y="277" fontSize="6.5" fill="#22c55e" fontFamily="DM Sans, sans-serif" fontWeight="700">↑ High</text>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   7. ECOMMERCE SEO, Product rankings + revenue chart
   ══════════════════════════════════════════════════════════ */
export function EcommerceSEOGraphic() {
  // Bar data: heights in px within a 110px tall chart area (baseline y=165, top y=55)
  const chartData = [
    { month: "Jan", h: 30 },
    { month: "Feb", h: 40 },
    { month: "Mar", h: 35 },
    { month: "Apr", h: 55 },
    { month: "May", h: 50 },
    { month: "Jun", h: 70 },
    { month: "Jul", h: 85 },
    { month: "Aug", h: 100 },
  ];
  const baseline = 165; // y coordinate of chart bottom
  const barW = 28;
  const gap = 12;
  const startX = 28;
  const products = [
    { name: "Running Shoes", rank: 1, traffic: "2,400", revenue: "$8.2k" },
    { name: "Gym Gear", rank: 2, traffic: "1,800", revenue: "$5.1k" },
    { name: "Yoga Mat", rank: 3, traffic: "1,200", revenue: "$3.4k" },
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 290" className="w-full h-auto drop-shadow-xl">
        <rect x="5" y="5" width="350" height="280" rx="16" fill="white" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.12" />

        {/* Header */}
        <rect x="5" y="5" width="350" height="42" rx="16" fill="#04315b" />
        <rect x="5" y="30" width="350" height="17" fill="#04315b" />
        <text x="24" y="27" fontSize="10" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">ORGANIC REVENUE</text>
        <text x="24" y="40" fontSize="7" fill="white" fillOpacity="0.6" fontFamily="DM Sans, sans-serif">Top performing product pages</text>
        <rect x="268" y="14" width="72" height="22" rx="8" fill="#ffdb14" />
        <text x="304" y="29" textAnchor="middle" fontSize="9" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">+312% ↑</text>

        {/* Chart background */}
        <rect x="16" y="52" width="328" height="120" rx="10" fill="#F8F7F3" />
        {/* Horizontal grid lines */}
        {[0, 33, 66, 100].map((pct) => (
          <line key={pct} x1="24" y1={baseline - pct} x2="336" y2={baseline - pct}
            stroke="#04315b" strokeOpacity="0.07" strokeWidth="1" />
        ))}

        {/* Bars — static rects, always visible regardless of scroll/mount timing */}
        {chartData.map((bar, i) => {
          const x = startX + i * (barW + gap);
          const isLast2 = i >= chartData.length - 2;
          const isLast4 = i >= chartData.length - 4;
          const fill = isLast2 ? "#ffdb14" : isLast4 ? "#0a4a85" : "#04315b";
          const opacity = isLast2 ? 1 : isLast4 ? 0.75 : 0.55;
          return (
            <g key={bar.month}>
              <rect
                x={x} y={baseline - bar.h}
                width={barW} height={bar.h} rx="5"
                fill={fill} fillOpacity={opacity}
              />
              <text x={x + barW / 2} y={baseline + 12} textAnchor="middle" fontSize="6.5" fill="#888" fontFamily="DM Sans, sans-serif">{bar.month}</text>
            </g>
          );
        })}

        {/* Product table */}
        <text x="20" y="196" fontSize="8" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" letterSpacing="0.06em">TOP RANKING PRODUCTS</text>
        {products.map((p, i) => (
          <g key={p.name}>
            <rect x="16" y={202 + i * 28} width="328" height="24" rx="7" fill={i === 0 ? "#04315b" : "#F8F7F3"} />
            <rect x="24" y={206 + i * 28} width="18" height="16" rx="5" fill={i === 0 ? "#ffdb14" : "#04315b"} fillOpacity={i === 0 ? 1 : 0.15} />
            <text x="33" y={217 + i * 28} textAnchor="middle" fontSize="8.5" fill={i === 0 ? "#04315b" : "#04315b"} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">#{p.rank}</text>
            <text x="52" y={217 + i * 28} fontSize="8" fill={i === 0 ? "white" : "#04315b"} fontFamily="DM Sans, sans-serif" fontWeight="600">{p.name}</text>
            <text x="210" y={217 + i * 28} fontSize="7" fill={i === 0 ? "rgba(255,255,255,0.7)" : "#888"} fontFamily="DM Sans, sans-serif">{p.traffic} visits</text>
            <text x="300" y={217 + i * 28} fontSize="8.5" fill={i === 0 ? "#ffdb14" : "#04315b"} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">{p.revenue}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   8. SHOPIFY SEO, Store dashboard
   ══════════════════════════════════════════════════════════ */
export function ShopifySEOGraphic() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 280" className="w-full h-auto drop-shadow-xl">
        <rect x="5" y="5" width="350" height="270" rx="16" fill="white" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.12" />
        {/* Shopify-style header */}
        <rect x="5" y="5" width="350" height="44" rx="16" fill="#04315b" />
        <rect x="5" y="28" width="350" height="21" fill="#04315b" />
        <rect x="20" y="16" width="28" height="22" rx="6" fill="#ffdb14" />
        <path d="M26 22 L28 30 L34 18 L36 30 L38 22" stroke="#04315b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="56" y="26" fontSize="10" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">Shopify Store</text>
        <text x="56" y="38" fontSize="7" fill="white" fillOpacity="0.6" fontFamily="DM Sans, sans-serif">SEO Performance Dashboard</text>

        {/* Metric cards */}
        {[
          { label: "Organic Sessions", val: "12,847", change: "+247%", x: 20, y: 58 },
          { label: "Revenue from SEO", val: "$34,200", change: "+189%", x: 190, y: 58 },
        ].map((m) => (
          <g key={m.label}>
            <rect x={m.x} y={m.y} width="155" height="55" rx="10" fill="#F8F7F3" stroke="#04315b" strokeWidth="1" strokeOpacity="0.12" />
            <text x={m.x + 12} y={m.y + 18} fontSize="7" fill="#888" fontFamily="DM Sans, sans-serif">{m.label}</text>
            <text x={m.x + 12} y={m.y + 35} fontSize="16" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">{m.val}</text>
            <rect x={m.x + 12} y={m.y + 40} width={60} height="10" rx="5" fill="#04315b" fillOpacity="0.08" />
            <text x={m.x + 18} y={m.y + 48} fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight="700">{m.change} this year</text>
          </g>
        ))}

        {/* Collection rankings */}
        <text x="24" y="135" fontSize="8" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">COLLECTION PAGE RANKINGS</text>
        {[
          { name: "/collections/shoes", pos: 1, vol: "2.4k" },
          { name: "/collections/apparel", pos: 2, vol: "1.8k" },
          { name: "/collections/accessories", pos: 4, vol: "1.2k" },
          { name: "/collections/sale", pos: 7, vol: "890" },
        ].map((row, i) => (
          <g key={row.name}>
            <rect x="20" y={142 + i * 28} width="320" height="24" rx="7" fill={i === 0 ? "#04315b" : "white"} stroke="#04315b" strokeWidth="1" strokeOpacity={i === 0 ? 0 : 0.1} />
            <rect x="28" y={147 + i * 28} width="16" height="14" rx="4" fill={i === 0 ? "#ffdb14" : "#04315b"} fillOpacity={i === 0 ? 1 : 0.12} />
            <text x="36" y={157 + i * 28} textAnchor="middle" fontSize="8" fill={i === 0 ? "#04315b" : "#04315b"} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">#{row.pos}</text>
            <text x="52" y={158 + i * 28} fontSize="7.5" fill={i === 0 ? "white" : "#555"} fontFamily="DM Sans, sans-serif">{row.name}</text>
            <text x="290" y={158 + i * 28} fontSize="7.5" fill={i === 0 ? "#ffdb14" : "#04315b"} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">{row.vol}/mo</text>
          </g>
        ))}

        {/* Speed score */}
        <rect x="20" y="258" width="320" height="12" rx="6" fill="#F8F7F3" />
        <motion.rect x="20" y="258" width={0} height="12" rx="6" fill="#04315b"
          animate={{ width: 280 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
        <text x="24" y="268" fontSize="7" fill="white" fontFamily="DM Sans, sans-serif" fontWeight="700">Page Speed: 94/100</text>
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   9. WORDPRESS SEO, CMS dashboard with plugin metrics
   ══════════════════════════════════════════════════════════ */
export function WordPressSEOGraphic() {
  // Layout constants — all y positions derived from these
  // Header: 5-45 | Score cards: 50-118 | Traffic label: 124 | Traffic num: 140
  // Chart: 148-228 (80px tall) | Rankings label: 236 | Rows: 242-304
  const trafficRaw = [12, 18, 15, 22, 20, 30, 28, 40, 38, 55, 52, 72];
  const maxT = Math.max(...trafficRaw);
  const chartTop = 148;   // y of chart top
  const chartBot = 228;   // y of chart bottom (baseline)
  const chartH = chartBot - chartTop; // 80px
  const barW = 20;
  const barGap = 8;
  const chartStartX = 20;

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 315" className="w-full h-auto drop-shadow-xl">
        <rect x="5" y="5" width="350" height="305" rx="16" fill="white" stroke="#04315b" strokeWidth="1" strokeOpacity="0.1" />

        {/* Header */}
        <rect x="5" y="5" width="350" height="40" rx="16" fill="#04315b" />
        <rect x="5" y="30" width="350" height="15" fill="#04315b" />
        <circle cx="28" cy="25" r="12" fill="white" fillOpacity="0.15" />
        <text x="28" y="30" textAnchor="middle" fontSize="12" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900">W</text>
        <text x="50" y="22" fontSize="9" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">WordPress SEO</text>
        <text x="50" y="34" fontSize="7" fill="white" fillOpacity="0.55" fontFamily="DM Sans, sans-serif">Yoast + Rank Math optimised</text>
        <rect x="292" y="14" width="56" height="20" rx="10" fill="#22c55e" fillOpacity="0.25" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.6" />
        <text x="320" y="28" textAnchor="middle" fontSize="7.5" fill="#22c55e" fontFamily="DM Sans, sans-serif" fontWeight="700">✓ Healthy</text>

        {/* Score cards: y 50-118 */}
        {[
          { label: "SEO Score", score: 94, color: "#04315b" },
          { label: "Page Speed", score: 96, color: "#ffdb14" },
          { label: "Core Web", score: 91, color: "#22c55e" },
        ].map((card, i) => (
          <g key={card.label}>
            <rect x={16 + i * 112} y="50" width="106" height="64" rx="10"
              fill="#F8F7F3" stroke="#04315b" strokeWidth="1" strokeOpacity="0.1" />
            <text x={69 + i * 112} y="64" textAnchor="middle" fontSize="7" fill="#888" fontFamily="DM Sans, sans-serif">{card.label}</text>
            <circle cx={69 + i * 112} cy={92} r={18} fill="none" stroke="#e5e7eb" strokeWidth="4" />
            <motion.circle
              cx={69 + i * 112} cy={92} r={18}
              fill="none" stroke={card.color} strokeWidth="4"
              strokeDasharray={`${2 * Math.PI * 18}`}
              strokeDashoffset={`${2 * Math.PI * 18}`}
              strokeLinecap="round"
              style={{ transformOrigin: `${69 + i * 112}px 92px`, transform: "rotate(-90deg)" }}
              animate={{ strokeDashoffset: 2 * Math.PI * 18 * (1 - card.score / 100) }}
              transition={{ duration: 1.4, delay: 0.3 + i * 0.2, ease: "easeOut" }}
            />
            <text x={69 + i * 112} y={97} textAnchor="middle" fontSize="13" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">{card.score}</text>
          </g>
        ))}

        {/* Traffic label + number: y 124-140 */}
        <text x="20" y="130" fontSize="7" fill="#888" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.08em">ORGANIC TRAFFIC — 12 MONTHS</text>
        <text x="20" y="145" fontSize="20" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">8,420</text>
        <rect x="96" y="132" width="52" height="16" rx="8" fill="#22c55e" fillOpacity="0.15" />
        <text x="122" y="144" textAnchor="middle" fontSize="8" fill="#22c55e" fontFamily="DM Sans, sans-serif" fontWeight="700">+189%</text>

        {/* Chart background: y 148-228 */}
        <rect x={chartStartX} y={chartTop} width={328} height={chartH} rx="8" fill="#F8F7F3" />
        {[0, 27, 54, 80].map((offset) => (
          <line key={offset} x1={chartStartX + 4} y1={chartBot - offset} x2={chartStartX + 324} y2={chartBot - offset}
            stroke="#04315b" strokeOpacity="0.06" strokeWidth="1" />
        ))}

        {/* Bars — static rects so they always render regardless of scroll position */}
        {trafficRaw.map((val, i) => {
          const barH = Math.max(4, (val / maxT) * (chartH - 6));
          const x = chartStartX + 6 + i * (barW + barGap);
          const isLast = i === trafficRaw.length - 1;
          const isRecent = i >= trafficRaw.length - 3;
          return (
            <rect
              key={i}
              x={x} y={chartBot - barH}
              width={barW} height={barH} rx="4"
              fill={isLast ? "#04315b" : isRecent ? "#0a4a85" : "#04315b"}
              fillOpacity={isLast ? 1 : isRecent ? 0.65 : 0.35}
            />
          );
        })}

        {/* Ranking pages: y 236+ */}
        <text x="20" y="242" fontSize="7" fill="#888" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="0.08em">TOP RANKING PAGES</text>
        {[
          { page: "/blog/local-seo-guide", pos: 1, traffic: "2.1k" },
          { page: "/services/seo-melbourne", pos: 2, traffic: "1.8k" },
          { page: "/blog/technical-seo", pos: 1, traffic: "940" },
          { page: "/services/local-seo", pos: 3, traffic: "720" },
        ].map((row, i) => (
          <g key={row.page}>
            <rect x="16" y={248 + i * 15} width="328" height="13" rx="4"
              fill={i % 2 === 0 ? "#04315b" : "transparent"} fillOpacity={i % 2 === 0 ? 0.04 : 0} />
            <text x="24" y={258 + i * 15} fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif">{row.page}</text>
            <rect x="268" y={249 + i * 15} width="16" height="11" rx="5.5"
              fill={row.pos === 1 ? "#ffdb14" : row.pos === 2 ? "#04315b" : "#e5e7eb"} />
            <text x="276" y={258 + i * 15} textAnchor="middle" fontSize="7"
              fill={row.pos === 1 ? "#04315b" : row.pos === 2 ? "white" : "#888"}
              fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">{row.pos}</text>
            <text x="296" y={258 + i * 15} fontSize="7" fill="#22c55e" fontFamily="DM Sans, sans-serif" fontWeight="600">{row.traffic}</text>
            <text x="316" y={258 + i * 15} fontSize="6.5" fill="#888" fontFamily="DM Sans, sans-serif">/mo</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   10. SAAS SEO, Funnel / keyword pipeline
   ══════════════════════════════════════════════════════════ */
export function SaaSSEOGraphic() {
  // Funnel stages — widths are in SVG units, centred at x=180
  const stages = [
    { label: "Awareness",     kw: "what is CRM software",       vol: "12k",  w: 310, fill: "#04315b",  opacity: 1 },
    { label: "Consideration", kw: "best CRM for small business", vol: "4.8k", w: 250, fill: "#04315b",  opacity: 0.82 },
    { label: "Decision",      kw: "CRM software pricing",        vol: "1.9k", w: 190, fill: "#0a4a85",  opacity: 1 },
    { label: "Trial",         kw: "CRM free trial",              vol: "890",  w: 138, fill: "#ffdb14",  opacity: 1 },
    { label: "Convert",       kw: "buy CRM software",            vol: "320",  w: 96,  fill: "#ffdb14",  opacity: 0.85 },
  ];
  const cx = 180;
  const rowH = 38;
  const rowGap = 6;
  const startY = 56;

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 280" className="w-full h-auto drop-shadow-xl">
        <rect x="5" y="5" width="350" height="270" rx="16" fill="white" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.12" />
        <text x={cx} y="30" textAnchor="middle" fontSize="11" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">SEO KEYWORD FUNNEL</text>
        <text x={cx} y="46" textAnchor="middle" fontSize="7.5" fill="#888" fontFamily="DM Sans, sans-serif">Target every stage of the buyer journey</text>

        {stages.map((s, i) => {
          const x = cx - s.w / 2;
          const y = startY + i * (rowH + rowGap);
          const textColor = s.fill === "#ffdb14" ? "#04315b" : "white";
          return (
            <g key={s.label}>
              {/* Solid background — always visible, no animation on x/width */}
              <rect x={x} y={y} width={s.w} height={rowH} rx="9"
                fill={s.fill} fillOpacity={s.opacity}
              />
              {/* Animated height reveal only — no x movement */}
              <motion.rect
                x={x} y={y + rowH} width={s.w} height={0} rx="9"
                fill={s.fill} fillOpacity={s.opacity}
                animate={{ height: rowH, y }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              />
              <text x={cx} y={y + 15} textAnchor="middle" fontSize="8.5"
                fill={textColor} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">{s.label}</text>
              <text x={cx} y={y + 27} textAnchor="middle" fontSize="6.5"
                fill={textColor} fillOpacity="0.85" fontFamily="DM Sans, sans-serif">{s.kw} · {s.vol}/mo</text>
              {/* Volume badge on right */}
              <rect x={x + s.w - 38} y={y + 10} width={32} height={16} rx="8"
                fill="white" fillOpacity="0.2" />
              <text x={x + s.w - 22} y={y + 21} textAnchor="middle" fontSize="6.5"
                fill={textColor} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">{s.vol}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   11. WEBSITE DESIGN, Wireframe builder
   ══════════════════════════════════════════════════════════ */
export function WebsiteDesignGraphic() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 280" className="w-full h-auto drop-shadow-xl">
        <rect x="5" y="5" width="350" height="270" rx="16" fill="white" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.12" />

        {/* Browser chrome */}
        <rect x="5" y="5" width="350" height="32" rx="16" fill="#04315b" />
        <rect x="5" y="22" width="350" height="15" fill="#04315b" />
        <circle cx="22" cy="21" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="36" cy="21" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="50" cy="21" r="4" fill="white" fillOpacity="0.3" />
        <rect x="65" y="15" width="180" height="12" rx="6" fill="white" fillOpacity="0.12" />
        <text x="155" y="24" textAnchor="middle" fontSize="6.5" fill="white" fillOpacity="0.6" fontFamily="DM Sans, sans-serif">khalismarketing.com.au</text>

        {/* Navbar */}
        <rect x="10" y="37" width="340" height="22" rx="0" fill="#F8F7F3" />
        <rect x="18" y="43" width="30" height="10" rx="3" fill="#04315b" />
        {["Home", "Services", "About", "Contact"].map((item, i) => (
          <text key={item} x={80 + i * 55} y="51" fontSize="7" fill="#04315b" fontFamily="DM Sans, sans-serif" fontWeight={item === "Services" ? "700" : "400"}>{item}</text>
        ))}
        <rect x="290" y="41" width="50" height="14" rx="7" fill="#ffdb14" />
        <text x="315" y="51" textAnchor="middle" fontSize="6.5" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">Free Audit</text>

        {/* Hero section */}
        <rect x="10" y="59" width="340" height="80" rx="0" fill="#04315b" fillOpacity="0.04" />
        {/* Left: headline + CTAs */}
        <rect x="20" y="68" width="150" height="12" rx="3" fill="#04315b" fillOpacity="0.7" />
        <rect x="20" y="84" width="120" height="8" rx="3" fill="#04315b" fillOpacity="0.25" />
        <rect x="20" y="96" width="100" height="8" rx="3" fill="#04315b" fillOpacity="0.18" />
        <rect x="20" y="110" width="56" height="14" rx="7" fill="#04315b" />
        <text x="48" y="120" textAnchor="middle" fontSize="6" fill="white" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">Get Started</text>
        <rect x="82" y="110" width="56" height="14" rx="7" fill="#ffdb14" />
        <text x="110" y="120" textAnchor="middle" fontSize="6" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">Free Audit</text>
        {/* Right: SEO score badge */}
        <rect x="200" y="62" width="140" height="72" rx="10" fill="#04315b" />
        <text x="270" y="82" textAnchor="middle" fontSize="7" fill="white" fillOpacity="0.6" fontFamily="DM Sans, sans-serif" fontWeight="600">PAGESPEED SCORE</text>
        <text x="270" y="108" textAnchor="middle" fontSize="32" fill="#ffdb14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900">98</text>
        <text x="270" y="122" textAnchor="middle" fontSize="6.5" fill="#22c55e" fontFamily="DM Sans, sans-serif" fontWeight="700">✓ Fast · ✓ Mobile · ✓ Accessible</text>

        {/* Bento grid */}
        <text x="20" y="155" fontSize="8" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700">BENTO GRID SECTION</text>
        {[
          { x: 10, y: 160, w: 170, h: 55 },
          { x: 190, y: 160, w: 160, h: 55 },
          { x: 10, y: 220, w: 110, h: 45 },
          { x: 130, y: 220, w: 110, h: 45 },
          { x: 250, y: 220, w: 100, h: 45 },
        ].map((card, i) => (
          <g key={i}>
            <rect x={card.x} y={card.y} width={card.w} height={card.h} rx="8"
              fill={i === 0 ? "#04315b" : "white"} stroke="#04315b" strokeWidth="1" strokeOpacity={i === 0 ? 0 : 0.12}
            />
            <rect x={card.x + 8} y={card.y + 10} width={card.w * 0.5} height="8" rx="3"
              fill={i === 0 ? "#ffdb14" : "#04315b"} fillOpacity={i === 0 ? 1 : 0.15}
            />
            <rect x={card.x + 8} y={card.y + 22} width={card.w * 0.7} height="5" rx="2"
              fill={i === 0 ? "white" : "#04315b"} fillOpacity={i === 0 ? 0.3 : 0.08}
            />
            <rect x={card.x + 8} y={card.y + 30} width={card.w * 0.55} height="5" rx="2"
              fill={i === 0 ? "white" : "#04315b"} fillOpacity={i === 0 ? 0.2 : 0.06}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   12. GENERAL SEO SERVICES, Ranking trajectory chart
   ══════════════════════════════════════════════════════════ */
export function SEOServicesGraphic() {
  const points = [
    { x: 30, y: 200 }, { x: 70, y: 195 }, { x: 110, y: 180 },
    { x: 150, y: 165 }, { x: 190, y: 140 }, { x: 230, y: 110 },
    { x: 270, y: 75 }, { x: 310, y: 50 },
  ];
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L310 230 L30 230 Z`;

  return (
    <div className="w-full max-w-sm mx-auto">
      <svg viewBox="0 0 360 260" className="w-full h-auto drop-shadow-xl">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#04315b" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#04315b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#04315b" />
            <stop offset="100%" stopColor="#ffdb14" />
          </linearGradient>
        </defs>

        <rect x="5" y="5" width="350" height="250" rx="16" fill="white" stroke="#04315b" strokeWidth="1.5" strokeOpacity="0.12" />

        {/* Grid */}
        {[80, 120, 160, 200].map((y) => (
          <line key={y} x1="20" y1={y} x2="340" y2={y} stroke="#04315b" strokeWidth="0.5" strokeOpacity="0.07" />
        ))}

        {/* Y-axis labels (position) */}
        {[{ y: 80, label: "Pos 1" }, { y: 120, label: "Pos 5" }, { y: 160, label: "Pos 10" }, { y: 200, label: "Pos 20" }].map((l) => (
          <text key={l.y} x="18" y={l.y + 4} textAnchor="end" fontSize="6.5" fill="#aaa" fontFamily="DM Sans, sans-serif">{l.label}</text>
        ))}

        {/* Area fill */}
        <motion.path d={areaD} fill="url(#areaGrad)"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Line */}
        <motion.path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r={5}
            fill={i === points.length - 1 ? "#ffdb14" : "white"}
            stroke={i === points.length - 1 ? "#04315b" : "#04315b"} strokeWidth="2"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.2 }}
          />
        ))}

        {/* Callout at peak */}
        <rect x="270" y="25" width="75" height="30" rx="8" fill="#04315b" />
        <text x="307" y="38" textAnchor="middle" fontSize="7" fill="#ffdb14" fontFamily="DM Sans, sans-serif" fontWeight="700">POSITION #1</text>
        <text x="307" y="49" textAnchor="middle" fontSize="7" fill="white" fontFamily="DM Sans, sans-serif">+312% traffic</text>
        <line x1="307" y1="55" x2="310" y2="52" stroke="#04315b" strokeWidth="1.5" />

        {/* Month labels */}
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"].map((m, i) => (
          <text key={m} x={30 + i * 40} y={242} textAnchor="middle" fontSize="7" fill="#aaa" fontFamily="DM Sans, sans-serif">{m}</text>
        ))}

        {/* Title */}
        <text x="180" y="20" textAnchor="middle" fontSize="9" fill="#04315b" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">KEYWORD RANKING TRAJECTORY</text>
      </svg>
    </div>
  );
}
