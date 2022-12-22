import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import ReviewPagination from './ReviewPagination';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchReviews = async () => {
      // Fetch reviews for the product from TrustPilot API
      const response = await fetch(
        `https://api.trustpilot.com/v1/product-reviews/business-units/5c7f7934871dac0001ea00e8/imported-reviews?apikey=CqEzUGVIW4WAeLo5G7ZTquxrArq3K8Q7&sku=1694,1976,150,10993,151,130&perPage=5&page=1`
      );
      const data = await response.json();
      console.log(data);
      setReviews(data.productReviews);
    };
    fetchReviews();
  }, [productId]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    // Fetch reviews for the new page from TrustPilot API
    // Note: This is a simplified example and does not include error handling or loading indicators
    fetch(
        `https://api.trustpilot.com/v1/product-reviews/business-units/5c7f7934871dac0001ea00e8/imported-reviews?apikey=CqEzUGVIW4WAeLo5G7ZTquxrArq3K8Q7&sku=1694,1976,150,10993,151,130&page=${newPage}&perPage=5`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setReviews(data.productReviews);
      });
  };

  const handleRemove = (reviewId) => {
    // Remove the review from the list (note: this does not remove the review from TrustPilot)
    setReviews(reviews.filter((review) => review.createdAt !== reviewId));
  };

  return (
    <div className="reviews">
        <ReviewList reviews={reviews} onRemove={handleRemove} />
        <ReviewPagination
            page={page}
            onChangePage={handleChangePage}
        />
    </div>
  );
};

export default Reviews;