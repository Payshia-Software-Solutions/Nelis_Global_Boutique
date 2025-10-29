
"use client";

import type { Product } from "@/lib/types";
import { ProductDetailsClient } from "@/components/product-details-client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductImages } from "@/components/product-images";
import { Breadcrumbs } from "./breadcrumbs";

interface ProductDisplayProps {
    product: Product;
}

export function ProductDisplay({ product }: ProductDisplayProps) {
    const breadcrumbItems = [
      { label: "Home", href: "/" },
      { label: "Store", href: "/store" },
      { label: product.category, href: `/store?category=${product.category}` },
      { label: product.name },
    ];

    const getDetailValue = (fieldName: string) => {
        const field = product.details?.find(d => d.field_name === fieldName);
        return field?.value;
    }

    const ingredients = getDetailValue("Ingredients");
    const brewingInstructions = getDetailValue("Brewing Instructions");
    const storage = getDetailValue("Storage Instructions");
    const about = getDetailValue("About this product");

    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-6">
              <ProductImages product={product} />
              <div className="space-y-8">
                  <ProductDetailsClient product={product} />
                  
                  {about && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About This Product</h2>
                        <div className="space-y-4 text-muted-foreground">
                           <p>{about}</p>
                        </div>
                    </div>
                  )}

                  <Tabs defaultValue="ingredients">
                      <TabsList>
                          {ingredients && <TabsTrigger value="ingredients">Ingredients</TabsTrigger>}
                          {brewingInstructions && <TabsTrigger value="brewing-instructions">Brewing Instructions</TabsTrigger>}
                          {storage && <TabsTrigger value="storage">Storage</TabsTrigger>}
                      </TabsList>
                      {ingredients && (
                        <TabsContent value="ingredients" className="pt-4">
                            <p className="text-muted-foreground whitespace-pre-line">{ingredients}</p>
                        </TabsContent>
                      )}
                      {brewingInstructions && (
                        <TabsContent value="brewing-instructions" className="pt-4">
                            <p className="text-muted-foreground whitespace-pre-line">{brewingInstructions}</p>
                        </TabsContent>
                      )}
                      {storage && (
                        <TabsContent value="storage" className="pt-4">
                            <p className="text-muted-foreground whitespace-pre-line">{storage}</p>
                        </TabsContent>
                      )}
                  </Tabs>
              </div>
          </div>
      </div>
    );
}
