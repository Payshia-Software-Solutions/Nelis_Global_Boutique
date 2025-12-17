
import { OurStorySection } from '@/components/our-story-section';
import { MissionValuesSection } from '@/components/mission-values-section';
import { CertificationsSection } from '@/components/certifications-section';
import { JoinOurJourneySection } from '@/components/join-our-journey-section';
import { PageHeroSection } from '@/components/page-hero-section';
import Image from 'next/image';

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
      <section className="relative w-full h-[50vh] min-h-[400px]">
        <Image
            src="http://content-provider.payshia.com/nelis-global/new/join.webp"
            alt="Join our journey"
            layout="fill"
            objectFit="cover"
            data-ai-hint="collaboration handshake"
        />
      </section>
    </div>
  );
}
