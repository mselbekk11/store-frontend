"use client"

import { useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import ProductCard from "./product-card"

export default function Products() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<HttpTypes.StoreProduct[]>([])
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => {
    if (!loading) {
      return
    }

    fetch(`http://localhost:9000/store/products`, {
      credentials: "include",
      headers: {
        "x-publishable-api-key":
          process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
  }, [loading])

  console.log(products)

  return (
    <div>
      {loading && <span>Loading...</span>}
      {!loading && products.length === 0 && <span>No products found.</span>}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-5 gap-4 w-full max-w-8xl m-auto h-full">
          {products.map((product) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`transition-all duration-300 ${
                hoveredId && hoveredId !== product.id ? "blur-sm" : ""
              }`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
