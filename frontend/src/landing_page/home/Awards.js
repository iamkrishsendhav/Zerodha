import React from "react";

function Awards() {

    const products = [
        ["Futures and Options", "Commodity derivatives", "Currency derivatives"],
        ["Stocks & IPOs", "Direct mutual funds", "Bonds and Govt. Securities"]
    ];

    return (
        <div className="container mt-0">
            <div className="row align-items-center">
                {/* Left Image Section */}
                <div className="col-12 col-md-6 text-center">
                    <img 
                        src="media/images/largestBroker.svg" 
                        alt="Largest Broker" 
                        className="img-fluid w-75"
                    />
                </div>

                {/* Right Content Section */}
                <div className="col-12 col-md-6 mt-5 mt-md-0">
                    <h1 className="display-5 fw-bold mb-4" style={{ color: "#444" }}>
                        Largest stock broker in India
                    </h1>
                    <p className="fs-5 text-muted mb-4">
                        2+ million Zerodha clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:
                    </p>

                    <div className="row mb-4">
                        {products.map((column, colIndex) => (
                            <div className="col-6" key={colIndex}>
                                <ul className="list-unstyled">
                                    {column.map((item, i) => (
                                        <li key={i} className="mb-2 d-flex align-items-center">
                                            <i className="fa fa-circle me-2 text-primary" style={{ fontSize: "8px" }}></i>
                                            <span className="text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Press Logos Section */}
                    <div className="mt-4">
                        <img 
                            src="media/images/pressLogos.png" 
                            alt="Press Logos" 
                            className="img-fluid" 
                            style={{ width: "90%", opacity: "0.8" }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;