
"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Plus, Heart, Leaf, Moon, Palette } from "lucide-react";

import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProductDetailsClientProps {
    product: Product;
}

export function ProductDetailsClient({ product }: ProductDetailsClientProps) {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(product.imageUrl);
    const { addToCart } = useCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          quantity: quantity
        });
        toast({
          title: "Added to cart",
          description: `${quantity} x ${product.name} has been added to your cart.`,
        });
    };
    
    const productFeatures = [
        { icon: Heart, text: "Handpicked from Sri Lankan gardens"},
        { icon: Leaf, text: "Rich in antioxidants"},
        { icon: Moon, text: "100% caffeine-free"},
        { icon: Palette, text: "Color-changing magic"},
    ]

    return (
        <>
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
                                data-ai-hint={index === 1 ? "tea product" : index === 2 ? "tea drink" : "tea packaging"}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <div>
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

                <p className="text-4xl font-extrabold">${product.price.toFixed(2)}</p>

                <p className="text-base text-foreground/80">{product.description}</p>
                
                <ul className="space-y-3">
                    {productFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <feature.icon className="h-5 w-5 text-primary" />
                            <span className="text-muted-foreground">{feature.text}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <label htmlFor="quantity" className="text-sm font-medium">Quantity:</label>
                        <Select value={String(quantity)} onValueChange={(val) => setQuantity(Number(val))}>
                            <SelectTrigger className="w-20">
                                <SelectValue placeholder={quantity} />
                            </SelectTrigger>
                            <SelectContent>
                                {[...Array(10)].map((_, i) => (
                                    <SelectItem key={i + 1} value={String(i + 1)}>{i + 1}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <Button size="lg" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                     <Button size="lg" variant="outline">
                        Buy Now
                    </Button>
                </div>
            </div>
        </>
    );
}
