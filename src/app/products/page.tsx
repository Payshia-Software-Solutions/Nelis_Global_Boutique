
import { ProductsHeroSection } from '@/components/products-hero-section';
import { getCollections, getProducts, getCollectionProducts } from '@/lib/mock-data';
import type { Collection, Product, CollectionProduct } from '@/lib/types';
import MainLayout from '../(main)/layout';
import { CategoryProductCard } from '@/components/category-product-card';

export const metadata = {
    title: "All Products | NelisGlobal Marketplace",
    description: "Browse our full collection of high-quality products. Find what you're looking for at NelisGlobal.",
};

const CollectionSection = ({ collection, products }: { collection: Collection; products: Product[] }) => {
    if (products.length === 0) {
        return null;
    }

    return (
        <section id={collection.id} className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">{collection.title}</h2>
                    {collection.description && <p className="text-muted-foreground mt-4 text-lg">{collection.description}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <CategoryProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default async function ProductsPage() {
  const collections = await getCollections();
  const allProducts = await getProducts();
  const collectionProducts = await getCollectionProducts();
  
  const productsByCollection = collections.map(collection => {
    const productIds = collectionProducts
        .filter(cp => cp.collection_id === collection.id)
        .map(cp => cp.product_id);
    
    const products = allProducts.filter(p => productIds.includes(p.id));

    return {
        collection,
        products
    }
  });

  return (
    <MainLayout>
      <ProductsHeroSection />
      {productsByCollection.map(({ collection, products }) => (
        <CollectionSection key={collection.id} collection={collection} products={products} />
      ))}
    </MainLayout>
  );
}
