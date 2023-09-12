// stylesheet
import "./style/AboutMe.scss";

// Images
import MeImage from "./images/Me.png";

const AboutMe = () => {
  return (
    <section className="about_me">
      <div className="inner_about_me">
        <div className="about_header">
          <div className="left_header">
            <img src={MeImage} alt="Me" />
          </div>
          <div className="right_header">
            <h6>A little story about</h6>
            <h1>Me</h1>
          </div>
        </div>
        <div className="about_body">
          <p>
            I’m a skilled full stack web developer in Nigeria, with over 3 years
            of experience in the field. From the beginning of my career, I have
            ’m a skilled full stack web developer in Nigeria, with over 3 years
            of experience in the field. From the beginning of my career, I have
            ’m a skilled full stack web developer in Nigeria, with over 3 years
            of experience in the field. From the beginning of my career, I have
            ’m a skilled full stack web developer in Nigeria, with over 3 years
            of experience in the field. From the beginning of my career,
          </p>
          <p>
            I have ’m a skilled full stack web developer in Nigeria, with over 3
            years of experience in the field. From the beginning of my career, I
            have ’m a skilled full stack web developer in Nigeria, with over 3
            years of experience in the field. From the beginning of my career, I
            have ’m a skilled full stack web developer in Nigeria, with over 3
            years of experience in the field. From the beginning of my career, I
            have</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
