
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
            <div className="flex justify-between items-center">
                <p className="font-semibold">{review.author}</p>
                <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
            <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("h-4 w-4", i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
                ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{review.comment}</p>
        </div>
    </div>
);


export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.productId);
  const reviews = await getReviewsByProductId(params.productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <ProductDetailsClient product={product} />
      
      <Separator className="my-12" />

      <Card>
        <CardHeader>
          <CardTitle>Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
            {reviews.map((review, index) => (
                <>
                   <ReviewCard key={review.id} review={review} />
                   {index < reviews.length - 1 && <Separator />}
                </>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
