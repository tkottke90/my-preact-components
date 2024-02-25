import { Signal } from "@preact/signals";
import { FunctionalComponent } from "preact";
import { JSXInternal } from "preact/src/jsx";
import { OverlayVariants } from "../Overlay";
type ModalProps = JSXInternal.IntrinsicElements['div'] & {
    className?: string;
    direction?: 'bottom' | 'top';
    disableScrimClose?: boolean;
    enableEscapeToClose?: boolean;
    portal: HTMLDivElement;
    show: Signal<boolean>;
    variations?: OverlayVariants;
};
export declare const Modal: FunctionalComponent<ModalProps>;
export {};
//# sourceMappingURL=index.d.ts.map