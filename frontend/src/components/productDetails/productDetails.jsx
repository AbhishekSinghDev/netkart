import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { product_id } = useParams();

  const product = {
    id: product_id,
    name: "Example Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 49.99,
    imageUrl: "https://via.placeholder.com/300",
  };

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log("Product added to cart:", product);
  };

  const handleBuyNow = () => {
    // Logic for buy now action (redirect to checkout, etc.)
    console.log("Buy now:", product);
  };

  return (
    <div className="container mx-auto my-8 h-[60vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto rounded-lg mb-4"
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
