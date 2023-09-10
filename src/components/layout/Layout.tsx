import React, { type PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="min-h-screen max-w-[100vw]">
      <main className="min-h-[64.4vh] overflow-hidden">{props.children}</main>
    </div>
  );
};

export default Layout;
