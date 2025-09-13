
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingCart, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

export function CartSidebar() {
  const { isCartOpen, closeCart, cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <ShoppingCart className="h-24 w-24 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Your cart is empty.</p>
            <Button onClick={closeCart} variant="outline" className="mt-4">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6">
              <div className="divide-y divide-border">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 py-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md object-cover"
                      data-ai-hint="tea product"
                    />
                    <div className="flex-grow space-y-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                              <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                              <Plus className="h-4 w-4" />
                          </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">LKR {(item.price * item.quantity).toFixed(2)}</p>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <SheetFooter className="mt-auto pt-6 border-t">
              <div className="w-full space-y-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>LKR {cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="grid gap-2">
                  <Button size="lg" asChild>
                    <Link href="/checkout" onClick={closeCart}>Proceed to Checkout</Link>
                  </Button>
                  <Button variant="outline" onClick={closeCart}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
