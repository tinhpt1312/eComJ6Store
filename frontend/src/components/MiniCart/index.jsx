import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hideMiniCart, removeFromCart } from "../../features/Cart/cartSlice";
import { cartTotalSelector } from "../../features/Cart/selectors";

const CartItem = ({ item, onRemove }) => (
  <li key={item.id} className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
      <img
        alt={item.product.name}
        src={require(`../../assets/image/product/${item.product.image}`)}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="ml-4 flex flex-1 flex-col">
      <div className="flex justify-between text-sm font-medium text-gray-900">
        <span>{item.product.name}</span>
        <p className="ml-4">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.product.price)}
        </p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-gray-500">Qty {item.quantity}</p>
        <div className="flex">
          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </li>
);

const MiniCartFeatures = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const total = useSelector(cartTotalSelector);
  const formattedTotal = isNaN(total) ? 0 : total;
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    dispatch(hideMiniCart());
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-8">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                          <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemove}
                          />
                        ))
                      ) : (
                        <p className="text-center text-gray-500">
                          Your cart is empty
                        </p>
                      )}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(formattedTotal)}
                    </p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link
                      to="/cart"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={handleClose}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MiniCartFeatures;
