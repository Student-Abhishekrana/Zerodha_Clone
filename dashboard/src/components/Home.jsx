import React from "react";
import DashBoard from "./DashBoard";
import TopBar from "./TopBar";
import "../index.css";

const Home = () => {
  return (
    <div className="home-shell">
      <TopBar />
      <DashBoard />
    </div>
  );
};

export default Home;