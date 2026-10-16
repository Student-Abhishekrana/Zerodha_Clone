import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row product-row p-5">
        <div className="col-6 product-image-column">
          <img src={imageUrl} alt={`${productName} platform`} />
        </div>
        <div className="col-4 product-copy">
          <h1 className="fs-4 text-muted">{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo} className=" text-decoration-none">
          {tryDemo} <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a href={learnMore} className="m-5 text-decoration-none">
           {learnMore} <i className="fa-solid fa-arrow-right"></i>
          </a>{" "}
          <br />
          <br />
          <a href={googlePlay} className="">
            <img src={googlePlay} alt="Get it on Google Play" />
          </a>
          <a href={appStore} className="m-3">
            <img src={appStore} alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
