import React from "react";
import { useRouter } from "next/router";

const ReviewDetails = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <div>
      <h1>Review ID : {reviewId}</h1>
      <h1>Product ID : {productId}</h1>
    </div>
  );
};

export default ReviewDetails;
