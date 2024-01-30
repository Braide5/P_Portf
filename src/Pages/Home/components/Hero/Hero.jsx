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
  const cv = "https://docs.google.com/document/d/1LbI_FQKM3X7UXPnmPemReIWe-voGbOGwUvK7YzMzKNI/edit";
  return (
    <section className="hero">
      <div className="inner_hero">
        <div className="left_hero">
          <NavLink to="https://www.behance.net/azubuikeduru">
            <img src={Behance} alt="Behance" />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/azubuike-duru-2b7a43229">
            <img src={LinkedIn} alt="LinkedIn" />
          </NavLink>
          <NavLink to="https://www.twitter.com/AzubuikeDuru6">
            <img src={Twitter} alt="Twitter" />
          </NavLink>
          <NavLink to="https://medium.com/@zubiduru">
            <img src={Medium} alt="Medium" />
          </NavLink>
        </div>
        <div className="middle_hero">
          <h6>Hello, It’s me Azubuike</h6>
          <h1>Product Designer &</h1>
          <h1>Technical Writer</h1>
          <p>
            I simplify user experiences through intuitive visual design
            interactions.
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
            <a href="mailto:duruazubuike2019@gmail.com?subject=Get%20in%20touch" target="_blank">
              <button className="download_cv">Get in touch</button>
            </a>
            <a href={cv}>
              <button className="message_me">Check CV</button>
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
