import { Signal } from '@preact/signals';
import { FunctionalComponent, Fragment } from 'preact';
import { createPortal } from 'preact/compat';
import { JSXInternal } from 'preact/src/jsx';
import styles from './Overlay.module.scss';

type OverlayProps =
  JSXInternal.IntrinsicElements['div'] &
  { open: Signal<boolean>, show: Signal<boolean>, portal: HTMLDivElement };

export const Overlay: FunctionalComponent<OverlayProps> = ({ children, open, portal }) => {

  return (
    <Fragment>
      {createPortal(
        <div className={styles.overlayWrapper}>
          { open && <div className={styles.overlayScrim}></div> }
        
          <div class={styles.contentWrapper}>
            {children}  

          </div>
        </div>
        , portal
      )}
    </Fragment>
  )
}