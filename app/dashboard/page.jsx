"use client";

import DashboardOwner from "./DashboardOwner";
import DashboardKepalaCabangDanTeller from "./DashboardKepalaCabangDanTeller";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (session.user.role == "owner") {
    return <DashboardOwner />;
  } else {
    return <DashboardKepalaCabangDanTeller />;
  }
};

export default Dashboard;
