import { useEffect, useState } from 'react'
import { Product } from '../types/product.type'

const ProductComponent = ({ product }: { product: Product }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const checkIfFavorite = () => {
    const products = JSON.parse(localStorage.getItem('favorites') || '[]')
    const exists = products.some((p: Product) => p.id === product.id)
    return exists
  }

  useEffect(() => {
    setIsFavorite(checkIfFavorite())
  }, [product.id])

  const handleFavorite = () => {
    const products = JSON.parse(localStorage.getItem('favorites') || '[]')
    
    const exists = checkIfFavorite()
    if (!exists) {
      products.push(product)
      localStorage.setItem('favorites', JSON.stringify(products))
    } else {
      const newProducts = products.filter((p: Product) => p.id !== product.id)
      localStorage.setItem('favorites', JSON.stringify(newProducts))
    }
    setIsFavorite(!exists)
  }


  return (
    <div className="flex flex-col border p-4">
      <figure>
        <img src={product.thumbnail} alt={product.title} />
      </figure>
      <div className="product-details">
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <button onClick={handleFavorite}>
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  )
}

export default ProductComponent