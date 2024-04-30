import React from "react";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";

const Layout = async ({ children }) => {
  return (
    <main className="flex h-full">
      <Sidebar />
      <div className="m-[30px] w-full ml-[310px]">
        <Toaster position="bottom-right" />
        {children}
      </div>
    </main>
  );
};

export default Layout;
