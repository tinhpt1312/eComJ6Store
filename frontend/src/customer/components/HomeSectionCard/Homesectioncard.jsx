import React from "react";

const Homesectioncard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full"
          src="https://media3.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85/uploads/March2023/blue_copy.jpg"
          alt=""
        />
      </div>

      <div className="p-4 mt-5">
        <h3 className="text-lg font-medium text-gray-900">Áo thun nam</h3>
        <p className="text-sm text-gray-500 mt-2">Áo thun nam Cotton Compact</p>
      </div>
    </div>
  );
};

export default Homesectioncard;
