import React from "react";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container p-4 mb-4">
            <div className="row text-center">
                {/* Hero Image */}
                <div className="col-12">
                    <img
                        src="media/images/homeHero.svg"
                        alt="Hero"
                        className="img-fluid mb-5"
                        style={{ maxWidth: "100%" }}
                    />
                </div>

                {/* Main Heading */}
                <h1 className="mt-4 display-4 fw-bold text-dark">
                    Invest in everything
                </h1>
                
                {/* Sub-text */}
                <p className="fs-5 text-muted mb-5">
                    Online platform to invest in stocks, derivatives, mutual funds, and more.
                </p>

                {/* Action Section */}
                <div className="col-12 d-flex flex-column align-items-center">
                    {/* Signup Button */}
                    <Link 
                        to="/signup" 
                        className="btn btn-primary fs-5 mb-3 fw-medium"
                        style={{ 
                            padding: "12px 35px", 
                            borderRadius: "8px",
                            backgroundColor: "#387ed1",
                            border: "none",
                            width: "fit-content"
                        }}
                    >
                        Sign up now
                    </Link>

                    {/* Login Link added below */}
                    <p className="text-muted" style={{ fontSize: "14px" }}>
                        Already have an account? <Link to="/login" className="text-decoration-none fw-bold" style={{ color: "#387ed1" }}>Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;