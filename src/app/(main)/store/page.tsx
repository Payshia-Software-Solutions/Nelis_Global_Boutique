
"use client";

import { StoreHeroSection } from '@/components/store-hero-section';
import { FeaturedProductsSection } from '@/components/featured-products-section';
import { StoreHerbalTeasSection } from '@/components/store-herbal-teas-section';
import { StoreDriedFruitsSection } from '@/components/store-dried-fruits-section';
import { ShoppingFeaturesSection } from '@/components/shopping-features-section';

export default function StorePage() {
  return (
    <div>
      <StoreHeroSection />
      <FeaturedProductsSection />
      <StoreHerbalTeasSection />
      <StoreDriedFruitsSection />
      <ShoppingFeaturesSection />
    </div>
  );
}
