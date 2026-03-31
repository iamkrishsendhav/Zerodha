import React from "react";

const Summary = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <>
      <style>
        {`
        .summary-container {
          padding: 30px;
        }

        .welcome {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 25px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
        }

        .card {
          background: linear-gradient(145deg, #ffffff, #f5f7fb);
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
          transition: 0.3s;
          position: relative;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }

        .card::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          background: rgba(56,126,209,0.08);
          border-radius: 50%;
        }

        .card-title {
          font-size: 13px;
          color: #888;
          margin-bottom: 10px;
        }

        .big-value {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .sub-text {
          font-size: 13px;
          color: #999;
        }

        .divider {
          height: 1px;
          background: #eee;
          margin: 14px 0;
        }

        .row-flex {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin: 6px 0;
        }

        .profit {
          color: #2ecc71;
          font-weight: 600;
        }

        .loss {
          color: #e74c3c;
          font-weight: 600;
        }

        .mini-chart {
          height: 70px;
          margin-top: 15px;
          border-radius: 10px;
          background: linear-gradient(90deg, #387ed1, #6fb1ff);
          opacity: 0.15;
        }

        .badge {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 6px;
          margin-left: 6px;
          background: #eaf3ff;
          color: #387ed1;
        }
        `}
      </style>

      <div className="summary-container">

        {/*  Welcome */}
        <div className="welcome">
          Hi, {user?.name || "User"} 👋
        </div>

        <div className="grid">

          {/* Equity */}
          <div className="card">
            <div className="card-title">
              Equity <span className="badge">LIVE</span>
            </div>

            <div className="big-value">₹12.84k</div>
            <div className="sub-text">Margin available</div>

            <div className="divider"></div>

            <div className="row-flex">
              <span>Margins used</span>
              <span>₹2.10k</span>
            </div>

            <div className="row-flex">
              <span>Opening balance</span>
              <span>₹10.74k</span>
            </div>

            <div className="row-flex">
              <span>Available cash</span>
              <span>₹12.84k</span>
            </div>

            <div className="mini-chart"></div>
          </div>

          {/* Holdings */}
          <div className="card">
            <div className="card-title">
              Holdings (13) <span className="badge">UPDATED</span>
            </div>

            <div className="big-value profit">
              ₹4.25k <small style={{fontSize:"14px"}}>+8.12%</small>
            </div>

            <div className="sub-text">Total P&L</div>

            <div className="divider"></div>

            <div className="row-flex">
              <span>Current Value</span>
              <span>₹52.43k</span>
            </div>

            <div className="row-flex">
              <span>Investment</span>
              <span>₹48.18k</span>
            </div>

            <div className="row-flex">
              <span>Day Change</span>
              <span className="profit">+₹320</span>
            </div>

            <div className="mini-chart"></div>
          </div>

          {/*  Today */}
          <div className="card">
            <div className="card-title">
              Today's Overview <span className="badge">REALTIME</span>
            </div>

            <div className="big-value loss">-₹240</div>
            <div className="sub-text">Today’s P&L</div>

            <div className="divider"></div>

            <div className="row-flex">
              <span>Trades</span>
              <span>12</span>
            </div>

            <div className="row-flex">
              <span>Winning</span>
              <span className="profit">7</span>
            </div>

            <div className="row-flex">
              <span>Losing</span>
              <span className="loss">5</span>
            </div>

            <div className="row-flex">
              <span>Win Rate</span>
              <span className="profit">58%</span>
            </div>

            <div className="mini-chart"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Summary;