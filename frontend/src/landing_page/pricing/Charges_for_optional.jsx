import React from "react";

const Charges_for_optional = () => {
  return (
    <div className="container m-5">
      <h1  className="text-left fs-3 text-muted py-5">Charges for optional value added services</h1>

      <div className="table table-responsive d-flex justify-content-center">
        <table className="border w-100 text-muted">
          <thead>
          <tr className="fs-5">
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Quarterly / Annual</td>
            <td>Free: 0 | Pro: 249/699/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy & Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Personal: Free</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Charges_for_optional;
