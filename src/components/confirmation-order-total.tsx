
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ConfirmationOrderTotal({ orderData }: { orderData: any }) {
    const { cartTotal } = orderData;
    const shipping = 0.00;
    const tax = 0.00;
    const total = cartTotal + shipping + tax;

    return (
        <Card>
            <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Order Total</h3>
                <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>LKR {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>LKR {shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>LKR {tax.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-xl">
                        <span>Total</span>
                        <span>LKR {total.toFixed(2)}</span>
                    </div>
                </div>
                <Button size="lg" className="w-full text-lg h-12 bg-black text-white hover:bg-gray-800">
                    Place Order
                </Button>
            </CardContent>
        </Card>
    );
}
