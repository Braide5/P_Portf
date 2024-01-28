import { useState, useEffect } from "react";

// stylesheet
import "./style/Testimonial.scss";

// images
import QuoteIcon from "./images/Quotes.svg";
import Point1 from "./images/points1.svg";
import Point2 from "./images/points2.svg";
import Point3 from "./images/points3.svg";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      author: "Miracleio",
      occupation: "Web Developer",
      workPlace: "Meghee",
      testimony:
        "Working with Azubuike is a joy. His designs are not only stunning but also developer-friendly. The clear communication and attention to detail make collaboration seamless",
      point: Point1,
    },
    {
      id: 2,
      author: "Mr Uche",
      occupation: "Product Manager",
      workPlace: "Decrysolite Tech",
      testimony:
        "Azubuike Patrick is a vital part of our team. His designs enhance user experience, showing a deep understanding of our users. Timely delivery and adaptability to feedback contribute significantly to our project successes.",
      point: Point2,
    },
    {
      id: 3,
      author: "Efe",
      occupation: "Designer",
      workPlace: "Devsyners",
      testimony:
        "Azubuike is a creative force. His diverse portfolio showcases thoughtful solutions. Collaborative and inspiring, they bring a unique perspective to every project. A pleasure to work with.",
      point: Point3,
    },
  ];

  // To move to the next slider
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
      console.log("worked!");
    }

    setCurrentIndex(newIndex);
  };

  // Auto change
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call updateIndex to move to the next slider every 3 seconds
      updateIndex(currentIndex + 1);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="testimonial">
      <div className="inner-testimonial">
        <div className="testimonial-cards">
          {testimonials.map((testimonial) => (
            <div
              className="testimonial-card"
              key={testimonial.id}
              style={{ transform: `translate(-${currentIndex * 104}%)` }}
            >
              <div className="testimonial-card-header">
                <div className="left-testimonial-card-header">
                  <h3>{testimonial.author}</h3>
                  <p>
                    {testimonial.occupation} @ {testimonial.workPlace}
                  </p>
                </div>
                <div className="right-testimonial-card-header">
                  <img src={QuoteIcon} alt="Quote" />
                </div>
              </div>
              <div className="testimonial-card-body">
                <div className="left-testimonial-card-body">
                  <p>{testimonial.testimony}</p>
                </div>
                <div className="right-testimonial-card-body">
                  <button onClick={() => updateIndex(currentIndex + 1)}>
                    <img src={testimonial.point} alt="Point" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
