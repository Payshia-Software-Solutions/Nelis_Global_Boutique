

import { ProductsHeroSection } from '@/components/products-hero-section';
import { HerbalTeasSection } from '@/components/herbal-teas-section';
import { DriedFruitsSection } from '@/components/dried-fruits-section';

export const metadata = {
    title: "All Products | NelisGlobal Marketplace",
    description: "Browse our full collection of high-quality products. Find what you're looking for at NelisGlobal.",
};

export default async function ProductsPage() {
  return (
    <div>
      <ProductsHeroSection />
      <HerbalTeasSection />
      <DriedFruitsSection />
    </div>
  );
}
