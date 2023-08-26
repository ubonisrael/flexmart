"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (search) {
      router.push(`search?q=${search}`);
    }
  };
  return (
    <div className="w-full my-2 md:m-0 flex items-center">
      <label className="relative grow" htmlFor="search">
        <input
          className="w-full pl-8 py-2 rounded-l-xl"
          name="search"
          id="search"
          placeholder="Search Flexmart...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div
          aria-hidden
          className="absolute top-0 left-0 w-8 h-full flex items-center justify-center text-xl"
        >
          <AiOutlineSearch />
        </div>
      </label>
      <button
        onClick={handleSubmit}
        className="w-24 p-2 font-bold text-slate-50 hover:text-slate-900 bg-slate-900 hover:bg-slate-400 rounded-r-xl uppercase"
        type="button"
      >
        search
      </button>
    </div>
  );
};

export default Search;
