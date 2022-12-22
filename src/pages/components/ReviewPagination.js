import React from 'react';

const ReviewPagination = ({ page, onChangePage }) => {
  return (
    <div className="review-pagination">
        <button onClick={() => onChangePage(page - 1)}>Previous</button>
        <span>{page}</span>
        <button onClick={() => onChangePage(page + 1)}>Next</button>
    </div>
  );
};

export default ReviewPagination;