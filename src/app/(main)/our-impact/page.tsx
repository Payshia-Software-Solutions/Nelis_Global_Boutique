
"use client";

import { KeyImpactAreasSection } from "@/components/key-impact-areas-section";
import { SustainabilityCommitmentSection } from "@/components/sustainability-commitment-section";
import { FutureGoalsSection } from "@/components/future-goals-section";

export default function OurImpactPage() {
  return (
    <div>
      <SustainabilityCommitmentSection />
      <KeyImpactAreasSection />
      <FutureGoalsSection />
    </div>
  );
}
