
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProductImagesProps {
    product: Product;
}

export function ProductImages({ product }: ProductImagesProps) {
    const [mainImages, setMainImages] = useState<string[]>([]);
    const [thumbnailImages, setThumbnailImages] = useState<string[]>([]);
    const [activeImage, setActiveImage] = useState<string>('');

    useEffect(() => {
        if (product && product.images && product.images.length > 0) {
            const allImages = product.images;
            setMainImages(allImages);
            setThumbnailImages(allImages.slice(0, 4));
            setActiveImage(allImages[0]);
        } else {
            // Fallback images if product has no images
            const fallbackImages = [
                product.imageUrl,
                'https://placehold.co/600x600.png?text=View+2',
                'https://placehold.co/600x600.png?text=View+3',
                'https://placehold.co/600x600.png?text=View+4',
            ];
            setMainImages([fallbackImages[0]]);
            setThumbnailImages(fallbackImages);
            setActiveImage(fallbackImages[0]);
        }
    }, [product]);

    return (
        <div className="grid grid-cols-[80px_1fr] gap-4">
            <div className="flex flex-col gap-4">
                {thumbnailImages.map((img, index) => (
                    <button 
                        key={index} 
                        className={cn(
                            "rounded-lg overflow-hidden border-2",
                            img === activeImage ? "border-primary" : "border-transparent"
                        )}
                        onClick={() => setActiveImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`${product.name} thumbnail ${index + 1}`}
                            width={80}
                            height={80}
                            className="w-full h-auto object-cover aspect-square"
                            data-ai-hint={index === 0 ? "tea product" : index === 1 ? "tea flowers" : "tea drink"}
                            onError={(e) => e.currentTarget.src = 'https://placehold.co/80x80.png'}
                        />
                    </button>
                ))}
            </div>
            <div className="flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden border">
                     <Image
                        src={activeImage}
                        alt={`${product.name} main view`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover aspect-[4/3]"
                        data-ai-hint="tea product"
                        priority
                        onError={(e) => e.currentTarget.src = 'https://placehold.co/600x400.png'}
                    />
                </div>
            </div>
        </div>
    );
}
