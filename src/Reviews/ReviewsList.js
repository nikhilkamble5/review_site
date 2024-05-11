// ReviewsList.js
import React from "react";

function ReviewsList({ reviews, deleteReview }) {
  return (
    <ul className="reviews-list">
      {reviews.map((review, index) => (
        <li key={index} className="review-item">
          <div>
            <strong>{review.title}</strong>
            <span>Rating: {review.rating}</span>
          </div>
          {review.description && <p>{review.description}</p>}
          <button onClick={() => deleteReview(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
