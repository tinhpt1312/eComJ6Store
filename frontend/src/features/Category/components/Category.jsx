import React from "react";
import PropTypes from "prop-types";

const images = require.context("../../../assets/image/product", true);

Category.propTypes = {
  category: PropTypes.object,
};

function Category({ category }) {
  const imageSrc = images(`./${category.image}`);

  return (
    <div className="">
      <div className="p-1 shadow-md min-h-[321px] hover:opacity-75 rounded-lg">
        <div className="p-1 min-h-[215px] flex justify-center">
          <img src={imageSrc} alt={category.name} className="w-3/4" />
        </div>
      </div>
      <p className="ml-7 text-lg font-bold mt-3">{category.name}</p>
    </div>
  );
}

export default Category;
