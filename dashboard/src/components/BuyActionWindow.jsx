import React, { useState, useContext } from "react";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";
import api from "../api";

const BuyActionWindow = ({ uid, mode = "BUY", marketPrice = 0 }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(marketPrice);
  const [orderError, setOrderError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const generalContext = useContext(GeneralContext);

  const handleBuyButton = async (event) => {
    event.preventDefault();
    const quantity = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!Number.isInteger(quantity) || quantity < 1) {
      setOrderError("Quantity must be a whole number of at least 1.");
      return;
    }
    if (!Number.isFinite(price) || price <= 0) {
      setOrderError("Enter a price greater than ₹0.");
      return;
    }

    setOrderError("");
    setIsSubmitting(true);
    try {
      await api.post("/orders/newOrder", {
        name: uid,
        price,
        qty: quantity,
        mode,
      });
      generalContext.closeBuyWindow();
    } catch (error) {
      setOrderError(
        error.response?.data?.message || "Could not place the order. Try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  const isSell = mode === "SELL";

  return (
    <form
      className="container"
      id="buy-window"
      aria-label={`${isSell ? "Sell" : "Buy"} ${uid} order`}
      onSubmit={handleBuyButton}
    >
      <div className="regular-order">
        <span className="company-name">{isSell ? "Sell" : "Buy"} {uid}</span>
        <p className="order-market-price">
          Watchlist price: ₹{Number(marketPrice).toFixed(2)} per share
        </p>

        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              step="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              required
            />
          </fieldset>
          <fieldset>
            <legend>Limit price (₹)</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0.01"
              step="0.01"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              required
            />
          </fieldset>
        </div>
        <p className="order-estimate" aria-live="polite">
          Estimated order value: ₹
          {(Number(stockQuantity) * Number(stockPrice || 0)).toFixed(2)}
        </p>
        {orderError && <p className="order-error" role="alert">{orderError}</p>}
      </div>

      <div className="buttons">
        <div>
          <button
            type="submit"
            className={`btn ${isSell ? "btn-orange" : "btn-blue"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : isSell ? "Sell" : "Buy"}
          </button>
          <button
            type="button"
            className="btn btn-gray"
            onClick={handleCancelClick}
            disabled={isSubmitting}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuyActionWindow;
