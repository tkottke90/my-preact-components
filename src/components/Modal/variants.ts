import { OverlayVariants } from "../Overlay";

export const topEntrance: OverlayVariants = {
  initial: {
    opacity: 0,
    'y': '-50%',
    pointerEvents: 'none',
    display: 'grid',
    position: 'absolute',
  },
  in: {
    opacity: 1,
    'y': 0,
    pointerEvents: 'all',
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
      duration: 0.3,
      type: 'spring',
      mass: 0.01,
      velocity: 18,
    },
  },
  out: {
    opacity: 0,
    'y': '-50%',
    pointerEvents: 'none',
    transition: {
      type: 'spring',
      staggerChildren: 0.02,
      staggerDirection: -1,
      duration: 0.2,
      mass: 0.05,
      velocity: 18,
    },
  },
};

export const bottomEntrance: OverlayVariants = {
  initial: {
    opacity: 0,
    'y': '50%',
    pointerEvents: 'none',
    display: 'grid',
    position: 'absolute',
  },
  in: {
    opacity: 1,
    'y': 0,
    pointerEvents: 'all',
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
      duration: 0.3,
      type: 'spring',
      mass: 0.01,
      velocity: 18,
    },
  },
  out: {
    opacity: 0,
    'y': '50%',
    pointerEvents: 'none',
    transition: {
      type: 'spring',
      staggerChildren: 0.02,
      staggerDirection: -1,
      duration: 0.2,
      mass: 0.05,
      velocity: 18,
    },
  },
};