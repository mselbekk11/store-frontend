"use client"

// import { HttpTypes } from "@medusajs/types"
// import ProductRail from "@modules/home/components/featured-products/product-rail"

// export default async function FeaturedProducts({
//   collections,
//   region,
// }: {
//   collections: HttpTypes.StoreCollection[]
//   region: HttpTypes.StoreRegion
// }) {
//   return collections.map((collection) => (
//     <li key={collection.id}>
//       <ProductRail collection={collection} region={region} />
//     </li>
//   ))
// }

// export default async function FeaturedProducts() {
//   return (
//     <div className="max-w-7xl w-full h-full bg-red-500 m-auto">this is a test</div>
//   )
// }

import { useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import ProductCard from "./product-card"

export default function Products() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<HttpTypes.StoreProduct[]>([])

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
        <div className="grid grid-cols-4 gap-4 w-full max-w-7xl m-auto h-full">
          {products.map((product) => (
            // <li key={product.id}>{product.title}</li>
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
