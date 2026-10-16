import React, { useState, useEffect } from "react";
import api from "../api";
const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    api
      .get("/positions/allPositions")
      .then((res) => {
        setPositions(res.data);
      })
      .catch((error) => {
        console.error("Unable to load positions:", error.response?.data || error.message);
        setLoadError("Unable to load positions. Please try again.");
      });
  }, []);
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>
      {loadError && <p className="error-message" role="alert">{loadError}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Instrument</th>
              <th scope="col">Qty.</th>
              <th scope="col">Avg.</th>
              <th scope="col">LTP</th>
              <th scope="col">P&amp;L</th>
              <th scope="col">Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock) => {
              const profitLoss = (stock.price - stock.avg) * stock.qty;
              const profitLossClass = profitLoss >= 0 ? "profit" : "loss";
              const dayChangeClass =
                Number.parseFloat(stock.day) < 0 ? "loss" : "profit";

              return (
                <tr key={stock._id}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{Number(stock.avg).toFixed(2)}</td>
                  <td>{Number(stock.price).toFixed(2)}</td>
                  <td className={profitLossClass}>{profitLoss.toFixed(2)}</td>
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

export default Positions;
