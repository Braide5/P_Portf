// stylesheet
import "./style/Hero.scss";

// Navlink
import { NavLink } from "react-router-dom";

// Images
import Behance from "./images/behance.svg";
import Medium from "./images/Medium.svg";
import Twitter from "./images/Twitter.png";
import LinkedIn from "./images/Linkedin.svg";
import HeroImage from "./images/Hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="inner_hero">
        <div className="left_hero">
          <NavLink to="">
            <img src={Behance} alt="Behance" />
          </NavLink>
          <NavLink to="">
            <img src={LinkedIn} alt="LinkedIn" />
          </NavLink>
          <NavLink to="">
            <img src={Twitter} alt="Twitter" />
          </NavLink>
          <NavLink to="">
            <img src={Medium} alt="Medium" />
          </NavLink>
        </div>
        <div className="middle_hero">
          <h6>Hello, It’s me</h6>
          <h1>Azubuike Duru</h1>
          <h3>Product Designer | Technical Writer</h3>
          <p>
            I offer a diverse range of digital skills, assisting businesses in
            defining their identity and addressing design challenges through
            intuitive visual solutions.
          </p>
          <div className="left_hero mobile_links">
          <NavLink to="">
            <img src={Behance} alt="Behance" />
          </NavLink>
          <NavLink to="">
            <img src={LinkedIn} alt="LinkedIn" />
          </NavLink>
          <NavLink to="">
            <img src={Twitter} alt="Twitter" />
          </NavLink>
          <NavLink to="">
            <img src={Medium} alt="Medium" />
          </NavLink>
          </div>
          <div className="middle_buttons">
            <a href="https://docs.google.com/document/d/1LbI_FQKM3X7UXPnmPemReIWe-voGbOGwUvK7YzMzKNI/edit">
              <button className="download_cv">Download CV</button>
            </a>
            <a href="">
              <button className="message_me">Message Me</button>
            </a>
          </div>
        </div>
        <div className="right_hero">
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
