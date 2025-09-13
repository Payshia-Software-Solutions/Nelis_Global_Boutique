
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-provider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CheckCircle } from "lucide-react";

export function ConfirmationOrderTotal({ orderData }: { orderData: any }) {
    const { cartTotal, clearCart, setOrderData } = useCart();
    const router = useRouter();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const shipping = 0.00;
    const tax = 0.00;
    const total = cartTotal + shipping + tax;

    const handlePlaceOrder = () => {
        // In a real app, you'd process the payment here.
        // For now, we'll just show the success dialog.
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        clearCart();
        setOrderData(null);
        router.push('/');
    };

    return (
        <>
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
                    <Button 
                        size="lg" 
                        className="w-full text-lg h-12 bg-black text-white hover:bg-gray-800"
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </CardContent>
            </Card>

            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="flex justify-center mb-4">
                            <CheckCircle className="h-16 w-16 text-green-500" />
                        </div>
                        <AlertDialogTitle className="text-center text-2xl">Order Placed Successfully!</AlertDialogTitle>
                        <AlertDialogDescription className="text-center">
                            Thank you for your purchase. You will receive an email confirmation shortly with your order details.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={handleDialogClose} className="w-full">
                            Continue Shopping
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

