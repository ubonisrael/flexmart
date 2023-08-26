"use client";

import { useContext, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CART } from "@/app/@types/interface";
import { FaUserLarge } from "react-icons/fa6";
import { MdMenu, MdClose } from "react-icons/md";
import Search from "./Search";
import { CartContext } from "../context/cartContext";
import Link from "next/link";
import CategoriesList from "./CategoriesList";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  const [displaySideBar, setSideBar] = useState(false);
  const [showCat, setShowcat] = useState(false);

  const handleMenu = () => setSideBar((prev) => !prev);
  const handleShowCat = () => setShowcat((prev) => !prev);

  const { cart } = useContext(CartContext) as CART;

  return (
    <header
      className={`w-screen lg:px-[calc(50%-576px)] p-2 md:p-4 bg-slate-100 sticky top-0 left-0 z-10 shadow-md`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-2">
          <button
            className="md:hidden text-3xl"
            id="navOpen-btn"
            aria-controls="navlist"
            aria-expanded="false"
            onClick={handleMenu}
          >
            <span className="sr-only" aria-expanded="false">
              Menu
            </span>
            <MdMenu />
          </button>
          <Link href="/">
            <p className="font-bold text-4xl uppercase cursor-pointer">
              FlexMart
            </p>
          </Link>
        </div>
        <nav
          className={`absolute top-0 ${
            displaySideBar ? "left-0" : "-left-full"
          }  w-full z-40 md:max-w-xs min-h-screen md:min-h-0 p-4 md:p-0 bg-slate-100 transition-all duration-500 md:static`}
          id="navbar"
        >
          <button
            className="text-3xl md:hidden"
            id="navClose-btn"
            aria-controls="navlist"
            aria-expanded="false"
            onClick={handleMenu}
          >
            <span className="sr-only" aria-expanded="false">
              closeMenu
            </span>
            <MdClose />
          </button>
          <div
            onClick={handleMenu}
            className="w-full flex items-center justify-between p-1 mb-4 gap-1 bg-slate-200 rounded-lg md:hidden"
          >
            <Link
              href={`/signup`}
              className="flex-1 bg-slate-50 hover:bg-slate-100 p-2 rounded-lg uppercase font-bold flex items-center justify-center"
            >
              signup
            </Link>
            <Link
              href={`/login`}
              className="flex-1 bg-slate-50 hover:bg-slate-100 p-2 rounded-lg uppercase font-bold flex items-center justify-center"
            >
              login
            </Link>
          </div>
          <Search />
          <div className="w-full mt-4 md:hidden">
            <div
              onClick={handleShowCat}
              className="w-full p-2 mb-4 flex items-center justify-between hover:bg-slate-300 rounded-lg cursor-pointer border-2 border-slate-300 border-solid"
            >
              <p className="uppercase font-bold">Categories</p>
              {!showCat ? <AiOutlinePlus /> : <AiOutlineMinus />}
            </div>
            <ul
              onClick={handleMenu}
              className={`w-full ${
                showCat
                  ? "h-[360px] p-2 overflow-y-auto"
                  : "h-0 overflow-hidden"
              } transition-all duration-300 ease-linear flex flex-col rounded-lg uppercase bg-slate-300`}
              id="navlist"
              data-visible="false"
            >
              <CategoriesList />
            </ul>
          </div>
        </nav>
        <div className="flex items-center gap-1 md:gap-2">
          <button className="flex items-center gap-2 text-2xl p-2 rounded-lg hover:text-slate-100 hover:bg-slate-500">
            <Link
              href={`/login`}
            >
              <span className="hidden text-md md:text-xl sm:block">
                sign-in &gt;
              </span>
            </Link>
            <FaUserLarge />
          </button>
          <div className="relative text-2xl md:text-3xl p-2 rounded-lg hover:text-slate-100 hover:bg-slate-500 md:hover:bg-slate-500">
            <Link href={"/cart"}>
              <span className="sr-only" aria-expanded="false" role="cart">
                Cart
              </span>
              {cart.length ? (
                <span className="absolute top-0 right-0 px-2 py-1 text-xs md:text-sm text-slate-50 bg-orange-400 rounded-full">
                  {cart.length}
                </span>
              ) : null}
              <BsCart3 />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
