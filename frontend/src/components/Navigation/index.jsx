import React from "react";
import { Link, NavLink } from "react-router-dom";

Navigation.propTypes = {};

function Navigation(props) {
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
        <div>
          <a href="#login" className="text-white hover:text-gray-300 font-bold">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
