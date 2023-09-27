import type { PropsWithChildren } from "react";
import SideNav from "./components/navbar/SideNav";

const Layout = (props: PropsWithChildren) => {
  return (
    <main className="layout">
      <section className="navbar">
        <SideNav />
      </section>
      <section className="app">{props.children}</section>
    </main>
  );
};

export default Layout;
