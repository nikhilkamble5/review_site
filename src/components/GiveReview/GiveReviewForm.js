// // GiveReviewForm.js
// import React, { useState } from 'react';

// function GiveReviewForm({ addReview }) {
//   const [title, setTitle] = useState('');
//   const [rating, setRating] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !rating) return;
//     addReview({ title, rating, description });
//     setTitle('');
//     setRating('');
//     setDescription('');
//   };

//   const handleReset = () => {
//     setTitle('');
//     setRating('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="review-form">
//       <div className="form-group">
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Rating:</label>
//         <input
//           type="number"
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Description:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div className="form-buttons">
//         <button type="submit">Submit</button>
//         <button type="button" onClick={handleReset}>Reset</button>
//       </div>
//     </form>
//   );
// }

// export default GiveReviewForm;
// import React, { useState } from "react";
// function GiveReviewForm({ addReview }) {
//   const [title, setTitle] = useState("");
//   const [rating, setRating] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !rating) return;
//     addReview({ title, rating, description });
//     setTitle("");
//     setDescription("");
//   };

//   const handleReset = () => {
//     setTitle("");
//     setRating("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="review-form">
//       <div className="form-group">
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Rating:</label>
//         <div>
//           {[1, 2, 3, 4, 5].map((star, index) => (
//             <span
//               key={index}
//               className={index < rating ? "star filled" : "star"}
//               onClick={() => setRating(index + 1)}
//             >
//               &#9733; {/* Unicode for star */}
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="form-group">
//         <label>Description:</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//       </div>
//       <div className="form-buttons">
//         <button type="submit">Submit</button>
//         <button type="button" onClick={handleReset}>
//           Reset
//         </button>
//       </div>
//     </form>
//   );
// }

// export default GiveReviewForm;



// import React, { useState } from "react";

// const GiveReviewForm = ({ addReview }) => {
//   const [title, setTitle] = useState('');
//   const [rating, setRating] = useState(0); // Initialize rating state to 0
//   const [description, setDescription] = useState('');

//   const handleStarClick = (newRating) => {
//     // Update the rating state when a star is clicked
//     setRating(newRating);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !rating) return;
//     addReview({ title, rating, description });
//     setTitle('');
//     setRating(0); // Reset rating state after submitting review
//     setDescription('');
//   };

//   const handleReset = () => {
//     setTitle('');
//     setRating(0); // Reset rating state when the form is reset
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="review-form p-4">
//       <div className="mb-3">
//         <label htmlFor="title" className="form-label">Title:</label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label className="form-label">Rating:</label>
//         {/* Render star icons for rating */}
//         {[...Array(5)].map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             className={`btn btn-outline-warning star ${index < rating ? 'filled' : ''}`}
//             onClick={() => handleStarClick(index + 1)}
//           >
//             &#9733; {/* Unicode for star */}
//           </button>
//         ))}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="description" className="form-label">Description:</label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <button type="submit" className="btn btn-primary me-2">Submit</button>
//         <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button>
//       </div>
//     </form>
//   );
// };

// export default GiveReviewForm;

// *************************🔥🔥

import React, { useState } from "react";

const GiveReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0); // Initialize rating state to 0
  const [description, setDescription] = useState('');

  const handleStarClick = (newRating) => {
    // Update the rating state when a star is clicked
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;
    addReview({ title, rating, description });
    setTitle('');
    setRating(0); // Reset rating state after submitting review
    setDescription('');
  };

  const handleReset = () => {
    setTitle('');
    setRating(0); // Reset rating state when the form is reset
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Rating:</label>
        {/* Render star icons for rating */}
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`btn btn-outline-warning star ${index < rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(index + 1)}
          >
            &#9733; {/* Unicode for star */}
          </button>
        ))}
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-buttons">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" onClick={handleReset} className="btn btn-secondary">Reset</button>
      </div>
    </form>
  );
};

export default GiveReviewForm;
