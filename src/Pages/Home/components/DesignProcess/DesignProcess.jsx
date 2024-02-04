import { useState } from "react";

// stylesheet
import "./style/DesignProcess.scss";

// react icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Images
import BriefImage from "./images/brief.png";
import TestingImage from "./images/testing.png";
import ResearchImage from "./images/research.png";
import StoryBoardImage from "./images/board.png";
import VisualDesignImage from "./images/visualDesign.png";
import PrototypingImage from "./images/prototype.png";

const DesignProcess = () => {
  const [hideBrief, setHideBrief] = useState(true);
  const [hideTesting, setHideTesting] = useState(false);
  const [research, setResearch] = useState(false);
  const [hideStory, setHideStory] = useState(false);
  const [hideVisual, setHideVisual] = useState(false);
  const [hidePrototype, setHidePrototype] = useState(false);

  // function for hide brief
  const handleHideBrief = () => {
    setHideBrief(!hideBrief);
    setHideTesting(false);
    setResearch(false);
    setHideStory(false);
    setHideVisual(false);
    setHidePrototype(false);
  };

  const handleHideTesting = () => {
    setHideTesting(!hideTesting);
    setHideBrief(false);
    setResearch(false);
    setHideStory(false);
    setHideVisual(false);
    setHidePrototype(false);
  };

  const handleHideResearch = () => {
    setResearch(!research);
    setHideTesting(false);
    setHideBrief(false);
    setHideStory(false);
    setHideVisual(false);
    setHidePrototype(false);
  };

  const handleHideStory = () => {
    setHideStory(!hideStory);
    setResearch(false);
    setHideTesting(false);
    setHideBrief(false);
    setHideVisual(false);
    setHidePrototype(false);
  };

  const handleHideVisual = () => {
    setHideVisual(!hideVisual);
    setResearch(false);
    setHideTesting(false);
    setHideBrief(false);
    setHideStory(false);
    setHidePrototype(false);
  };

  const handleHidePrototype = () => {
    setHideVisual(false);
    setResearch(false);
    setHideTesting(false);
    setHideBrief(false);
    setHideStory(false);
    setHidePrototype(!hidePrototype);
  };

  return (
    <section className="design_process">
      <div className="design_head">
        <h1>
          My Design <span>Process</span>
        </h1>
      </div>
      <div className="inner_design_process">
        <div className="left_design_process">
          <div className="design_card" onClick={handleHideBrief}>
            <div className="card_header">
              <img src={BriefImage} alt="Brief Image" />
              <h3>Brief Break Down</h3>
              {hideBrief ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={handleHideBrief}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={handleHideBrief}
                />
              )}
            </div>
            {hideBrief ? (
              <div className="card_content">
                <p>
                  I begin by breaking down the client's brief, which helps me
                  not only comprehend their needs but also formulate precise
                  questions during initial client discussions. This step is
                  essential in gaining a deeper understanding of the company's
                  brand, narrative, and character.
                </p>
              </div>
            ) : null}
          </div>
          <div className="design_header">
            <h1>My Design</h1>
            <h1>
              <span>Process</span>
            </h1>
          </div>
          <div className="design_card hide_for_mobile" onClick={handleHideTesting}>
            <div className="card_header ">
              <img src={TestingImage} alt="Testing Image" />
              <h3>Testing</h3>
              {hideTesting ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={handleHideTesting}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={handleHideTesting}
                />
              )}
            </div>
            {hideTesting ? (
              <div className="card_content">
                <p>
                  Once the prototypes are ready, I conduct comprehensive testing
                  to ensure that the design is not only visually appealing but
                  also functional and user-friendly. This testing phase helps
                  identify any potential issues and provides an opportunity for
                  refinement.
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="right_design_process">
          <div className="design_card" onClick={handleHideResearch}>
            <div className="card_header">
              <img src={ResearchImage} alt="Research Image" />
              <h3>Research</h3>
              {research ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={handleHideResearch}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={handleHideResearch}
                />
              )}
            </div>
            {research ? (
              <div className="card_content">
                <p>
                  I conduct in-depth research to explore competitors'
                  strategies. This enables me to synthesize innovative design
                  ideas and create a truly unique solution.
                </p>
              </div>
            ) : null}
          </div>
          <div className="special_cards">
            <div className="design_card" onClick={handleHideStory}>
              <div className="card_header">
                <img src={StoryBoardImage} alt="StoryBoard Image" />
                <h3>Mood Board</h3>
                {hideStory ? (
                  <IoIosArrowDown
                    className="accordion_icon"
                    onClick={handleHideStory}
                  />
                ) : (
                  <IoIosArrowUp
                    className="accordion_icon"
                    onClick={handleHideStory}
                  />
                )}
              </div>
              {hideStory ? (
                <div className="card_content">
                  <p>
                    I curate mood boards, a collaborative tool filled with
                    industry-specific images, fonts, and inspirations, and my
                    rough sketches, laying the foundation for initial design
                    concepts.
                  </p>
                </div>
              ) : null}
            </div>
            <div className="design_card" onClick={handleHideVisual}>
              <div className="card_header">
                <img src={VisualDesignImage} alt="VisualDesign Image" />
                <h3>Visual Design</h3>
                {hideVisual ? (
                  <IoIosArrowDown
                    className="accordion_icon"
                    onClick={handleHideVisual}
                  />
                ) : (
                  <IoIosArrowUp
                    className="accordion_icon"
                    onClick={handleHideVisual}
                  />
                )}
              </div>
              {hideVisual ? (
                <div className="card_content">
                  <p>
                    With a solid understanding of the client's brand and
                    industry landscape, I proceed to the design phase, crafting
                    visual solutions that align with the established goals and
                    narrative.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="design_card" onClick={handleHidePrototype}>
            <div className="card_header">
              <img src={PrototypingImage} alt="Prototyping Image" />
              <h3>Prototyping</h3>
              {hidePrototype ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={handleHidePrototype}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={handleHidePrototype}
                />
              )}
            </div>
            {hidePrototype ? (
              <div className="card_content">
                <p>
                  Following the design phase, I move on to create prototypes
                  that bring the design concepts to life. These prototypes serve
                  as a tangible representation of the final product, allowing
                  for further refinement.
                </p>
              </div>
            ) : null}
          </div>
          <div className="design_card last-design" onClick={handleHideTesting}>
            <div className="card_header">
              <img src={TestingImage} alt="Testing Image" />
              <h3>Testing</h3>
              {hideTesting ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={handleHideTesting}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={handleHideTesting}
                />
              )}
            </div>
            {hideTesting ? (
              <div className="card_content">
                <p>
                  Once the prototypes are ready, I conduct comprehensive testing
                  to ensure that the design is not only visually appealing but
                  also functional and user-friendly. This testing phase helps
                  identify any potential issues and provides an opportunity for
                  refinement.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
