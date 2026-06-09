import { IsoBox, IsoPlatform, CubeGrid } from "./IsoBox";
import { COLORS, poly, pt } from "./iso";

/* ═══════════════════════════════════════════════════════
   EXPLODED STACK — Large animated data-flow diagram
   Shows: User → Frontend → REST APIs → Backend → Database
   ═══════════════════════════════════════════════════════ */
export const ExplodedStack = () => {
  const W = 140, D = 140, H = 5;

  /* Screen-Y center of each layer's top face:
     iso(70, 70, z+H) → (0, 70 - z - H) = (0, 65 - z)  */
  const fY = 65 - 300;  // FRONTEND  → -235
  const aY = 65 - 200;  // REST APIS → -135
  const bY = 65 - 100;  // BACKEND   → -35
  const dY = 65;        // DATABASE  →  65



  return (
    <svg viewBox="-200 -380 560 600" className="iso-svg iso-stack">
      <defs>
        {/* Glow filters */}
        <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="dotGlowSoft" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        {/* Gradient for flow lines */}
        <linearGradient id="reqGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#007AFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#007AFF" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="resGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#5856D6" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#5856D6" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* ── Dashed center guideline ── */}
      <line x1="0" y1={dY + 30} x2="0" y2={fY - 60} stroke="rgba(0,122,255,0.05)" strokeWidth="0.6" strokeDasharray="5,5" />

      {/* ── USER indicator at top ── */}
      <g className="iso-user-badge">
        <circle cx="0" cy={fY - 55} r="16" fill="rgba(0,122,255,0.06)" stroke="rgba(0,122,255,0.20)" strokeWidth="0.8" />
        <rect x="-8" y={fY - 63} width="16" height="12" rx="2" fill="none" stroke="rgba(0,122,255,0.35)" strokeWidth="0.8" />
        <line x1="-8" y1={fY - 58} x2="8" y2={fY - 58} stroke="rgba(0,122,255,0.25)" strokeWidth="0.5" />
        <circle cx="-5" cy={fY - 60.5} r="0.8" fill="rgba(0,122,255,0.35)" />
        <circle cx="-2.5" cy={fY - 60.5} r="0.8" fill="rgba(0,122,255,0.35)" />
        <circle cx="0" cy={fY - 60.5} r="0.8" fill="rgba(0,122,255,0.35)" />
        <text x="0" y={fY - 30} textAnchor="middle" className="iso-label" style={{ fontSize: "5.5px" }}>USER / BROWSER</text>
      </g>

      {/* ── Flow rail lines ── */}
      <path d={`M -12,${fY - 40} L -12,${dY}`} fill="none" stroke="url(#reqGrad)" strokeWidth="1.8" strokeLinecap="round" />
      <path d={`M  12,${dY} L  12,${fY - 40}`} fill="none" stroke="url(#resGrad)" strokeWidth="1.8" strokeLinecap="round" />

      {/* ── Flow direction labels ── */}
      <text x="-22" y={(fY + aY) / 2} className="iso-flow-label" fill="rgba(0,122,255,0.45)">▼ REQUEST</text>
      <text x="18" y={(bY + dY) / 2} className="iso-flow-label" fill="rgba(88,86,214,0.45)">▲ RESPONSE</text>

      {/* ── Animated REQUEST dots (flowing down — blue) ── */}
      {[0, 1.6, 3.2].map((delay, i) => (
        <circle key={`rq${i}`} r="3.5" fill="#007AFF" opacity="0.8" filter="url(#dotGlow)">
          <animateMotion dur="5s" begin={`${delay}s`} repeatCount="indefinite">
            <mpath href="#reqMotion" />
          </animateMotion>
        </circle>
      ))}
      {/* ── Animated RESPONSE dots (flowing up — indigo) ── */}
      {[0.8, 2.4, 4].map((delay, i) => (
        <circle key={`rs${i}`} r="3" fill="#5856D6" opacity="0.7" filter="url(#dotGlowSoft)">
          <animateMotion dur="5s" begin={`${delay}s`} repeatCount="indefinite">
            <mpath href="#resMotion" />
          </animateMotion>
        </circle>
      ))}
      {/* Hidden motion paths (offset left/right from center) */}
      <path id="reqMotion" d={`M -12,${fY - 40} L -12,${fY} L -12,${aY} L -12,${bY} L -12,${dY}`} fill="none" stroke="none" />
      <path id="resMotion" d={`M 12,${dY} L 12,${bY} L 12,${aY} L 12,${fY} L 12,${fY - 40}`} fill="none" stroke="none" />

      {/* ════════════ LAYER 3 — FRONTEND (top) ════════════ */}
      <g>
        <IsoPlatform x={0} y={0} z={300} w={W} d={D} h={H} />
        {/* Stacked UI component cards */}
        <IsoPlatform x={12} y={12} z={305} w={110} d={80} h={3} variant="accent" />
        <IsoPlatform x={20} y={22} z={312} w={90} d={60} h={3} />
        <IsoPlatform x={28} y={32} z={319} w={70} d={40} h={3} variant="accent" />
        {/* Pulse ring */}
        <ellipse cx="0" cy={fY} rx="55" ry="28" fill="none" stroke="rgba(0,122,255,0.12)" strokeWidth="0.6">
          <animate attributeName="rx" values="50;68;50" dur="3s" repeatCount="indefinite" />
          <animate attributeName="ry" values="25;34;25" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Label */}
        <text x="175" y={fY} className="iso-label">FRONTEND</text>
        <text x="175" y={fY + 12} className="iso-sublabel">React · Next.js</text>
        <line x1="122" y1={fY} x2="170" y2={fY} stroke="rgba(0,122,255,0.18)" strokeWidth="0.5" />
      </g>

      {/* ════════════ LAYER 2 — REST APIS ════════════ */}
      <g>
        <IsoPlatform x={0} y={0} z={200} w={W} d={D} h={H} />
        {/* API endpoint grid (waffle pattern) */}
        <CubeGrid ox={10} oy={10} oz={205} rows={6} cols={6} size={14} gap={7} cubeH={4} />
        <ellipse cx="0" cy={aY} rx="55" ry="28" fill="none" stroke="rgba(0,122,255,0.12)" strokeWidth="0.6">
          <animate attributeName="rx" values="50;68;50" dur="3s" begin="0.75s" repeatCount="indefinite" />
          <animate attributeName="ry" values="25;34;25" dur="3s" begin="0.75s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin="0.75s" repeatCount="indefinite" />
        </ellipse>
        <text x="175" y={aY} className="iso-label">REST APIS</text>
        <text x="175" y={aY + 12} className="iso-sublabel">Routes · Controllers</text>
        <line x1="122" y1={aY} x2="170" y2={aY} stroke="rgba(0,122,255,0.18)" strokeWidth="0.5" />
      </g>

      {/* ════════════ LAYER 1 — BACKEND ════════════ */}
      <g>
        <IsoPlatform x={0} y={0} z={100} w={W} d={D} h={H} />
        {/* Server processing blocks */}
        <IsoBox x={14} y={14} z={105} w={35} d={30} h={28}
          topColor={COLORS.accentTop} leftColor={COLORS.accentLeft}
          rightColor={COLORS.accentRight} stroke={COLORS.accentStroke} />
        <IsoBox x={58} y={14} z={105} w={35} d={30} h={20}
          topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
          rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />
        <IsoBox x={14} y={58} z={105} w={35} d={30} h={20}
          topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
          rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />
        <IsoBox x={58} y={58} z={105} w={35} d={30} h={34}
          topColor={COLORS.accentTop} leftColor={COLORS.accentLeft}
          rightColor={COLORS.accentRight} stroke={COLORS.accentStroke} />
        <IsoBox x={100} y={14} z={105} w={26} d={26} h={14}
          topColor="rgba(0,122,255,0.06)" leftColor="rgba(0,122,255,0.12)"
          rightColor="rgba(0,122,255,0.09)" stroke="rgba(0,122,255,0.15)" />
        <ellipse cx="0" cy={bY} rx="55" ry="28" fill="none" stroke="rgba(0,122,255,0.12)" strokeWidth="0.6">
          <animate attributeName="rx" values="50;68;50" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="ry" values="25;34;25" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </ellipse>
        <text x="175" y={bY} className="iso-label">BACKEND</text>
        <text x="175" y={bY + 12} className="iso-sublabel">Node.js · Express</text>
        <line x1="122" y1={bY} x2="170" y2={bY} stroke="rgba(0,122,255,0.18)" strokeWidth="0.5" />
      </g>

      {/* ════════════ LAYER 0 — DATABASE (bottom) ════════════ */}
      <g>
        <IsoPlatform x={0} y={0} z={0} w={W} d={D} h={H} />
        {/* Data cubes — cross/star pattern */}
        <CubeGrid ox={10} oy={10} oz={5} rows={5} cols={5} size={18} gap={6} cubeH={14}
          pattern={[
            [true, false, true, false, true],
            [false, true, true, true, false],
            [true, true, false, true, true],
            [false, true, true, true, false],
            [true, false, true, false, true],
          ]}
        />
        <ellipse cx="0" cy={dY} rx="55" ry="28" fill="none" stroke="rgba(0,122,255,0.12)" strokeWidth="0.6">
          <animate attributeName="rx" values="50;68;50" dur="3s" begin="2.25s" repeatCount="indefinite" />
          <animate attributeName="ry" values="25;34;25" dur="3s" begin="2.25s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" begin="2.25s" repeatCount="indefinite" />
        </ellipse>
        <text x="175" y={dY} className="iso-label">DATABASE</text>
        <text x="175" y={dY + 12} className="iso-sublabel">MongoDB · PostgreSQL</text>
        <line x1="122" y1={dY} x2="170" y2={dY} stroke="rgba(0,122,255,0.18)" strokeWidth="0.5" />
      </g>
    </svg>
  );
};


