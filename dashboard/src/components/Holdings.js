import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-dz81.onrender.com/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  //  CALCULATIONS
  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + Number(stock.avg) * Number(stock.qty),
    0,
  );

  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + Number(stock.price) * Number(stock.qty),
    0,
  );

  const pnl = currentValue - totalInvestment;
  const pnlPercent = ((pnl / totalInvestment) * 100 || 0).toFixed(2);

  const labels = allHoldings.map((s) => s.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Holdings",
        data: allHoldings.map((s) => Number(s.price)),
        backgroundColor: "#387ed1",
      },
    ],
  };

  return (
    <>
      <div className="container holdings">
        {/* HEADER */}
        <div className="top">
          <h2>Holdings ({allHoldings.length})</h2>
        </div>

        {/* SUMMARY CARDS */}
        <div className="summary">
          <div className="card">
            <p>Investment</p>
            <h3>₹{totalInvestment.toFixed(2)}</h3>
          </div>

          <div className="card">
            <p>Current Value</p>
            <h3>₹{currentValue.toFixed(2)}</h3>
          </div>

          <div className="card">
            <p>P&L</p>
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              ₹{pnl.toFixed(2)} ({pnlPercent}%)
            </h3>
          </div>
        </div>

        {/* TABLE */}
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Avg</th>
                <th>LTP</th>
                <th>Value</th>
                <th>P&L</th>
                <th>Net</th>
                <th>Day</th>
              </tr>
            </thead>

            <tbody>
              {allHoldings.map((stock, i) => {
                const curValue = stock.price * stock.qty;
                const pnlVal = curValue - stock.avg * stock.qty;
                const isProfit = pnlVal >= 0;

                return (
                  <tr key={i}>
                    <td className="name">{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>₹{Number(stock.avg).toFixed(2)}</td>
                    <td>₹{Number(stock.price).toFixed(2)}</td>
                    <td>₹{curValue.toFixed(2)}</td>

                    <td className={isProfit ? "profit" : "loss"}>
                      ₹{pnlVal.toFixed(2)}
                    </td>

                    <td className={isProfit ? "profit" : "loss"}>
                      {stock.net}
                    </td>

                    <td className={stock.isLoss ? "loss" : "profit"}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* GRAPH */}
        <div className="graph-card">
          <div className="graph-wrapper">
            <VerticalGraph data={data} />
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .holdings {
          font-family: "Inter", sans-serif;
          padding: 20px;
        }

        .top h2 {
          font-weight: 600;
          margin-bottom: 20px;
        }

        /* SUMMARY */
        .summary {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }

        .card {
          flex: 1;
          padding: 20px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .card p {
          font-size: 13px;
          color: #666;
        }

        .card h3 {
          font-size: 20px;
          margin-top: 5px;
        }

        /* TABLE */
        .table-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        thead {
          background: #f5f7fa;
        }

        th {
          text-align: left;
          padding: 12px;
          font-size: 13px;
          color: #666;
        }

        td {
          padding: 14px;
          border-top: 1px solid #eee;
          font-size: 14px;
        }

        .name {
          font-weight: 500;
        }

        tr:hover {
          background: #f9fbff;
        }

        /* COLORS */
        .profit {
          color: #00c853;
          font-weight: 500;
        }

        .loss {
          color: #e53935;
          font-weight: 500;
        }

        /* GRAPH */
        .graph-card {
          margin-top: 30px;
          padding: 20px;
          border-radius: 12px;
          background: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .summary {
            flex-direction: column;
          }

          table {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default Holdings;
