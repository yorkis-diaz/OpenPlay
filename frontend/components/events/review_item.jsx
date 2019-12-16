import React from "react";
import { Link } from "react-router-dom";

const ReviewItem = ({ review }) => {
  return (
    <li key={review.id}>
        {review.body}
    </li>
  );
};
export default ReviewItem;
