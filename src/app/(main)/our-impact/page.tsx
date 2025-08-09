
import { KeyImpactAreasSection } from "@/components/key-impact-areas-section";
import { SustainabilityCommitmentSection } from "@/components/sustainability-commitment-section";
import { FutureGoalsSection } from "@/components/future-goals-section";

export const metadata = {
    title: "Our Impact | NelisGlobal Boutique",
    description: "Learn about our commitment to empowering communities, reducing waste, and promoting sustainability.",
};

export default function OurImpactPage() {
  return (
    <div>
      <SustainabilityCommitmentSection />
      <KeyImpactAreasSection />
      <FutureGoalsSection />
    </div>
  );
}
