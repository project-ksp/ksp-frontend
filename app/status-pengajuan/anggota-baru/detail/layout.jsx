import React from "react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col gap-2">
      <Toaster position="bottom-right" />
      {children}
    </div>
  );
};

export default Layout;