/* ═══════════════════════════════════════════════════════
   CHESS BOARD — Isometric checkered grid (Languages)
   ═══════════════════════════════════════════════════════ */
export const ChessBoard = () => {
  const size = 12;
  const grid = 6;
  const cubes = [];

  for (let r = 0; r < grid; r++) {
    for (let c = 0; c < grid; c++) {
      const isLight = (r + c) % 2 === 0;
      cubes.push(
        <IsoBox
          key={`cb-${r}-${c}`}
          x={c * size} y={r * size} z={0}
          w={size} d={size} h={isLight ? 3 : 6}
          topColor={isLight ? "rgba(0,122,255,0.08)" : "rgba(0,122,255,0.22)"}
          leftColor={isLight ? "rgba(0,122,255,0.12)" : "rgba(0,122,255,0.32)"}
          rightColor={isLight ? "rgba(0,122,255,0.10)" : "rgba(0,122,255,0.27)"}
          stroke="rgba(0,122,255,0.18)"
          strokeWidth={0.3}
        />
      );
    }
  }

  // Add a few "pieces" (taller cubes)
  const pieces = [[1, 2, 14], [3, 4, 12], [4, 1, 16]];
  pieces.forEach(([c, r, h], i) => (
    cubes.push(
      <IsoBox key={`piece-${i}`}
        x={c * size + 2} y={r * size + 2} z={6}
        w={8} d={8} h={h}
        topColor="rgba(88,86,214,0.20)" leftColor="rgba(88,86,214,0.35)"
        rightColor="rgba(88,86,214,0.28)" stroke="rgba(88,86,214,0.35)"
        strokeWidth={0.4}
      />
    )
  ));

  return (
    <svg viewBox="-80 -40 220 160" className="iso-svg iso-chess">
      <g>{cubes}</g>
    </svg>
  );
};


