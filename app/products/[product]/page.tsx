import { Products } from "@/app/@types/interface";
import ProductPage from "@/app/components/ProductPage";

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const productData = await getData(params.product);
  return <ProductPage product={productData} />;
}

export async function generateStaticParams() {
  const { products } = (await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .catch(() => {
      throw new Error("Failed to get data!");
    })) as Products;

  return products.map((product) => ({
    product: `${product.id}`,
  }));
}

async function getData(id: string) {
  const data = await fetch(`https://dummyjson.com/products/${id}`);

  if (!data.ok) throw new Error("Failed to fetch data");

  return data.json();
}
