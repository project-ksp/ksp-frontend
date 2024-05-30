import React from "react";
import Sidebar from "@/components/Sidebar";
import CetakBerkasButtonNav from "@/components/CetakBerkasButtonNav";

const Layout = ({ children }) => {
  return (
    <main className="flex h-full">
      <Sidebar />
      <div className="m-[30px] w-full ml-[310px]">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-black">Cetak Berkas</h2>
          <div className="flex gap-5">
            <CetakBerkasButtonNav />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
