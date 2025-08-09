"use client";

import { WholesaleHeroSection } from '@/components/wholesale-hero-section';
import { WholesaleOpportunitiesSection } from '@/components/wholesale-opportunities-section';
import { ExportOfferingsSection } from '@/components/export-offerings-section';
import { WhyChooseNelisSection } from '@/components/why-choose-nelis-section';
import { LetsConnectSection } from '@/components/lets-connect-section';

export default function WholesalePage() {
  return (
    <div>
      <WholesaleHeroSection />
      <WholesaleOpportunitiesSection />
      <ExportOfferingsSection />
      <WhyChooseNelisSection />
      <LetsConnectSection />
    </div>
  );
}
