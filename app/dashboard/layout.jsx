import React from "react";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex h-full">
      <Sidebar />
      <div className="m-[30px] flex flex-col gap-[20px] w-full ml-[310px]">
        {children}
      </div>
    </main>
  );
};

export default Layout;
