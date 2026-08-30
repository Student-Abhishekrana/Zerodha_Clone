import React from "react";

function Award() {
  return (
    <div className="container">
      <div className="row text-muted" >
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ miliion Zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in :
          </p>
          <div className="row">
            <div className="col">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency Derivative</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Goods</p>
                </li>
              </ul>
            </div>
          </div>
          <img style={{width:"90%"}} src="Media\images\pressLogos.png" alt="press logo" />

        </div>
      </div>
    </div>
  );
}

export default Award;
