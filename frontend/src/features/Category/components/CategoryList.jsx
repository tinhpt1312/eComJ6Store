import PropTypes from "prop-types";
import React from "react";

const images = require.context("../../../assets/image/product", true);

CategoryList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

function CategoryList({ data, onSelectCategory }) {
  return (
    <div className="grid bg-white">
      {data.map((category) => (
        <button
          key={category.id}
          className="p-3 bg-white shadow-sm hover:bg-gray-200"
          onClick={() => onSelectCategory(category.id)}
        >
          <p className="ml-7 text-start text-sm font-semibold">
            {category.name}
          </p>
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
