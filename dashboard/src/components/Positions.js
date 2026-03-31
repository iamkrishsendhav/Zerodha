import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <>
      <style>
        {`
        .positions-container {
          padding: 25px;
        }

        .positions-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .positions-title {
          font-size: 22px;
          font-weight: 600;
        }

        .positions-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          overflow: hidden;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          text-align: left;
          padding: 14px;
          font-size: 13px;
          color: #777;
          font-weight: 500;
          background: #fafafa;
          border-bottom: 1px solid #eee;
        }

        td {
          padding: 14px;
          font-size: 14px;
          border-bottom: 1px solid #f1f1f1;
        }

        tr:hover {
          background: #f9fbff;
        }

        .profit {
          color: #2ecc71;
          font-weight: 500;
        }

        .loss {
          color: #e74c3c;
          font-weight: 500;
        }

        .instrument {
          font-weight: 600;
        }

        .qty {
          font-weight: 500;
        }

        .summary-bar {
          display: flex;
          justify-content: space-between;
          padding: 15px 20px;
          background: #fafafa;
          border-top: 1px solid #eee;
        }

        .summary-item {
          font-size: 14px;
        }

        .summary-value {
          font-weight: 600;
        }

        `}
      </style>

      <div className="positions-container">
        
        {/* HEADER */}
        <div className="positions-header">
          <div className="positions-title">
            Positions ({positions.length})
          </div>
        </div>

        {/* TABLE CARD */}
        <div className="positions-card">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const pnl = curValue - stock.avg * stock.qty;
                const isProfit = pnl >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.product}</td>

                    <td className="instrument">{stock.name}</td>

                    <td className="qty">{stock.qty}</td>

                    <td>₹{stock.avg.toFixed(2)}</td>

                    <td>₹{stock.price.toFixed(2)}</td>

                    <td className={profClass}>
                      ₹{pnl.toFixed(2)}
                    </td>

                    <td className={dayClass}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* SUMMARY BAR */}
          <div className="summary-bar">
            <div className="summary-item">
              Total Investment:{" "}
              <span className="summary-value">
                ₹
                {positions
                  .reduce((acc, s) => acc + s.avg * s.qty, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="summary-item">
              Current Value:{" "}
              <span className="summary-value">
                ₹
                {positions
                  .reduce((acc, s) => acc + s.price * s.qty, 0)
                  .toFixed(2)}
              </span>
            </div>

            <div className="summary-item">
              Total P&L:{" "}
              <span
                className={`summary-value ${
                  positions.reduce(
                    (acc, s) => acc + (s.price - s.avg) * s.qty,
                    0
                  ) >= 0
                    ? "profit"
                    : "loss"
                }`}
              >
                ₹
                {positions
                  .reduce(
                    (acc, s) => acc + (s.price - s.avg) * s.qty,
                    0
                  )
                  .toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Positions;