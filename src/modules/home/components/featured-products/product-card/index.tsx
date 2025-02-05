import Image from "next/image"

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="w-full h-full">
      <Image
        src={product.images[0].url}
        alt={product.title}
        width={300}
        height={300}
        className="w-full"
      />
      <div className="flex flex-col text-ui-fg-subtle mt-2 text-sm">
        <h1>{product.title}</h1>
        <p>$100.00</p>
      </div>
    </div>
  )
}
