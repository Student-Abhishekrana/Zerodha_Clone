import React, { useState, useEffect } from "react";
import api from "../api";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loadError, setLoadError] = useState("");
  useEffect(() => {
    api
      .get("/orders/allorders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((error) => {
        console.error("Unable to load orders:", error.response?.data || error.message);
        setLoadError("Unable to load orders. Please try again.");
      });
  }, []);

  return (
    <>
      <h3 className="title">Your Orders ({orders.length})</h3>
      {loadError && <p className="error-message" role="alert">{loadError}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{Number(order.price).toFixed(2)}</td>
                <td>{order.qty}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
