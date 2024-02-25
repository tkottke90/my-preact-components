import { Signal, useSignalEffect } from '@preact/signals';
import { useEffect, useState } from 'preact/hooks';
import { FunctionalComponent, Fragment } from 'preact';
import { createPortal } from 'preact/compat';
import { JSXInternal } from 'preact/src/jsx';
import styles from './Overlay.module.scss';
import { AnimatePresence, Variant, Variants, motion } from 'framer-motion';


const defaultVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
    pointerEvents: 'none',
    display: 'grid',
    position: 'absolute',
  },
  in: {
    opacity: 1,
    scale: 1,
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
    scale: 0,
    pointerEvents: 'none',
    transition: {
      type: 'spring',
      staggerChildren: 0.02,
      staggerDirection: -1,
      duration: 0.3,
      mass: 0.05,
      velocity: 18,
    },
  },
};

export type OverlayVariants = {
  initial: Variant;
  in: Variant;
  out: Variant;
}

type OverlayProps =
  JSXInternal.IntrinsicElements['div'] &
  {
    visible: Signal<boolean>;
    show: Signal<boolean>;
    portal: HTMLDivElement;
    variations?: OverlayVariants,
    disableScrimClose?: boolean,
    enableEscapeToClose?: boolean
  };

function getRandomId() {
  const array = new Uint32Array(10);
  return crypto.getRandomValues(array);
}

export const Overlay: FunctionalComponent<OverlayProps> = ({
  children,
  visible,
  show,
  portal,
  id,
  className,
  variations,
  disableScrimClose = false,
  enableEscapeToClose = true
}) => {
  const [myId] = useState(id ?? getRandomId());


  useSignalEffect(() => {
    if (show.value) {
      visible.value = true;
    }
  })

  // Manage keyboard shortcuts
  useSignalEffect(() => {
    const eventName = 'keyup'
    const escapeToClose = (e: KeyboardEvent) => {
      if (e.key === `Escape`) {
        visible.value = false;
        console.log('escape pressed');
      }
    }

    if (enableEscapeToClose) {
      document.addEventListener(eventName, escapeToClose);
    }

    return () => {
      document.removeEventListener(eventName, escapeToClose);
    }
  });

  if (!show.value) {
    return null;
  }

  return (
    <Fragment>
      {createPortal(
        <div className={[styles.overlayWrapper, className].join(' ')}>
          { visible.value && <div className={styles.overlayScrim} onClick={() => {
            if (!disableScrimClose) {
              visible.value = false;
            }
          }}></div> }
          <AnimatePresence>
            { visible.value && <motion.div
              key={myId}
              variants={variations ?? defaultVariants}
              initial="initial"
              animate="in"
              exit="out"
              onAnimationComplete={(d: string) => {
                if (d === 'out') {
                  show.value = false;
                }
              }}
              layout
              className={styles.contentWrapper}
            >
              {children}
            </motion.div>}
          </AnimatePresence>
        </div>
        , portal
      )}
    </Fragment>
  )
}