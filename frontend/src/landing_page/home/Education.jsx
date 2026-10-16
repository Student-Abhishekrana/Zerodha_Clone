import React from "react";

function Education() {
  return (
    <div className="container text-center text-muted">
      <div className="row mt-5 ">
        <div className="col-6 text-muted">
          <img src="/Media/images/education.svg" alt="Education" style={{width :"70%"}} />
        </div>

        <div className="col-6 text-start">
          <h1 className="mb-3">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="https://zerodha.com/varsity/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="https://tradingqna.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            TradingQ&amp;A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
