import React from "react";
import { FileTextOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: "group",
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Personal Information", "sub1", <FileTextOutlined />, [
		getItem("Option 1", "1"),
		getItem("Option 2", "2"),
		getItem("Option 3", "3"),
		getItem("Option 4", "4"),
	]),
	{ type: "divider" },
	getItem("Education", "sub2", <FileTextOutlined />, [
		getItem("Option 5", "5"),
		getItem("Option 6", "6"),
	]),
	{ type: "divider" },
	getItem("Work Experience", "sub3", <FileTextOutlined />, [
		getItem("Option 9", "9"),
		getItem("Option 10", "10"),
		getItem("Option 11", "11"),
		getItem("Option 12", "12"),
	]),
	{ type: "divider" },
	getItem("Activty Filter", "sub4", <FileTextOutlined />, [
		getItem("Option 9", "9.1"),
		getItem("Option 10", "10.1"),
		getItem("Option 11", "11.1"),
		getItem("Option 12", "12.1"),
	]),
	{ type: "divider" },
	getItem("Advanced Filter", "sub5", <FileTextOutlined />, [
		getItem("Option 9", "9.2"),
		getItem("Option 10", "10.3"),
		getItem("Option 11", "11.2"),
		getItem("Option 12", "12.2"),
	]),
];

const Filters = () => {
	return <Menu mode="inline" className="menu" items={items} />;
};

export default Filters;
