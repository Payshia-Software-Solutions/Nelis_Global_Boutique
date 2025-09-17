
import { OurStorySection } from '@/components/our-story-section';
import { MissionValuesSection } from '@/components/mission-values-section';
import { CertificationsSection } from '@/components/certifications-section';
import { JoinOurJourneySection } from '@/components/join-our-journey-section';
import { PageHeroSection } from '@/components/page-hero-section';

export const metadata = {
    title: "About Us",
    description: "Learn about the story behind NelisGlobal Boutique and our commitment to natural, sustainable products from Sri Lanka.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeroSection title="About Us" subtitle="Discover Our Story" />
      <OurStorySection />
      <MissionValuesSection />
      <CertificationsSection />
      <JoinOurJourneySection />
    </div>
  );
}
