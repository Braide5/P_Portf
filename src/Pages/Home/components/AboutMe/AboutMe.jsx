// stylesheet
import "./style/AboutMe.scss";

// Images
import MeImage from "./images/Me.png";

const AboutMe = () => {
  return (
    <section className="about_me" id="About_me">
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
            You may already know me as Azubuike Duru, a dedicated product
            designer with over 2 years of experience crafting inventive
            solutions and dynamic interface designs to enhance user experiences.
          </p>
          <p>
            My journey began as a graphic design intern at Dechrysolite
            Technology, a graphics and printing company located in Surulere,
            Lagos, Nigeria, where my dedication led me to the role of assistant
            graphic designer within months.
          </p>
          <p>
            Since then, I've embarked on a journey of growth, interning,
            learning, and working with diverse organizations to hone my skills
            as a Product designer. I've also had the privilege of mentoring and
            delivering design talks in various spaces, including Twitter,
            communities, and Google Meet sessions, both with my design team and
            mentees. Moreover, I'm a certified Wikipedia freelance writer and
            editor, driven by my commitment to contribute to community growth in
            every way possible.
          </p>
          <p>
            My deepest passion lies in simplifying complex problems through the
            art of elegant designs. While I acknowledge there's always more to
            learn in the design world, I embrace each challenge with an
            unwavering belief in my ability to rapidly find solutions with the
            support of my design team and online connections.
          </p>
          <p>
            I'm a passionate learner who always looks for chances to try new
            things. I find the norms boring, and I strongly believe that we can
            always make something better, even if it already seems good.
          </p>
          <p>
            That's why, in my design process, I prioritize both usability and
            functionality, acknowledging that aesthetics alone can't define a
            successful product. Every exceptional product should possess a
            unique narrative, and I consider it my mission to unveil that story
            to the world.
          </p>
          <p>
            I’m currently learning how to explore the world of design through AI
            hence the name - DesignAI. I believe AI is here to stay and will
            improve the way we work in the future.{" "}
          </p>
          <p>
            Now, if I'm not immersed in the world of design, you're likely to
            find me fervently writing or enthusiastically exploring the realm of
            art. Oh, and in case you're wondering, I genuinely believe that God
            must have been a product designer too! 😁
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
