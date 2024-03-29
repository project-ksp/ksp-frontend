"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import ButtonNav from "@/components/ButtonNav";

const Layout = ({ children }) => {
  return (
    <main className="flex h-full">
      <Sidebar />
      <div className="m-[30px] w-full ml-[310px] relative">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-black">Tambah Anggota</h2>
          <div className="flex gap-5">
            <ButtonNav />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
