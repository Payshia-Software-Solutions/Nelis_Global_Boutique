
import { getProducts } from '@/lib/mock-data';
import { ProductListing } from '@/components/product-listing';

export const metadata = {
    title: "All Products | NelisGlobal Marketplace",
    description: "Browse our full collection of high-quality products. Find what you're looking for at NelisGlobal.",
};

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold tracking-tight mb-8 text-center">Our Products</h1>
      <ProductListing products={products} categories={categories} />
    </div>
  );
}
