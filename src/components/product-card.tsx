import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCardClient } from "./product-card-client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useProductImages } from "@/hooks/use-product-images";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product: initialProduct }: ProductCardProps) {
  const { product } = useProductImages(initialProduct);

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/products/${product.slug}`} className="block overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-cover aspect-square transition-transform duration-300 hover:scale-105"
          data-ai-hint={`${product.category} product`}
          priority={product.featured}
          onError={(e) => e.currentTarget.src = 'https://placehold.co/400x400.png'}
        />
      </Link>
      <CardContent className="p-4 flex-grow space-y-2">
        <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
          <h3 className="font-semibold text-lg leading-tight min-h-[2.5rem] line-clamp-2">{product.name}</h3>
        </Link>
        <p className="text-lg font-bold text-primary">LKR {product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-2">
        <ProductCardClient product={product} />
      </CardFooter>
    </Card>
  );
}
