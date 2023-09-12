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
          <NavLink to="/">About Me</NavLink>
          <NavLink to="/services">Works</NavLink>
          <NavLink to="/programs">Blog</NavLink>
          <NavLink to="/join_now">
            <button className="contact_me footer_contact_me">Contact Me</button>
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
