
"use client";

import { ConfirmationOrderSummary } from "@/components/confirmation-order-summary";
import { ConfirmationPaymentDetails } from "@/components/confirmation-payment-details";
import { ConfirmationShippingDetails } from "@/components/confirmation-shipping-details";
import { ConfirmationOrderTotal } from "@/components/confirmation-order-total";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useCart } from "@/context/cart-provider";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function ConfirmationPage() {
    const { orderData, restoreCart } = useCart();
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (!orderData) {
            // Redirect to home if there's no order data
            router.push('/');
        }

        return () => {
            restoreCart();
        }
    }, [orderData, router, restoreCart]);

    if (!isClient || !orderData) {
        return (
             <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow bg-gray-50/50">
                    <div className="container mx-auto px-4 py-12">
                         <div className="max-w-4xl mx-auto space-y-8">
                             <Skeleton className="h-48 w-full" />
                             <div className="grid md:grid-cols-2 gap-8">
                                <Skeleton className="h-48 w-full" />
                                <Skeleton className="h-48 w-full" />
                             </div>
                             <Skeleton className="h-48 w-full" />
                         </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-gray-50/50">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl font-semibold mb-8 text-center">Order Confirmation</h1>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <ConfirmationOrderSummary orderData={orderData} />
                        <div className="grid md:grid-cols-2 gap-8">
                            <ConfirmationPaymentDetails orderData={orderData} />
                            <ConfirmationShippingDetails orderData={orderData} />
                        </div>
                        <ConfirmationOrderTotal orderData={orderData} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
