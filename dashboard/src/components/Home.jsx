import React, { useEffect, useState } from "react";
import DashBoard from "./DashBoard";
import TopBar from "./TopBar";
import "../index.css";
import api from "../api";

const Home = () => {
  const [authState, setAuthState] = useState("checking");

  useEffect(() => {
    api
      .get("/auth/me")
      .then(() => setAuthState("authenticated"))
      .catch((error) => {
        if (error.response?.status === 401) {
          window.location.assign(
            `${process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000"}/Login`,
          );
          return;
        }
        console.error("Unable to verify login:", error.message);
        setAuthState("error");
      });
  }, []);

  if (authState === "checking" || authState === "unauthenticated") {
    return <p className="auth-loading">Checking your login...</p>;
  }

  if (authState === "error") {
    return (
      <p className="auth-loading">
        Unable to verify your login. Please refresh and try again.
      </p>
    );
  }

  return (
    <div className="home-shell">
      <TopBar />
      <DashBoard />
    </div>
  );
};

export default Home;