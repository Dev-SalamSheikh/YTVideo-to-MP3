import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div>
          <img src="./logo1.png" alt="logo" className="logo" />
        </div>
        <div className="navbar-text">
          <p>Download Youtube Video as MP3 Format</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
