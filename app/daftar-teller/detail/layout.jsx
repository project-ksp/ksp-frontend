import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default Layout;
