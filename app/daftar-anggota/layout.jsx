"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import ButtonNav from "@/components/ButtonNav";

const Layout = ({ children }) => {
  return (
    <main className="flex h-full">
      <Sidebar />
      <div className="m-[30px] w-full ml-[310px]">{children}</div>
    </main>
  );
};

export default Layout;
