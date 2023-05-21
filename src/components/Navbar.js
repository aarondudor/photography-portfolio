import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#" className="site-title">
        <Link to="/">Aaron's Photography</Link>
      </a>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li
          className={`dropdown ${isDropdownOpen ? "open" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="#">Gallery</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/portraits">Portraits</Link>
              </li>
              <li>
                <Link to="/street">Street</Link>
              </li>
              <li>
                <Link to="/landscape">Landscape</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
