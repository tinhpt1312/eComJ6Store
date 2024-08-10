import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "./page/ListPage";

ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default ProductFeatures;
