"use client";

import { BsCart3 } from "react-icons/bs";
import { MouseEvent, useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { CART, Product } from "../@types/interface";

const AddToCartBtn = ({ product }: { product: Product }) => {
  const [num, setNum] = useState(0);
  const increment = () => {
    setNum((prev) => prev + 1);
  }
  const decrement = () => {
    if (num > 0) setNum((prev) => prev - 1);
  };
  const { cart, handleAddToCart } = useContext(CartContext) as CART;

  return (
    <div onClick={e => e.preventDefault()} className="w-full grid gap-1 md:flex">
      <div className="w-full h-12 flex items-center justify-between p-4 bg-blue-900 rounded-lg md:flex-1">
        <button
          className="bg-transparent border-0 text-orange-500 hover:text-slate-100 text-2xl font-bold"
          onClick={
            decrement
        }
        >
          -
        </button>
        <p className="font-bold text-slate-100">{num}</p>
        <button
          className="bg-transparent border-0 text-orange-500 hover:text-slate-100 text-2xl font-bold"
          onClick={
            increment
        }
        >
          +
        </button>
      </div>
      <button
        className="w-full md:flex-1 h-12 flex items-center justify-center gap-1 text-white bg-orange-400 border-0 rounded-md hover:bg-orange-800"
        onClick={(e) => {
            e.preventDefault()
          if (num > 0)
            handleAddToCart(cart, {
              id: product.id,
              name: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              num,
            });
        }}
      >
        Add to
        <BsCart3 />
      </button>
    </div>
  );
};

export default AddToCartBtn;
