import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link
          className="navbar-brand"
          to="/"
          onClick={closeMenu}
          aria-label="Zerodha home"
        >
          <img src="/Media/images/logo.svg" alt="Zerodha" />
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          aria-controls="navbar-links"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <div
          className={`navbar-collapse${menuOpen ? " nav-open" : ""}`}
          id="navbar-links"
        >
          <ul className="navbar-nav">
            <li><Link className="nav-link" to="/Signup" onClick={closeMenu}>Signup</Link></li>
            <li><Link className="nav-link" to="/About" onClick={closeMenu}>About</Link></li>
            <li><Link className="nav-link" to="/Products" onClick={closeMenu}>Products</Link></li>
            <li><Link className="nav-link" to="/Pricing" onClick={closeMenu}>Pricing</Link></li>
            <li><Link className="nav-link" to="/Support" onClick={closeMenu}>Support</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
