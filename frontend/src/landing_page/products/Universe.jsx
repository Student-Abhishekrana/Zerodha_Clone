import React from "react";
import "./universe.css";

const Universe = () => {
  return (
    <div className="container text-center">
      <h1>The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="container-fluid d-flex flex-wrap">
        <div className="col-4 p-3">
          <img
            src="/Media/images/zerodhaFundhouse.png"
            alt="zerodhafundHouse"
           style={{ height: "55px" }}
           
          />
          <br />
          <span className="description text-muted">
            Our asset management venture
            <br /> that is creating simple and transparent index
            <br />
            funds to helps you save for your goals.
          </span>
        </div>
        <div className="col-4 p-3">
          <img
            src="/Media/images/sensibull-logo.svg"
            alt="smallcaselogo"
           style={{ height: "55px" }}
           
          />
          <br />
          <span className=" description text-muted">
            Options tradding platform that lets you
            <br />
            create strategies position, and examine
            <br /> data Point like open interest,Fill/DLL,and more
          </span>
        </div>

        <div className="col-4 p-3">
          <img
            src="/Media/images/streakLogo.png"
            alt="StreakLogo"
           style={{ height: "55px" }}
           
          />
          <br />
          <span className=" description text-muted">
            Systematic trading platform
            <br /> that allows you to create and backlest
            <br /> strategies without coding
          </span>
        </div>

        <div className="col-4 p-3">
          <img
            src="/Media/images/smallcaseLogo.png"
            alt="smallcaselogo"
           style={{ height: "55px" }}
           
          />
          <br />
          <span className="description text-muted">
            Personalized advice on life
            <br /> and health insurance.No spam
            <br />
            and no mis-selling.
          </span>
        </div>
        <div className="col-4 p-3">
          <img
            src="/Media/images/dittoLogo.png"
            alt="smallcaselogo"
            style={{ height: "55px" }}
           
          />
          <br />
          <span className=" description text-muted">
            Personalized advice on life
            <br /> and health.No spam <br />
            and no mis-selling.
          </span>
        </div>
        <div className="col-4 p-3">
          <img
            src="/Media/images/tijori.svg"
            alt="smallcaselogo"
           style={{ height: "55px" }}
            
          />
          <br />
          <span className="text-muted description" >
            Personalized advice on life
            <br /> and health.No spam <br />
            and no mis-selling.
          </span>
        </div>
      </div>

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
  );
};

export default Universe;
