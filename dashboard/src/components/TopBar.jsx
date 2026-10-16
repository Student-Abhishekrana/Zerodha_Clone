import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../api";

const menuItems = [
  { label: "Dashboard", to: "/" },
  { label: "Orders", to: "/orders" },
  { label: "Holdings", to: "/holdings" },
  { label: "Positions", to: "/positions" },
  { label: "Funds", to: "/funds" },
  { label: "Apps", to: "/apps" },
];

const TopBar = () => {
  const [userdetail, setUserdetail] = useState({
    _id: "",
    email: "",
    username: "",
  });
  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      window.location.assign(
        `${process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000"}/Login`,
      );
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    api
      .get("/auth/me")
      .then(({ data }) => {
        setUserdetail(data.user);
      })
      .catch((error) => {
        console.error("Unable to load profile:", error.response?.data || error.message);
      });
  }, []);

  return (
    <div className="menu-container">
      <img src="/logo.png" alt="logo" className="logo" />
      <div className="menus">
        <ul>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `menu ${isActive ? "selected" : ""}`
                }
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">
            {(userdetail.username || "U").slice(0, 1).toUpperCase()}
          </div>
          <p className="username">{userdetail.username || "Account"}</p>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
