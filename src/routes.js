import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/admin/default";
import NFTMarketplace from "./views/admin/marketplace";
import Profile from "./views/admin/profile";
import DataTables from "./views/admin/dataTables";
import RTL from "./views/admin/rtl";

// Auth Imports
import SignInCentered from "./views/auth/signIn";

const routes = [
  {
    name: "Roster Review",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdPerson}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Employer Dashboard",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Sign Out",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  }
];

export default routes;