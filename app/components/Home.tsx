"use client";

import Link from "next/link";
import { Products } from "../@types/interface";
import Card from "./Card";
import CategoriesList from "./CategoriesList";
import Image from "next/image";
import slider1 from "@/app/assets/slider_images/Desktop-Homepage-Slider_712x384-updated.jpg";
import slider2 from "@/app/assets/slider_images/homepage_slider.jpg";
import slider3 from "@/app/assets/slider_images/Mensfashion-slider.jpg";
import slider4 from "@/app/assets/slider_images/Slider.png";
import { useEffect } from "react";

const HomePage = ({ products }: Products) => {

  useEffect(() => {
    let counter = 0;
    const sliders = Array.from(
      document.getElementsByClassName("slider") as HTMLCollectionOf<HTMLElement>
    );
    sliders.forEach((slider, i) => {
      slider.style.left = `${i * 100}%`;
      if (i != counter) slider.style.opacity = "0";
    });

    const carousel = () => {
      counter++;

      if (counter > sliders.length - 1) counter = 0;

      sliders.forEach((slider, i) => {
        slider.style.transform = `translateX(-${counter * 100}%)`;
        if (i != counter) {
          slider.style.opacity = "0";
        } else {
          slider.style.opacity = "100";
        }
      });
    };

    setInterval(() => {
      carousel();
    }, 5000);
  }, []);

  return (
    <main className="w-full min-h-screen grid gap-6 md:gap-12 p-4 sm:p-8 lg:px-[calc(50%-576px)] lg:py-16 bg-slate-300">
      <div className="w-full h-96 md:h-[448px] flex flex-col items-center justify-between sm:justify-around p-6 sm:p-12 rounded-lg bg-slate-100">
        <div className="w-full grid gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center uppercase tracking-wide">
            Revolutionize Online Shopping with Our Modern E-Commerce Experience
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-center tracking-wide">
            Explore a World of Unique Products and Seamless Shopping
          </p>
        </div>
        <div className="w-48 md:w-60 p-2 md:text-xl text-center uppercase cursor-pointer rounded-lg text-slate-50 hover:text-slate-900 bg-slate-900 hover:bg-slate-400">
          <Link href={"/products"}>start shopping</Link>
        </div>
      </div>
      <section className="w-full grid gap-3 md:gap-6">
        <div className="w-full h-80 sm:h-[448px] flex gap-4">
          <nav className="w-72 bg-slate-100 p-4 rounded-lg hidden md:block">
            <ul className="w-full h-full flex flex-col justify-between uppercase">
              <CategoriesList />
            </ul>
          </nav>
          <div className="relative w-full h-full flex-1 overflow-hidden">
            {[slider1, slider2, slider3, slider4].map((slide, i) => (
              <div
                key={i}
                className="slider absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
              >
                <Image
                  className="rounded-lg"
                  src={slide}
                  alt="slider image"
                  fill
                  sizes=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full">
        <h2 className="text-xl md:text-3xl font-bold uppercase tracking-wide">
          Featured Products
        </h2>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {products.map((data, i) => (
            <Card key={i} product={data} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
