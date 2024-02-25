import { Signal } from "@preact/signals";
import { FunctionalComponent } from "preact";
import { JSXInternal } from "preact/src/jsx";
import { OverlayVariants } from "../Overlay";
type DirectionOptions = 'left' | 'right' | 'bottom';
type DrawerProps = JSXInternal.IntrinsicElements['div'] & {
    className?: string;
    direction?: DirectionOptions;
    disableScrimClose?: boolean;
    enableEscapeToClose?: boolean;
    portal: HTMLDivElement;
    show: Signal<boolean>;
    variations?: OverlayVariants;
};
export declare const Drawer: FunctionalComponent<DrawerProps>;
export {};
//# sourceMappingURL=index.d.ts.map