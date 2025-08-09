
"use client";

import { ContactHeroSection } from '@/components/contact-hero-section';
import { LocationSection } from '@/components/location-section';
import { GetInTouchSection } from '@/components/get-in-touch-section';
import { ContactFormSection } from '@/components/contact-form-section';
import { ConnectOnlineSection } from '@/components/connect-online-section';

export default function ContactPage() {
  return (
    <div>
      <ContactHeroSection />
      <LocationSection />
      <GetInTouchSection />
      <ConnectOnlineSection />
      <ContactFormSection />
    </div>
  );
}
