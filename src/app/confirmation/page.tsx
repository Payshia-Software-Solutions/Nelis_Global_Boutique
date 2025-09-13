
"use client";

import { ConfirmationOrderSummary } from "@/components/confirmation-order-summary";
import { ConfirmationPaymentDetails } from "@/components/confirmation-payment-details";
import { ConfirmationShippingDetails } from "@/components/confirmation-shipping-details";
import { ConfirmationOrderTotal } from "@/components/confirmation-order-total";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ConfirmationPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-gray-50/50">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-3xl font-semibold mb-8 text-center">Order Confirmation</h1>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <ConfirmationOrderSummary />
                        <div className="grid md:grid-cols-2 gap-8">
                            <ConfirmationPaymentDetails />
                            <ConfirmationShippingDetails />
                        </div>
                        <ConfirmationOrderTotal />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
