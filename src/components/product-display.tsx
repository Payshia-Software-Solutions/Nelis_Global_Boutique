
"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Product } from "@/lib/types";
import { ProductDetailsClient } from "@/components/product-details-client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductImages } from "@/components/product-images";
import { YouMightAlsoLikeSection } from "@/components/you-might-also-like-section";

interface ProductDisplayProps {
    product: Product;
}

export function ProductDisplay({ product }: ProductDisplayProps) {
    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <ProductImages product={product} />
                <div className="space-y-8">
                    <ProductDetailsClient product={product} />
                    
                    <div>
                        <h2 className="text-2xl font-bold mb-4">About This Product</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Our Butterfly Pea Tea is sourced directly from organic farms in the heart of Sri Lanka. This extraordinary herbal tea is made from the vibrant blue flowers of the Clitoria ternatea plant, known for its stunning color-changing properties and numerous health benefits.
                            </p>
                            <p>
                                Rich in anthocyanins and antioxidants, this caffeine-free tea promotes wellness while providing a magical drinking experience. Simply add a few drops of lemon juice to watch the beautiful blue transform into a lovely purple hue.
                            </p>
                        </div>
                    </div>

                    <Tabs defaultValue="ingredients">
                        <TabsList>
                            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                            <TabsTrigger value="brewing-instructions">Brewing Instructions</TabsTrigger>
                            <TabsTrigger value="storage">Storage</TabsTrigger>
                        </TabsList>
                        <TabsContent value="ingredients" className="pt-4">
                            <p className="text-muted-foreground">100% Organic Butterfly Pea Flowers (Clitoria ternatea)</p>
                        </TabsContent>
                        <TabsContent value="brewing-instructions" className="pt-4">
                            <p className="text-muted-foreground">Steep 1-2 teaspoons of dried flowers in hot water (not boiling) for 5-10 minutes. Enjoy hot or cold. Add lemon or lime juice to see the color change!</p>
                        </TabsContent>
                        <TabsContent value="storage" className="pt-4">
                            <p className="text-muted-foreground">Store in a cool, dry place away from direct sunlight to maintain freshness and color.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <YouMightAlsoLikeSection />
        </div>
    );
}
