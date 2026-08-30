import React from "react";

const Summary = () => {
  return (
    <div>
      <h2 className="title">Summary</h2>
      <div className="row">
        <div className="col">
          <h5>
            ₹ 1,25,450 <span>Today</span>
          </h5>
          <p>Available margin</p>
        </div>
        <div className="col">
          <h5>
            ₹ 86,200 <span>Profit</span>
          </h5>
          <p>Net P&amp;L</p>
        </div>
        <div className="col">
          <h5>
            ₹ 3,40,000 <span>Holdings</span>
          </h5>
          <p>Portfolio value</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;