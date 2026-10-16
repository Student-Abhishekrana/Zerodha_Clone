import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Hero from "./Hero";
import Universe from "./Universe";
function Products() {
  return (
    <div className="container mt-5">
      <Hero />
      <LeftSection
        imageUrl="/Media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo "
        learnMore="Learn more"
        googlePlay="/Media/images/googlePlayBadge.svg"
        appStore="/Media/images/appstoreBadge.svg"
      />

      <RightSection
        imageUrl="/Media/images/console.png"
        imageUrlWidth="500px"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more"
        googlePlay="/Media/images/googlePlayBadge.svg"
        appStore="/Media/images/appstoreBadge.svg"
      />

      <LeftSection
        imageUrl="/Media/images/coin.png"
        productName="Coins"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        learnMore="Coin "
        googlePlay="/Media/images/googlePlayBadge.svg"
        appStore="/Media/images/appstoreBadge.svg"
      />

      <RightSection
        imageUrl="/Media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Learn more"
        googlePlay="/Media/images/googlePlayBadge.svg"
        appStore="/Media/images/appstoreBadge.svg"
      />
      <LeftSection
        imageUrl="/Media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="/Media/images/googlePlayBadge.svg"
        appStore="/Media/images/appstoreBadge.svg"
      />

    <Universe/>
    </div>
  );
}

export default Products;
