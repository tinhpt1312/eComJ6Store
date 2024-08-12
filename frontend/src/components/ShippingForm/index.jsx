import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setShippingInfo } from "../../features/Cart/cartSlice";

function ShippingForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    dispatch(setShippingInfo(data));
    reset();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shipping Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            // {...register("name", { required: "Name is required" })}
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
          {/* {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>} */}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            {...register("address", { required: "Address is required" })}
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
          {/* {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>} */}
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Information
        </button>
      </form>
    </div>
  );
}

export default ShippingForm;
