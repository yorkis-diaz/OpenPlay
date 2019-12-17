import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = ({ review, reviewer, event }) => {
  debugger
  return (
    <li key={review.id} className="review-item">
      <div className="reviewer-info">
        <div className="review-item-name-circle">
          {reviewer.firstname[0]}
          {reviewer.lastname[0]}
        </div>
        <p className="reviewer-area">{event.event_city} Area</p>
        <p>
          {reviewer.firstname}
          {reviewer.lastname[0]}
        </p>
      </div>
      <section className="review-content">
        <article>
          {review.body}
        </article>
      </section>
      
    </li>
  );
};
export default ReviewItem;
