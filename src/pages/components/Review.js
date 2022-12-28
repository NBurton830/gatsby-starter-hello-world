import React from 'react';

const Review = ({ review, onRemove }) => {
  return (
    <div className="review">
      <div className="review-rating">
        {/* Display star rating */}
        {Array(review.stars)
          .fill()
          .map((_, i) => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={
              {width: '1em', height: '1em', color: '#FFC107'} 
            }>
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>

          ))}
      </div>
      <div className="review-details" style={
            {
              marginBottom: '16px',
            }
          }>
        <div className="review-user">{review.user}</div>
        <div className="review-content" style={
          {display: 'flex', flexdirection: 'row'}
        }>
          <p style={
            {
              margin: '0px',
            }
          }>{review.content}</p>
          <div className="review-remove" style={{ display: "inline-block" }} onClick={() => onRemove(review.createdAt)} >
            {/* Display remove icon that calls onRemove when clicked */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ width: "1em", height: "1em", color: "#FFC107" }}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="review-date" >
          {review.createdAt}
        </div>
      </div>
    </div>
  );
};

export default Review;