import Image from "next/image";
import Link from "next/link";
import {products} from "@/types/product"

type ProductCardProps = {
    product:products;
}
export default function ProductCard({product}: ProductCardProps){

    return(
        <div className="rounded-xl border p-4 shadow-sm hover:shadow-md transition">
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
        className="h-48 w-full object-cover rounded-lg"
      />

      <div className="mt-4">
        <p className="text-sm text-gray-500">{product.category}</p>

        <h2 className="text-lg font-semibold line-clamp-1">
          {product.title}
        </h2>

        <p className="mt-2 font-bold">${product.price}</p>

        <Link
          href={`/products/${product.id}`}
          className="mt-4 inline-block rounded-lg bg-black px-4 py-2 text-white"
        >
          View Details
        </Link>
      </div>
    </div>
    )
}