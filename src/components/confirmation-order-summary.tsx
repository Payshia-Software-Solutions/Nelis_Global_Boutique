
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ConfirmationOrderSummary() {
    const item = {
        name: "Men T-Shirt",
        size: "S",
        color: "Black",
        qty: 4,
        price: 1800.00,
        imageUrl: "https://placehold.co/100x100.png"
    };

    const shippingCost = 500.00;
    const tax = 1800.00;
    const subtotal = item.price * item.qty;
    const total = subtotal + shippingCost + tax;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="rounded-md border" />
                    <div className="flex-grow">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Size: {item.size}, Color: {item.color}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.qty}</p>
                    </div>
                    <p className="font-semibold">LKR {item.price.toFixed(2)}</p>
                </div>
                <Separator className="my-6" />
                <div>
                    <h3 className="font-semibold mb-2">Shipping Method</h3>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Express Shipping</span>
                        <span>LKR {shippingCost.toFixed(2)}</span>
                    </div>
                </div>
                <Separator className="my-6" />
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>LKR {subtotal.toFixed(2)}</span>
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
