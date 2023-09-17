// stylesheet
import "./style/Hero.scss";

// Images
import Instagram from "./images/Instagram.png";
import Github from "./images/Github.png";
import Twitter from "./images/Twitter.png";
import LinkedIn from "./images/Linkedin.png";
import HeroImage from "./images/Hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="inner_hero">
        <div className="left_hero">
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="">
            <img src={Github} alt="Github" />
          </a>
          <a href="">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
        <div className="middle_hero">
          <h6>Hello, It’s me</h6>
          <h1>Azubuike Duru</h1>
          <h3>Product Designer | Technical Writer</h3>
          <p>
            I provide wide range of digital skills. I help business find their
            identity and work flow problems through simplified visual
            interaction.
          </p>
          <div className="left_hero mobile_links">
            <a href="">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="">
              <img src={Github} alt="Github" />
            </a>
            <a href="">
              <img src={Twitter} alt="Twitter" />
            </a>
            <a href="">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
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
