import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axiosInstance";

import { useNavigate } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  let { product_id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      const { data } = await axiosInstance.get(
        `/api/v1/products/single/?id=${product_id}`
      );
      // console.log(data);
      setProductDetail(data.product);
    };

    fetchDetail();
  }, [product_id]);

  const product = {
    id: product_id,
    name: productDetail.name,
    description: productDetail.desc,
    price: productDetail.price,
    imageUrl: productDetail.image,
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    // console.log("Product added to cart:", product);

    addToCart(product);
  };

  const handleBuyNow = async () => {
    // Logic for buy now action (redirect to checkout, etc.)
    let user_token = localStorage.getItem("access_token");
    user_token = user_token.replace('"', "");
    user_token = user_token.replace('"', "");

    const config = {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    };
    const body = {
      product_id: product.id,
      price: product.price,
      quantity: 1,
    };
    await axiosInstance.post("/api/v1/order", body, config);

    navigate("/order-successfull");
  };

  return (
    <div className="container mx-auto py-[50vh] my-[300px] h-[60vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-[300px] h-[400px] p-12">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-auto h-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:ml-6">
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-800 text-xl font-bold mb-4">
              ${product.price}
            </p>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
