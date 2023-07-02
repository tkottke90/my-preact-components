import { OverlayVariants } from "../Overlay";

const initial = {
  opacity: 0,
  pointerEvents: 'none',
  display: 'grid',
  position: 'absolute'
}

const inbound = {
  opacity: 1,
  pointerEvents: 'all',
  display: 'grid',
  position: 'absolute'
}

const outbound = {
  opacity: 0,
  pointerEvents: 'none',
  display: 'grid',
  position: 'absolute'
}

export const left: OverlayVariants = {
  initial: { ...initial, 'x': '-50%' },
  in: {
    ...inbound,
    'x': 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
      duration: 0.3,
      type: 'spring',
      mass: 0.01,
      velocity: 18,
    }
  },
  out: {
    ...outbound,
    'x': '-50%',
    transition: {
      type: 'spring',
      staggerChildren: 0.02,
      staggerDirection: -1,
      duration: 0.2,
      mass: 0.05,
      velocity: 18,
    }
  }
};

export const right: OverlayVariants = {
  initial: { ...initial, 'x': '50%', right: 0 },
  in: {
    ...inbound,
    'x': 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
      duration: 0.3,
      type: 'spring',
      mass: 0.01,
      velocity: 18,
    }
  },
  out: {
    ...outbound,
    'x': '50%',
    transition: {
      type: 'spring',
      staggerChildren: 0.02,
      staggerDirection: -1,
      duration: 0.2,
      mass: 0.05,
      velocity: 18,
    }
  },
};

export const bottom: OverlayVariants = {
  initial: Object.assign(initial, {
    'y': '50%',
    height: 'fit-content',
    width: '100vw',
    bottom: 0
  }),
  in: Object.assign(inbound, {
    'y': 0,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
      duration: 0.3,
      type: 'spring',
      mass: 0.01,
      velocity: 18,
    }
  }),
  out: Object.assign(outbound, {
    'y': '50%',
    transition: {
      type: 'spring',
      staggerChildren: 0.02,
      staggerDirection: -1,
      duration: 0.2,
      mass: 0.05,
      velocity: 18,
    }
  }),
};