import React from "react";

function Universe() {
    return (
        <div style={{ backgroundColor: "#f8f9fa", padding: "100px 0" }}>
            <div className="container text-center" style={{ maxWidth: "1100px" }}>

                {/* Heading */}
                <h2 style={{
                    fontSize: "40px",
                    fontWeight: "400",
                    marginBottom: "20px",
                    color: "#212529"
                }}>
                    The Zerodha Universe
                </h2>

                <p style={{
                    fontSize: "18px",
                    color: "#6c757d",
                    marginBottom: "70px"
                }}>
                    Extend your trading and investment experience even further with our partner platforms
                </p>

                {/* Grid Section */}
                <div className="row">

                    {[
                        {
                            img: "zerodhaFundhouse.png",
                            text: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
                        },
                        {
                            img: "sensibullLogo.svg",
                            text: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
                        },
                        {
                            img: "tijoriLogo.svg",
                            text: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
                        },
                        {
                            img: "streakLogo.png",
                            text: "Systematic trading platform that allows you to create and backtest strategies without coding."
                        },
                        {
                            img: "smallcaseLogo.png",
                            text: "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs."
                        },
                        {
                            img: "dittoLogo.png",
                            text: "Personalized advice on life and health insurance. No spam and no mis-selling."
                        }
                    ].map((item, index) => (
                        <div key={index} className="col-md-4 mb-5">
                            <img
                                src={`/media/images/${item.img}`}
                                alt="logo"
                                style={{
                                    maxWidth: "160px",
                                    marginBottom: "20px"
                                }}
                            />
                            <p style={{
                                fontSize: "14px",
                                color: "#6c757d",
                                lineHeight: "1.7",
                                maxWidth: "260px",
                                margin: "0 auto"
                            }}>
                                {item.text}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Button */}
                <button
                    style={{
                        backgroundColor: "#387ed1",
                        color: "#fff",
                        padding: "12px 40px",
                        fontSize: "18px",
                        border: "none",
                        borderRadius: "5px",
                        marginTop: "30px",
                        cursor: "pointer"
                    }}
                >
                    Sign up for free
                </button>

            </div>
        </div>
    );
}

export default Universe;