
import { StoreHeroSection } from '@/components/store-hero-section';
import MainLayout from '../(main)/layout';

export const metadata = {
    title: "Online Store | NelisGlobal Boutique",
    description: "Shop our collection of high-quality, natural products from Sri Lanka.",
};

export default function StorePage() {
  return (
    <MainLayout>
      <StoreHeroSection />
    </MainLayout>
  );
}
