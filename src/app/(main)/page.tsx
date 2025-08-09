
import Image from "next/image";
import Link from "next/link";
import { getCategories, getFeaturedProducts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "NelisGlobal Boutique | Natural Products from Sri Lanka",
  description: "Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.",
};

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();
  const categories = await getCategories();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center -mt-20">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="A market stall with various natural products"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
          data-ai-hint="natural products market"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to Nelis Global Boutique
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
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
      </section>
      
      {/* Categories Section */}
      <section id="categories" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/products?category=${category.id}`} className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-0 relative">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    data-ai-hint={`${category.name} category`}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white tracking-wider">{category.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/products">View All Products</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
