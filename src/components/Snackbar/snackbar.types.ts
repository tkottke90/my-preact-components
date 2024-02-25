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

export type SnackbarProps = JSXInternal.IntrinsicElements["div"] & {
  portal: HTMLDivElement;
  autoHideDuration?: number;
  items: Signal<SnackbarItemProps[]>;
};