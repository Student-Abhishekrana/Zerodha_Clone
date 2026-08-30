import React from "react";

const Charges_for_account_opening = () => {
  return (
    <div className="container m-5">
      <h1 className="text-left fs-3 text-muted py-5">Charges for account opening</h1>

      <div className="table table-responsive   d-flex justify-content-center">
        <table  className="border w-100 text-muted" >
          <thead>
          <tr className="fs-5">
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Individual account</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>Minor account</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>NRI account</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>HUF account</td>
            <td>FREE(online)/ $500 (offline)</td>
          </tr>
          <tr>
            <td>Partnership, LLP, and Corporate accounts (offline only)</td>
            <td>$500</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Charges_for_account_opening;
