import React from "react";
import Sidebar from "@/components/Sidebar";
import ButtonNav from "@/components/ButtonNav";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-black">Form Anggota</h2>
      <div className="flex gap-5">
        <ButtonNav />
      </div>
      {children}
    </div>
  );
};

export default Layout;
