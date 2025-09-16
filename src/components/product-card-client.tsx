
"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/lib/types";
import { ShoppingCart } from "lucide-react";

interface ProductCardClientProps {
  product: Product;
}

export function ProductCardClient({ product }: ProductCardClientProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Button className="w-full" variant="secondary" onClick={handleAddToCart}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
}
