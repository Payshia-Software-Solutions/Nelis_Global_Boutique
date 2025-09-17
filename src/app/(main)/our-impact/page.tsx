
"use client";

import { KeyImpactAreasSection } from "@/components/key-impact-areas-section";
import { SustainabilityCommitmentSection } from "@/components/sustainability-commitment-section";
import { FutureGoalsSection } from "@/components/future-goals-section";
import { PageHeroSection } from "@/components/page-hero-section";

export default function OurImpactPage() {
  return (
    <div>
      <PageHeroSection title="Our Impact" subtitle="Sustainability & Community" />
      <KeyImpactAreasSection />
      <SustainabilityCommitmentSection />
      <FutureGoalsSection />
    </div>
  );
}
