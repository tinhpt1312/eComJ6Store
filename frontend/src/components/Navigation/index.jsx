import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { hideMiniCart, showMiniCart } from "../../features/Cart/cartSlice";
import MiniCartFeatures from "../MiniCart";
import { cartItemsCountSelector } from "../../features/Cart/selectors";

Navigation.propTypes = {};

function Navigation(props) {
  const [isMiniCartVisible, setMiniCartVisible] = useState(false);
  const cartQuantity = useSelector(cartItemsCountSelector);
  const dispatch = useDispatch();

  const toggleMiniCart = () => {
    setMiniCartVisible(!isMiniCartVisible);
    if (!isMiniCartVisible) {
      dispatch(showMiniCart());
    } else {
      dispatch(hideMiniCart());
    }
  };
  return (
    <nav className="bg-blue-500 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">ElectroEdge</Link>
        </div>
        <ul className="flex justify-center space-x-20">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-gray-300 font-bold"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="text-white hover:text-gray-300 font-bold"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white hover:text-gray-300 font-bold">
              Profile
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button onClick={toggleMiniCart} className="relative">
            <ShoppingCartIcon className="w-6 h-6 text-white hover:text-gray-300" />
            {cartQuantity > 0 && (
              <span className="absolute top-[-10px] right-[-10px] bg-red-600 text-white text-xs rounded-full px-2 py-1">
                {cartQuantity}
              </span>
            )}
          </button>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 font-bold"
          >
            Login
          </Link>
        </div>
        {isMiniCartVisible && <MiniCartFeatures />}
      </div>
    </nav>
  );
}

export default Navigation;
