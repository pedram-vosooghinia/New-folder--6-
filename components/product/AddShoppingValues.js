import React, { useState } from "react";

const AddShoppingValues = ({ validationValue }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (quantity < validationValue) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" flex items-center justify-between mx-8">
      <button
        className="bg-pedram-1 text-white px-4 py-2 rounded-md hover:bg-pedram-2 focus:outline-none"
        onClick={increaseQuantity}
      >
        +
      </button>
      <span className="text-gray-700 text-xl">{quantity}</span>
      <button
        className="bg-pedram-1 text-white px-4 py-2 rounded-md hover:bg-pedram-2 focus:outline-none"
        onClick={decreaseQuantity}
      >
        -
      </button>
    </div>
  );
};

export default AddShoppingValues;
