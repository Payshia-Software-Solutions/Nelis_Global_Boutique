
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { GiftPacksSection } from "@/components/gift-packs-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { WholesaleExportSection } from "@/components/wholesale-export-section";
import { ContactUsSection } from "@/components/contact-us-section";
import { ProductSwiper } from "@/components/product-swiper";
import { ArrowDown } from "lucide-react";

export const metadata = {
  title: "NelisGlobal Boutique | Natural Products from Sri Lanka",
  description: "Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.",
};

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center md:justify-start -mt-20">
        <Image
          src="https://content-provider.payshia.com/nelis-global/hero.webp"
          alt="A market stall with various natural products"
          fill
          objectFit="cover"
          className="opacity-50"
          data-ai-hint="natural products market"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto h-full flex flex-col items-center md:items-start justify-center text-center md:text-left relative z-10 text-white px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl tracking-tight">
              Welcome to Nelis Global Boutique
            </h1>
            <p className="mt-4 text-base md:text-xl">
              Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/store">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <Link href="#our-products" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-white" />
          </Link>
        </div>
      </section>
      
      {/* Our Products Section */}
      <ProductSwiper products={products} />

      {/* Gift Packs Section */}
      <section className="py-16">
        <GiftPacksSection />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Wholesale & Export Section */}
      <section className="py-16">
        <WholesaleExportSection />
      </section>

      {/* Contact Us Section */}
      <ContactUsSection />
    </div>
  );
}
