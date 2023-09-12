// stylesheet
import "./style/Tools.scss";

// images
import ToolsImages from "./images/tools.png";

const Tools = () => {
  return (
    <section className="tools">
      <div className="inner_tools">
        <h1>Tools I Use</h1>
        <div className="tools_image">
          <img src={ToolsImages} alt="Tools Images" />
        </div>
      </div>
    </section>
  );
};

export default Tools;
