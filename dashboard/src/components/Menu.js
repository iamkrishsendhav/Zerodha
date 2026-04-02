import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const dropdownRef = useRef();

  // USER DATA
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user?.name || "User";

  // INITIALS GENERATOR
  const getInitials = (name) => {
    if (!name) return "U";
    const parts = name.split(" ");
    return parts.length === 1
      ? parts[0][0].toUpperCase()
      : (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const initials = getInitials(userName);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  //  LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("otpEmail");

    window.location.href = "https://zerodha-frontend-final-eta.vercel.app/";
  };

  //  CLICK OUTSIDE CLOSE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} alt="menu icon" />

        <div className="menus">
          <ul>
            <li>
              <Link to="/" onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                  Dashboard
                </p>
              </Link>
            </li>

            <li>
              <Link to="/orders" onClick={() => handleMenuClick(1)}>
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                  Orders
                </p>
              </Link>
            </li>

            <li>
              <Link to="/holdings" onClick={() => handleMenuClick(2)}>
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                  Holdings
                </p>
              </Link>
            </li>

            <li>
              <Link to="/positions" onClick={() => handleMenuClick(3)}>
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                  Positions
                </p>
              </Link>
            </li>

            <li>
              <Link to="/funds" onClick={() => handleMenuClick(4)}>
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                  Funds
                </p>
              </Link>
            </li>

            <li>
              <Link to="/apps" onClick={() => handleMenuClick(5)}>
                <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                  Apps
                </p>
              </Link>
            </li>
          </ul>

          <hr />

          {/* PROFILE */}
          <div className="profile" ref={dropdownRef}>
            <div
              onClick={handleProfileClick}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div className="avatar">{initials}</div>
              <p className="username">{userName}</p>
            </div>

            {isProfileDropdownOpen && (
              <div className="dropdown">
                {/*  USER INFO */}
                <div className="profile-header">
                  <div className="avatar big">{initials}</div>

                  <div className="user-details">
                    <p className="name">{userName}</p>
                    <p className="email">{user?.email || "user@email.com"}</p>
                  </div>
                </div>

                <div className="divider"></div>

                <p className="menu-item">Profile</p>

                <p className="menu-item logout" onClick={handleLogout}>
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS SAME (no change in design) */}
      <style jsx>{`
        .profile {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          position: relative;
        }
        .menus ul li a {
          text-decoration: none !important;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f3e5f5;
          color: #9c27b0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
        }

        .username {
          margin: 0;
          font-size: 14px;
          color: #444;
        }

        .dropdown {
          position: absolute;
          top: 45px;
          right: 0;
          background: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 8px;
          width: 130px;
          z-index: 100;
        }

        .dropdown p {
          margin: 0;
          padding: 8px;
          font-size: 13px;
          border-radius: 6px;
          cursor: pointer;
        }

        .dropdown p:hover {
          background: #f5f7fa;
        }

        .logout {
          color: #e53935;
          font-weight: 500;
        }

        .logout:hover {
          background: #fdecea;
        }

        .dropdown {
          position: absolute;
          top: 48px;
          right: 0;
          width: 220px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          padding: 10px;
          z-index: 100;
        }

        /* HEADER */
        .profile-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
        }

        .avatar.big {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #f3e5f5;
          color: #9c27b0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }

        /* TEXT */
        .user-details {
          display: flex;
          flex-direction: column;
        }

        .name {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #222;
        }

        .email {
          margin: 0;
          font-size: 12px;
          color: #888;
        }

        /* DIVIDER */
        .divider {
          height: 1px;
          background: #eee;
          margin: 8px 0;
        }

        /* ITEMS */
        .menu-item {
          margin: 0;
          padding: 10px;
          font-size: 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.2s;
        }

        .menu-item:hover {
          background: #f5f7fa;
        }

        .logout {
          color: #e53935;
          font-weight: 500;
        }

        .logout:hover {
          background: #fdecea;
        }
      `}</style>
    </>
  );
};

export default Menu;
