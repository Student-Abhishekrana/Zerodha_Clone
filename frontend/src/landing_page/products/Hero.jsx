import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="text-center p-5 mb-5 mt-5">
        <h2 style={{ color: "#424242", paddingTop: "65px" }}>
          Zerodha Products
        </h2>
        <h5 style={{ color: "#424242", minWdth: "350px" }}>
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="fs-5 text-muted mt-3">
          Check out our{" "}
          <Link
            to={"/https://zerodha.com/investments"}
            className="text-decoration-none"
          >
            {" "}
            investment offerings <i class="fa-solid fa-arrow-right"></i>{" "}
          </Link>{" "}
        </p>

        <video
          width="640"
          height="360"
          controls
          poster="Media/images/investments-head.png"
        >
          <source
            src="https://www.youtube.com/watch?v=hpECGCr-oe8"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
