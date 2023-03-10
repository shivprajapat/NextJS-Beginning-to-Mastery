import React from "react";
import { useRouter } from "next/router";

const productDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1>Product Details : {productId}</h1>;
};

export default productDetails;
