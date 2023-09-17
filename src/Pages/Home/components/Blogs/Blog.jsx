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
      link: "https://medium.com/@zubiduru/how-to-use-auto-layout-in-figma-2224832fa36e",
      date: "June 19, 2022 .",
      title: "How to use Auto-layout in Figma",
      duration: 3,
    },
    {
      id: 2,
      link: "https://medium.com/@zubiduru/ux-study-improving-user-experience-in-the-bathroom-a726488f64bf",
      date: "June 13, 2022 .",
      title: "How to improve user experience in the bathroom",
      duration: 3,
    },
    {
      id: 3,
      link: "https://medium.com/@zubiduru/absolute-positioning-in-figma-12eb11fae077",
      date: "September 17, 2022 .",
      title: "Absolute Positioning in Figma",
      duration: 3,
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
            <a href={post.link} target="_blank">
              <div className="blog_card">
                <div className="mobile_link">
                  <img src={MobileLink} alt="link" />
                </div>
                <div className="card_content">
                  <div className="left_blog_card">
                    <div className="blog_card_header">
                      {/* <div className="link">
                        <p>{post.link}</p>
                        <img src={LinkImage} alt="link" />
                      </div> */}
                      <div className="date">
                        <p> {post.date}</p>
                      </div>
                    </div>
                    <h1>{post.title.slice(0, 35)}...</h1>
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
          <h1>Blogs</h1>
          <p>
            I also contribute to renowned blogs such as OpenReplay and Medium.
            Here are some of my published articles:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
