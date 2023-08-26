import { Products } from './@types/interface'
import HomePage from './components/Home'

export default async function Home() {

  const {products} = await getData() as Products
  
  return <HomePage products={products} />
}

async function getData() {
  const data = await fetch("https://dummyjson.com/products?limit=12")

  if (!data.ok) throw new Error("Failed to fetch data");

  return data.json()
}