
"use client";

import { useState } from "react";
import { Star, Heart, Leaf, Moon, Sun, ShoppingCart, Zap } from "lucide-react"; // Using Sun as a placeholder for Palette

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
import { ToastAction } from "@/components/ui/toast";

interface ProductDetailsClientProps {
    product: Product;
}

export function ProductDetailsClient({ product }: ProductDetailsClientProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart, openCart, buyNow } = useCart();
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
          action: (
            <ToastAction altText="View cart" onClick={openCart}>View cart</ToastAction>
          ),
        });
    };

    const handleBuyNow = () => {
      buyNow({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: quantity
      });
    }
    
    const productFeatures = [
        { icon: Leaf, text: "Handpicked from Sri Lankan gardens"},
        { icon: Heart, text: "Rich in antioxidants"},
        { icon: Moon, text: "100% caffeine-free"},
        { icon: Sun, text: "Color-changing magic"}, // Using Sun as placeholder
    ]

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl md:text-4xl tracking-tight">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={cn("h-5 w-5", i < Math.round(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground")} />
                        ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)} ({product.reviewCount} reviews)</span>
                </div>
            </div>

            <p className="text-3xl">LKR {product.price.toFixed(2)}</p>

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
                <label htmlFor="quantity" className="text-sm font-medium">Quantity:</label>
                <Select value={String(quantity)} onValueChange={(val) => setQuantity(Number(val))}>
                    <SelectTrigger id="quantity" className="w-24">
                        <SelectValue placeholder={String(quantity)} />
                    </SelectTrigger>
                    <SelectContent>
                        {[...Array(10)].map((_, i) => (
                            <SelectItem key={i + 1} value={String(i + 1)}>{i + 1}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <Button size="lg" onClick={handleAddToCart}>
                    <ShoppingCart />
                    Add to Cart
                </Button>
                 <Button size="lg" variant="outline" onClick={handleBuyNow}>
                    <Zap />
                    Buy Now
                </Button>
            </div>
        </div>
    );
}
