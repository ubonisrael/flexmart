import React, { useRef } from "react";
import { FilterProducts } from "../@types/interface";
import { AiOutlineClose } from "react-icons/ai";
import DualRangeSlider from "./DualRangeSlider";
import Checkbox from "./Checkbox";
import { categories } from "../lib/categories";
import { useOnClickOutside } from "usehooks-ts";

const Filter = ({
  isFilterOpen,
  toggleFilter,
  filterOptions,
  handleFilterOptions,
  clearFilters,
}: FilterProducts) => {
  const ref = useRef(null)

  useOnClickOutside(ref, toggleFilter)

  return (
    <div
      className={`fixed top-0 left-0 min-h-screen w-screen bg-gray-400/25 transform transition-transform ${
        isFilterOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      <div className="w-full min-h-screen backdrop-blur-sm grid justify-end">
        <div ref={ref} className="w-96 h-full flex flex-col gap-2 items-start justify-between p-4 md:p-8 bg-white">
          <button
          aria-label="close filter menu"
            className="absolute top-0 right-0 py-4 px-4 text-2xl self-end bg-transparent border-0 text-black hover:text-red-700 hover:scale-110"
            onClick={toggleFilter}
          >
            <AiOutlineClose />
          </button>
          <div className="w-full grid gap-2">
            <h2 className="text-2xl font-bold uppercase">Filter</h2>
            <div className="w-full h-[1px] bg-slate-900/30"></div>
          </div>
          <div>
            <div className="mb-6 grid gap-4">
              <label className="block font-medium">Price Range</label>
              <DualRangeSlider
                priceRange={filterOptions.price_range}
                handleChange={handleFilterOptions}
              />
              <div className="w-full flex items-center justify-around">
                <label htmlFor="minPrice">
                <input
                name="minPrice"
                  className="w-20 h-8 p-2 border rounded-md"
                  type="number"
                  id="minPrice"
                  value={filterOptions.price_range[0]}
                  onChange={(e) =>
                    handleFilterOptions([
                      +e.target.value,
                      filterOptions.price_range[1],
                    ])
                  }
                />
                </label>
                <span>TO</span>
                <label htmlFor="maxPrice">
                <input
                  className="w-20 h-8 p-2 border rounded-md"
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  value={filterOptions.price_range[1]}
                  onChange={(e) =>
                    handleFilterOptions([
                      filterOptions.price_range[0],
                      +e.target.value,
                    ])
                  }
                />
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-medium">Category</label>
              <div className="grid grid-cols-2 w-full">
                {categories
                  .filter((cat) => cat != "all categories")
                  .map((cat) => {
                    if (cat.includes("-")) return cat.replace(/-/g, " ");
                    else return cat;
                  })
                  .map((cat, i) => (
                    <Checkbox
                      label={cat}
                      key={i}
                      Checked={filterOptions.categories.includes(cat)}
                      onChange={handleFilterOptions}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full grid gap-2 py-4">
            <div className="w-full h-[1px] bg-slate-900/30"></div>
            <button
              onClick={clearFilters}
              disabled={
                filterOptions.categories.length <= 0 &&
                filterOptions.price_range[0] === 0 &&
                filterOptions.price_range[1] === 2000
              }
              className={`w-full p-4 rounded-lg uppercase text-slate-100 hover:text-slate-900 bg-slate-900 hover:bg-slate-100 disabled:bg-slate-600 disabled:hover:text-slate-100
              `}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
