"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";

interface ProductImagesProps {
    product: Product;
}

export function ProductImages({ product }: ProductImagesProps) {
    const imagePlaceholders = [
        product.imageUrl,
        'https://placehold.co/600x600.png',
        'https://placehold.co/600x600.png',
    ];

    return (
        <div className="flex flex-col gap-4">
            {imagePlaceholders.map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden border">
                    <Image
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover aspect-square"
                        data-ai-hint={index === 0 ? "tea product" : index === 1 ? "tea flowers" : "tea drink"}
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
