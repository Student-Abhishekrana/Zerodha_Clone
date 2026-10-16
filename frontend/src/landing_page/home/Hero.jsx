import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="hero-section">
      <div className="container">
        <img
          className="hero-image"
          src="/Media/images/homeHero.png"
          alt="Zerodha investing platform displayed across devices"
        />

        <h1>Invest in everything</h1>
        <p className="fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/Signup" className="button hero-cta">
          Sign up for free
        </Link>
      </div>
    </main>
  );
}

export default Hero;
