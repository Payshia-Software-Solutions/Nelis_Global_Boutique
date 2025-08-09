
"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Plus, ShoppingCart, CheckCircle, Shield } from "lucide-react";

import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface ProductDetailsClientProps {
    product: Product;
}

export function ProductDetailsClient({ product }: ProductDetailsClientProps) {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(product.imageUrl);
    const { addToCart } = useCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl,
            });
        }
        toast({
          title: "Added to cart",
          description: `${quantity} x ${product.name} has been added to your cart.`,
        });
    };

    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
                <div className="border rounded-lg overflow-hidden mb-4">
                    <Image
                        src={activeImage}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="w-full h-auto object-cover aspect-square transition-all"
                        data-ai-hint={`${product.category} product`}
                    />
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {[product.imageUrl, 'https://placehold.co/100x100.png', 'https://placehold.co/100x100.png', 'https://placehold.co/100x100.png'].map((img, index) => (
                        <button key={index} onClick={() => setActiveImage(img)} className={cn("border rounded-md overflow-hidden", activeImage === img && "ring-2 ring-primary")}>
                            <Image
                                src={img}
                                alt={`${product.name} thumbnail ${index + 1}`}
                                width={100}
                                height={100}
                                className="w-full h-auto object-cover aspect-square"
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <p className="text-sm font-medium text-primary">{product.category.toUpperCase()}</p>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h1>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={cn("h-5 w-5", i < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
                            ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                    </div>
                </div>

                <p className="text-base text-foreground/80">{product.description}</p>
                
                <div>
                    <h3 className="font-semibold text-lg mb-2">Details</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                        {product.details.map((detail, index) => (
                           <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </div>

                <p className="text-4xl font-extrabold">${product.price.toFixed(2)}</p>

                <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-md">
                        <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">{quantity}</span>
                         <Button variant="ghost" size="icon" onClick={() => setQuantity(q => q + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                    <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                    </Button>
                </div>
                
                <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">In Stock - Ships within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">2-Year Manufacturer Warranty</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
