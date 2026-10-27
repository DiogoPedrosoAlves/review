import ButtonLogout from "@/components/ButtonLogout"
import ProductList from "@/components/ProductList"
import { ResponseProductsApi } from "@/types/product.type"

async function getData() {
  try {
    const resquest = await fetch('https://dummyjson.com/products?limit=15')
    const data = await resquest.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default async function ProductsPage() {
  const respose: ResponseProductsApi = await getData()
  const products = respose.products

  return (
    <div>
      <h1>Products Page <ButtonLogout /></h1>
      <ProductList products={products} />
    </div>
  )
}