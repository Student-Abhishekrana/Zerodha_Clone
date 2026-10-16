import React, { useState, useEffect, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";
import WatchListChart from "./WatchListChart";
import api from "../api";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  const [watchList, setwatchList] = useState([]);
  useEffect(() => {
    api
      .get("/watchList/allWatchList")
      .then((res) => {
        setwatchList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy,bse,nifty fut weekly,gold mcx"
          className="search"
        />
      </div>

      <div className="title">Watchlist</div>
      <ul className="list">
        {watchList.map((stock) => (
          <WatchListItem key={stock.name} stock={stock} />
        ))}
      </ul>
      <WatchListChart />
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = () => setShowWatchListActions(true);
  const handleMouseLeave = () => setShowWatchListActions(false);

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onFocus={handleMouseEnter}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className={stock.isDown ? "down" : "up"}>
            {stock.percentage}
          </span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && (
        <WatchListActions uid={stock.name} price={stock.price} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, price }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid, "BUY", price);
  };

  const handleSellClick = () => {
    generalContext.openBuyWindow(uid, "SELL", price);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title={`Buy ${uid}`}
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title={`Sell ${uid}`}
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title={`Analytics ${uid}`}
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchList;
