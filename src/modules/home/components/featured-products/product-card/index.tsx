import Image from "next/image"

export default function ProductCard({ product }: { product: any }) {
  return (
    <div>
      <Image
        src={product.images[0].url}
        alt={product.title}
        width={300}
        height={300}
      />
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      {/* <p>{product.variants[0].prices[0].amount}</p> */}
    </div>
  )
}
