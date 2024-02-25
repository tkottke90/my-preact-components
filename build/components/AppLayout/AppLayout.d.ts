import { ComponentChildren, VNode } from "preact";
interface AppLayoutProps {
    header?: VNode<HTMLDivElement>;
    title?: string;
    children: ComponentChildren;
}
export declare function AppLayout({ header, title, children }: AppLayoutProps): import("preact").JSX.Element;
export {};
//# sourceMappingURL=AppLayout.d.ts.map