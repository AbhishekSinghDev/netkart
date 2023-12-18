import React from "react";

const OrderSuccessfull = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Thank You!
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            Your purchase was successful. We've received your order.
          </p>
          <div className="flex justify-center">
            <a
              href="/"
              className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 hover:bg-blue-600"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccessfull;
