// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// function Hero() {
//   return (
//     <section className="pricing-hero">
//       <div className="container text-center">

//         {/* Heading */}
//         <div className="heading">
//           <h1>Pricing</h1>
//           <p className="subtitle">
//             Free equity investments and flat ₹20 intraday and F&O trades
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="row mt-5">

//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="pricing-card">
//               <img src="media/images/pricingEquity.svg" alt="Equity" />
//               <h3>Free equity delivery</h3>
//               <p>
//                 All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
//               </p>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="pricing-card">
//               <img src="media/images/intradayTrades.svg" alt="Intraday" />
//               <h3>Intraday and F&O trades</h3>
//               <p>
//                 Flat ₹20 or 0.03% (whichever is lower) per executed order.
//               </p>
//             </div>
//           </div>

//           <div className="col-lg-4 col-md-6 mb-4">
//             <div className="pricing-card">
//               <img src="media/images/pricingEquity.svg" alt="MF" />
//               <h3>Free direct MF</h3>
//               <p>
//                 All direct mutual fund investments are free — ₹0 commission & DP charges.
//               </p>
//             </div>
//           </div>

//         </div>

//         {/* CTA */}
//         <div className="cta mt-5">
//           <button className="cta-btn">
//             Get started <FaArrowRight />
//           </button>
//         </div>

//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .pricing-hero {
//           padding: 90px 0;
//           font-family: 'Inter', sans-serif;
//           background: linear-gradient(135deg, #f8f9fa, #eef2f7);
//         }

//         .heading h1 {
//           font-size: 2.5rem;
//           font-weight: 600;
//           color: #1f1f1f;
//         }

//         .subtitle {
//           margin-top: 10px;
//           font-size: 1.2rem;
//           color: #6c757d;
//         }

//         /* GLASS CARD */
//         .pricing-card {
//           backdrop-filter: blur(12px);
//           background: rgba(255, 255, 255, 0.6);
//           border-radius: 16px;
//           padding: 30px;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(255,255,255,0.3);
//           height: 100%;
//         }

//         .pricing-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 15px 40px rgba(0,0,0,0.08);
//         }

//         /* ICON ANIMATION */
//         .pricing-card img {
//           height: 80px;
//           margin-bottom: 15px;
//           transition: transform 0.3s ease;
//         }

//         .pricing-card:hover img {
//           transform: scale(1.1);
//         }

//         .pricing-card h3 {
//           font-size: 1.2rem;
//           font-weight: 600;
//           margin-bottom: 10px;
//         }

//         .pricing-card p {
//           font-size: 0.95rem;
//           color: #555;
//           line-height: 1.6;
//         }

//         /* CTA BUTTON */
//         .cta-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           padding: 12px 25px;
//           border-radius: 8px;
//           background: #387ed1;
//           color: white;
//           border: none;
//           font-size: 16px;
//           font-weight: 500;
//           cursor: pointer;
//           transition: 0.3s ease;
//         }

//         .cta-btn:hover {
//           background: #1a5dc9;
//           transform: translateY(-2px);
//         }

//         /* responsive */
//         @media (max-width: 768px) {
//           .heading h1 {
//             font-size: 1.8rem;
//           }

//           .subtitle {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Hero;


import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

function Hero() {

  // scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, i * 150); // 🔥 stagger effect
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const data = [
    {
      img: "pricingEquity.svg",
      title: "Free equity delivery",
      text: "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage."
    },
    {
      img: "intradayTrades.svg",
      title: "Intraday and F&O trades",
      text: "Flat ₹20 or 0.03% (whichever is lower) per executed order."
    },
    {
      img: "pricingEquity.svg",
      title: "Free direct MF",
      text: "All direct mutual fund investments are free — ₹0 commission & DP charges."
    }
  ];

  return (
    <section className="pricing-hero">

      <div className="container text-center">

        {/* Heading */}
        <div className="heading fade-in">
          <h1>Pricing</h1>
          <p className="subtitle">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>

        {/* Cards */}
        <div className="row mt-5">

          {data.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 fade-in">
              <div className="pricing-card">

                <div className="icon-wrapper">
                  <img src={`media/images/${item.img}`} alt="icon" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="cta fade-in">
          <button className="cta-btn">
            Get started <FaArrowRight />
          </button>
        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
        .pricing-hero {
          padding: 60px 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #f8f9fa, #eef2f7);
        }

        .heading h1 {
          font-size: 2.6rem;
          font-weight: 600;
          color: #1f1f1f;
        }

        .subtitle {
          margin-top: 10px;
          font-size: 1.2rem;
          color: #6c757d;
        }

        /* CARD */
        .pricing-card {
          backdrop-filter: blur(14px);
          background: rgba(255, 255, 255, 0.65);
          border-radius: 18px;
          padding: 30px;
          transition: all 0.35s ease;
          border: 1px solid rgba(255,255,255,0.3);
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        /* subtle glow */
        .pricing-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top, rgba(56,126,209,0.15), transparent);
          opacity: 0;
          transition: 0.3s;
        }

        .pricing-card:hover::before {
          opacity: 1;
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        /* ICON */
        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(56,126,209,0.1);
        }

        .icon-wrapper img {
          height: 40px;
          transition: 0.3s;
        }

        .pricing-card:hover .icon-wrapper img {
          transform: scale(1.2) rotate(5deg);
        }

        .pricing-card h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 10px;
        }

        .pricing-card p {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.6;
        }

        /* CTA */
        .cta {
          margin-top: 50px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 10px;
          background: linear-gradient(135deg, #387ed1, #1a5dc9);
          color: white;
          border: none;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(56,126,209,0.3);
        }

        /* animation */
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .fade-in.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* responsive */
        @media (max-width: 768px) {
          .heading h1 {
            font-size: 1.9rem;
          }

          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;