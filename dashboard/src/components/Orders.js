import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [date, setDate] = useState("");

  // Enhanced Dummy Data (real feel)
  const fetchOrders = () => {
    const dummy = [
      { id: 1, type: "BUY", stock: "INFY", price: 1550, qty: 10, date: "2026-03-30", status: "Completed" },
      { id: 2, type: "SELL", stock: "TCS", price: 3200, qty: 5, date: "2026-03-30", status: "Completed" },
      { id: 3, type: "BUY", stock: "RELIANCE", price: 2100, qty: 2, date: "2026-03-29", status: "Pending" },
      { id: 4, type: "BUY", stock: "HDFCBANK", price: 1650, qty: 8, date: "2026-03-28", status: "Completed" },
      { id: 5, type: "SELL", stock: "ITC", price: 450, qty: 15, date: "2026-03-28", status: "Completed" },
      { id: 6, type: "BUY", stock: "WIPRO", price: 520, qty: 20, date: "2026-03-27", status: "Cancelled" },
    ];
    setOrders(dummy);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // live refresh
  useEffect(() => {
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredOrders = orders.filter((o) => {
    return (
      (filter === "ALL" || o.type === filter) &&
      (!date || o.date === date)
    );
  });

  return (
    <>
      <style>
        {`
        .orders-container {
          padding: 25px;
        }

        .orders-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .orders-title {
          font-size: 24px;
          font-weight: 600;
        }

        /* FILTERS */
        .filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filters button {
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
          background: #f1f3f6;
          cursor: pointer;
          font-size: 13px;
          transition: 0.2s;
        }

        .filters button:hover {
          background: #e2e6ea;
        }

        .filters button.active {
          background: #387ed1;
          color: white;
        }

        .filters input {
          padding: 8px 12px;
          border-radius: 20px;
          border: 1px solid #ddd;
          font-size: 13px;
        }

        /* CARD TABLE */
        .table-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          overflow: hidden;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background: #f8f9fb;
          font-size: 13px;
          color: #777;
          padding: 14px;
          text-align: left;
        }

        td {
          padding: 14px;
          border-bottom: 1px solid #f1f1f1;
          font-size: 14px;
        }

        tr:hover {
          background: #f9fbff;
        }

        .buy {
          color: #4fdb8a;
          font-weight: 600;
        }

        .sell {
          color: #ef6c5e;
          font-weight: 600;
        }

        .status {
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 12px;
          display: inline-block;
        }

        .completed {
          background: #eafaf1;
          color: #27ae60;
        }

        .pending {
          background: #fff8e1;
          color: #f39c12;
        }

        .cancelled {
          background: #fdecea;
          color: #e74c3c;
        }

        .empty {
          text-align: center;
          padding: 40px;
          color: #999;
        }

        .stock-name {
          font-weight: 600;
        }
        `}
      </style>

      <div className="orders-container">

        {/* HEADER */}
        <div className="orders-header">
          <div className="orders-title">Orders</div>

          <div className="filters">
            {["ALL", "BUY", "SELL"].map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="table-card">
          {filteredOrders.length === 0 ? (
            <div className="empty">No orders found</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Type</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((o) => (
                  <tr key={o.id}>
                    <td className="stock-name">{o.stock}</td>

                    <td className={o.type === "BUY" ? "buy" : "sell"}>
                      {o.type}
                    </td>

                    <td>{o.qty}</td>

                    <td>₹{o.price}</td>

                    <td>{o.date}</td>

                    <td>
                      <span
                        className={`status ${
                          o.status === "Completed"
                            ? "completed"
                            : o.status === "Pending"
                            ? "pending"
                            : "cancelled"
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </>
  );
};

export default Orders;