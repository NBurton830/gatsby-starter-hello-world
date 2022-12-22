import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews, onRemove }) => {
  return (
    <div className="review-list">
      {reviews.map((review) => (
        <Review key={review.createdAt} review={review} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default ReviewList;