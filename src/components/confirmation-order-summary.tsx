
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ConfirmationOrderSummary({ orderData }: { orderData: any }) {
    const { cart, cartTotal } = orderData;
    const shippingCost = 0.00;
    const tax = 0.00; // Assuming no tax for now
    const total = cartTotal + shippingCost + tax;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {cart.map((item: any) => (
                        <div key={item.id} className="flex items-center gap-4">
                            <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="rounded-md border" />
                            <div className="flex-grow">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-semibold">LKR {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />
                <div>
                    <h3 className="font-semibold mb-2">Shipping Method</h3>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Standard Shipping</span>
                        <span>LKR {shippingCost.toFixed(2)}</span>
                    </div>
                </div>
                <Separator className="my-6" />
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>LKR {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>LKR {shippingCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>LKR {tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>LKR {total.toFixed(2)}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
