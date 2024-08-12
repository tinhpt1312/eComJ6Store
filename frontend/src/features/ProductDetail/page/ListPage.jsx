import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import productApi from "../../../api/productApi";
import AddtoCartButton from "../../../components/AddtoCartButton";
import ProductInfo from "../../../components/ProductInfo";
import { addToCart } from "../../Cart/cartSlice";

ListPage.propTypes = {};

function ListPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resp = await productApi.get(id);
        setProduct(resp);
      } catch (error) {
        console.error("Failed to fetch product details: ", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = useCallback(() => {
    const newItem = {
      id: product.id,
      product,
      quantity: quantity,
    };
    dispatch(addToCart(newItem));
  }, [product, quantity, dispatch]);

  if (!product) return <div>Loading...</div>;
  return (
    <div className="container mx-auto p-5 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img
            src={require(`../../../assets/image/product/${product.image}`)}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <ProductInfo product={product} />
          <AddtoCartButton
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default ListPage;
