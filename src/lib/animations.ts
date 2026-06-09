import type { Variants, Transition } from "framer-motion";

/** Spring physics matching Apple-style transitions (stiffness: 300, damping: 30) */
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

/** Smooth ease transition */
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

/** Fade in from below — used for page/section entry */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

/** Fade in — simple opacity reveal */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Staggered children container */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Scale down on press — for buttons */
export const pressScale: Variants = {
  idle: { scale: 1 },
  pressed: { scale: 0.95, transition: springTransition },
};

/** Navbar slide in from top */
export const navReveal: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
};

/** Project card image hover zoom */
export const imageZoom: Variants = {
  rest: { scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  hover: { scale: 1.03, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};
