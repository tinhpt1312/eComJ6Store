import categoryApi from "../../../api/categoryApi";
import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

ListPage.propTypes = {};

function ListPage() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await categoryApi.getAll().then((data) => {
          setCategory(data);
        });
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div className="">
        <h1 className="text-2xl ml-10 font-bold mb-4">Category</h1>
        <CategoryList data={category} />
        <hr className="mt-10 border-t-2 border-gray-900" />
      </div>
    </div>
  );
}

export default ListPage;
