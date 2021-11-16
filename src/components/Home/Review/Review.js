import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="testimonial">
      <h1 className="text-center py-2 ">Our Client Say</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reviews.map(({ image, description, name, reveiw, _id }) => (
            <div className="col" key={_id}>
              <div className="card h-100">
                <img src={image} className="d-block" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">{name}</h5>

                  <p className="card-text">{description.slice(0, 150)}</p>
                  {/* display the ratting */}
                  <div className="testimonial-icon">
                    <Rating
                      initialRating={reveiw}
                      emptySymbol="far fa-star"
                      fullSymbol="fas fa-star"
                      readonly
                    ></Rating>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
