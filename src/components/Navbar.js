import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/photography_logo.png";
import "../App.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="leftSide">
        <Link to="/">
          <h1>
            <img src={Logo} />
            AARON DUDOR
          </h1>
        </Link>
      </div>
      <div className="rightSide">
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#">GALLERY</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/portraits">PORTRAITS</Link>
                </li>
                <li>
                  <Link to="/street">STREET</Link>
                </li>
                <li>
                  <Link to="/landscape">LANDSCAPE</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
