
"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductImagesProps {
    product: Product;
}

export function ProductImages({ product }: ProductImagesProps) {
    const [activeImage, setActiveImage] = useState(product.imageUrl);
    const imagePlaceholders = [
        product.imageUrl,
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png',
        'https://placehold.co/600x400.png'
    ]

    return (
        <div>
            <div className="border rounded-lg overflow-hidden mb-4">
                <Image
                    src={activeImage}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover aspect-square transition-all"
                    data-ai-hint={`${product.category} product`}
                    priority
                />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {imagePlaceholders.map((img, index) => (
                    <button 
                        key={index} 
                        onClick={() => setActiveImage(img)} 
                        className={cn(
                            "border rounded-md overflow-hidden", 
                            activeImage === img && "ring-2 ring-primary"
                        )}
                    >
                        <Image
                            src={img}
                            alt={`${product.name} thumbnail ${index + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-auto object-cover aspect-square"
                            data-ai-hint={index === 0 ? "tea product" : index === 1 ? "tea flowers" : index === 2 ? "tea drink" : "tea packaging"}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
