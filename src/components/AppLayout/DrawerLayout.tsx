import { ComponentChildren, Fragment, VNode } from "preact";

interface DrawerLayoutProps {
  header?: VNode<HTMLDivElement>,
  title?: string,
  children: ComponentChildren
};

export function DrawerLayout({ header, title, children }: DrawerLayoutProps) {

  return (
    <Fragment>
      { header ? header : <header>{title}</header> };
      {/* TODO: Add Drawer as an Aside */}
      <main>
        {children}
      </main>
    </Fragment>
  );
}

