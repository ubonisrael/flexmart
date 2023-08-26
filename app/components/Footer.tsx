"use client";
import { AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import {
  FaAngleUp,
  FaCcMastercard,
  FaDhl,
  FaFacebook,
  FaFedex,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";

const Footer = () => (
  <footer className="relative w-screen flex flex-col text-slate-50">
    <button
      className="w-full p-2 md:hidden text-center bg-slate-700  hover:text-slate-100  hover:bg-slate-900 transition-all"
      onClick={() => window.scrollTo(0, 0)}
    >
      <span className="md:hidden">back to top</span>
      <span className="hidden md:m-auto md:flex md:items-center md:justify-center text-2xl">
        <FaAngleUp />
      </span>
    </button>
    <div className="w-full flex flex-col text-slate-50">
      <ul className="w-full flex flex-col items-center justify-center gap-1 py-4 md:hidden bg-slate-800 ">
        <li className="uppercase text-center hover:font-bold cursor-pointer">
          help center
        </li>
        <li className="uppercase text-center hover:font-bold cursor-pointer">
          contact us
        </li>
        <li className="uppercase text-center hover:font-bold cursor-pointer">
          terms & conditions
        </li>
        <li className="uppercase text-center hover:font-bold cursor-pointer">
          privacy notice
        </li>
        <li className="uppercase text-center hover:font-bold cursor-pointer">
          cookie notice
        </li>
        <li className="uppercase text-center hover:font-bold cursor-pointer">
          report a product
        </li>
        <li className="uppercase text-center hover:font-bold cursor-pointer">
          ship your package to anywhere in the world
        </li>
      </ul>
      <div className="hidden md:block bg-slate-800">
        <div className="w-full p-4 flex items-center justify-between lg:px-[calc(50%-576px)]">
          <h1 className="py-1 text-5xl font-extrabold uppercase">
            flexmart
          </h1>
          <div className="py-1 w-auto grid gap-1">
            <h2 className="font-bold text-2xl">New to FlexMart?</h2>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter to get updates on our latest offers.
            </p>
            <form className="w-96 my-2 flex items-center text-slate-900">
              <label className="relative grow" htmlFor="search">
                <input
                  className="w-full pl-8 py-2 rounded-l-xl"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                />
                <div
                  aria-hidden
                  className="absolute top-0 left-0 w-8 h-full text-slate-900 flex items-center justify-center text-xl"
                >
                  <AiOutlineMail />
                </div>
              </label>
              <button
                className="w-24 h-full p-2 text-slate-100 font-bold bg-slate-700 hover:bg-slate-950 rounded-r-xl uppercase"
                type="button"
              >
                submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-full flex items-start justify-between p-4 bg-slate-700 lg:px-[calc(50%-576px)]">
          <div className="grid gap-4">
            <p className="uppercase font-bold">Need help?</p>
            <ul>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Help Center
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <p className="uppercase font-bold">useful links</p>
            <ul>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                How to shop on FlexMart?
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Delivery options and timelines
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                How to return a product on FlexMart?
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Corporate and bulk purchases
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Report a Product
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Ship your package anywhere in the world
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Dispute Resolution Policy
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Return Policy
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <p className="uppercase font-bold">About FlexMart</p>
            <ul>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                About us
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                FlexMart careers
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                FlexMart Express
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Terms and Conditions
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Privacy Notice
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                FlexMart Store Credit Terms & Conditions
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                FlexMart Payment Information Guidelines
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Cookie Notice
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                FlexMart Global
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Official Stores
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Flash Sales
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <p className="uppercase font-bold">Make Money with FlexMart</p>
            <ul>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Sell on FlexMart
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Become a Sales Consultant
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Become a Logistics Service Partner
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Join the FlexMart KOL Program
              </li>
              <li className="text-sm text-gray-300 hover:text-slate-100 hover:underline cursor-pointer">
                Join the FlexMart DA Academy
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex items-start gap-12 p-4 px-8 bg-slate-700 lg:px-[calc(50%-576px)]">
          <div className="grid gap-2">
            <p className="uppercase font-bold">join us on</p>
            <ul className="flex gap-6">
              <li className="text-3xl cursor-pointer">
                <FaFacebook />
              </li>
              <li className="text-3xl cursor-pointer">
                <FaTwitter />
              </li>
              <li className="text-3xl cursor-pointer">
                <FaInstagram />
              </li>
              <li className="text-3xl cursor-pointer">
                <AiFillYoutube />
              </li>
            </ul>
          </div>
          <div className="grid gap-2">
            <p className="uppercase font-bold">
              payment methods & delivery partners
            </p>
            <ul className="flex gap-6">
              <li className="text-3xl">
                <RiVisaLine />
              </li>
              <li className="text-3xl">
                <FaCcMastercard />
              </li>
              <li className="text-3xl">
                <FaDhl />
              </li>
              <li className="text-3xl">
                <FaFedex />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full p-2 text-center  bg-slate-800">
        built with ❤️ by{" "}
        <a
          className="no-underline uppercase font-bold hover:text-red-400 hover:underline"
          href="https://github.com/ubonisrael"
          target="_blank"
        >
          Ubonisrael Akpanudoh
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
