
import { Suspense } from 'react';
import { StoreHeroSection } from '@/components/store-hero-section';
import { getCollections, getProductsByCollection } from "@/lib/mock-data";
import { ProductListing } from '@/components/product-listing';
import { ShoppingFeaturesSection } from '@/components/shopping-features-section';
import { Skeleton } from '@/components/ui/skeleton';
import { Collection, Product } from '@/lib/types';

function ProductListingSkeleton() {
  return (
    <div className="space-y-12">
      {[...Array(2)].map((_, i) => (
        <div key={i}>
          <Skeleton className="h-10 w-1/3 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, j) => (
              <div key={j} className="space-y-2">
                <Skeleton className="w-full h-auto aspect-square" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

interface CollectionWithProducts {
  collection: Collection;
  products: Product[];
}

async function ProductListingData() {
  const collections = await getCollections();
  
  const collectionsWithProducts: CollectionWithProducts[] = await Promise.all(
    collections.map(async (collection) => {
      const products = await getProductsByCollection(collection.id);
      return { collection, products };
    })
  );
  
  const allProducts = collectionsWithProducts.flatMap(cwp => cwp.products);
  const categories = [...new Set(allProducts.map(p => p.category))];

  return (
    <ProductListing 
      collectionsWithProducts={collectionsWithProducts}
      allProducts={allProducts}
      allCategories={categories}
      allCollections={collections}
    />
  );
}

export default function StorePage() {
  return (
    <>
      <StoreHeroSection />
      <div className="container mx-auto px-4 py-12">
        <Suspense fallback={<ProductListingSkeleton />}>
          <ProductListingData />
        </Suspense>
      </div>
      <ShoppingFeaturesSection />
    </>
  );
}
