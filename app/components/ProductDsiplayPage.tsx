'use client'

import { usePathname, useSearchParams } from "next/navigation";
import ProductsPage from "./ProductsPage";

const ProductsDisplayPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");
  const category = searchParams.get('cat') ?? ''
  

  return <ProductsPage page={page} pathname={pathname} category={category} />;
};

export default ProductsDisplayPage;
