import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, mode, price) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);
  const [mode, setMode] = useState("BUY");

  const handleOpenBuyWindow = (uid, orderMode = "BUY", price = 0) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(Number(price) || 0);
    setMode(orderMode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
    setMode("BUY");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <div
          className="buy-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseBuyWindow();
            }
          }}
        >
          <BuyActionWindow
            uid={selectedStockUID}
            mode={mode}
            marketPrice={selectedStockPrice}
          />
        </div>
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
