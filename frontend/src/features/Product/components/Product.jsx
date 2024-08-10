import React from "react";
import PropTypes from "prop-types";

Product.propTypes = {
  product: PropTypes.object,
};
const images = require.context("../../../assets/image/product", true);

function Product({ product }) {
  const imageSrc = images(`./${product.image}`);

  return (
    <div className="p-1 shadow-xl min-h-[480px] hover:opacity-75">
      <div className="p-1 min-h-[215px] ">
        <img src={imageSrc} alt={product.name} className="w-full" />
      </div>

      <p className="text-md ml-7">{product.name}</p>
      <p className="ml-7 mt-2">
        <span className="text-lg font-bold">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.price)}
        </span>
      </p>
    </div>
  );
}

export default Product;
