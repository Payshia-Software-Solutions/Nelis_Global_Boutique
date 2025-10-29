
import Link from "next/link";
import { GiftPacksSection } from "@/components/gift-packs-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { WholesaleExportSection } from "@/components/wholesale-export-section";
import { ContactUsSection } from "@/components/contact-us-section";
import { ProductSwiperClient } from "@/components/product-swiper-client";
import { MotionSection } from "@/components/motion-section";
import { HeroSlider } from "@/components/hero-slider";
import { OurPartnersSection } from "@/components/our-partners-section";

export const metadata = {
  title: "NelisGlobal Boutique | Natural Products from Sri Lanka",
  description: "Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.",
  openGraph: {
    title: "NelisGlobal Boutique | Natural Products from Sri Lanka",
    description: "Discover the finest natural products from Sri Lanka, from herbal teas to dried fruits.",
    images: [
      {
        url: "https://content-provider.payshia.com/nelis-global/hero.webp",
        width: 1920,
        height: 1080,
        alt: "A market stall with various natural products",
      },
    ],
  },
};

export default async function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />
      
      {/* Our Products Section */}
      <MotionSection className="bg-background">
        <ProductSwiperClient />
      </MotionSection>

      {/* Gift Packs Section */}
      <MotionSection className="py-16 bg-muted">
        <GiftPacksSection />
      </MotionSection>

      {/* Why Choose Us Section */}
      <MotionSection className="bg-background">
        <WhyChooseUs />
      </MotionSection>

      {/* Wholesale & Export Section */}
      <MotionSection className="py-16 bg-muted">
        <WholesaleExportSection />
      </MotionSection>

      {/* Our Partners Section */}
      <MotionSection className="bg-background">
        <OurPartnersSection />
      </MotionSection>

      {/* Contact Us Section */}
      <MotionSection className="bg-background">
        <ContactUsSection />
      </MotionSection>
    </div>
  );
}
