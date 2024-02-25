import { Signal } from '@preact/signals';
import { FunctionalComponent } from 'preact';
import { JSXInternal } from 'preact/src/jsx';
import { Variant } from 'framer-motion';
export type OverlayVariants = {
    initial: Variant;
    in: Variant;
    out: Variant;
};
type OverlayProps = JSXInternal.IntrinsicElements['div'] & {
    visible: Signal<boolean>;
    show: Signal<boolean>;
    portal: HTMLDivElement;
    variations?: OverlayVariants;
    disableScrimClose?: boolean;
    enableEscapeToClose?: boolean;
};
export declare const Overlay: FunctionalComponent<OverlayProps>;
export {};
//# sourceMappingURL=index.d.ts.map