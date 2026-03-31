import React from "react";

function Education() {
    return (
        <>
            <style>
                {`
                .edu-section { padding: 60px 0; }
                .edu-title { font-size: 32px; font-weight: 600; color: #444; margin-bottom: 25px; }
                .edu-text { font-size: 16px; color: #666; line-height: 1.7; }
                
                .edu-link { 
                    font-size: 16px; 
                    color: #387ed1; 
                    text-decoration: none; 
                    font-weight: 600; 
                    display: inline-block;
                    transition: 0.3s;
                }
                .edu-link:hover { color: #2c3e50; }
                .edu-link i { transition: 0.3s; margin-left: 8px; }
                .edu-link:hover i { transform: translateX(5px); }

                @media (max-width: 768px) {
                    .edu-section { text-align: center; }
                    .edu-img-wrapper { margin-bottom: 40px; }
                }
                `}
            </style>

            <div className="container edu-section">
                <div className="row align-items-center">
                    
                    {/* Left: Image */}
                    <div className="col-md-6 col-12 edu-img-wrapper">
                        <img 
                            src="media/images/education.svg" 
                            alt="Education" 
                            className="img-fluid"
                            style={{ width: "85%" }} 
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="col-md-6 col-12">
                        <h2 className="edu-title">Free and open market education</h2>
                        
                        {/* Varsity Section */}
                        <div className="mb-5">
                            <p className="edu-text">
                                <b>Varsity</b>, the largest online stock market education book in the world 
                                covering everything from the basics to advanced trading.
                            </p>
                            <a href="/varsity" className="edu-link">
                                Varsity <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>

                        {/* TradingQ&A Section */}
                        <div>
                            <p className="edu-text">
                                <b>TradingQ&A</b>, the most active trading and investment community in 
                                India for all your market related queries.
                            </p>
                            <a href="/trading-qa" className="edu-link">
                                TradingQ&A <i className="fa fa-long-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Education;