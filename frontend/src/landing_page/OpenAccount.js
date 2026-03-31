import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <>
            <style>
                {`
                .cta-section {
                    background-color: #ffffff;
                    padding: 50px 0;
                    text-align: center;
                    font-family: 'Inter', sans-serif;
                }

                .cta-title {
                    font-size: 44px;
                    font-weight: 700;
                    color: #444;
                    margin-bottom: 20px;
                    letter-spacing: -0.5px;
                }

                .cta-subtitle {
                    font-size: 18px;
                    color: #666;
                    max-width: 600px;
                    margin: 0 auto 45px;
                    line-height: 1.6;
                }

                .cta-btn {
                    background: linear-gradient(135deg, #387ed1, #5aa9ff);
                    color: #fff;
                    padding: 16px 45px;
                    font-size: 18px;
                    font-weight: 600;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    text-decoration: none;
                    display: inline-block;
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px rgba(56, 126, 209, 0.2);
                }

                .cta-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(56, 126, 209, 0.3);
                    color: #fff;
                }

                .cta-tagline {
                    margin-top: 25px;
                    font-size: 14px;
                    color: #9b9b9b;
                }

                @media (max-width: 768px) {
                    .cta-section { padding: 60px 20px; }
                    .cta-title { font-size: 32px; }
                    .cta-subtitle { font-size: 16px; }
                }
                `}
            </style>

            <section className="cta-section">
                <div className="container">
                    {/* Main Heading */}
                    <h2 className="cta-title">Open a Zerodha account</h2>
                    
                    {/* Subtext */}
                    <p className="cta-subtitle">
                        Join 1.5+ Crore investors who trust Zerodha for its modern platforms, 
                        <b> ₹0 investments</b>, and flat ₹20 intraday and F&O trades.
                    </p>

                    {/* ✅ Link to Signup Page */}
                    <Link to="/signup" className="cta-btn">
                        Sign up for free
                    </Link>

                    {/* Trust Factor */}
                    <p className="cta-tagline">
                        <i className="fa fa-shield-halved me-2"></i> 
                        SEBI Registered & Trusted by millions
                    </p>
                </div>
            </section>
        </>
    );
}

export default OpenAccount;