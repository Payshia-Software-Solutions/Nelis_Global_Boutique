
import { ProductsHeroSection } from '@/components/products-hero-section';
import { HerbalTeasSection } from '@/components/herbal-teas-section';
import { DriedFruitsSection } from '@/components/dried-fruits-section';
import { SpecialBlendsSection } from '@/components/special-blends-section';
import { BulkWholesaleSection } from '@/components/bulk-wholesale-section';
import { getCollections, getProducts } from '@/lib/mock-data';
import type { Collection } from '@/lib/types';
import MainLayout from '../(main)/layout';
import { CategoryProductCard } from '@/components/category-product-card';

export const metadata = {
    title: "All Products | NelisGlobal Marketplace",
    description: "Browse our full collection of high-quality products. Find what you're looking for at NelisGlobal.",
};

const CollectionSection = async ({ collection }: { collection: Collection }) => {
    const allProducts = await getProducts();
    const collectionProducts = allProducts.filter(p => p.category === collection.title);

    return (
        <section id={collection.id} className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl">{collection.title}</h2>
                    {collection.description && <p className="text-muted-foreground mt-4 text-lg">{collection.description}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collectionProducts.map((product) => (
                        <CategoryProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default async function ProductsPage() {
  const collections = await getCollections();
  const filteredCollections = collections.filter(c => c.title !== "Herbal Teas" && c.title !== "Dried Fruits" && c.title !== "Special Blends");
  
  return (
    <MainLayout>
      <ProductsHeroSection />
      <HerbalTeasSection />
      <DriedFruitsSection />
      <SpecialBlendsSection />
      {filteredCollections.map((collection) => (
        <CollectionSection key={collection.id} collection={collection} />
      ))}
      <BulkWholesaleSection />
    </MainLayout>
  );
}
