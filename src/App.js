// // App.js
// import React, { useState } from 'react';
// // import GiveReviewForm from './components/GiveReview/GiveReviewForm';
// // import ReviewsList from './components/ReviewsList';
// import './index.css';
// import ReviewsList from './Reviews/ReviewsList';
// import GiveReviewForm from './components/GiveReview/GiveReviewForm';

// function App() {
//   const [reviews, setReviews] = useState([]);

//   const addReview = (review) => {
//     setReviews([...reviews, review]);
//   };

//   const deleteReview = (index) => {
//     const updatedReviews = [...reviews];
//     updatedReviews.splice(index, 1);
//     setReviews(updatedReviews);
//   };

//   return (
//     <div className="app">
//       <div className="give-review-section">
//         <h2>Give Review</h2>
//         <GiveReviewForm addReview={addReview} />
//       </div>
//       <div className="reviews-section">
//         <h2>Reviews</h2>
//         <ReviewsList reviews={reviews} deleteReview={deleteReview} />
//       </div>
//     </div>
//   );
// }

// export default App;


//Ecommerse product
import React from "react";
const App = () => {
  return (
    <>
     
    <div className="cotainer-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="bg-dark p-4 my-3 fw-bold text-light">Ecommerse</h1>
        </div>

        <div className="col-md-12">
          <div className="row">


            <div className="col-md-4">

          <div className="card">
            <div className="card-header"></div>
            <div className="card-body">
              <img src="" alt="" />
            </div>
            <div className="card-footer">
              <h1 className="">Laptop</h1>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default App