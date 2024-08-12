import React from "react";
import PropTypes from "prop-types";

AddtoCartButton.propTypes = {};

function AddtoCartButton({ quantity, setQuantity, onAddToCart }) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-4 mb-4">
        <label htmlFor="quantity" className="text-lg font-medium text-gray-700">
          Số lượng:
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-20 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={onAddToCart}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddtoCartButton;
