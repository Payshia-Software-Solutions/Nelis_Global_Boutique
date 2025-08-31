
import { ProductsHeroSection } from '@/components/products-hero-section';
import { getCollections, getProducts } from '@/lib/mock-data';
import type { Collection, Product } from '@/lib/types';
import MainLayout from '../(main)/layout';
import { CategoryProductCard } from '@/components/category-product-card';

export const metadata = {
    title: "All Products | NelisGlobal Marketplace",
    description: "Browse our full collection of high-quality products. Find what you're looking for at NelisGlobal.",
};

const CollectionSection = ({ collection }: { collection: Collection }) => {
    return (
        <section id={collection.id} className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">{collection.title}</h2>
                    {collection.description && <p className="text-muted-foreground mt-4 text-lg">{collection.description}</p>}
                </div>
                {/* Product grid will be added back here */}
            </div>
        </section>
    );
}

export default async function ProductsPage() {
  const collections = await getCollections();
  
  return (
    <MainLayout>
      <ProductsHeroSection />
      {collections.map(collection => (
        <CollectionSection key={collection.id} collection={collection} />
      ))}
    </MainLayout>
  );
}
