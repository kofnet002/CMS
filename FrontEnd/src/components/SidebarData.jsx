import React from "react";
import { FaCartPlus } from "react-icons/fa";

export const SidebarData = [
  {
    title: "All Members",
    path: "/members/",
    submenu: [],
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Add member",
    path: "/register",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Ministries",
    path: "/ministries",
    icon: <FaCartPlus />,
    cName: "nav-text",
    submenu: [
      {
        title: "Children",
        path: "/children",
        icon: <FaCartPlus />,
        cName: "nav-text",
      },
      {
        title: "Students' Union",
        path: "/students-union",
        icon: <FaCartPlus />,
        cName: "nav-text",
      },
      {
        title: "Choir",
        path: "/choir",
        icon: <FaCartPlus />,
        cName: "nav-text",
      },
      {
        title: "Mens' Fellowship",
        path: "/mens-fellowship",
        icon: <FaCartPlus />,
        cName: "nav-text",
      },
      {
        title: "Womens' Fellowship",
        path: "/womens-fellowship",
        icon: <FaCartPlus />,
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Accounts",
    path: "/accounts",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Sign out",
    path: "/signout",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
];

// Ministries Data
export const MinistriesSubMenu = [
  {
    title: "Children",
    path: "/children",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Students' Union",
    path: "/students-union",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Choir",
    path: "/choir",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Mens' Fellowship",
    path: "/mens-fellowship",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Womens' Fellowship",
    path: "/womens-fellowship",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
];

// Accounts Data
export const AccountsSubMenu = [
  {
    title: "First Offering",
    path: "/first-offering",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Second Offering",
    path: "/second-offering",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Welfare",
    path: "/welfare",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Tithe",
    path: "/tithe",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
];
