"use client";

import { useState } from "react";
import ImageSlider from "./ImageSlider";
import { Product } from "../@types/interface";
import LightBox from "./LightBox";
import { originalPrice } from "../lib/discount";
import AddToCartBtn from "./AddToCartBtn";

const ProductPage = ({ product }: { product: Product }) => {
  const [imageNo, setImageNo] = useState(0);
  const [displayLightBox, setLightBox] = useState(false);

  const handleNextImage = () =>
    setImageNo((prev) => {
      if (prev < product.images.length - 1) return prev + 1;
      return 0;
    });

  const handlePrevImage = () =>
    setImageNo((prev) => {
      if (prev > 0) return prev - 1;
      return product.images.length - 1;
    });

  const handleSetImage = (value: number) => setImageNo(value);

  const OpenLightBox = () => setLightBox(true);
  const CloseLightBox = () => setLightBox(false);

  return (
    <>
      <ImageSlider
        image={imageNo}
        arr={product.images}
        prev={handlePrevImage}
        next={handleNextImage}
        setImage={handleSetImage}
        openBox={OpenLightBox}
      />
      <section className="w-full md:h-[492px] pt-4 px-4 pb-16 md:flex-1 md:pt-0 lg:pt-8 md:flex md:flex-col md:justify-between md:py-2">
        <article className="w-full">
          <h2 className="text-2xl font-bold capitalize mb-4 md:text-3xl lg:text-5xl">
            {product.title}
          </h2>
          <h3 className="text-orange-300 text-sm uppercase mb-2 md:text-lg">
            {product.brand}
          </h3>
          <p className="mb-4 opacity-50">{product.description}</p>
        </article>
        <div className="w-full flex items-center justify-between my-4 mx-0 md:grid md:gap-2">
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold">{`$${product.price}`}</p>
            <p className="p-1 font-bold text-orange-500 bg-orange-200 rounded-md">{`${product.discountPercentage}%`}</p>
          </div>
          <p className="opacity-40 font-bold line-through">{`$${originalPrice(
            product.price,
            product.discountPercentage
          ).toFixed(0)}`}</p>
        </div>
        <div className="w-full flex items-center justify-between py-2 md:grid md:gap-1">
          <p className="text-xl font-bold">★ {product.rating}</p>
          <p className="text-xl">In stock: {product.stock}</p>
        </div>
        <AddToCartBtn product={product} />
      </section>
      {displayLightBox ? (
        <LightBox
          image={imageNo}
          arr={product.images}
          prev={handlePrevImage}
          next={handleNextImage}
          setImage={handleSetImage}
          openBox={OpenLightBox}
          closeBox={CloseLightBox}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ProductPage;
