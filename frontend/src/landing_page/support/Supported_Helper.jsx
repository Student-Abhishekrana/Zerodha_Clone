import React, { useState } from "react";
import "./support_helper.css";

const SupportedHelper = ({ title, topics }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = `support-${title.toLowerCase().replace(/\W+/g, "-")}`;

  const handleToggle = () => {
    setIsExpanded((expanded) => !expanded);
  };

  return (
    <div className="container">
      <button
        type="button"
        className="support-section-toggle container p-3 border d-flex justify-content-between rounded-2"
        onClick={handleToggle}
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        <span>
          <i className="fa-solid fa-plus border p-2 rounded-circle bg-dark text-light"></i>
          <span className="mx-2 fs-5 fw-medium">{title}</span>
        </span>
        <i className="fa-solid fa-chevron-down p-2" aria-hidden="true"></i>
      </button>

      <div
        id={contentId}
        className={`container border rounded-2 ${isExpanded ? "showItem" : "blockShowItem"} `}
        aria-hidden={!isExpanded}
      >
        <ul className="row g-3 py-3">
          {topics.map((item) => (
            <li className="fs-5" key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupportedHelper;
