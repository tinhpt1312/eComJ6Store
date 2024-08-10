import React from "react";
import PropTypes from "prop-types";
import Category from "./Category";

CategoryList.propTypes = {
  data: PropTypes.array,
};

function CategoryList({ data }) {
  return (
    <div>
      {data.map((category) => (
        <div key={category.id}>
          <div className="">
            <Category category={category} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
