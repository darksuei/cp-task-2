import React from "react";
import { FileTextOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./Sidebar.css";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode | null,
  children?: MenuItem[] | null,
  type?: "group" | null,
  className?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    className,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Personal Information", "sub1", <FileTextOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
  ]),
  { type: "divider" },
  getItem("Education", "sub2", <FileTextOutlined />, [
    getItem("Option 1", "4"),
    getItem("Option 2", "5"),
  ]),
  { type: "divider" },
  getItem("Work Experience", "sub3", <FileTextOutlined />, [
    getItem("Option 1", "6"),
    getItem("Option 2", "7"),
    getItem("Option 3", "8"),
  ]),
  { type: "divider" },
  getItem("Activity Filter", "sub4", <FileTextOutlined />, [
    getItem("Option 1", "9"),
    getItem("Option 2", "10"),
    getItem("Option 3", "11"),
  ]),
  { type: "divider" },
  getItem("Advanced Filter", "sub5", <FileTextOutlined />, [
    getItem("Option 1", "12"),
    getItem("Option 2", "13"),
    getItem("Option 3", "14"),
  ]),
];

const Filters = () => {
  return <Menu mode="inline" className="menu" items={items} />;
};

export default Filters;
