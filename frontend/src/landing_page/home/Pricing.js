import React from "react";

function Pricing() {
    const pricePlans = [
        { price: "₹0", label: "Free account opening" },
        { price: "₹0", label: "Free equity delivery and direct mutual funds" },
        { price: "₹20", label: "Intraday and F&O" }
    ];

    return (
        <>
            <style>
                {`
                .pricing-wrapper {
                    padding: 20px 0; 
                    background-color: #fff;
                    font-family: "Inter", sans-serif;
                }
                .pricing-title {
                    font-size: 32px;
                    font-weight: 500;
                    color: #444;
                    margin-bottom: 15px;
                }
                .pricing-desc {
                    font-size: 16px;
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                .pricing-link {
                    color: #387ed1;
                    text-decoration: none;
                    font-weight: 500;
                    font-size: 16px;
                    transition: 0.3s;
                }
                .pricing-link:hover {
                    color: #444;
                }
                .pricing-link i {
                    transition: 0.3s;
                    margin-left: 8px;
                }
                .pricing-link:hover i {
                    transform: translateX(5px);
                }

                .price-card {
                    border: 1px solid #eee;
                    padding: 25px 10px;
                    border-radius: 4px;
                    height: 100%;
                    background: #fff;
                    transition: 0.3s;
                }
                .price-card:hover {
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
                }
                
                .price-value {
                    font-size: 44px;
                    font-weight: 600;
                    color: #f59d19; 
                    margin-bottom: 5px;
                }
                .price-label {
                    font-size: 11px;
                    color: #9b9b9b;
                    line-height: 1.4;
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .pricing-wrapper { text-align: center; padding: 20px 15px; }
                    .price-card { margin-bottom: 10px; }
                    .col-4 { width: 100%; }
                }
                `}
            </style>

            <section className="pricing-wrapper">
                <div className="container" style={{ maxWidth: "1100px" }}>
                    <div className="row align-items-center">
                        
                        <div className="col-lg-5 col-md-12 mb-3 mb-lg-0">
                            <h2 className="pricing-title">Unbeatable pricing</h2>
                            <p className="pricing-desc">
                                We pioneered the concept of discount broking and price transparency in India. 
                                <b> Flat fees</b> and no hidden charges.
                            </p>
                            <a href="/pricing" className="pricing-link">
                                See pricing <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row g-2"> 
                                {pricePlans.map((plan, index) => (
                                    <div className="col-4" key={index}>
                                        <div className="price-card text-center d-flex flex-column justify-content-center">
                                            <h1 className="price-value">{plan.price}</h1>
                                            <p className="price-label">{plan.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;