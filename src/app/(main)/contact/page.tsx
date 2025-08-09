
"use client";

import { ContactHeroSection } from '@/components/contact-hero-section';
import { LocationSection } from '@/components/location-section';
import { GetInTouchSection } from '@/components/get-in-touch-section';
import { ConnectOnlineSection } from '@/components/connect-online-section';
import { SendUsAMessageSection } from '@/components/send-us-a-message-section';

export default function ContactPage() {
  return (
    <div>
      <ContactHeroSection />
      <LocationSection />
      <GetInTouchSection />
      <ConnectOnlineSection />
      <SendUsAMessageSection />
    </div>
  );
}
