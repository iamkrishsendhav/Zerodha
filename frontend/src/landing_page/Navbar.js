import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <>
            <style>
                {`
        .custom-navbar {
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.8) !important;
          border-bottom: 1px solid #eee;
        }

        .custom-navbar .nav-link {
          color: #666;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.25s ease;
          position: relative;
        }

        .custom-navbar .nav-link:hover {
          color: #387ed1;
        }

        /* underline animation */
        .custom-navbar .nav-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #387ed1;
          transition: 0.3s;
        }

        .custom-navbar .nav-link:hover::after {
          width: 100%;
        }

        /*  ACTIVE LINK */
        .active-link {
          color: #387ed1 !important;
          font-weight: 600;
        }

        .active-link::after {
          width: 100% !important;
        }

        /* dropdown */
        .dropdown-menu {
          border-radius: 10px;
          border: 1px solid #eee;
          padding: 8px 0;
        }

        .dropdown-item {
          font-size: 14px;
        }

        .dropdown-item:hover {
          background: #f5f7fa;
        }
        `}
            </style>

            <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
                <div className="container">

                    {/* LOGO */}
                    <Link className="navbar-brand" to="/">
                        <img
                            src="media/images/logo.svg"
                            style={{ width: "120px" }}
                            alt="Logo"
                        />
                    </Link>

                    {/* TOGGLER */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* MENU */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav gap-lg-4">

                            {/* DROPDOWN */}
                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Signup
                                </span>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/signup">
                                            Create Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* LINKS */}
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active-link" : ""}`} to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/product" ? "active-link" : ""}`} to="/product">
                                    Product
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/pricing" ? "active-link" : ""}`} to="/pricing">
                                    Pricing
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/support" ? "active-link" : ""}`} to="/support">
                                    Support
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;