import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";


//  HIGHLIGHT FUNCTION
const highlightText = (text, query) => {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={i} style={{ background: "#ffe082", padding: "2px 4px" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};


//  ACTIONS
const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
        <button
          className="buy"
          onClick={() => generalContext.openBuyWindow(uid, "BUY")}
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
        <button
          className="sell"
          onClick={() => generalContext.openBuyWindow(uid, "SELL")}
        >
          Sell
        </button>
      </Tooltip>

      <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
        <button className="action">
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>
    </span>
  );
};


//  ITEM
const WatchListItem = ({ stock, query }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {highlightText(stock.name, query)}
        </p>

        <div className="itemInfo">
          <span>{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};


// MAIN COMPONENT
const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // DEBOUNCE
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  //  FILTER
  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  // CHART DATA
  const data = {
    labels: filteredWatchlist.map((s) => s.name),
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((s) => s.price),
        backgroundColor: ["#387ed1", "#00c853", "#ff9800", "#e91e63"],
      },
    ],
  };

  return (
    <div className="watchlist-container">

      {/* SEARCH */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: INFY, NIFTY..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="counts">
          {filteredWatchlist.length} / {watchlist.length}
        </span>
      </div>

      {/* LIST */}
      <ul className="list">
        {filteredWatchlist.length > 0 ? (
          filteredWatchlist.map((stock, i) => (
            <WatchListItem stock={stock} key={i} query={debouncedTerm} />
          ))
        ) : (
          <div className="empty">No results found</div>
        )}
      </ul>

      {/* CHART */}
      <div className="chart-box">
        <DoughnutChart data={data} />
      </div>

      {/* CSS */}
      <style jsx>{`
        .watchlist-container {
          padding: 10px;
          font-family: 'Inter', sans-serif;
        }

        .search-container {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .search {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }

        .counts {
          font-size: 12px;
          color: #888;
          margin-left: 8px;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          min-height: 200px;
        }

        li {
          border-bottom: 1px solid #f0f0f0;
          position: relative;
          min-height: 50px;
        }

        li:hover {
          background: #f8f9fa;
        }

        .item {
          display: flex;
          justify-content: space-between;
          padding: 10px;
        }

        .up { color: #00c853; }
        .down { color: #e53935; }

        .itemInfo {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
        }

        .price { font-weight: 500; }

        .actions {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 6px;
        }

        .actions button {
          border: none;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
        }

        .buy { background: #00c853; color: white; }
        .sell { background: #e53935; color: white; }
        .action { background: #eee; }

        .chart-box {
          margin-top: 20px;
          padding: 10px;
          border-radius: 12px;
          height: 350px;
          // background: #fafafa;
          background: #fff;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }

        .empty {
          text-align: center;
          padding: 20px;
          color: #999;
        }
      `}</style>

    </div>
  );
};

export default WatchList;