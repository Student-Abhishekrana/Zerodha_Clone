import React from "react";
function Pricing() {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        <div className="col-4 text-muted">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{textDecoration:"none"}}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
       
        <div className="col-6">
          <div className="row text-center">
            <div className="col">
              <img
                src="Media\images\pricingEquity.svg"
                alt="Free account opening"
              />
             <p className="fs-10"> Free account opening </p>
            </div>
            <div className="col">
              <img src="Media\images\pricingMF.svg" alt="" />
              <p className="fs-10"> Free equity delivery and direct mutual funds </p>
            </div>
            <div className="col">
              <img
                src="Media\images\intradayTrades.svg"
                alt=" Free equity delivery and direct mutual funds"
              />
              <p className="fs-10"> Intraday and F&O </p>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}

export default Pricing;
