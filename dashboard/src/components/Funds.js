import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Funds = () => {
  const [showModal, setShowModal] = useState(false);

  const transactions = [
    { type: "Deposit", amount: 5000, date: "2026-03-30" },
    { type: "Withdraw", amount: 2000, date: "2026-03-29" },
  ];

  return (
    <>
      <style>
        {`
        .funds-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .btn {
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          margin-left: 10px;
          cursor: pointer;
        }

        .btn-green { background: #387ed1; color: white; }
        .btn-blue { background: #4a90e2; color: white; }

        /* GRID */
        .funds-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 20px;
        }

        .card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .title {
          font-weight: 600;
          margin-bottom: 15px;
        }

        .data {
          display: flex;
          justify-content: space-between;
          margin: 8px 0;
        }

        /* GRAPH */
        .graph {
          height: 150px;
          background: linear-gradient(180deg,#eaf2ff,#fff);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #387ed1;
        }

        /* TRANSACTIONS */
        .txn {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          font-size: 14px;
        }

        /* MODAL */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-box {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 300px;
        }

        .modal-box input {
          width: 100%;
          padding: 8px;
          margin: 10px 0;
        }
        `}
      </style>

      {/* HEADER */}
      <div className="funds-header">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <div>
          <button className="btn btn-green" onClick={() => setShowModal(true)}>
            Add funds
          </button>
          <button className="btn btn-blue">Withdraw</button>
        </div>
      </div>

      {/* GRID */}
      <div className="funds-grid">

        {/* LEFT */}
        <div className="card">
          <div className="title">Equity</div>

          <div className="data">
            <span>Available margin</span>
            <b>₹4,043.10</b>
          </div>

          <div className="data">
            <span>Used margin</span>
            <b>₹3,757.30</b>
          </div>

          <div className="data">
            <span>Available cash</span>
            <b>₹4,043.10</b>
          </div>

          <hr />

          <div className="data"><span>Payin</span><span>₹4,064</span></div>
          <div className="data"><span>SPAN</span><span>₹0</span></div>
        </div>

        {/* RIGHT */}
        <div className="card">
          
          {/* GRAPH */}
          <div className="title">Portfolio</div>
          <div className="graph">📈 Portfolio Graph</div>

          {/* TRANSACTIONS */}
          <div className="title" style={{marginTop:"15px"}}>Transactions</div>

          {transactions.map((t, i) => (
            <div className="txn" key={i}>
              <span>{t.type}</span>
              <span>₹{t.amount}</span>
            </div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <h3>Add Funds</h3>
            <input placeholder="Enter amount" />
            <button className="btn btn-green">Add</button>
            <button className="btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Funds;