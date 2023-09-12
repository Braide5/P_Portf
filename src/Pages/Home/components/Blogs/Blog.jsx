import { useState } from "react";

// stylesheet
import "./style/Blogs.scss";

// images
import LinkImage from "./images/Link.png";
import ClockImage from "./images/Clock.png";
import BlogImage from "./images/BlogImage.png";
import MobileLink from "./images/arrow-left.png";

const Blog = () => {
  const [blogPost, setBlogPost] = useState([
    {
      id: 1,
      link: "Openrepaly.me.come",
      date: "September 17, 2022 .",
      title: "Auto-layout & Absolute Positioning",
      duration: 4,
    },
    {
      id: 1,
      link: "Openrepaly.me.come",
      date: "September 17, 2022 .",
      title: "Auto-layout & Absolute Positioning",
      duration: 4,
    },
    {
      id: 1,
      link: "Openrepaly.me.come",
      date: "September 17, 2022 .",
      title: "Auto-layout & Absolute Positioning",
      duration: 4,
    },
  ]);
  return (
    <section className="blog">
      <div className="mobile_header">
        <h1>Blogs</h1>
      </div>
      <div className="inner_blog">
        <div className="left_blog">
          {blogPost.map((post) => (
            <a href="" target="_blank">
              <div className="blog_card">
                <div className="mobile_link">
                  <img src={MobileLink} alt="link" />
                </div>
                <div className="card_content">
                  <div className="left_blog_card">
                    <div className="blog_card_header">
                      <div className="link">
                        <p>{post.link}</p>
                        <img src={LinkImage} alt="link" />
                      </div>
                      <div className="date">
                        <p>| {post.date}</p>
                      </div>
                    </div>
                    <h1>{post.title}</h1>
                    <div className="blog_card_bottom">
                      <button>View</button>
                      <div className="time">
                        <img src={ClockImage} alt="time" />
                        <p>{post.duration}min. read</p>
                      </div>
                    </div>
                  </div>
                  <div className="right_blog_card">
                    <img src={BlogImage} alt="Blog Image" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="right_blog">
          <h6>Get in Touch</h6>
          <h1>Blogs</h1>
          <p>
            I’m a skilled full stack web developer in Nigeria, with over 3 years
            of experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
