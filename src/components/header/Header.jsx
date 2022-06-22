import React, { useState } from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../../images/burger-logo.png";

export default function Header({ flag, setFlag }) {
  const [mobileNavBar, setMobileNavBar] = useState(false);

  const mobileNavBarToggle = () => {
    setMobileNavBar(!mobileNavBar);
  };
  return (
    <div className="main__header">
      <div className="header_left">
        <img src={logo} alt="burger-logo" />
      </div>
      <div className="header_right topnav responsive" id="myTopnav">
        <div className="header_list">
          <ul className="list_item">
            <li className="item">
              <Link to="/">Buger Builder</Link>
            </li>
            {flag ? (
              <li className="item">
                <Link to="signin">Login</Link>
              </li>
            ) : (
              <>
                <li className="item">
                  <Link to="signin">Orders</Link>
                </li>
                <li className="item">
                  <Link
                    to="/"
                    onClick={() => {
                      setFlag(true);
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
            <a
              href="javascript:void(0);"
              className="icon"
              onClick={mobileNavBarToggle}
            >
              <i className="fa fa-bars"></i>
            </a>
          </ul>

          {!mobileNavBar && (
            <ul className="mobile_navbar">
              <li className="mobile_item">
                <img src={logo} alt="burger-logo" />
              </li>
              <li className="mobile_item">
                <Link to="/">Buger Builder</Link>
              </li>
              {flag ? (
                <li className="mobile_item">
                  <Link to="signin">Login</Link>
                </li>
              ) : (
                <>
                  <li className="mobile_item">
                    <Link to="signin">Orders</Link>
                  </li>
                  <li className="mobile_item">
                    <Link
                      to="/"
                      onClick={() => {
                        setFlag(true);
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>

      <Outlet />
    </div>
  );
}