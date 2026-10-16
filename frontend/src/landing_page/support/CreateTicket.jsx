import React from "react";

const CreateTicket = () => {
  return (
    <div className="container mt-5">
      <div className="container border-start border-warning border-5 py-3 " style={{backgroundColor:"#ffe30021"}}>
        <ul className="row gap-2 fs-6">
          <li>
            <a
              href="https://zerodha.com/marketintel/bulletin/455823/current-buybacks-august-2026-2"
              target="_blank"
              rel="noreferrer"
            >
              Current Buybacks - August 2026
            </a>
          </li>
          <li>
            <a
              href="https://zerodha.com/marketintel/bulletin/454257/surveillance-measure-on-scrips-august-2026"
              target="_blank"
              rel="noreferrer"
            >
              Surveillance measure on scrips - August 2026
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateTicket;