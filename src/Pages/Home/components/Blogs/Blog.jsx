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
import PointImage from "./images/points1.svg";
import BlogImage1 from "./images/Blog1.jpg";
import BlogImage2 from "./images/Blog2.jpg";
import BlogImage3 from "./images/Blog3.jpg";

const Blog = () => {
  const [blogPost, setBlogPost] = useState([
    {
      id: 1,
      link: "https://blog.openreplay.com/three-plugins-to-convert-your-figma-designs-into-code/",
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
  ]);
  return (
    <section className="blog" id="blog">
      <div className="mobile_header">
        <h1>Blogs</h1>
      </div>
      <div className="inner_blog">
        <div className="left_blog">
          {blogPost.map((post) => (
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
            <NavLink to="https://medium.com/@zubiduru">
              <button>View more Blogs</button>
            </NavLink>
            <img src={PointImage} alt="point" />
          </div>
        </div>
      </div>
        <NavLink
          to="https://www.behance.net/azubuikeduru"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="mobile-blog-see-more">
            <p>See More</p>
            <img src={Arrow} alt="Arrow" />
          </div>
        </NavLink>
    </section>
  );
};

export default Blog;
