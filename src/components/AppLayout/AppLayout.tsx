import { ComponentChildren, Fragment, VNode } from "preact";


interface AppLayoutProps {
  header?: VNode<HTMLDivElement>,
  title?: string,
  children: ComponentChildren
};

export function AppLayout({ header, title, children }: AppLayoutProps) {


  return (
    <Fragment>
      { header ? header : <header>{title}</header> };
      <main>
        {children}
      </main>
    </Fragment>
  );
}