import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import categoryApi from "../../../api/categoryApi";
import CategoryList from "../../Category/components/CategoryList";

ListPage.propTypes = {};

function ListPage() {
  const [productList, setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const data = await categoryApi.getAll();
        setCategoryList(data);
      } catch (error) {
        console.log("Failed to fetch category list: ", error);
      }
    };

    fetchCategoryList();
  }, []);

  useEffect(() => {
    const fetchProductListByCategory = async () => {
      try {
        if (selectedCategory) {
          const data = await productApi.getByCategoryId(selectedCategory);
          setProductList(data);
        } else {
          const data = await productApi.getAll();
          setProductList(data);
        }
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };

    fetchProductListByCategory();
  }, [selectedCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="container mx-auto">
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cột bên trái: Category */}
        <div className="mb-10 col-span-1 ">
          <h1 className="text-2xl font-bold mb-4">Filters</h1>
          <CategoryList
            data={categoryList}
            onSelectCategory={handleCategorySelect}
          />
          <hr className="mt-10 border-t-2 border-gray-900" />
        </div>

        {/* Cột bên phải: Product List */}
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-4">Product List</h1>
          <ProductList data={productList} />
        </div>
      </div>
    </div>
  );
}

export default ListPage;
