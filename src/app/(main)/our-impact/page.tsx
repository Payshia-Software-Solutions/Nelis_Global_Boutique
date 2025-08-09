
import { KeyImpactAreasSection } from "@/components/key-impact-areas-section";
import MainLayout from "../(main)/layout";

export const metadata = {
    title: "Our Impact | NelisGlobal Boutique",
    description: "Learn about our commitment to empowering communities, reducing waste, and promoting sustainability.",
};

export default function OurImpactPage() {
  return (
    <MainLayout>
        <KeyImpactAreasSection />
    </MainLayout>
  );
}
