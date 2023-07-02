import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { FunctionalComponent } from "preact";
import { JSXInternal } from "preact/src/jsx";
import { Overlay, OverlayVariants } from "../Overlay";
import styles from './styles.module.scss';
import { topEntrance, bottomEntrance } from './variants';

function variationSelect(customVariations?: OverlayVariants, directionStr?: 'bottom' | 'top') {
  if (customVariations) {
    return customVariations;
  }

  switch(directionStr) {
    case 'bottom': {
      return bottomEntrance;
    }
    case 'top':
    default: {
      return topEntrance;
    }
  }
}

type ModalProps =
  JSXInternal.IntrinsicElements['div'] &
  {
    className?: string,
    direction?: 'bottom' | 'top',
    disableScrimClose?: boolean
    enableEscapeToClose?: boolean
    portal: HTMLDivElement;
    show: Signal<boolean>;
    variations?: OverlayVariants,
  };

export const Modal: FunctionalComponent<ModalProps> = ({
  children,
  className,
  direction,
  disableScrimClose,
  enableEscapeToClose,
  portal,
  show,
  variations
}) => {
  const visible = useSignal(false);

  const variants = variationSelect(variations, direction);

  return (
    <Overlay
      className={styles.modalWrapper}
      disableScrimClose={disableScrimClose}  
      enableEscapeToClose={enableEscapeToClose}
      portal={portal}
      show={show}
      variations={variants}
      visible={visible}
    >
      <div className={[styles.modalCard, className].join(' ')}>
        {children}
      </div>
    </Overlay>
  )
}