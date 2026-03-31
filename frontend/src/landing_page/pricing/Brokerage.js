import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Brokerage() {
    return (
        <section className="brokerage">
            <div className="container">

                <div className="row align-items-start">

                    {/* LEFT */}
                    <div className="col-lg-8 mb-4">

                        <div className="box">
                            <a href="/" className="heading-link">
                                <h3>Brokerage calculator <FaArrowRight /></h3>
                            </a>

                            <ul className="list">
                                <li>Call & Trade and RMS auto-squareoff: ₹50 + GST per order.</li>
                                <li>Digital contract notes will be sent via e-mail.</li>
                                <li>Physical contract notes: ₹20 per note + courier charges.</li>
                                <li>NRI (non-PIS): 0.5% or ₹100 per order.</li>
                                <li>NRI (PIS): 0.5% or ₹200 per order.</li>
                                <li>Debit balance orders: ₹40 per order instead of ₹20.</li>
                            </ul>
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="col-lg-4">

                        <div className="box small-box text-center">
                            <a href="/" className="heading-link">
                                <h3>List of charges <FaArrowRight /></h3>
                            </a>
                            <p className="text-muted mt-2">
                                View all detailed charges, taxes, and fees in one place.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            {/* CSS */}
            <style jsx>{`
        .brokerage {
          padding: 80px 0;
          font-family: 'Inter', sans-serif;
        }

        .box {
          background: #fff;
          border-radius: 12px;
          padding: 25px 30px;
          border: 1px solid #eee;
          transition: 0.3s;
        }

        .box:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .small-box {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .heading-link {
          text-decoration: none;
          color: #1f1f1f;
        }

        .heading-link h3 {
          font-size: 1.1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .heading-link:hover {
          color: #387ed1;
        }

        .list {
          margin-top: 15px;
          padding-left: 18px;
          color: #555;
          font-size: 14px;
          line-height: 1.9;
        }

        .list li {
          margin-bottom: 8px;
        }

        /* responsive */
        @media (max-width: 768px) {
          .brokerage {
            padding: 50px 0;
          }

          .box {
            padding: 20px;
          }
        }
      `}</style>
        </section>
    );
}

export default Brokerage;