
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CategoryProductCardProps {
  product: Product;
}

export function CategoryProductCard({ product }: CategoryProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/products/${product.slug}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={400}
          className="w-full h-auto object-cover aspect-[4/3]"
          data-ai-hint={`${product.category} product`}
        />
      </Link>
      <CardContent className="p-4 flex-grow space-y-2">
        <div className="flex justify-between items-start">
            <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
            </Link>
            <p className="text-lg font-bold text-primary/80">LKR {product.price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3 min-h-[3.75rem]">
            {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-2">
        <Button className="w-full" variant="secondary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
