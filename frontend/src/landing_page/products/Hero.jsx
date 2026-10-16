import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="text-center p-5 mb-5 mt-5">
        <h2 style={{ color: "#424242", paddingTop: "65px" }}>
          Zerodha Products
        </h2>
        <h5 style={{ color: "#424242" }}>
          Sleek, modern, and intuitive trading platforms
        </h5>
        <p className="fs-5 text-muted mt-3">
          Check out our{" "}
          <a
            href="https://zerodha.com/investments"
            className="text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            investment offerings <i className="fa-solid fa-arrow-right" />
          </a>
        </p>

        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/hpECGCr-oe8"
            title="Zerodha investments overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
