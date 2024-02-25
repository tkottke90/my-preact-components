import { SnackbarItemProps, SnackbarProps as _SnackbarProps } from "./snackbar.types";
type PartialOmit<T, J extends keyof T> = Partial<T> & Omit<T, J>;
export type SnackbarProps = SnackbarItemProps;
export declare function removeItem(id: string): void;
export declare function addItem(value: PartialOmit<SnackbarItemProps, 'uuid'>): void;
export declare function SnackbarList({ portal, autoHideDuration, items }: _SnackbarProps): import("preact").VNode<any>;
export {};
//# sourceMappingURL=index.d.ts.map