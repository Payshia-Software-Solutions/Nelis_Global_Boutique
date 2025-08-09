

import { getProducts } from '@/lib/mock-data';
import { ProductListing } from '@/components/product-listing';
import { ProductsHeroSection } from '@/components/products-hero-section';
import { HerbalTeasSection } from '@/components/herbal-teas-section';

export const metadata = {
    title: "All Products | NelisGlobal Marketplace",
    description: "Browse our full collection of high-quality products. Find what you're looking for at NelisGlobal.",
};

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  return (
    <div>
      <ProductsHeroSection />
      <HerbalTeasSection />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-center">Our Collection</h2>
        <ProductListing products={products} categories={categories} />
      </div>
    </div>
  );
}