/* ═══════════════════════════════════════════════════════
   COMPONENT LAYERS — Exploded UI layers (Frontend)
   ═══════════════════════════════════════════════════════ */
export const ComponentLayers = () => (
  <svg viewBox="-100 -120 250 200" className="iso-svg iso-layers">
    {/* Bottom layer — full card */}
    <IsoPlatform x={0} y={0} z={0} w={80} d={80} h={4} />
    {/* Smaller inner card */}
    <IsoPlatform x={8} y={8} z={4} w={64} d={50} h={2} variant="accent" />

    {/* Middle layer */}
    <IsoPlatform x={0} y={0} z={35} w={80} d={80} h={4} />
    <IsoPlatform x={5} y={5} z={39} w={40} d={30} h={2} variant="accent" />
    <IsoPlatform x={50} y={5} z={39} w={25} d={30} h={2} />

    {/* Top layer */}
    <IsoPlatform x={0} y={0} z={70} w={80} d={80} h={4} />
    {/* Small UI elements */}
    <IsoBox x={6} y={6} z={74} w={20} d={12} h={5}
      topColor="rgba(88,86,214,0.18)" leftColor="rgba(88,86,214,0.30)"
      rightColor="rgba(88,86,214,0.24)" stroke="rgba(88,86,214,0.30)" />
    <IsoBox x={32} y={6} z={74} w={42} d={8} h={3}
      topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
      rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />
    <IsoBox x={6} y={25} z={74} w={68} d={40} h={3}
      topColor="rgba(0,122,255,0.06)" leftColor="rgba(0,122,255,0.14)"
      rightColor="rgba(0,122,255,0.10)" stroke="rgba(0,122,255,0.15)" />
  </svg>
);


