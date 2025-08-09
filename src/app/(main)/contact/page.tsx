
import { ContactHeroSection } from '@/components/contact-hero-section';
import { LocationSection } from '@/components/location-section';
import { ContactFormSection } from '@/components/contact-form-section';

export const metadata = {
    title: "Contact Us | NelisGlobal Boutique",
    description: "Get in touch with NelisGlobal Boutique. We're here to answer your questions about our products, wholesale opportunities, or our impact.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactHeroSection />
      <LocationSection />
      <ContactFormSection />
    </div>
  );
}
