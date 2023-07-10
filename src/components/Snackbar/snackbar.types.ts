import { Signal } from "@preact/signals";
import { Variant } from "framer-motion";
import { JSXInternal } from "preact/src/jsx";

export type SnackbarItemProps = {
  uuid: string;
  label: string;
  buttonLabel?: string;
  action?: () => any;
  severity?: "normal" | "warning";
  ttl?: number
};

export type SnackbarContext = {
  items: Signal<SnackbarItemProps[]>;
  addItem: (arr: Signal<SnackbarItemProps[]>, value: SnackbarItemProps) => void;
  removeItem: (arr: Signal<SnackbarItemProps[]>, key: keyof SnackbarItemProps, value: string) => void
}

export type SnackbarProps = JSXInternal.IntrinsicElements["div"] & {
  portal: HTMLDivElement;
  autoHideDuration?: number 
};