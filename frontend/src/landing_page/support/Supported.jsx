import React from "react";
import Supported_Helper from "./Supported_Helper";

const Supported = () => {
  const support = {
    "Account Opening": [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
    "Your Zerodha Account": [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and Depository Participant (DP)",
      "Nomination",
      "Transfer and conversion of securities",
    ],
    Kite: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
    Funds: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    Console: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],

    Coin: [
      "Mutual funds",
      "National Pension Scheme (NPS)",
      "Fixed Deposit (FD)",
      "Features on Coin",
      "Payments and Orders",
      "General",
    ],
  };
  return (
    <div>
        {Object.entries(support).map(([key, topics]) => (
          <Supported_Helper key={key} title={key} topics={topics} />
        ))}
     
    </div>
  );
};

export default Supported;
