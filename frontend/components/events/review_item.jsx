import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = ({ review, reviewer }) => {
  debugger
  return (
    <li key={review.id} className="review-item">
      <div className="reviewer-info">
        {reviewer.firstname[0]}
        {reviewer.lastname[0]}
        <p>
          {reviewer.firstname}
          {reviewer.lastname[0]}
        </p>
      </div>
      <article className="review-content">
        {review.body}
      </article>
    </li>
  );
};
export default ReviewItem;
