// stylesheet
import "./style/Footer.scss";

// Images
import FooterLogo from "./images/FooterLogo.png";

// Nav link
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="inner_footer mobile_footer">
        <div className="footer_logo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="footer_nav">
          <a href="#About_me">About Me</a>
          <a href="#works">Works</a>
          <a href="#blog">Blog</a>
          <a href="#contact">
            <button className="contact_me footer_contact_me">Contact Me</button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
