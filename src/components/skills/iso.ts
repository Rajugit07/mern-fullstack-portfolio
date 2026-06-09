/**
 * Isometric projection utilities for SVG rendering.
 * Converts 3D (x, y, z) coordinates to 2D isometric screen coordinates.
 */

const C = 0.866025; // cos(30°)
const S = 0.5;      // sin(30°)

/** Convert 3D coords to 2D isometric screen coords */
export function iso(x: number, y: number, z: number): [number, number] {
  return [
    +((x - y) * C).toFixed(2),
    +((x + y) * S - z).toFixed(2),
  ];
}

/** Convert 3D coords to SVG point string "x,y" */
export function pt(x: number, y: number, z: number): string {
  const [sx, sy] = iso(x, y, z);
  return `${sx},${sy}`;
}

/** Create SVG polygon points from array of 3D points */
export function poly(...points: [number, number, number][]): string {
  return points.map(([x, y, z]) => pt(x, y, z)).join(" ");
}

/** Generate the 3 visible faces of an isometric box */
export function box(
  ox: number, oy: number, oz: number,
  w: number, d: number, h: number
) {
  return {
    top: poly(
      [ox, oy, oz + h], [ox + w, oy, oz + h],
      [ox + w, oy + d, oz + h], [ox, oy + d, oz + h]
    ),
    left: poly(
      [ox, oy + d, oz + h], [ox + w, oy + d, oz + h],
      [ox + w, oy + d, oz], [ox, oy + d, oz]
    ),
    right: poly(
      [ox + w, oy, oz + h], [ox + w, oy + d, oz + h],
      [ox + w, oy + d, oz], [ox + w, oy, oz]
    ),
  };
}

/* ── Apple-inspired isometric color palette ── */
export const COLORS = {
  topFace: "rgba(0, 122, 255, 0.10)",
  leftFace: "rgba(0, 122, 255, 0.20)",
  rightFace: "rgba(0, 122, 255, 0.15)",
  stroke: "rgba(0, 122, 255, 0.30)",
  accentTop: "rgba(88, 86, 214, 0.15)",
  accentLeft: "rgba(88, 86, 214, 0.25)",
  accentRight: "rgba(88, 86, 214, 0.20)",
  accentStroke: "rgba(88, 86, 214, 0.30)",
  highlightTop: "rgba(0, 122, 255, 0.25)",
  highlightLeft: "rgba(0, 122, 255, 0.40)",
  highlightRight: "rgba(0, 122, 255, 0.32)",
};

/* ── Brand colors for technologies ── */
export const BRAND = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  html: "#E34F26",
  java: "#ED8B00",
  nodejs: "#339933",
  express: "#1a1a1a",
  graphql: "#E10098",
  rest: "#007AFF",
  react: "#61DAFB",
  nextjs: "#000000",
  tailwind: "#06B6D4",
  redux: "#764ABC",
  mongodb: "#47A248",
  postgresql: "#336791",
  redis: "#DC382D",
  mongoose: "#880000",
  jest: "#C21325",
  rtl: "#E33332",
  cypress: "#69D3A7",
  aws: "#FF9900",
  docker: "#2496ED",
  git: "#F05032",
  cicd: "#5856D6",
};
