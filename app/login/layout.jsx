import React from "react";
import { getServerSession } from "next-auth";
import { AuthOptions } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const layout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/dashboard");
  else return <>{children}</>;
};

export default layout;
