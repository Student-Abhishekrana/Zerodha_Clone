import React from "react";

const RightSection = ({
  imageUrl,
  imageUrlWidth,
  productName,
  productDescription,
  
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row p-5"  style={{width:"75rem", margin:"auto"}}>
        <div className="col-5 p-5">
          <h1 className="fs-4 text-muted">{productName}</h1>
          <p>{productDescription}</p>

         
          <a href={learnMore} className="m-5 text-decoration-none">
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>

          <br /><br />

          <a href={googlePlay}>
            <img src="/Media/images/googlePlayBadge.svg" alt="Google Play badge" />
          </a>

          <a href={appStore} className="m-3">
            <img src="/Media/images/appstoreBadge.svg" alt="App Store badge" />
          </a>

        </div>

        <div className="col-1"></div>

        <div className="col-6"  style={{width :{imageUrlWidth}}}>
          <img src={imageUrl} alt={productName} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
