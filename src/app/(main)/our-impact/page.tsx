
"use client";

import { KeyImpactAreasSection } from "@/components/key-impact-areas-section";
import { SustainabilityCommitmentSection } from "@/components/sustainability-commitment-section";
import { FutureGoalsSection } from "@/components/future-goals-section";
import { ImpactHeroSection } from "@/components/impact-hero-section";

export default function OurImpactPage() {
  return (
    <div>
      <ImpactHeroSection />
      <KeyImpactAreasSection />
      <SustainabilityCommitmentSection />
      <FutureGoalsSection />
    </div>
  );
}
