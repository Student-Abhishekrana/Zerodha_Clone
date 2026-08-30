import React from "react";
function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center text-muted">
        <h1 className="mt-5 fs-2">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 fw-bold btn btn-primary fs-4 mb-5 mt-5"
          style={{ width: "20%", margin: "auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
