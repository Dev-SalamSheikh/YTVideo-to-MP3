import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <img src="./logo1.png" alt="" className="footer-logo" />
      <div className="social-link">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div className="copyright">
        <p>
          Developed with ❤️ by <span>Salam Sheikh</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
