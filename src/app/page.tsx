import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/service/productService";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold">E-Commerce Store</h1>
      <p className="mt-2 text-gray-600">
        Real-world product listing using a public API.
      </p>

      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}