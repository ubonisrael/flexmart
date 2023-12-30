import Image from "next/image";
import { CART, Product } from "../@types/interface";
import { originalPrice } from "../lib/discount";
import Link from "next/link";
import { CSSProperties, useContext } from "react";
import { CartContext } from "../context/cartContext";
import { BsCart3 } from "react-icons/bs";
import { useImageOnLoad } from "usehooks-ts";

const Card = ({ product }: { product: Product }) => {
  const { cart, handleAddToCart } = useContext(CartContext) as CART;
  const { handleImageOnLoad, css } = useImageOnLoad();

  return (
    <div className="relative w-full h-84 p-4 bg-slate-100 shadow hover:shadow-md rounded-lg hover:bg-white hover:-translate-y-2 transition-all ease-in-out duration-300">
      <div className="relative w-full h-48">
        <Image
          onLoad={handleImageOnLoad}
          style={{ ...(css.fullSize as CSSProperties) }}
          src={product.thumbnail}
          alt="product image"
          fill
          sizes="(min-width: 192px) 45vw,
              (min-width: 384px) 33vw,
              90vw"
        />
        <Image
          style={{ ...(css.thumbnail as CSSProperties) }}
          src={product.thumbnail}
          alt="product image"
          fill
          sizes="(min-width: 192px) 45vw,
              (min-width: 384px) 33vw,
              90vw"
        />
      </div>
      <div className="w-full h-28 py-2 flex flex-col items-start justify-between">
        <p className="text-xl uppercase font-bold text-ellipsis">
          {product.title}
        </p>
        <div>
          <p className="font-semibold">${product.price}</p>
          <p className="opacity-50 line-through">
            $
            {originalPrice(product.price, product.discountPercentage).toFixed(
              0
            )}
          </p>
        </div>
      </div>
      <p className="absolute top-4 right-4 p-1 text-white bg-orange-700 rounded-bl-2xl">
        -%{product.discountPercentage}
      </p>
      <div className="w-full grid gap-1 md:flex">
        <Link className="md:flex-1" href={`/products/${product.id}`}>
          <p className="w-full h-12 text-center flex items-center justify-center p-4 bg-blue-900 hover:bg-blue-950 text-slate-100 hover:font-bold rounded-lg">
            Preview
          </p>
        </Link>
        <button
          className="w-full md:flex-1 h-12 flex items-center justify-center gap-1 text-white hover:font-bold bg-green-700 border-0 rounded-md hover:bg-green-950"
          onClick={() => {
            handleAddToCart(cart, {
              id: product.id,
              name: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              num: 1,
            });
          }}
        >
          Add to
          <BsCart3 />
        </button>
      </div>
    </div>
  );
};

export default Card;
