import React from 'react';
import { Icon } from 'react-materialize';

const Review = ({ review, onRemove }) => {
  return (
    <div className="review">
      <div className="review-rating">
        {/* Display star rating */}
        {Array(review.stars)
          .fill()
          .map((_, i) => (
            <Icon key={i}>star</Icon>
          ))}
      </div>
      <div className="review-details">
        <div className="review-user">{review.user}</div>
        <div className="review-content">{review.content}</div>
        <div className="review-date">{review.createdAt}</div>
      </div>
      <div className="review-remove">
        {/* Display remove icon that calls onRemove when clicked */}
        <Icon onClick={() => onRemove(review.createdAt)}>X</Icon>
        
      </div>
    </div>
  );
};

export default Review;