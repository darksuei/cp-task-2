// import React from 'react'
import ListItem from "./ListItem";
import "./SideNav.css";
import * as navbar_icons from "../../assets/navbar-assets";

const SideNav = () => {
  return (
    <nav className="side-nav vanish-scroll-bar">
      <div className="top-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle cx="24" cy="24" r="16" fill="#D9D9D9" />
        </svg>
        <ul className="top-section-navs">
          <ListItem src={navbar_icons.House} alt="nav_icon" />
          <ListItem src={navbar_icons.Users_Group} alt="nav_icon" />
          <ListItem src={navbar_icons.CalenderCheck} alt="nav_icon" />
          <ListItem src={navbar_icons.Share_Android} alt="nav_icon" />
          <ListItem src={navbar_icons.File_Document} alt="nav_icon" />
          <ListItem src={navbar_icons.Notebook} alt="nav_icon" />
          <ListItem src={navbar_icons.Heart} alt="nav_icon" />
          <ListItem src={navbar_icons.Chevron_Right} alt="nav_icon" />
        </ul>
      </div>
      <ul className="bottom-section">
        <ListItem src={navbar_icons.Settings} alt="nav_icon" />
        <li className="nav-list-item">
          <div className="profile">AS</div>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
