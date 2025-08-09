
"use client";

import { Shield, Globe, LifeBuoy } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Safe & Secure Checkout",
        description: "We ensure that your shopping experience is safe and secure with our encrypted payment gateway.",
    },
    {
        icon: Globe,
        title: "Worldwide Shipping Available",
        description: "We offer global shipping to make sure products reach every corner of the world.",
    },
    {
        icon: LifeBuoy,
        title: "Customer Support",
        description: "Have questions? Our customer support is here to help. Contact us through email or our hotline for assistance.",
    },
];

export function ShoppingFeaturesSection() {
    return (
        <section className="bg-muted py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-card p-8 rounded-lg shadow-sm">
                            <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
                                <feature.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
