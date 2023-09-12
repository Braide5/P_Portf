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

  return (
    <section className="design_process">
      <div className="design_head">
        <h1>My Design <span>Process</span></h1>
      </div>
      <div className="inner_design_process">
        <div className="left_design_process">
          <div className="design_card">
            <div className="card_header">
              <img src={BriefImage} alt="Brief Image" />
              <h3>Brief Break Down</h3>
              {hideBrief ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={() => setHideBrief(!hideBrief)}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={() => setHideBrief(!hideBrief)}
                />
              )}
            </div>
            {hideBrief ? (
              <div className="card_content">
                <p>
                  I’m a skilled full stack web developer in Nigeria, with over 3
                  years of experience in the field. From the beginning of my
                  career, I have
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
          <div className="design_card">
            <div className="card_header">
              <img src={TestingImage} alt="Testing Image" />
              <h3>Testing</h3>
              {hideTesting ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={() => setHideTesting(!hideTesting)}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={() => setHideTesting(!hideTesting)}
                />
              )}
            </div>
            {hideTesting ? (
              <div className="card_content">
                <p>
                  I’m a skilled full stack web developer in Nigeria, with over 3
                  years of experience in the field. From the beginning of my
                  career, I have
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="right_design_process">
          <div className="design_card">
            <div className="card_header">
              <img src={ResearchImage} alt="Research Image" />
              <h3>Research</h3>
              {research ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={() => setResearch(!research)}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={() => setResearch(!research)}
                />
              )}
            </div>
            {research ? (
              <div className="card_content">
                <p>
                  I’m a skilled full stack web developer in Nigeria, with over 3
                  years of experience in the field. From the beginning of my
                  career, I have
                </p>
              </div>
            ) : null}
          </div>
          <div className="special_cards">
            <div className="design_card">
              <div className="card_header">
                <img src={StoryBoardImage} alt="StoryBoard Image" />
                <h3>Story Board</h3>
                {hideStory ? (
                  <IoIosArrowDown
                    className="accordion_icon"
                    onClick={() => setHideStory(!hideStory)}
                  />
                ) : (
                  <IoIosArrowUp
                    className="accordion_icon"
                    onClick={() => setHideStory(!hideStory)}
                  />
                )}
              </div>
              {hideStory ? (
                <div className="card_content">
                  <p>
                    I’m a skilled full stack web developer in Nigeria, with over
                    3 years of experience in the field. From the beginning of my
                    career, I have
                  </p>
                </div>
              ) : null}
            </div>
            <div className="design_card">
              <div className="card_header">
                <img src={VisualDesignImage} alt="VisualDesign Image" />
                <h3>Visual Design</h3>
                {hideVisual ? (
                  <IoIosArrowDown
                    className="accordion_icon"
                    onClick={() => setHideVisual(!hideVisual)}
                  />
                ) : (
                  <IoIosArrowUp
                    className="accordion_icon"
                    onClick={() => setHideVisual(!hideVisual)}
                  />
                )}
              </div>
              {hideVisual ? (
                <div className="card_content">
                  <p>
                    I’m a skilled full stack web developer in Nigeria, with over
                    3 years of experience in the field. From the beginning of my
                    career, I have
                  </p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="design_card">
            <div className="card_header">
              <img src={PrototypingImage} alt="Prototyping Image" />
              <h3>Prototyping</h3>
              {hidePrototype ? (
                <IoIosArrowDown
                  className="accordion_icon"
                  onClick={() => setHidePrototype(!hidePrototype)}
                />
              ) : (
                <IoIosArrowUp
                  className="accordion_icon"
                  onClick={() => setHidePrototype(!hidePrototype)}
                />
              )}
            </div>
            {hidePrototype ? (
              <div className="card_content">
                <p>
                  I’m a skilled full stack web developer in Nigeria, with over 3
                  years of experience in the field. From the beginning of my
                  career, I have
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
