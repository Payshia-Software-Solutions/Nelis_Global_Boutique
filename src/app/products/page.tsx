
import { ProductsHeroSection } from '@/components/products-hero-section';
import { HerbalTeasSection } from '@/components/herbal-teas-section';
import { DriedFruitsSection } from '@/components/dried-fruits-section';
import { SpecialBlendsSection } from '@/components/special-blends-section';
import { BulkWholesaleSection } from '@/components/bulk-wholesale-section';
import MainLayout from '../(main)/layout';

export const metadata = {
    title: "All Products | NelisGlobal Marketplace",
    description: "Browse our full collection of high-quality products. Find what you're looking for at NelisGlobal.",
};

export default async function ProductsPage() {
  return (
    <MainLayout>
      <ProductsHeroSection />
      <HerbalTeasSection />
      <DriedFruitsSection />
      <SpecialBlendsSection />
      <BulkWholesaleSection />
    </MainLayout>
  );
}
