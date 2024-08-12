import React from "react";

function ProductInfo({ product }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl font-semibold text-gray-800 mb-4">
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.price)}
      </p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-md text-gray-700 mb-4">
        {product.category ? product.category.name : "N/A"}
      </p>
    </>
  );
}

export default ProductInfo;
