import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { FunctionalComponent } from "preact";
import { JSXInternal } from "preact/src/jsx";
import { Overlay, OverlayVariants } from "../Overlay";
import styles from './styles.module.scss';
import { left, right, bottom } from './variants';

type DirectionOptions = 'left' | 'right' | 'bottom';

function variationSelect(customVariations?: OverlayVariants, directionStr?: DirectionOptions) {
  if (customVariations) {
    return customVariations;
  }
  
  switch(directionStr) {
    case 'bottom':
      return bottom;
    case 'right':
      return right;
    case 'left':
    default:
      return left;
  }
}

type DrawerProps =
  JSXInternal.IntrinsicElements['div'] &
  {
    className?: string,
    direction?: DirectionOptions,
    disableScrimClose?: boolean
    enableEscapeToClose?: boolean
    portal: HTMLDivElement;
    show: Signal<boolean>;
    variations?: OverlayVariants,
  };

export const Drawer: FunctionalComponent<DrawerProps> = ({
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
      className={styles.drawerWrapper}
      disableScrimClose={disableScrimClose}  
      enableEscapeToClose={enableEscapeToClose}
      portal={portal}
      show={show}
      variations={variants}
      visible={visible}
    >
      <div className={[styles.drawerCard, className].join(' ')} data-dir={direction ?? 'left'} >
        {children}
      </div>
    </Overlay>
  )
}