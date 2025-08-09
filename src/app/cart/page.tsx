
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import MainLayout from "../(main)/layout";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();

  return (
    <MainLayout>
      <div className="bg-background py-12">
          <div className="container mx-auto px-4">
              {itemCount === 0 ? (
                  <div className="text-center py-16">
                      <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
                      <h1 className="mt-4 text-3xl font-bold">Your cart is empty</h1>
                      <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
                      <Button asChild className="mt-6">
                          <Link href="/products">Start Shopping</Link>
                      </Button>
                  </div>
              ) : (
                  <>
                      <div className="text-center mb-12">
                          <h1 className="text-4xl font-bold tracking-tight">Your Shopping Cart</h1>
                          <p className="text-muted-foreground mt-2">Review your selections before proceeding to checkout</p>
                      </div>
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                          <div className="lg:col-span-2 space-y-4">
                              <h2 className="text-2xl font-semibold">Cart Items</h2>
                              {cart.map((item) => (
                                  <Card key={item.id} className="overflow-hidden">
                                      <CardContent className="p-4 flex items-center gap-4">
                                          <Image 
                                              src={item.imageUrl} 
                                              alt={item.name} 
                                              width={100} 
                                              height={100} 
                                              className="rounded-md object-cover" 
                                              data-ai-hint="tea product"
                                          />
                                          <div className="flex-grow space-y-1">
                                              <h3 className="font-semibold text-lg">{item.name}</h3>
                                              <p className="text-sm text-muted-foreground">Premium organic blend</p>
                                              <p className="text-base font-medium">${item.price.toFixed(2)}</p>
                                          </div>
                                          <div className="flex items-center gap-4">
                                              <div className="flex items-center border rounded-md">
                                                  <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                      <Minus className="h-4 w-4" />
                                                  </Button>
                                                  <span className="w-10 text-center font-medium">{item.quantity}</span>
                                                  <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                      <Plus className="h-4 w-4" />
                                                  </Button>
                                              </div>
                                              <p className="font-semibold w-24 text-right text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                                                  <Trash2 className="h-5 w-5 text-destructive" />
                                                  <span className="sr-only">Remove</span>
                                              </Button>
                                          </div>
                                      </CardContent>
                                  </Card>
                              ))}
                          </div>
                          <div className="sticky top-24">
                              <Card>
                                  <CardHeader>
                                      <CardTitle>Order Summary</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                      <div className="flex justify-between">
                                          <span>Subtotal</span>
                                          <span>${cartTotal.toFixed(2)}</span>
                                      </div>
                                      <div className="flex justify-between">
                                          <span>Shipping</span>
                                          <span className="text-primary">Free</span>
                                      </div>
                                      <Separator />
                                      <div className="flex justify-between font-bold text-lg">
                                          <span>Total</span>
                                          <span>${cartTotal.toFixed(2)}</span>
                                      </div>
                                      <Button variant="link" className="p-0 h-auto text-primary">Apply Discount Code</Button>
                                  </CardContent>
                                  <CardFooter className="flex-col space-y-2">
                                      <Button size="lg" className="w-full" asChild>
                                          <Link href="/checkout">Proceed to Checkout</Link>
                                      </Button>
                                      <Button variant="outline" className="w-full" asChild>
                                          <Link href="/products">Continue Shopping</Link>
                                      </Button>
                                  </CardFooter>
                              </Card>
                          </div>
                      </div>
                  </>
              )}
          </div>
      </div>
    </MainLayout>
  );
}
