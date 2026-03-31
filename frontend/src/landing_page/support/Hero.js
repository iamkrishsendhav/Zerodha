// // import React from "react";

// // function Hero() {
// //     return (
// //         <section className="container-fluid" id="supportHero">
// //             <div className="p-5 " id="supportWrapper">
// //                 <h4>Support Portal</h4>
// //                 <a href="">Track Tickets</a>
// //             </div>
// //             <div className="row p-5 m-3">
// //                 <div className="col-6 p-3">
// //                     <h1 className="fs-3">
// //                         Search for an answer or browse help topics to create a ticket
// //                     </h1>
// //                     <input placeholder="Eg. how do I activate F&O" />
// //                     <br />
// //                     <a href="">Track account opening</a>
// //                     <a href="">Track segment activation</a>
// //                     <a href="">Intraday margins</a>
// //                     <a href="">Kite user manual</a>
// //                 </div>
// //                 <div className="col-6 p-3">
// //                     <h1 className="fs-3">Featured</h1>
// //                     <ol>
// //                         <li>
// //                             <a href="">Current Takeovers and Delisting - January 2024</a>
// //                         </li>
// //                         <li>
// //                             <a href="">Latest Intraday leverages - MIS & CO</a>
// //                         </li>
// //                     </ol>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// // export default Hero;

// import React from "react";

// function Hero() {
//     return (
//         <>
//             <style>
//                 {`
//         #supportHero {
//           background: linear-gradient(135deg, #387ed1, #4a90e2);
//           color: white;
//           padding: 40px 0;
//         }

//         #supportWrapper {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 0 40px;
//           margin-bottom: 10px;
//         }

//         #supportWrapper h4 {
//           margin: 0;
//           font-size: 20px;
//           font-weight: 600;
//         }

//         #supportWrapper a {
//           color: #dbe9ff;
//           text-decoration: none;
//           font-size: 14px;
//         }

//         #supportWrapper a:hover {
//           text-decoration: underline;
//         }

//         #supportHero .row {
//           padding: 20px 40px !important;
//           margin: 0 !important;
//         }

//         /* 🔥 SEARCH BOX WRAPPER */
//         .search-box {
//           position: relative;
//           width: 100%;
//           max-width: 480px;
//           margin: 12px 0;
//         }

//         /* 🔍 ICON */
//         .search-icon {
//           position: absolute;
//           left: 12px;
//           top: 50%;
//           transform: translateY(-50%);
//           font-size: 14px;
//           color: #888;
//         }

//         /* ✨ GLASS INPUT */
//         .search-input {
//           width: 100%;
//           padding: 12px 14px 12px 36px;
//           border-radius: 8px;
//           border: none;
//           outline: none;
//           font-size: 14px;

//           /* glass effect */
//           background: rgba(255, 255, 255, 0.85);
//           backdrop-filter: blur(10px);

//           transition: all 0.3s ease;
//           box-shadow: 0 2px 6px rgba(0,0,0,0.1);
//         }

//         /* ⚡ FOCUS ANIMATION */
//         .search-input:focus {
//           background: white;
//           box-shadow: 
//             0 0 0 2px rgba(255,255,255,0.5),
//             0 4px 15px rgba(0,0,0,0.15);
//           transform: scale(1.02);
//         }

//         /* TEXT */
//         #supportHero h1 {
//           font-size: 22px;
//           font-weight: 500;
//           line-height: 1.4;
//         }

//         /* LINKS */
//         #supportHero .col-6 a {
//           display: inline-block;
//           margin: 4px 8px 0 0;
//           color: #e6f0ff;
//           font-size: 13px;
//           text-decoration: none;
//         }

//         #supportHero .col-6 a:hover {
//           text-decoration: underline;
//         }

//         /* RIGHT SIDE */
//         #supportHero ol {
//           padding-left: 18px;
//           margin-top: 10px;
//         }

//         #supportHero ol li {
//           margin: 6px 0;
//         }

//         #supportHero ol a {
//           color: #e6f0ff;
//           text-decoration: none;
//           font-size: 14px;
//         }

