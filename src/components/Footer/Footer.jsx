// stylesheet
import "./style/Footer.scss";

// Images
import FooterLogo from "./images/FooterLogo.png";
import BehanceLogo from "./images/Behance.svg";
import LinkedInLogo from "./images/Linkedin.svg";
import TwitterLogo from "./images/Twitter.svg";
import MediumLogo from "./images/Medium.svg";

// Nav link
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="inner_footer mobile_footer">
        <div className="footer_logo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="copy-right">
          <p>Azubuiike Duru Design 2023</p>
        </div>
        <div className="footer-socials">
          <NavLink to="" target="_blank">
            <img src={BehanceLogo} alt="BehanceLogo" />
          </NavLink>
          <NavLink to="" target="_blank">
            <img src={LinkedInLogo} alt="LinkedInLogo" />
          </NavLink>
          <NavLink to="" target="_blank">
            <img src={TwitterLogo} alt="TwitterLogo" />
          </NavLink>
          <NavLink to="" target="_blank">
            <img src={MediumLogo} alt="MediumLogo" />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