/* ═══════════════════════════════════════════════════════
   SERVER CUBES — Cube cluster (Backend)
   ═══════════════════════════════════════════════════════ */
export const ServerCubes = () => (
  <svg viewBox="-80 -90 210 180" className="iso-svg iso-server">
    {/* Base platform */}
    <IsoPlatform x={0} y={0} z={0} w={80} d={80} h={3} />

    {/* Server tower 1 — tall */}
    <IsoBox x={5} y={5} z={3} w={22} d={22} h={35}
      topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
      rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />

    {/* Server tower 2 — medium */}
    <IsoBox x={32} y={5} z={3} w={22} d={22} h={25}
      topColor={COLORS.accentTop} leftColor={COLORS.accentLeft}
      rightColor={COLORS.accentRight} stroke={COLORS.accentStroke} />

    {/* Server tower 3 — short */}
    <IsoBox x={5} y={35} z={3} w={22} d={22} h={18}
      topColor={COLORS.accentTop} leftColor={COLORS.accentLeft}
      rightColor={COLORS.accentRight} stroke={COLORS.accentStroke} />

    {/* Server tower 4 — tallest */}
    <IsoBox x={32} y={35} z={3} w={22} d={22} h={42}
      topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
      rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />

    {/* Floating small cube */}
    <IsoBox x={60} y={10} z={3} w={14} d={14} h={12}
      topColor="rgba(0,122,255,0.08)" leftColor="rgba(0,122,255,0.16)"
      rightColor="rgba(0,122,255,0.12)" stroke={COLORS.stroke} />
  </svg>
);


/* ═══════════════════════════════════════════════════════
   DATA DISC — Stacked disc / cylinder (Database)
   ═══════════════════════════════════════════════════════ */
export const DataDisc = () => {
  // Create stacked disc layers using ellipses and rectangles
  const discs = [0, 14, 28, 42];
  return (
    <svg viewBox="-70 -80 180 160" className="iso-svg iso-disc">
      {/* Base platform */}
      <IsoPlatform x={0} y={0} z={0} w={70} d={70} h={3} />

      {discs.map((z, i) => {
        const _opacity_base = [30.3, 35 - z - 5]; // center of platform (unused, kept for reference)
        void _opacity_base;
        const opacity = 0.12 + i * 0.05;
        return (
          <g key={i}>
            {/* Cylinder body */}
            <polygon
              points={poly(
                [10, 60, z + 3], [60, 60, z + 3],
                [60, 60, z + 12], [10, 60, z + 12]
              )}
              fill={`rgba(0,122,255,${opacity + 0.08})`}
              stroke={COLORS.stroke} strokeWidth={0.4}
            />
            <polygon
              points={poly(
                [60, 10, z + 3], [60, 60, z + 3],
                [60, 60, z + 12], [60, 10, z + 12]
              )}
              fill={`rgba(0,122,255,${opacity + 0.04})`}
              stroke={COLORS.stroke} strokeWidth={0.4}
            />
            {/* Top ellipse approximation using a diamond */}
            <IsoPlatform x={10} y={10} z={z + 12} w={50} d={50} h={2} variant={i % 2 === 0 ? "primary" : "accent"} />
          </g>
        );
      })}
    </svg>
  );
};


/* ═══════════════════════════════════════════════════════
   TEST PYRAMID — Isometric pyramid (Testing)
   ═══════════════════════════════════════════════════════ */
