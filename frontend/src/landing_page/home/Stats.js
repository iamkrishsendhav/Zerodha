import React from "react";

function Stats() {
    const statsData = [
        {
            title: "Customer-first always",
            desc: "That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments."
        },
        {
            title: "No spam or gimmicks",
            desc: "No gimmicks, spam, 'gamification', or annoying push notifications. High quality apps that you use at your pace."
        },
        {
            title: "The Zerodha universe",
            desc: "Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services."
        },
        {
            title: "Do better with money",
            desc: "With initiatives like Nudge and Kill Switch, we actively help you do better with your money."
        }
    ];

    return (
        <>
            <style>
                {`
                .stats-wrapper { 
                    /* ✅ Padding minimized to match pricing section */
                    padding: 50px 0; 
                    background-color: #fff;
                    font-family: "Inter", sans-serif;
                }
                .stats-title { 
                    font-size: 32px; 
                    font-weight: 500; 
                    color: #444; 
                    margin-bottom: 30px; 
                }
                .stat-item-title { 
                    font-size: 20px; 
                    font-weight: 500; 
                    color: #444; 
                    margin-top: 20px; 
                    margin-bottom: 8px;
                }
                .stat-item-desc { 
                    font-size: 16px; 
                    color: #666; 
                    line-height: 1.6; 
                    margin-bottom: 15px; 
                }
                
                .stats-link { 
                    font-size: 16px; 
                    color: #387ed1; 
                    text-decoration: none; 
                    font-weight: 500; 
                    transition: 0.3s;
                }
                .stats-link:hover { color: #444; text-decoration: none; }
                .stats-link i { transition: 0.3s; margin-left: 5px; }
                .stats-link:hover i { transform: translateX(5px); }

                @media (max-width: 768px) {
                    .stats-wrapper { text-align: center; padding: 20px 15px; }
                    .stats-title { font-size: 26px; }
                    .stat-item-desc { margin-bottom: 25px; }
                    .stats-image { margin-top: 30px; }
                }
                `}
            </style>

            <section className="stats-wrapper">
                <div className="container" style={{ maxWidth: "1100px" }}>
                    <div className="row align-items-center">
                        
                        {/* Left Content Column */}
                        <div className="col-lg-6 col-md-12 pe-lg-5">
                            <h1 className="stats-title">Trust with confidence</h1>
                            
                            {statsData.map((item, index) => (
                                <div key={index}>
                                    <h2 className="stat-item-title">{item.title}</h2>
                                    <p className="stat-item-desc">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Image/Links Column */}
                        <div className="col-lg-6 col-md-12 text-center">
                            <img 
                                src="media/images/ecosystem.png" 
                                alt="Ecosystem" 
                                className="img-fluid mb-4 stats-image" 
                                style={{ width: "100%", maxWidth: "500px" }}
                            />
                            
                            <div className="d-flex justify-content-center gap-4 flex-wrap mt-2">
                                <a href="/products" className="stats-link">
                                    Explore our products <i className="fa fa-long-arrow-right"></i>
                                </a>
                                <a href="/demo" className="stats-link">
                                    Try Kite demo <i className="fa fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Stats;