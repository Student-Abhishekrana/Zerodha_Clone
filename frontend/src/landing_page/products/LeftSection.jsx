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
      <div className="row p-5"
      style={{width:"75rem", margin:"auto"}}>
        <div className="col-6 p-3">
          <img src={imageUrl} alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col-4 px-3">
          <h1 className="fs-4 text-muted">{productName}</h1>
          <p>{productDescription}</p>
          <a href={tryDemo} className=" text-decoration-none">
          {tryDemo} <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href={learnMore} className="m-5 text-decoration-none">
           {learnMore} <i class="fa-solid fa-arrow-right"></i>
          </a>{" "}
          <br />
          <br />
          <a href={googlePlay} className="">
            <img src="/Media/images/googlePlayBadge.svg" alt="" />
          </a>
          <a href={appStore} className="m-3">
            <img src="Media\images\appstoreBadge.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
