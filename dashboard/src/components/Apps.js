import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // 👤 user-specific apps (future backend ready)
  const apps = [
    {
      name: "Kite",
      desc: "Trading platform with charts & market data",
      icon: "📊",
      route: "/",
    },
    {
      name: "Console",
      desc: "Portfolio analytics & reports",
      icon: "📈",
      route: "/holdings",
    },
    {
      name: "Coin",
      desc: "Invest in mutual funds",
      icon: "💰",
      route: "/funds",
    },
    {
      name: "Orders",
      desc: "Track and manage your orders",
      icon: "📑",
      route: "/orders",
    },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 800); // ⚡ loading effect
  }, []);

  return (
    <>
      <style>
        {`
        .apps-container {
          padding: 30px;
        }

        .apps-title {
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 25px;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }

        .app-card {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1px solid #eee;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .app-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
        }

        .app-icon {
          font-size: 30px;
          margin-bottom: 10px;
        }

        .app-name {
          font-size: 18px;
          font-weight: 600;
        }

        .app-desc {
          font-size: 14px;
          color: #666;
          margin-top: 5px;
        }

        .skeleton {
          height: 100px;
          border-radius: 12px;
          background: linear-gradient(90deg, #eee, #f5f5f5, #eee);
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        `}
      </style>

      <div className="apps-container">
        <h2 className="apps-title">Apps</h2>

        <div className="apps-grid">

          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <div key={i} className="skeleton"></div>)
            : apps.map((app, i) => (
                <div
                  key={i}
                  className="app-card"
                  onClick={() => navigate(app.route)}
                >
                  <div className="app-icon">{app.icon}</div>
                  <div className="app-name">{app.name}</div>
                  <div className="app-desc">{app.desc}</div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Apps;