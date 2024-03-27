import React from "react";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex h-full">
      <Sidebar />
      <div className="m-[30px] w-full ml-[310px] relative">{children}</div>
    </main>
  );
};

export default Layout;
