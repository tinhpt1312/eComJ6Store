import PropTypes from "prop-types";
import React from "react";
import Product from "./Product";

ProductList.propTypes = {
  data: PropTypes.array,
};

function ProductList({ data }) {
  return (
    <div className="flex flex-wrap -mx-1">
      {data.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
          <div className="p-1">
            <Product product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
