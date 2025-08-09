
import { OurStorySection } from '@/components/our-story-section';
import { MissionValuesSection } from '@/components/mission-values-section';
import { CertificationsSection } from '@/components/certifications-section';

export const metadata = {
    title: "About Us | NelisGlobal Boutique",
    description: "Learn about the story behind NelisGlobal Boutique and our commitment to natural, sustainable products from Sri Lanka.",
};

export default function AboutPage() {
  return (
    <div>
      <OurStorySection />
      <MissionValuesSection />
      <CertificationsSection />
    </div>
  );
}
