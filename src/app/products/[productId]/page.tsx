
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star } from "lucide-react";
import { getProductById, getReviewsByProductId } from "@/lib/mock-data";
import type { Review } from "@/lib/types";
import { ProductDetailsClient } from "@/components/product-details-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductImages } from "@/components/product-images";

type ProductPageProps = {
    params: {
        productId: string;
    }
}

export async function generateMetadata({ params }: ProductPageProps) {
    const product = await getProductById(params.productId);
    if (!product) {
        return { title: "Product Not Found" };
    }
    return {
        title: `${product.name} | NelisGlobal Marketplace`,
        description: product.description,
    };
}

const ReviewCard = ({ review }: { review: Review }) => (
    <div className="flex space-x-4">
        <Avatar>
            <AvatarImage src={review.avatarUrl} alt={review.author} />
            <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
            <p className="font-semibold">{review.author}</p>
            <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("h-4 w-4", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
                ))}
            </div>
            <p className="font-semibold mt-2">Amazing color-changing tea!</p>
            <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
        </div>
    </div>
);


export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.productId);
  const reviews = await getReviewsByProductId(params.productId);

  if (!product) {
    notFound();
  }
  
  const averageRating = reviews.length > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length : 0;

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
        
            <div>
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
                <Card>
                    <CardContent className="space-y-6 p-6">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                            <div className="text-center">
                                <p className="text-4xl font-bold">{averageRating.toFixed(1)}</p>
                                <div className="flex items-center justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={cn("h-4 w-4", i < Math.round(averageRating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
                                    ))}
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Based on {reviews.length} reviews</p>
                            </div>
                            <div className="flex-grow text-right">
                               <Button variant="outline">Write a Review</Button>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {reviews.map((review, index) => (
                                <div key={review.id}>
                                   {index > 0 && <Separator />}
                                   <div className={cn(index > 0 && "pt-6")}>
                                     <ReviewCard review={review} />
                                   </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
