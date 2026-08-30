import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", to: "/" },
  { label: "Orders", to: "/orders" },
  { label: "Holdings", to: "/holdings" },
  { label: "Positions", to: "/positions" },
  { label: "Funds", to: "/funds" },
  { label: "Apps", to: "/apps" },
];

const TopBar = () => {
  return (
    <div className="menu-container">
      <img src="/logo.png" alt="logo" className="logo" />
      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `menu ${isActive ? "selected" : ""}`}
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;