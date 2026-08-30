import React from "react";

const Hero = () => {
  return (
    <div className="container mt-5 p-5 text-center">
      <h1 >Charges</h1>
      <p className="text-muted fs-4">List of all charges and taxes</p>

      <div className="row text-center d-flex flex-wrap mt-5 pt-5">

        <div className="col">
            <img src="Media\images\pricingMF.svg" alt="" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col">
            <img src="Media\images\intradayTrades.svg" alt="" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted ">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col">
            <img src="Media\images\pricingMF.svg" alt="" />
            <h1 className="fs-3">Free equity delivery</h1>
            <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
