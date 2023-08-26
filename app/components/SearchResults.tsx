"use client";

import { usePathname, useSearchParams } from "next/navigation";
import ProductsPage from "./ProductsPage";

const SearchResultsPage = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get("page") ?? "1");
    const search = searchParams.get('q') ?? ''
    
  return (<ProductsPage page={page} pathname={pathname} search={search} />
  );
};

export default SearchResultsPage
