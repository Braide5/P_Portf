// stylsheet
import "./style/LiveProjects.scss";

// Images
import CLoudnotteImage from "./images/cloudnotte.jpg";
import soromImage from "./images/sorom.jpg";
import AuntyKakaImage from "./images/auntykaka.jpg";
import PointImage from "./images/points1.svg";

import Arrow from "./images/Arrow.svg";

// Navlink
import { NavLink } from "react-router-dom";

const LiveProjects = () => {
  return (
    <section className="projects" id="works">
      <div className="project_head">
        <h1>
          My Live <span>Projects</span>
        </h1>
      </div>
      <div className="inner_projects">
        <div className="left_project">
          <NavLink
            to="https://cloudnotte.com/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div className="project_card">
              <div className="project_header">
                <div className="left_header">
                  <h3>Cloudnotte</h3>
                  <span>Admin Dashboard</span>
                </div>
              </div>
              <p>
                Easily manage all activities involving students, admins, all in
                this dashboard.
              </p>
              <img src={CLoudnotteImage} alt="CLoudnotteImage" />
            </div>
          </NavLink>
          <div className="project_bottom">
            <h1>My Live</h1>
            <h1>
              <span>Projects</span>
            </h1>
            <p>
              Discover my recent design ventures in action – where creativity
              meets functionality, and user experiences come to life
            </p>
            <div className="view-more-projects">
              <NavLink to="https://www.behance.net/azubuikeduru">
                <button>View more Projects</button>
              </NavLink>
              <img src={PointImage} alt="point" />
            </div>
          </div>
        </div>
        <div className="left_project">
          <NavLink
            to="https://biasorom-web.vercel.app/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div className="project_card">
              <div className="project_header">
                <div className="left_header">
                  <h3>S0ROM</h3>
                  <span>Travel Website and App</span>
                </div>
              </div>
              <p>
                Discover, plan, and experience the world with ease - Your
                all-in-one travel companion.
              </p>
              <img src={soromImage} alt="soromImage" />
            </div>
          </NavLink>
          <NavLink
            to="https://auntykaka.org/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div className="project_card">
              <div className="project_header">
                <div className="left_header">
                  <h3>Aunty’s KAKA foundation</h3>
                  <span>NGO Website</span>
                </div>
              </div>
              <p>Empowering Young minds through education and awreness</p>
              <img src={AuntyKakaImage} alt="AuntyKakaImage" />
            </div>
          </NavLink>
        </div>
        <NavLink
          to="https://www.behance.net/azubuikeduru"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="mobile-see-more">
            <p>See More</p>
            <img src={Arrow} alt="Arrow" />
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default LiveProjects;
