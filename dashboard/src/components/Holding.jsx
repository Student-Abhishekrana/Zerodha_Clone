import React from "react";
import "../index.css";
import api from "../api";
import { useState, useEffect } from "react";

const Holding = () => {
  const [holdings, setHoldings] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    api
      .get("/holdings/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((error) => {
        console.error("Unable to load holdings:", error.response?.data || error.message);
        setLoadError("Unable to load holdings. Please try again.");
      });
  }, []);
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>
      {loadError && <p className="error-message" role="alert">{loadError}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Instrument</th>
              <th scope="col">Qty.</th>
              <th scope="col">Avg. cost</th>
              <th scope="col">LTP</th>
              <th scope="col">Net chg.</th>
              <th scope="col">Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock) => {
              const profitLoss = (stock.price - stock.avg) * stock.qty;
              const profitLossClass = profitLoss >= 0 ? "profit" : "loss";
              const dayChangeClass =
                Number.parseFloat(stock.day) < 0 ? "loss" : "profit";

              return (
                <tr key={stock._id}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{Number(stock.avg).toFixed(2)}</td>
                  <td>{Number(stock.price).toFixed(2)}</td>
                  <td className={profitLossClass}>{stock.net}</td>
                  <td className={dayChangeClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Holding;