//         #supportHero ol a:hover {
//           text-decoration: underline;
//         }
//         `}
//             </style>

//             <section className="container-fluid" id="supportHero">

//                 {/* TOP BAR */}
//                 <div id="supportWrapper">
//                     <h4>Support Portal</h4>
//                     <a href="">Track Tickets</a>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="row">

//                     {/* LEFT */}
//                     <div className="col-6">
//                         <h1>
//                             Search for an answer or browse help topics to create a ticket
//                         </h1>

//                         {/* 🔥 SEARCH BOX */}
//                         <div className="search-box">
//                             <span className="search-icon">🔍</span>
//                             <input
//                                 className="search-input"
//                                 placeholder="Eg. how do I activate F&O"
//                             />
//                         </div>

//                         <a href="">Track account opening</a>
//                         <a href="">Track segment activation</a>
//                         <a href="">Intraday margins</a>
//                         <a href="">Kite user manual</a>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="col-6">
//                         <h1 className="fs-5">Featured</h1>

//                         <ol>
//                             <li>
//                                 <a href="">
//                                     Current Takeovers and Delisting - January 2024
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="">
//                                     Latest Intraday leverages - MIS & CO
//                                 </a>
//                             </li>
//                         </ol>
//                     </div>

//                 </div>
//             </section>
//         </>
//     );
// }

// export default Hero;

import React from "react";
import { FaSearch, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="support-hero">

      <div className="container">

        {/* TOP BAR */}
        <div className="top-bar">
          <h5>Support</h5>
          {/* <a href="#"> */}
          <a href="/">
            Track Tickets <FaArrowRight />
          </a>
        </div>

        {/* MAIN CONTENT */}
        <div className="row align-items-center mt-5">

          {/* LEFT */}
          <div className="col-lg-6 mb-4">

            <h1 className="title">
              How can we help you today?
            </h1>

            {/* SEARCH */}
            <div className="search-box">
              <FaSearch className="icon" />
              <input
                type="text"
                placeholder="Eg. how do I activate F&O"
              />
            </div>

            {/* QUICK LINKS */}
            <div className="links">
              <a href="/">Track account opening</a>
              <a href="/">Track segment activation</a>
              <a href="/">Intraday margins</a>
              <a href="/">Kite user manual</a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-6">

            <div className="card">
              <h5>Featured</h5>

              <ul>
                <li>
                  <a href="/">Current Takeovers and Delisting - January 2024</a>
                </li>
                <li>
                  <a href="/">Latest Intraday leverages - MIS & CO</a>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
        .support-hero {
          padding: 40px 0;
          background: linear-gradient(135deg, #f8f9fa, #eef2f7);
          font-family: 'Inter', sans-serif;
        }

        /* TOP BAR */
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-bar h5 {
          font-weight: 600;
        }

        .top-bar a {
          color: #387ed1;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .top-bar a:hover {
          text-decoration: underline;
        }

        /* TITLE */
        .title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        /* SEARCH */
        .search-box {
          position: relative;
          max-width: 420px;
          margin-bottom: 20px;
        }

        .search-box input {
          width: 100%;
          padding: 12px 14px 12px 40px;
          border-radius: 8px;
          border: 1px solid #ddd;
          outline: none;
          transition: 0.3s;
        }

        .search-box input:focus {
          border-color: #387ed1;
          box-shadow: 0 0 0 2px rgba(56,126,209,0.1);
        }

        .icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
        }

        /* LINKS */
        .links a {
          display: inline-block;
          margin: 6px 12px 0 0;
          font-size: 14px;
          color: #387ed1;
          text-decoration: none;
        }

        .links a:hover {
          text-decoration: underline;
        }

        /* CARD */
        .card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 15px;
          border: 1px solid rgba(255,255,255,0.3);
        }

        .card h5 {
          margin-bottom: 15px;
          font-weight: 600;
        }

        .card ul {
          padding-left: 18px;
        }

        .card li {
          margin-bottom: 8px;
        }

        .card a {
          color: #387ed1;
          text-decoration: none;
        }

        .card a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .title {
            font-size: 1.5rem;
          }

          .top-bar {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;