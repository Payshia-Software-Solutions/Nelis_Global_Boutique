
import { StoreHeroSection } from '@/components/store-hero-section';
import { getProducts, getCollections, getCollectionProducts } from "@/lib/mock-data";
import { ProductListing } from '@/components/product-listing';
import { ShoppingFeaturesSection } from '@/components/shopping-features-section';

export default async function StorePage() {
  const products = await getProducts();
  const categories = [...new Set(products.map(p => p.category))];
  const collections = await getCollections();
  const collectionProducts = await getCollectionProducts();

  return (
    <>
      <StoreHeroSection />
      <div className="container mx-auto px-4 py-12">
        <ProductListing 
          products={products} 
          categories={categories} 
          collections={collections}
          collectionProducts={collectionProducts}
        />
      </div>
      <ShoppingFeaturesSection />
    </>
  );
}
