
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProductCardClient } from "./product-card-client";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="text-center group flex flex-col h-full">
        <div className="relative overflow-hidden mb-4">
            <Link href={`/products/${product.slug}`}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={`${product.category} product`}
                />
            </Link>
        </div>
        <div className="space-y-2 flex-grow">
            <Link href={`/products/${product.slug}`}>
                <h3 className="font-semibold text-lg hover:text-primary transition-colors min-h-[3rem]">{product.name}</h3>
            </Link>
            <div className="flex items-center justify-center gap-1">
                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("h-4 w-4", i < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
                    ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviewCount} Reviews)</span>
            </div>
            <p className="text-lg">LKR {product.price.toFixed(2)}</p>
        </div>
        <div className="mt-4">
            <ProductCardClient product={product} />
        </div>
    </div>
  );
}
