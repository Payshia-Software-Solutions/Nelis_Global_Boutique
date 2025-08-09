"use client";

import { CuratedCelebrationsSection } from '@/components/curated-celebrations-section';
import { CustomGiftSection } from '@/components/custom-gift-section';
import { GiftPacksHeroSection } from '@/components/gift-packs-hero-section';
import { WhyChooseGiftPacksSection } from '@/components/why-choose-gift-packs-section';

export default function GiftPacksPage() {
  return (
    <>
      <GiftPacksHeroSection />
      <CuratedCelebrationsSection />
      <CustomGiftSection />
      <WhyChooseGiftPacksSection />
    </>
  );
}
