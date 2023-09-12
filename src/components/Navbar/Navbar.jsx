// import React from "react";

// stylesheet
import "./style/Navbar.scss";

// react icons
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

// Import Use Ref
import { useRef } from "react";

// Nav link
import { NavLink } from "react-router-dom";

// Images
import Logo from "./images/Logo.png";
import Menu from "./images/menu.png";

const Navbar = () => {
  // Navbar open and close function
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <div className="Navbar">
      <div className="container">
        <header>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </NavLink>
          <nav ref={navRef}>
            <NavLink to="/" onClick={closeNavbar}>About Me</NavLink>
            <NavLink to="/services" onClick={closeNavbar}>Works</NavLink>
            <NavLink to="/programs" onClick={closeNavbar}>Blog</NavLink>
            <NavLink to="/join_now" onClick={closeNavbar}>
              <button className="contact_me">Contact Me</button>
            </NavLink>
            <button
              className="nav-btn nav-close-btn"
              onClick={closeNavbar}
              style={{ color: "white", fontSize: "32px" }}
            >
              <AiOutlineClose />
            </button>
          </nav>

          <button className="nav-btn" onClick={showNavbar}>
            <img src={Menu} alt="Menu" />
          </button>
        </header>
      </div>
    </div>
  );
};

export default Navbar;