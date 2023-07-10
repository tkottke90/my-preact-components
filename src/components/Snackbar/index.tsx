import { Signal } from "@preact/signals";
import { AnimatePresence, LayoutGroup, Variants, motion } from "framer-motion";
import { createPortal, forwardRef } from "preact/compat";
import { useEffect } from "react";
import styles from "./Snackbar.module.scss";
import { SnackbarItemProps, SnackbarProps as _SnackbarProps } from "./snackbar.types";

type PartialOmit<T, J extends keyof T> = Partial<T> & Omit<T, J> 

const ItemVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1,
    y: "50%",
    pointerEvents: "none",
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    pointerEvents: "all"
  },
  out: {
    opacity: 0,
    scale: 0.8,
    pointerEvents: "none",
    transition: {
      duration: 0.3
    }
  },
};

export type SnackbarProps = SnackbarItemProps;

export function removeItem(id: string) {
  const newList = [...snackbarList.value];
  const itemIndex = newList.findIndex(item => item.uuid === id);

  if (itemIndex > -1) {
    newList.splice(itemIndex, 1);
  }

  snackbarList.value = newList;
}

export function addItem(value: PartialOmit<SnackbarItemProps, 'uuid'>) {
  const uuid = value.uuid ?? crypto.randomUUID();
  
  snackbarList.value = [...snackbarList.value, { ...value, uuid }];
}

const snackbarList = new Signal<SnackbarItemProps[]>([]);

export function SnackbarList({ portal, autoHideDuration = 5000 }: _SnackbarProps) {
  return createPortal(
    <div className={styles.snackbarWrapper}>
      <LayoutGroup>
        <AnimatePresence>
          {snackbarList.value.map((item) => <Snackbar key={item.uuid} {...item} ttl={item.ttl ?? autoHideDuration} />)}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  , portal)
}

const Snackbar = forwardRef<HTMLElement, SnackbarItemProps>((props, ref) => {
  useEffect(() => {
    if (props.ttl && props.ttl > 0) {
      setTimeout(() => {
        removeItem(props.uuid!);
      }, props.ttl);
    }
  }, [ props.uuid ]);
  
  
  return (
    <motion.div
      className={[styles.snackbarItem, props.severity ? styles.warning : '' ].join(' ')}
      ref={ref}
      id={props.uuid}
      layout={props.uuid}
      variants={ItemVariants}
      initial={'initial'}
      animate={'in'}
      exit={'out'}
      transition={{ type: "spring" }}
    >
      <span>{props.label}</span>
      <button
        style={{ background: 'transparent', color: 'currentColor', border: 'none', cursor: 'pointer' }}
        onClick={() => {
          if (props.action) {
            props.action();
          }
          removeItem(props.uuid!)
        }}
      >
        {props.buttonLabel ?? 'CLOSE'}
      </button>
    </motion.div>
  )
});