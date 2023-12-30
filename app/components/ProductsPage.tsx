"use client";

import { useRouter } from "next/navigation";
import Card from "./Card";
import { FilterOptions, Product} from "../@types/interface";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import {
  RxChevronLeft,
  RxChevronRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from "react-icons/rx";
import CardSkeleton from "./CardSkeleton";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import { useDebounce, useLocalStorage } from "usehooks-ts";
import Link from "next/link";

const ProductsPage = ({
  pathname,
  page,
  search,
  category,
}: {
  pathname: string;
  page: number;
  search?: string;
  category?: string;
}) => {
  const [filterOptions, setFilterOptions] = useLocalStorage<FilterOptions>('filter', { price_range: [0, 2000], categories: [] });
  const [isFilterOpen, setFilterModal] = useState(false);

  useEffect(() => {
    if (category) {
      setFilterOptions({ price_range: [0, 2000], categories: [category] })
    }
  }, []);

  const debouncedFilterOptions = useDebounce(filterOptions, 500);

  const router = useRouter();
  const skip =
    debouncedFilterOptions.categories.length > 0 ? 0 : (page - 1) * 24;
  const limit = debouncedFilterOptions.categories.length > 0 ? 0 : 24;

  let url;
  if (search) {
    url = `https://dummyjson.com/products/search?q=${search}`;
  } else {
    url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  }

  const { data } = useSWR(url, fetcher);

  const totalPages = Math.ceil(data?.total / limit);

  const handleFilterOptions = (value: number[] | string) => {
    if (typeof value === "string") {
      const isCategoryPresent = [...filterOptions.categories].includes(value);
      if (isCategoryPresent) {
        const newCategories = [...filterOptions.categories].filter(
          (cat) => cat != value
        );
        setFilterOptions({
          price_range: filterOptions.price_range,
          categories: newCategories,
        });
      } else {
        setFilterOptions({
          price_range: filterOptions.price_range,
          categories: [...filterOptions.categories, value],
        });
      }
    } else {
      setFilterOptions({
        price_range: value,
        categories: filterOptions.categories,
      });
    }
  };

  const handleClearFilter = () =>
    setFilterOptions({
      price_range: [0, 2000],
      categories: [],
    });

  const handleOpenFilter = () => setFilterModal(true);
  const handleCloseFilter = () => setFilterModal(false);

  return (
    <>
      {search && data?.products.length < 1 ? (
        <div className="w-full flex flex-col gap-2">
          <div className="py-2">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase">
              Search Results for &apos;{search}&apos;
            </h2>
            <p>Sorry, we found no match.</p>
          </div>
          <div className="w-48 p-2 text-center uppercase cursor-pointer rounded-lg text-slate-50 hover:text-slate-900 bg-slate-900 hover:bg-slate-400">
            <Link href={"/products"}>continue shopping</Link>
          </div>
        </div>
      ) : (
        <>
          <Filter
            isFilterOpen={isFilterOpen}
            toggleFilter={handleCloseFilter}
            filterOptions={filterOptions}
            handleFilterOptions={handleFilterOptions}
            clearFilters={handleClearFilter}
          />
          <section className="w-full flex flex-col gap-1 sm:gap-2 md:gap-4">
            {search ? (
              <div>
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase">
                  Search Results for &apos;{search}&apos;
                </h1>
                <p className="text-bold italic">Found {data?.total} results</p>
              </div>
            ) : (
              <div className="my-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
                  Our Products
                </h1>
                <p className="text-base sm:text-xl uppercase">Shop from our wide variety of products.</p>
              </div>
            )}
            <div className="w-full flex flex-col gap-2">
              <button
                onClick={handleOpenFilter}
                className="w-20 md:w-24 h-8 md:h-10 md:text-xl text-center uppercase cursor-pointer rounded-lg text-slate-100 hover:text-slate-900 bg-slate-900 hover:bg-slate-400"
              >
                filter
              </button>
              <div className="capitalize text-sm italic px-2">
                <p>
                  Price Range: {debouncedFilterOptions.price_range[0]} to{" "}
                  {debouncedFilterOptions.price_range[1]}
                </p>
                {debouncedFilterOptions.categories.length > 0 && (
                  <p className="text-base md:text-lg font-bold">
                    Filtered Categories:{" "}
                    {debouncedFilterOptions.categories
                      .map((cat) => {
                        if (cat.includes("-")) return cat.replace(/-/g, " ");
                        else return cat;
                      })
                      .map((cat, i) => (
                        <span key={i}>{cat} </span>
                      ))}
                  </p>
                )}
              </div>
            </div>
          </section>
          <section className="relative w-full py-4">
            <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center py-4 text-center">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase">
                No products found.
              </h2>
              <p>
                Try changing your filters, or check back later for new products.
              </p>
            </div>
            <div className="relative w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-300">
            {data
              ? data.products
                  .filter((product: Product) => {
                    if (filterOptions.categories.length > 0) {
                      if (
                        product.price > filterOptions.price_range[0] &&
                        product.price < filterOptions.price_range[1] &&
                        filterOptions.categories.includes(product.category)
                      )
                        return product;
                    } else if (
                      product.price > filterOptions.price_range[0] &&
                      product.price < filterOptions.price_range[1]
                    )
                      return product;
                  })
                  .map((product: Product, i: number) => (
                    <Card key={i} product={product} />
                  ))
              : Array.from({ length: 6 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
            </div>
          </section>
          {!(filterOptions.categories.length > 0) && (
            <div className="w-full flex items-center justify-center gap-4">
              <button
              aria-label="go back 2 pages"
                disabled={page - 2 < 1}
                onClick={() =>
                  router.push(
                    `${pathname}?page=${page - 2}${
                      search ? `&&search=${search}` : ""
                    }
                    ${category ? `&&cat=${category}` : ""}`
                  )
                }
                className={`w-10 md:w-12 h-6 md:h-8 md:text-2xl flex items-center justify-center uppercase cursor-pointer rounded-lg text-slate-100 hover:text-slate-900 bg-slate-900 hover:bg-slate-50 disabled:bg-slate-600 disabled:hover:text-slate-100 `}
              >
                <RxDoubleArrowLeft />
              </button>
              <button
              aria-label="go to prev page"
                disabled={page - 1 < 1}
                onClick={() =>
                  router.push(
                    `${pathname}?page=${page - 1}${
                      search ? `&&search=${search}` : ""
                    }
                    ${category ? `&&cat=${category}` : ""}`
                  )
                }
                className={`w-10 md:w-12 h-6 md:h-8 md:text-2xl flex items-center justify-center uppercase cursor-pointer rounded-lg text-slate-100 hover:text-slate-900 bg-slate-900 hover:bg-slate-50 disabled:bg-slate-600 disabled:hover:text-slate-100 `}
              >
                <RxChevronLeft />
              </button>
              <p>
                {page} / {totalPages}
              </p>
              <button
              aria-label="go to next page"
                disabled={page + 1 > totalPages}
                onClick={() =>
                  router.push(
                    `${pathname}?page=${page + 1}${
                      search ? `&&search=${search}` : ""
                    }
                    ${category ? `&&cat=${category}` : ""}`
                  )
                }
                className={`w-10 md:w-12 h-6 md:h-8 md:text-2xl flex items-center justify-center uppercase cursor-pointer rounded-lg text-slate-100 hover:text-slate-900 bg-slate-900 hover:bg-slate-50 disabled:bg-slate-600 disabled:hover:text-slate-100 `}
              >
                <RxChevronRight />
              </button>
              <button
              aria-label="go forward 2 pages"
                disabled={page + 2 > totalPages}
                onClick={() =>
                  router.push(
                    `${pathname}?page=${page + 2}${
                      search ? `&&search=${search}` : ""
                    }
                    ${category ? `&&cat=${category}` : ""}`
                  )
                }
                className={`w-10 md:w-12 h-6 md:h-8 md:text-2xl flex items-center justify-center uppercase cursor-pointer rounded-lg text-slate-100 hover:text-slate-900 bg-slate-900 hover:bg-slate-50 disabled:bg-slate-600 disabled:hover:text-slate-100 `}
              >
                <RxDoubleArrowRight />
              </button>
            </div>
          )}
        </>
      )}{" "}
    </>
  );
};

export default ProductsPage;
