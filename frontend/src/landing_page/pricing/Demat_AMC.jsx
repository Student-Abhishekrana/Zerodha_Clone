import React from "react";

const Demat_AMC = () => {
  return (
    <div className="container m-5">
      <h1 className="text-left fs-3 text-muted py-5">
        Demat AMC (Annual Maintenance Charge)
      </h1>

      <div className="border-start border-5 border-primary text-muted">
        <h2 className="p-3 fs-4">Free for first year*</h2>
      </div>

      <p>From second year onwards, for BSDA accounts:</p>

      <div className="table table-responsive   d-flex justify-content-center">
        <table className="border w-100 text-muted">
          <thead>
          <tr className="fs-5">
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
          </thead>

          <tbody>

          <tr>
            <td>Up to ₹4 lakh</td>
            <td>FREE</td>
          </tr>
          <tr>
            <td>₹4 lakh – ₹10 lakh</td>
            <td>₹100 per year + 18% GST, charged quarterly</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹300 per year + 18% GST, charged quarterly</td>
          </tr>
          </tbody>
        </table>
      </div>

      <p className="lineHeight-5 fs-6">
        For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
        holdings value, charged quarterly.
      </p>
      <p className="lineHeight-5 fs-6">
        To learn more about BSDA, click here. To learn more about AMC, click
        here.
      </p>
      <p className="lineHeight-5 fs-6">*Resident individual accounts only.</p>
    </div>
  );
};

export default Demat_AMC;
