import { box, COLORS } from "./iso";

interface IsoBoxProps {
  x: number; y: number; z: number;
  w: number; d: number; h: number;
  topColor?: string; leftColor?: string; rightColor?: string;
  stroke?: string; strokeWidth?: number;
  className?: string;
}

/** Renders a single isometric box (3 visible faces) */
export const IsoBox = ({
  x, y, z, w, d, h,
  topColor = COLORS.topFace,
  leftColor = COLORS.leftFace,
  rightColor = COLORS.rightFace,
  stroke = COLORS.stroke,
  strokeWidth = 0.5,
  className,
}: IsoBoxProps) => {
  const b = box(x, y, z, w, d, h);
  return (
    <g className={className}>
      <polygon points={b.left} fill={leftColor} stroke={stroke} strokeWidth={strokeWidth} />
      <polygon points={b.right} fill={rightColor} stroke={stroke} strokeWidth={strokeWidth} />
      <polygon points={b.top} fill={topColor} stroke={stroke} strokeWidth={strokeWidth} />
    </g>
  );
};

interface IsoPlatformProps {
  x: number; y: number; z: number;
  w: number; d: number; h?: number;
  variant?: "primary" | "accent";
  stroke?: string;
}

/** Renders a thin platform (thin box) */
export const IsoPlatform = ({
  x, y, z, w, d, h = 4,
  variant = "primary",
  stroke,
}: IsoPlatformProps) => {
  const colors = variant === "accent"
    ? { top: COLORS.accentTop, left: COLORS.accentLeft, right: COLORS.accentRight, stroke: stroke || COLORS.accentStroke }
    : { top: COLORS.topFace, left: COLORS.leftFace, right: COLORS.rightFace, stroke: stroke || COLORS.stroke };
  return (
    <IsoBox
      x={x} y={y} z={z} w={w} d={d} h={h}
      topColor={colors.top} leftColor={colors.left}
      rightColor={colors.right} stroke={colors.stroke}
    />
  );
};

interface CubeGridProps {
  ox: number; oy: number; oz: number;
  rows: number; cols: number;
  size: number; gap: number;
  cubeH: number;
  pattern?: boolean[][];
}

/** Renders a grid of cubes on an isometric plane */
export const CubeGrid = ({
  ox, oy, oz, rows, cols,
  size, gap, cubeH, pattern,
}: CubeGridProps) => {
  const cubes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pattern && !pattern[r]?.[c]) continue;
      cubes.push(
        <IsoBox
          key={`${r}-${c}`}
          x={ox + c * (size + gap)}
          y={oy + r * (size + gap)}
          z={oz}
          w={size} d={size} h={cubeH}
          topColor={COLORS.highlightTop}
          leftColor={COLORS.highlightLeft}
          rightColor={COLORS.highlightRight}
          stroke={COLORS.stroke}
          strokeWidth={0.4}
        />
      );
    }
  }
  return <g>{cubes}</g>;
};
