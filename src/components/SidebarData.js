import React from "react";
import * as AiIcons from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { CgProfile } from "react-icons/cg";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/Profile/Dashboard",
    icon: <CgProfile />,
    cName: "Sidebar-text",
  },
  {
    title: "Contacts",
    path: "/Contacts",
    icon: <AiIcons.AiFillCompass />,
    cName: "Sidebar-text",
  },
  {
    title: "User Transactions",
    path: "/Transactions",
    icon: <BiTransfer />,
    cName: "Sidebar-text",
  },
  {
    title: "My QR Code",
    path: "/MyQR",
    icon: <AiIcons.AiOutlineQrcode />,
    cName: "Sidebar-text",
  },
  {
    title: "Analytics",
    path: "/Analytics",
    icon: <ImStatsDots />,
    cName: "Sidebar-text",
  },
];
