import Grid from "@/components/icons/Grid";
import Shop from "@/components/icons/Shop";
import AccountBlock from "@/components/icons/AccountBlock";

export const SIDENAV_ITEMS = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Grid color="white" />,
    iconSecondary: <Grid color="black" />,
  },
  {
    title: "Data Master",
    path: "/data-master",
    icon: <Shop color="white" />,
    iconSecondary: <Shop color="black" />,
  },
  {
    title: "Account Block",
    path: "/account-block",
    icon: <AccountBlock color="white" />,
    iconSecondary: <AccountBlock color="black" />,
  },
];
