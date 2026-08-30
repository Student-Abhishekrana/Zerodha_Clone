import React, { useState } from "react";
import "./support_helper.css";

const Supported_Helper = ({key,title,topics}) => {
  const [show, setShow] = useState(false);

  const handleShowFunction = () => {
    setShow(!show);
  };

  return (
    <div className="container">
      <div
        className="container p-3 border d-flex justify-content-between cursor-pointer rounded-2"
        onClick={handleShowFunction}
      >
        <div>
          <i className="fa-solid fa-plus border p-2 rounded-circle bg-dark text-light"></i>
          <span className="mx-2 fs-5 fw-medium">{title}</span>
       
        </div>
        <div>
          <i className="fa-solid fa-chevron-down p-2"></i>
        </div>
      </div>

      <div
        className={`container border rounded-2 ${show ? "showItem" : "blockShowItem"} `}
      >
        <ul className="row g-3 py-3">
            {topics.map((item) => (
              <li className="fs-5" key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
         
        </ul>
      </div>
    </div>
  );
};

export default Supported_Helper;
