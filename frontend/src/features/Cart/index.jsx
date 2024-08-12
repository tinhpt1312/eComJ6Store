import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  setPaymentMethod,
} from "../../features/Cart/cartSlice";

function CartFeatures(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shippingInfo = useSelector((state) => state.cart.shippingInfo);
  const paymentMethod = useSelector((state) => state.cart.paymentMethod);

  const handlePaymentMethodChange = (method) => {
    dispatch(setPaymentMethod(method));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleRemoveAll = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Cart Features</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Products in Cart</h2>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center mb-4 border-b pb-4 last:border-b-0"
              >
                <img
                  src={require(`../../assets/image/product/${item.product.image}`)}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded-md border border-gray-200 mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-lg font-semibold">
                    Price:{" "}
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.product.price)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="mt-2 text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </ul>
        <button
          onClick={handleRemoveAll}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
        >
          Remove All
        </button>
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 mt-6 pt-4">
            <div className="flex justify-between text-lg font-semibold">
              <p>Total:</p>
              <p>
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(
                  cartItems.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                  )
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartFeatures;
