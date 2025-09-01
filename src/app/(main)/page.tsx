
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { GiftPacksSection } from "@/components/gift-packs-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { WholesaleExportSection } from "@/components/wholesale-export-section";
import { ContactUsSection } from "@/components/contact-us-section";

export const metadata = {
  title: "NelisGlobal Boutique | Natural Products from Sri Lanka",
  description: "Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.",
};

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-start -mt-20">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="A market stall with various natural products"
          fill
          objectFit="cover"
          className="opacity-50"
          data-ai-hint="natural products market"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto h-full flex flex-col items-start justify-center text-left relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to Nelis Global Boutique
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.
            </p>
            <div className="mt-8 flex gap-4">
              <Button asChild size="lg">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Products Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Our Products</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Explore our carefully curated selection of premium natural products sourced directly from Sri Lankan farms.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/products">View All Products</Link>
            </Button>
        </div>
      </section>

      {/* Gift Packs Section */}
      <GiftPacksSection />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Wholesale & Export Section */}
      <WholesaleExportSection />

      {/* Contact Us Section */}
      <ContactUsSection />
    </div>
  );
}
