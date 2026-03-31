// import React, { useState, useEffect, useContext } from "react";
// import GeneralContext from "./GeneralContext";
// import { watchlist } from "../data/data";

// function BuyActionWindow({ uid }) {
//   const [qty, setQty] = useState(1);
//   const [price, setPrice] = useState(0);
//   const [margin, setMargin] = useState(0);
//   const [balance] = useState(50000); // dummy balance

//   const generalContext = useContext(GeneralContext);

//   // ✅ AUTO FETCH PRICE FROM WATCHLIST
//   useEffect(() => {
//     const stock = watchlist.find((s) => s.name === uid);
//     if (stock) {
//       setPrice(stock.price);
//     }
//   }, [uid]);

//   // ✅ LIVE MARGIN
//   useEffect(() => {
//     setMargin(qty * price);
//   }, [qty, price]);

//   const handleBuy = () => {
//     if (margin > balance) return;

//     console.log({
//       name: uid,
//       qty,
//       price,
//       margin,
//     });

//     generalContext.closeBuyWindow();
//   };

//   return (
//     <>
//       <div className="overlay">
//         <div className="modal">

//           {/* HEADER */}
//           <div className="header">
//             Buy {uid}
//           </div>

//           {/* BODY */}
//           <div className="body">

//             <div className="field">
//               <label>Quantity</label>
//               <input
//                 type="number"
//                 value={qty}
//                 min="1"
//                 onChange={(e) => setQty(Number(e.target.value))}
//               />
//             </div>

//             <div className="field">
//               <label>Price</label>
//               <input
//                 type="number"
//                 value={price}
//                 disabled
//               />
//             </div>

//           </div>

//           {/* INFO */}
//           <div className="info">
//             <span>Balance: ₹{balance}</span>
//             <span className={margin > balance ? "error" : ""}>
//               Margin: ₹{margin.toFixed(2)}
//             </span>
//           </div>

//           {/* FOOTER */}
//           <div className="footer">

//             <button
//               className="buy"
//               onClick={handleBuy}
//               disabled={margin > balance}
//             >
//               {margin > balance ? "Insufficient Funds" : "Buy"}
//             </button>

//             <button
//               className="cancel"
//               onClick={generalContext.closeBuyWindow}
//             >
//               Cancel
//             </button>

//           </div>

//         </div>
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .overlay {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.3);
//           backdrop-filter: blur(4px);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 9999;
//         }

//         .modal {
//           width: 380px;
//           background: white;
//           border-radius: 14px;
//           overflow: hidden;
//           box-shadow: 0 25px 60px rgba(0,0,0,0.2);
//         }

//         .header {
//           background: #387ed1;
//           color: white;
//           padding: 16px;
//           font-weight: 600;
//         }

//         .body {
//           padding: 20px;
//           display: flex;
//           gap: 15px;
//         }

//         .field {
//           flex: 1;
//         }

//         .field label {
//           font-size: 12px;
//           color: #666;
//         }

//         .field input {
//           width: 100%;
//           margin-top: 5px;
//           padding: 10px;
//           border-radius: 6px;
//           border: 1px solid #ddd;
//           font-size: 14px;
//         }

//         .info {
//           padding: 0 20px 10px;
//           display: flex;
//           justify-content: space-between;
//           font-size: 13px;
//           color: #555;
//         }

//         .error {
//           color: red;
//           font-weight: 500;
//         }

//         .footer {
//           display: flex;
//           justify-content: flex-end;
//           gap: 10px;
//           padding: 15px 20px;
//           border-top: 1px solid #eee;
//         }

//         .buy {
//           background: #00c853;
//           color: white;
//           border: none;
//           padding: 10px 18px;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         .buy:disabled {
//           background: #ccc;
//           cursor: not-allowed;
//         }

//         .cancel {
//           background: #eee;
//           border: none;
//           padding: 10px 18px;
//           border-radius: 6px;
//           cursor: pointer;
//         }
//       `}</style>
//     </>
//   );
// }

// export default BuyActionWindow;

import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";

function BuyActionWindow({ uid, mode = "BUY" }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const [margin, setMargin] = useState(0);
  const [balance] = useState(50000); // dummy balance

  const generalContext = useContext(GeneralContext);

  const isBuy = mode === "BUY";

  // ✅ AUTO FETCH PRICE
  useEffect(() => {
    const stock = watchlist.find((s) => s.name === uid);
    if (stock) {
      setPrice(stock.price);
    }
  }, [uid]);

  // ✅ LIVE MARGIN
  useEffect(() => {
    setMargin(qty * price);
  }, [qty, price]);

  const handleAction = () => {
    if (isBuy && margin > balance) return;

    console.log({
      name: uid,
      qty,
      price,
      margin,
      mode, // 🔥 BUY / SELL
    });

    generalContext.closeBuyWindow();
  };

  return (
    <>
      <div className="overlay">
        <div className="modal">

          {/* HEADER */}
          <div className={`header ${isBuy ? "buyHeader" : "sellHeader"}`}>
            {mode} {uid}
          </div>

          {/* BODY */}
          <div className="body">

            <div className="field">
              <label>Quantity</label>
              <input
                type="number"
                value={qty}
                min="1"
                onChange={(e) => setQty(Number(e.target.value))}
              />
            </div>

            <div className="field">
              <label>Price</label>
              <input
                type="number"
                value={price}
                disabled
              />
            </div>

          </div>

          {/* INFO */}
          <div className="info">
            <span>Balance: ₹{balance}</span>

            {isBuy ? (
              <span className={margin > balance ? "error" : ""}>
                Margin: ₹{margin.toFixed(2)}
              </span>
            ) : (
              <span className="profit">
                Value: ₹{margin.toFixed(2)}
              </span>
            )}
          </div>

          {/* FOOTER */}
          <div className="footer">

            <button
              className={isBuy ? "buy" : "sell"}
              onClick={handleAction}
              disabled={isBuy && margin > balance}
            >
              {isBuy
                ? margin > balance
                  ? "Insufficient Funds"
                  : "Buy"
                : "Sell"}
            </button>

            <button
              className="cancel"
              onClick={generalContext.closeBuyWindow}
            >
              Cancel
            </button>

          </div>

        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .modal {
          width: 380px;
          background: white;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.2);
        }

        .header {
          color: white;
          padding: 16px;
          font-weight: 600;
        }

        .buyHeader {
          background: #387ed1;
        }

        .sellHeader {
          background: #e53935;
        }

        .body {
          padding: 20px;
          display: flex;
          gap: 15px;
        }

        .field {
          flex: 1;
        }

        .field label {
          font-size: 12px;
          color: #666;
        }

        .field input {
          width: 100%;
          margin-top: 5px;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ddd;
          font-size: 14px;
        }

        .info {
          padding: 0 20px 10px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          color: #555;
        }

        .error {
          color: red;
          font-weight: 500;
        }

        .profit {
          color: #00c853;
          font-weight: 500;
        }

        .footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          padding: 15px 20px;
          border-top: 1px solid #eee;
        }

        .buy {
          background: #00c853;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
        }

        .sell {
          background: #e53935;
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
        }

        .buy:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .cancel {
          background: #eee;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default BuyActionWindow;