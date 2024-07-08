import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_ry.png";
import { AuthContext } from "../../utils/AuthContext";
import "./Header.css";

function Header() {
  const { cart } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // <img src={logo} alt="" />
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="The logo" className="nav-logo" />
      </Link>
      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-title-link" onClick={closeMobileMenu}>
          {/* <h1 className="nav-title">Bookstore</h1> */}
          <i className="fa-solid fa-house nav-title"></i>
        </Link>
        <Link to="/cart" className="nav-cart-link" onClick={closeMobileMenu}>
          <i className="fa-solid fa-cart-shopping nav-cart-b"></i>
          <span className="cart-badge">{cart}</span>
        </Link>
        <Link to="/create" className="nav-cart-link" onClick={closeMobileMenu}>
          <i className="fa-solid fa-book nav-cart-b"></i>
        </Link>
      </div>
      <button className="nav-toggle-button" onClick={toggleMobileMenu}>
        <i className={`fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
  );
}

export default Header;
