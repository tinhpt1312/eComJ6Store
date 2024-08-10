import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";

ListPage.propTypes = {};

function ListPage() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await productApi.getAll().then((data) => {
          setProductList(data);
        });
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="mt-6">
        <h1 className="text-2xl ml-10 font-bold mb-4">Product List</h1>
        <ProductList data={productList} />
      </div>
    </div>
  );
}

export default ListPage;
