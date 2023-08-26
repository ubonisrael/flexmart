import { RiDeleteBin6Fill } from "react-icons/ri";
import { CART, CARTITEM } from "../@types/interface";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Image from "next/image";

const CartItem = ({ id, name, price, num, thumbnail }: CARTITEM) => {
  const { cart, handleAddToCart, handleRemoveFromCart } = useContext(
    CartContext
  ) as CART;

  const increment = (id: number) => {
    const cartItem = cart.find((c) => c.id === id) as CARTITEM;
    if (cartItem) cartItem.num += 1;
    handleAddToCart(cart, cartItem);
  };
  const decrement = (id: number) => {
    if (num > 0) {
      const cartItem = cart.find((c) => c.id === id) as CARTITEM;
      if (cartItem) cartItem.num -= 1;
      if (cartItem.num < 1) {
        handleRemoveFromCart(cart, id);
      } else {
        handleAddToCart(cart, cartItem);
      }
    }
  };

  return (
    <div className="w-full py-2 px-4 grid md:items-center gap-1 md:gap-0 md:grid-cols-[50%_20%_25%_5%] bg-slate-100">
      <div className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-start gap-1">
        <div className="relative w-20 h-20">
          <Image
            src={thumbnail}
            alt="product image"
            fill
            sizes=""
            className="rounded-lg"
          />
        </div>
        <p className="capitalize text-slate-900 flex text-center sm:text-start items-center justify-between font-bold text-xl">
          {name}
        </p>
      </div>
      <div className="flex items-center justify-center gap-1">
        <button
          className="w-8 px-2 bg-slate-900 hover:bg-slate-400 border-0 text-slate-100 rounded text-center text-xl md:text-3xl font-bold"
          onClick={() => decrement(id)}
        >
          -
        </button>
        <p className="text-center font-bold w-8 text-slate-900">{num}</p>
        <button
          className="w-8 px-2 bg-slate-900 hover:bg-slate-400 border-0 text-slate-100 rounded text-center text-xl md:text-3xl font-bold"
          onClick={() => increment(id)}
        >
          +
        </button>
      </div>
      <div>
        <p className="text-center font-bold">${price}</p>
        <p className="text-center opacity-50">
          ${price} x ${num}item(s)
        </p>
      </div>
      <button
        className="w-full flex items-center justify-center border-0 md:w-8 h-8 text-slate-900 bg-transparent text-xl md:text-2xl"
        onClick={() => handleRemoveFromCart(cart, id)}
      >
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
};

export default CartItem;
