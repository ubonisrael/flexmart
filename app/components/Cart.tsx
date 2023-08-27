"use client";

import { MdDeleteSweep } from "react-icons/md";
import { CART } from "../@types/interface";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Link from "next/link";

const Cart = () => {
  const { cart, handleClearCart } = useContext(CartContext) as CART;
  return (
    <>
      <div className={`w-full ${cart.length < 0 ? 'h-[352px]': ''} pb-2 md:max-w-4xl md:rounded-lg md:flex-1 shadow bg-slate-200`}>
        <div className="w-full p-4 flex items-center justify-between">
          <h3 className="uppercase font-bold md:text-2xl">Cart</h3>
          {cart && 
            <button
              onClick={handleClearCart}
              className="flex items-center gap-2 p-1 border-0 text-slate-900 hover:text-slate-100 bg-transparent hover:bg-slate-900 rounded-lg"
            >
              Clear
              <span className="text-xl">
                <MdDeleteSweep />
              </span>
            </button>
          }
        </div>
        {cart.length > 0 ? (
        <>
        <div className="w-full hidden md:grid grid-cols-[50%_20%_30%] px-4 py-2 bg-slate-400 uppercase font-bold">
          <p>item details</p>
          <p className="text-center">quantity</p>
          <p className="text-center">item price</p>
        </div>
          <div className="w-full flex flex-col gap-2 md:gap-4">
            {cart.map(({ name, num, price, id, thumbnail }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                thumbnail={thumbnail}
                num={num}
                price={price}
              />
            ))}{" "}
          </div>
        </>
        ) : (
          <>
          <div className="w-full h-[1px] bg-slate-700"></div>
          <div className="w-full h-72 grid place-items-center gap-2 p-4 text-black">
            <div>
              <p className="text-center">Your cart is empty.</p>
              <p className="text-center">
                Browse our categories and discover our best deals!
              </p>
            </div>
            <div className="w-48 md:w-60 p-2 md:text-xl text-center uppercase rounded-lg text-slate-50 hover:text-slate-900 bg-slate-900 hover:bg-slate-400">
              <Link href={"/products"}>start shopping</Link>
            </div>
          </div>
          </>
        )}
      </div>
      {cart.length > 0 && <div className="w-full md:w-80 md:rounded-lg bg-slate-200">
        <p className="w-full uppercase font-bold flex items-center justify-between p-4 md:rounded-t-lg bg-slate-400">order summary: <span>{`${cart.length} item(s)`}</span></p>
        <p className="w-full flex items-center justify-between py-4 px-8 uppercase font-bold md:text-xl">
          <span>total</span>{" "}
          <span>${cart.reduce((sum, c) => sum + c.price * c.num, 0)}</span>
        </p>
        <button className="w-[calc(100%-16px)] self-baseline h-12 m-2 text-slate-50 bg-orange-400 border-0 rounded-lg hover:bg-orange-600">
          Continue to checkout
        </button>
      </div>
      }
    </>
  );
};

export default Cart;
