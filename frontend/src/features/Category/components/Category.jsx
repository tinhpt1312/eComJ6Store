import React from "react";
import PropTypes from "prop-types";

const images = require.context("../../../assets/image/product", true);

Category.propTypes = {
  category: PropTypes.object,
};

function Category({ category }) {
  const imageSrc = images(`./${category.image}`);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-8">
        <div className="mt-6 space-y-12 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 xl:aspect-h-1 xl:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img
                alt={category.name}
                src={imageSrc}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="text-base font-semibold text-gray-900">
              {category.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
