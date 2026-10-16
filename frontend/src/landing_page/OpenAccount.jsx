import React from "react";
import { Link } from "react-router-dom";
function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center text-muted">
        <h1 className="mt-5 fs-2">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to={"Signup"}
          className="p-2 fw-bold btn btn-primary fs-4 mb-5 mt-5"
          style={{ minWidth: "190px", margin: "auto", textDecoration:"none" }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
