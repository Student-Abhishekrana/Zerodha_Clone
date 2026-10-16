import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h3
          className="text-center text-muted"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h3>
      </div>

      <div
        className="row mb-5 mt-5 border-top text-start item-center"
        style={{
          width: "100%",
          maxWidth: "64rem",
          margin: "auto",
          padding: "clamp(20px, 5vw, 80px)",
        }}
      >
        <div className="col-6" style={{ fontSize: "16px" }}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div
          className="col-6"
          style={{
            fontSize: "16px",
          }}
        >
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            {" "}
            <Link
              to={"https://rainmatter.com/"}
              className="text-decoration-none"
            >
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link
              to={"https://zerodha.com/z-connect/"}
              className="text-decoration-none"
            >
              {" "}
              blog{" "}
            </Link>{" "}
            or see what the media is{" "}
            <Link
              to={"https://zerodha.com/media"}
              className="text-decoration-none"
            >
              saying about us
            </Link>{" "}
            or learn more about our business and product
            <Link
              to={"https://zerodha.com/about/philosophy/"}
              className="text-decoration-none"
            >
              {" "}
              philosophies{" "}
            </Link>
            .
          </p>
        </div>
      </div>



    </div>
  );
};

export default Hero;
