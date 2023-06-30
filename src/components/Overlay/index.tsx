import { Signal, useSignalEffect } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { FunctionalComponent, Fragment } from 'preact';
import { createPortal } from 'preact/compat';
import { JSXInternal } from 'preact/src/jsx';
import styles from './Overlay.module.scss';
import { AnimatePresence, Variants, motion } from 'framer-motion';

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
      duration: 0.2,
      mass: 0.05,
      velocity: 18,
    },
  },
};

type OverlayProps =
  JSXInternal.IntrinsicElements['div'] &
  { visible: Signal<boolean>, show: Signal<boolean>, portal: HTMLDivElement };

export const Overlay: FunctionalComponent<OverlayProps> = ({ children, visible, show, portal, id, className }) => {

  useSignalEffect(() => {
    if (show.value) {
      visible.value = true;
    }
  })

  if (!show.value) {
    return null;
  }

  return (
    <Fragment>
      {createPortal(
        <div className={[styles.overlayWrapper, className].join(' ')}>
          { visible.value && <div className={styles.overlayScrim} onClick={() => visible.value = false}></div> }
          <AnimatePresence>
            { visible.value && <motion.div
              key={id}
              variants={defaultVariants}
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
            </motion.div> }
          </AnimatePresence>
        </div>
        , portal
      )}
    </Fragment>
  )
}