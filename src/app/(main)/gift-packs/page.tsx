
import { CuratedCelebrationsSection } from '@/components/curated-celebrations-section';
import { GiftPacksHeroSection } from '@/components/gift-packs-hero-section';

export const metadata = {
    title: "Gift Packs | NelisGlobal Boutique",
    description: "Discover our curated gift packs, perfect for any occasion. Share the taste of Sri Lanka with your loved ones.",
};

export default function GiftPacksPage() {
  return (
    <>
      <GiftPacksHeroSection />
      <CuratedCelebrationsSection />
    </>
  );
}
