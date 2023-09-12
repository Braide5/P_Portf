// stylsheet
import "./style/LiveProjects.scss";

// Images
import ProjectImage from "./images/project.png";

const LiveProjects = () => {
  return (
    <section className="projects">
      <div className="inner_projects">
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
          <div className="project_bottom">
            <h6>Hello, It’s me</h6>
            <h1>My Live</h1>
            <h1><span>Projects</span></h1>
            <p>
              I’m a skilled full stack web developer in Nigeria, with over 3
              years of experience in the field. From the beginning of my career,
              I have
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
