'use client'

import { Product } from "@/types/product.type"
import ProductComponent from "./Product"
import { useEffect, useState } from "react"

const ProductList = ({ products }: { products: Product[] }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setProducts] = useState(products)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading) {
      return
    }
    setLoading(true)
    fetch(`https://dummyjson.com/products/search?q=${searchTerm}&limit=15`)
    .then(res => res.json())
    .then(data => setProducts(data.products))
    .finally(() => setLoading(false))
  }, [searchTerm])

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        className="mb-4 p-2 border"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-wrap gap-4">
        { loading ? (
          <p>Loading...</p>
        ) : (
          filteredProducts.map(product => (
            <ProductComponent key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductList