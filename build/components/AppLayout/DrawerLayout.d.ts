import { ComponentChildren, VNode } from "preact";
interface DrawerLayoutProps {
    header?: VNode<HTMLDivElement>;
    title?: string;
    children: ComponentChildren;
}
export declare function DrawerLayout({ header, title, children }: DrawerLayoutProps): import("preact").JSX.Element;
export {};
//# sourceMappingURL=DrawerLayout.d.ts.map