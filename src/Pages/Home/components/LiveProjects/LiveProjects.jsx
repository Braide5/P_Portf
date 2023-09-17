// stylsheet
import "./style/LiveProjects.scss";

// Images
import ProjectImage from "./images/project.png";

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
          <div className="project_card">
            <div className="project_header">
              <div className="left_header">
                <h3>Cloudnotte Revamp</h3>
                <span>Sass Project</span>
              </div>
              <div className="right_header">
                <a href="https://cloudnotte.com/" target="_blank">
                  <button>View</button>
                </a>
              </div>
            </div>
            <p>
              I redesigned the Cloudnotte website and the admin/student
              dashboard, significantly enhancing user accessibility for both
              students and teachers.
            </p>
            <img src={ProjectImage} alt="Project Image" />
          </div>
          <div className="project_bottom">
            <h1>My Live</h1>
            <h1>
              <span>Projects</span>
            </h1>
            <p>
              Discover my recent design ventures in action – where creativity
              meets functionality, and user experiences come to life
            </p>
          </div>
        </div>
        <div className="left_project">
          <div className="project_card">
            <div className="project_header">
              <div className="left_header">
                <h3>Admin Dashboard</h3>
                <span>Sass Project</span>
              </div>
              <div className="right_header">
                <a href="" target="_blank">
                  <button>View</button>
                </a>
              </div>
            </div>
            <p>
              I’m a skilled full stack web developer in Nigeria, with over 3
              years of experience
            </p>
            <img src={ProjectImage} alt="Project Image" />
          </div>
          <div className="project_card">
            <div className="project_header">
              <div className="left_header">
                <h3>Admin Dashboard</h3>
                <span>Sass Project</span>
              </div>
              <div className="right_header">
                <a href="" target="_blank">
                  <button>View</button>
                </a>
              </div>
            </div>
            <p>
              I’m a skilled full stack web developer in Nigeria, with over 3
              years of experience
            </p>
            <img src={ProjectImage} alt="Project Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveProjects;
