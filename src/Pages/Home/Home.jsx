// components
import DesignProcess from "./components/DesignProcess/DesignProcess";
import Hero from "./components/Hero/Hero";
import LiveProjects from "./components/LiveProjects/LiveProjects";
import Tools from "./components/Tools/Tools";
import Blog from "./components/Blogs/Blog";
import AboutMe from "./components/AboutMe/AboutMe";
import Testimonial from "./components/Testimonial/Testimonial";

const Home = () => {
  return (
    <section style={{width: "100%",overflowX: "hidden"}}>
      <Hero/>
      <LiveProjects/>
      <DesignProcess/>
      <Blog/>
      <Testimonial/>
      <AboutMe/>
      <Tools/>
    </section>
  )
}

export default Home