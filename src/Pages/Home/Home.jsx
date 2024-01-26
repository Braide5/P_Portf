// components
import DesignProcess from "./components/DesignProcess/DesignProcess";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Hero from "./components/Hero/Hero";
import LiveProjects from "./components/LiveProjects/LiveProjects";
import Tools from "./components/Tools/Tools";
import Blog from "./components/Blogs/Blog";
import AboutMe from "./components/AboutMe/AboutMe";

const Home = () => {
  return (
    <section style={{width: "100%",overflowX: "hidden"}}>
      <Hero/>
      <LiveProjects/>
      <DesignProcess/>
      {/* <GetInTouch/> */}
      <Blog/>
      <AboutMe/>
      <Tools/>
    </section>
  )
}

export default Home