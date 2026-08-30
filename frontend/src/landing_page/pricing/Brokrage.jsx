import React, { use, useState } from "react";
import "./brockrage.css";
function Brokrage() {
  const [activeEquity, setActiveEquity] = useState(true);
  const [activeCurrency, setActiveCurrency] = useState(false);
  const [activeCommodity, setActiveCommodity] = useState(false);

  const handleEquityClick = () => {
    setActiveEquity(true);
    setActiveCurrency(false);
    setActiveCommodity(false);
    console.log("Equity cicked");
  };
  const handleCurrencyClick = () => {
    setActiveEquity(false);
    setActiveCurrency(true);
    setActiveCommodity(false);
    console.log("Currency cicked");
  };
  const handleCommodityClick = () => {
    setActiveEquity(false);
    setActiveCurrency(false);
    setActiveCommodity(true);
    console.log("Commodity cicked");
  };

  return (
    <div>
      <div>
        <div className="d-flex flex-row text-muted my-3">
          <h5
            className="fs-3 mx-3 cursor-pointer"
            onClick={handleEquityClick}
            style={
              activeEquity ? { color: "grey" } : { color: "rgb(36, 101, 193)" }
            }
          >
            Equity
          </h5>
          <h5
            className="fs-3 mx-3 cursor-pointer"
            onClick={handleCurrencyClick}
            style={
              activeCurrency
                ? { color: "grey" }
                : { color: "rgb(36, 101, 193)" }
            }
          >
            Currency
          </h5>
          <h5
            className="fs-3 mx-3 cursor-pointer"
            onClick={handleCommodityClick}
            style={
              activeCommodity
                ? { color: "grey" }
                : { color: "rgb(36, 101, 193)" }
            }
          >
            Commodity
          </h5>
        </div>

        <div
          className={`table table-responsive  d-flex justify-content-center ${activeEquity ? "showEquity" : "Equity"}`}
        >
          <table className="border w-100 text-muted">
            <thead>
              <tr className="fs-5 ">
                <th className="tableHeadFont px-5"></th>
                <th className="tableHeadFont text-muted">Equity delivery</th>
                <th className="tableHeadFont text-muted"> Equity intraday</th>
                <th className="tableHeadFont text-muted">F&O - Futures</th>
                <th className="tableHeadFont text-muted">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdFont text-muted">Brokerage</td>
                <td className="text-muted">Zero Brokerage</td>
                <td className="text-muted">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="text-muted">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="text-muted">Flat Rs. 20 per executed order</td>
              </tr>
              <tr>
                <td className="tdFont text-muted">STT/CTT</td>
                <td className="text-muted">0.1% on buy & sell</td>
                <td className="text-muted">0.025% on the sell side</td>
                <td className="text-muted">0.05% on the sell side</td>
                <td className="text-muted">
                  <ul>
                    <li>
                      0.15% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li>0.15% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td className="tdFont text-muted">Transaction charges</td>
                <td className="text-muted">
                  NSE: 0.00307% <br />
                  BSE: 0.00375%
                </td>
                <td className="text-muted">
                  NSE: 0.00183% <br /> BSE: 0
                </td>
                <td className="text-muted">
                  NSE: 0.03553% (on premium) <br /> BSE: 0.0325% (on premium)
                </td>
              </tr>

              <tr>
                <td className="tdFont text-muted">GST</td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr>
                <td className="tdFont text-muted">SEBI charges</td>
                <td className="text-muted">₹10 / crore </td>
                <td className="text-muted">₹10 / crore </td>
                <td className="text-muted"> ₹10 / crore </td>
                <td className="text-muted">₹10 / crore</td>
              </tr>
              <tr>
                <td className="tdFont text-muted">Stamp charges</td>
                <td className="text-muted">
                  0.015% or ₹1500 / crore on buy side
                </td>
                <td className="text-muted">
                  0.003% or ₹300 / crore on buy side
                </td>
                <td className="text-muted">
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="text-muted">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`table table-responsive d-flex justify-content-center  ${activeCurrency ? "showCurrency" : "Currency"}`}
        >
          <table className="border w-100 text-muted">
            <thead>
              <tr className="fs-5">
                <th className="tableHeadFont px-5"></th>
                <th className="tableHeadFont text-muted">Currency futures</th>
                <th className="tableHeadFont text-muted"> Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdFont text-muted">Brokerage</td>
                <td className="text-muted">
                  0.03% or ₹ 20/executed order whichever is lower
                </td>
                <td className="text-muted">₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="tdFont text-muted">STT/CTT</td>
                <td className="text-muted">No STT</td>
                <td className="text-muted">No STT</td>
              </tr>

              <tr>
                <td className="tdFont text-muted">Transaction charges</td>
                <td className="text-muted">
                  NSE: 0.00035% <br />
                  BSE: 0.00045%
                </td>
                <td className="text-muted">
                  NSE: 0.0311%
                  <br /> BSE: 0.001%
                </td>
              </tr>

              <tr>
                <td className="tdFont text-muted">GST</td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr>
                <td className="tdFont text-muted">SEBI charges</td>
                <td className="text-muted">₹10 / crore </td>
                <td className="text-muted">₹10 / crore</td>
              </tr>
              <tr>
                <td className="tdFont text-muted">Stamp charges</td>
                <td className="text-muted">
                  0.0001% or ₹10 / crore on buy side
                </td>
                <td className="text-muted">
                  0.0001% or ₹10 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={`table table-responsive d-flex justify-content-center ${activeCommodity ? "showCommodity" : "Commodity"}`}
        >
          <table className="border w-100 text-muted">
            <thead>
              <tr className="fs-5">
                <th className="tableHeadFont px-5"></th>
                <th className="tableHeadFont text-muted">Commodity futures</th>
                <th className="tableHeadFont text-muted">Commodity optionss</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="tdFont text-muted">Brokerage</td>
                <td className="text-muted">
                  0.03% or ₹ 20/executed order whichever is lower
                </td>
                <td className="text-muted">₹ 20/executed order</td>
              </tr>
              <tr>
                <td className="tdFont text-muted">STT/CTT</td>
                <td className="text-muted"> 0.01% on sell side (Non-Agri)</td>
                <td className="text-muted">0.05% on sell side</td>
              </tr>

              <tr>
                <td className="tdFont text-muted">Transaction charges</td>
                <td className="text-muted">
                  MCX: 0.0021% <br />
                  NSE: 0.0001%
                </td>
                <td className="text-muted">
                  MCX: 0.0418%
                  <br /> NSE: 0.001%
                </td>
              </tr>

              <tr>
                <td className="tdFont text-muted">GST</td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="text-muted">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>

              <tr>
                <td className="tdFont text-muted">SEBI charges</td>
                <td className="text-muted">
                  <b>Agri</b> <br />
                  ₹1/ crore
                  <br />
                  <b>Non-agri</b> <br />
                  ₹10 / crore
                </td>
                <td className="text-muted">₹10 / crore</td>
              </tr>
              <tr>
                <td className="tdFont text-muted">Stamp charges</td>
                <td className="text-muted">
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="text-muted">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
