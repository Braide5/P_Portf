import { useState } from "react";

// stylesheet
import "./style/Blogs.scss";

// Navlink
import { NavLink } from "react-router-dom";

// images
import ClockImage from "./images/Clock.png";
import MobileLink from "./images/arrow-left.png";
import Arrow from "./images/Arrow.svg";
import LInkIcon from "./images/Link.png";
import disabledBackwardIcon from "./images/disabledBackward.svg";
import BackwardIcon from "./images/Backward.svg";
import ForwardIcon from "./images/Forward.svg";
import PointImage from "./images/points1.svg";
import BlogImage1 from "./images/Blog1.jpg";
import BlogImage2 from "./images/Blog2.jpg";
import BlogImage3 from "./images/Blog3.jpg";
import BlogImage4 from "./images/Blog4.jpg";
import BlogImage5 from "./images/Blog5.jpg";
import BlogImage6 from "./images/Blog6.jpg";

const Blog = () => {

  const [backwardIcon,setBackwardIcon] = useState(disabledBackwardIcon);
  const [disableButton,setDisableButton] = useState(true);

  const blogPost = [
    {
      id: 1,
      link: "https://blog.openreplay.com/authors/azubuike-duru/",
      date: "Nov 9, 2023 .",
      title: "From Figma to Code-3 Plugins",
      blog: "Openrepaly.me.com",
      image: BlogImage1,
      duration: 11,
    },
    {
      id: 2,
      link: "https://azubuike.hashnode.dev/how-to-create-client-side-form-modal-and-validate-it-using-javascript",
      date: "Jan 6, 2022 .",
      title: "Form Validate with Javascript",
      blog: "Hashnode.com",
      image: BlogImage2,
      duration: 4,
    },
    {
      id: 3,
      link: "https://medium.com/design-bootcamp/my-whiteboard-interview-was-horrible-learn-from-it-5c00b2246ed5",
      date: "December 11, 2023 .",
      title: "My Horrible Whiteboard Interview",
      blog: "Medium.com",
      image: BlogImage3,
      duration: 4,
    },
    {
      id: 4,
      link: "https://dev.to/azubuikeduru/choosing-between-css-transition-and-animation-a-ux-perspective-2n0f",
      date: "December 17, 2024.",
      title: "UX Choice: Transition VS Animation",
      blog: "Dev.to",
      image: BlogImage4,
      duration: 5,
    },
    {
      id: 5,
      link: "https://medium.com/@zubiduru/beginner-approach-to-variants-in-figma-2c298ddf58b4",
      date: "June 17, 2022 .",
      title: "Beginner Approach: Figma Variants",
      blog: "Medium.com",
      image: BlogImage5,
      duration: 4,
    },
    {
      id: 6,
      link: "https://medium.com/@zubiduru/ux-study-improving-user-experience-in-the-bathroom-a726488f64bf",
      date: "July 13, 2022 .",
      title: "UX Case: Improving UX in Bathroom",
      blog: "Medium.com",
      image: BlogImage6,
      duration: 4,
    },
  ];

  const [displayedPosts, setDisplayedPosts] = useState(blogPost.slice(0, 3));

  // view more blogs
  const handleViewNextThree = () => {
    setDisplayedPosts(blogPost.slice(3));
    if (blogPost.length > 0) {
      setBackwardIcon(BackwardIcon);
      setDisableButton(false);
    }
  };

  const handleViewLastThree = () => {
    setDisplayedPosts(blogPost.slice(0, 3));
    setBackwardIcon(disabledBackwardIcon);
    setDisableButton(true);
  };

  return (
    <section className="blog" id="blog">
      <div className="mobile_header">
        <h1>Blogs</h1>
      </div>
      <div className="inner_blog">
        <div className="left_blog">
          {displayedPosts.map((post) => (
            <NavLink to={post.link} target="_blank" key={post.id}>
              <div className="blog_card">
                <div className="mobile_link">
                  <img src={MobileLink} alt="link" />
                </div>
                <div className="card_content">
                  <div className="left_blog_card">
                    <div className="blog_card_header">
                      <div className="link">
                        <p>{post.blog}</p>
                        <img src={LInkIcon} alt="Link" />
                      </div>
                      <div className="date">
                        <p>| {post.date}</p>
                      </div>
                    </div>
                    <h1>{post.title.slice(0, 30)}...</h1>
                    <div className="blog_card_bottom">
                      <div className="time">
                        <img src={ClockImage} alt="time" />
                        <p>{post.duration}min. read</p>
                      </div>
                    </div>
                  </div>
                  <div className="right_blog_card">
                    <img src={post.image} alt="Blog Image" />
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="right_blog">
          <span>Get in Touch</span>
          <h1>Blogs</h1>
          <p>
            I also contribute to renowned blogs such as OpenReplay and Medium.
            Here are some of my published articles:
          </p>
          <div className="view-more-blogs">
            <div className="more-projects-buttons">
              <div className="backward">
                <button onClick={handleViewLastThree} disabled={disableButton}>
                  <img src={backwardIcon} alt="Backward" />
                </button>
              </div>
              <div className="forward">
                <button onClick={handleViewNextThree}>
                  <img src={ForwardIcon} alt="Forward" />
                </button>
              </div>
            </div>
            <img src={PointImage} alt="point" />
          </div>
        </div>
      </div>
        <div className="mobile-blog-see-more">
          <button onClick={handleViewLastThree}>
            <img src={backwardIcon} alt="Backward" />
          </button>
          <button onClick={handleViewNextThree}>
            <img src={ForwardIcon} alt="Forward" />
          </button>
        </div>
    </section>
  );
};

export default Blog;
