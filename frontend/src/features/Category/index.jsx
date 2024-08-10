import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "./page/ListPage";

CategoryFeatures.propTypes = {};

function CategoryFeatures(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default CategoryFeatures;