export const TestPyramid = () => {
  // Pyramid: base at z=0, apex at top
  // Base square corners
  const apex = pt(35, 35, 70);
  const bl = pt(0, 0, 0);
  const br = pt(70, 0, 0);
  const fr = pt(70, 70, 0);
  const fl = pt(0, 70, 0);

  return (
    <svg viewBox="-80 -90 210 160" className="iso-svg iso-pyramid">
      {/* Base platform */}
      <IsoPlatform x={0} y={0} z={0} w={70} d={70} h={3} />

      {/* Left face (visible) */}
      <polygon
        points={`${fl} ${fr} ${apex}`}
        fill="rgba(0,122,255,0.18)"
        stroke={COLORS.stroke} strokeWidth={0.5}
      />
      {/* Right face (visible) */}
      <polygon
        points={`${fr} ${br} ${apex}`}
        fill="rgba(0,122,255,0.12)"
        stroke={COLORS.stroke} strokeWidth={0.5}
      />
      {/* Top edge highlight */}
      <polygon
        points={`${bl} ${br} ${apex}`}
        fill="rgba(88,86,214,0.08)"
        stroke="rgba(88,86,214,0.20)" strokeWidth={0.3}
      />

      {/* Horizontal layer lines (testing pyramid tiers) */}
      {[18, 38, 55].map((z, i) => {
        const f = 1 - z / 70;
        const inset = 35 * (1 - f);
        return (
          <polygon
            key={i}
            points={poly(
              [inset, inset, z], [70 - inset, inset, z],
              [70 - inset, 70 - inset, z], [inset, 70 - inset, z]
            )}
            fill="none"
            stroke="rgba(0,122,255,0.20)"
            strokeWidth={0.5}
            strokeDasharray="2,2"
          />
        );
      })}
    </svg>
  );
};


/* ═══════════════════════════════════════════════════════
   CLOUD CONTAINERS — Floating platforms (Cloud & DevOps)
   ═══════════════════════════════════════════════════════ */
export const CloudContainers = () => (
  <svg viewBox="-80 -100 220 180" className="iso-svg iso-cloud">
    {/* Floating platform 1 (lowest) */}
    <IsoPlatform x={0} y={30} z={0} w={40} d={40} h={4} />
    <IsoBox x={5} y={35} z={4} w={12} d={12} h={10}
      topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
      rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />
    <IsoBox x={22} y={35} z={4} w={12} d={12} h={10}
      topColor={COLORS.accentTop} leftColor={COLORS.accentLeft}
      rightColor={COLORS.accentRight} stroke={COLORS.accentStroke} />

    {/* Floating platform 2 (mid) */}
    <IsoPlatform x={35} y={0} z={25} w={50} d={50} h={4} />
    <IsoBox x={40} y={5} z={29} w={14} d={14} h={12}
      topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
      rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />
    <IsoBox x={58} y={5} z={29} w={14} d={14} h={8}
      topColor={COLORS.accentTop} leftColor={COLORS.accentLeft}
      rightColor={COLORS.accentRight} stroke={COLORS.accentStroke} />
    <IsoBox x={40} y={25} z={29} w={14} d={14} h={8}
      topColor="rgba(0,122,255,0.08)" leftColor="rgba(0,122,255,0.16)"
      rightColor="rgba(0,122,255,0.12)" stroke={COLORS.stroke} />
    <IsoBox x={58} y={25} z={29} w={14} d={14} h={15}
      topColor={COLORS.highlightTop} leftColor={COLORS.highlightLeft}
      rightColor={COLORS.highlightRight} stroke={COLORS.stroke} />

    {/* Floating platform 3 (highest) */}
    <IsoPlatform x={15} y={10} z={55} w={35} d={35} h={3} variant="accent" />
    <IsoBox x={20} y={15} z={58} w={10} d={10} h={8}
      topColor="rgba(88,86,214,0.18)" leftColor="rgba(88,86,214,0.30)"
      rightColor="rgba(88,86,214,0.24)" stroke="rgba(88,86,214,0.30)" />

    {/* Connection lines between platforms */}
    <line x1="20" y1="20" x2="52" y2="-5" stroke="rgba(0,122,255,0.12)" strokeWidth="0.4" strokeDasharray="2,2" />
    <line x1="52" y1="-5" x2="28" y2="-42" stroke="rgba(0,122,255,0.12)" strokeWidth="0.4" strokeDasharray="2,2" />
  </svg>
);
