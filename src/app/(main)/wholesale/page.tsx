
import { WholesaleHeroSection } from '@/components/wholesale-hero-section';
import { WholesaleOpportunitiesSection } from '@/components/wholesale-opportunities-section';
import { ExportOfferingsSection } from '@/components/export-offerings-section';

export const metadata = {
    title: "Wholesale & Export | NelisGlobal Boutique",
    description: "Bringing Sri Lanka's Finest Products to the World. We offer premium-quality products for wholesale and export.",
};

export default function WholesalePage() {
  return (
    <div>
      <WholesaleHeroSection />
      <WholesaleOpportunitiesSection />
      <ExportOfferingsSection />
    </div>
  );
}
