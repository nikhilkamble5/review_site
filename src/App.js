// App.js
import React, { useState } from 'react';
// import GiveReviewForm from './components/GiveReview/GiveReviewForm';
// import ReviewsList from './components/ReviewsList';
import './index.css';
import ReviewsList from './Reviews/ReviewsList';
import GiveReviewForm from './components/GiveReview/GiveReviewForm';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const deleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className="app">
      <div className="give-review-section">
        <h2>Give Review</h2>
        <GiveReviewForm addReview={addReview} />
      </div>
      <div className="reviews-section">
        <h2>Reviews</h2>
        <ReviewsList reviews={reviews} deleteReview={deleteReview} />
      </div>
    </div>
  );
}

export default App;
