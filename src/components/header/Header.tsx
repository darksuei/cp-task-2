// import React from "react";
import "./Header.css";
import HeaderIcon from "./HeaderIcon";
import * as header_icons from "../../assets/navbar-assets";
import DropDownFilled from "./DropDownFilled";
import DropDown from "./DropDown";

const Header = () => {
	return (
		<header className="header">
			<div className="header-left-part">
				<h1>London Internship Program</h1>
				<p>London</p>
			</div>
			<div className="header-right-part">
				<DropDown />
				<div className="cta-right">
					<HeaderIcon src={header_icons.Tag} alt="header_svg_icon" />
					<HeaderIcon src={header_icons.Users_Close} alt="header_svg_icon" />
					<HeaderIcon src={header_icons.Users_Check} alt="header_svg_icon" />
					<HeaderIcon src={header_icons.Users_Voice} alt="header_svg_icon" />
					<HeaderIcon src={header_icons.Mail} alt="header_svg_icon" />
					<DropDownFilled />
				</div>
			</div>
		</header>
	);
};

export default Header;
