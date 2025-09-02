
import { Suspense } from 'react';
import { StoreHeroSection } from '@/components/store-hero-section';
import { getProducts, getCollections, getCollectionProducts } from "@/lib/mock-data";
import { ProductListing } from '@/components/product-listing';
import { ShoppingFeaturesSection } from '@/components/shopping-features-section';
import { Skeleton } from '@/components/ui/skeleton';

function ProductListingSkeleton() {
  return (
    <div className="flex">
      <aside className="hidden lg:block w-64 pr-8">
        <Skeleton className="h-8 w-1/2 mb-4" />
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </aside>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="w-full h-auto aspect-square" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function StorePage() {
  const products = await getProducts();
  const categories = [...new Set(products.map(p => p.category))];
  const collections = await getCollections();
  const collectionProducts = await getCollectionProducts();

  return (
    <>
      <StoreHeroSection />
      <div className="container mx-auto px-4 py-12">
        <Suspense fallback={<ProductListingSkeleton />}>
          <ProductListing 
            products={products} 
            categories={categories} 
            collections={collections}
            collectionProducts={collectionProducts}
          />
        </Suspense>
      </div>
      <ShoppingFeaturesSection />
    </>
  );
}
