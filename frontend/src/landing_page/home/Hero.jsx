import React from "react";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center" style={{ marginTop: "5rem" }}>
        <img
          src="media/images/homeHero.png"
          alt=" Hero Image"
          style={{ width: "75%", margin: "auto" }}
        />

        <h2 className="mt-5 text-muted">Invest in everything</h2>
        <p className="fs-4 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 mt-5 fs-5  "
          style={{
            width: "16%",
            margin: "auto",
            backgroundColor: "#387ed1",
            color: "#fff",
           border :"none",
          borderRadius :"5px"
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
