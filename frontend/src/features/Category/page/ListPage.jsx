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
    <div>
      <CategoryList data={category} />
    </div>
  );
}

export default ListPage;
