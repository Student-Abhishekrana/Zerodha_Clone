import React from "react";
function Team() {
  return (
    <div
      className="container p-5 mt-5 border-top "
      style={{ lineHeight: "1.8", fontSize: "1.2em" }}
    >
      <h1 className="m-auto text-center">People</h1>
      <div className="container row d-flex m-5">
        <div className="col-4 text-center">
          <img
            src="Media/images/nithinKamath.jpg"
            alt="Nithin Kamanth"
            style={{
              borderRadius: "50%",
              width: "18rem",
            }}
          />
          <h4 className="fs-5 mt-4">Nithin Kamath</h4>
          <p className="fs-6">Founder, CEO</p>
        </div>
        <div
          className="col-8"
          style={{
            padding: "none",
            fontSize: "1rem",
            lineHeight: "1.8",
            marginBottom: "15px",
          }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
