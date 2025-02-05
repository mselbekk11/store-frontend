import { TextScrambleBasicTwo } from "@modules/components/TextScrambleTwo"
import Image from "next/image"
import Link from "next/link"

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.handle}`}>
      <div className="w-full h-full">
        <Image
          src={product.images[0].url}
          alt={product.title}
          width={300}
          height={300}
          className="w-full"
        />
        <div className="flex flex-col text-ui-fg-subtle mt-2 text-sm">
          <TextScrambleBasicTwo text={product.title} />
          <TextScrambleBasicTwo text={`$100.00`} />

          {/* <h1>{product.title}</h1> */}
          {/* <p>$100.00</p> */}
        </div>
      </div>
    </Link>
  )
}
