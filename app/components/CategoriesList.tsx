import Link from "next/link";
import { categories } from "../lib/categories";

const CategoriesList = () => (
  <>
    {categories.map((item, i) => (
      <li
        key={i}
        className="w-auto px-1 hover:px-3 py-2 cursor-pointer hover:bg-slate-300 hover:font-bold md:hover:bg-white transition-all ease-in-out duration-300"
      >
        <Link href={item === "all categories" ? `/products` : `/products?cat=${item}`}>{item}</Link>
      </li>
    ))}
  </>
);

export default CategoriesList;
