"use client";

import { Package, ShoppingCart, Building2, Monitor, PackagePlus, Boxes, Scale } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const opportunities = [
    {
        icon: ShoppingCart,
        title: "Retailers & Supermarkets",
        description: "Looking to offer their customers high-quality, healthy products.",
    },
    {
        icon: Building2,
        title: "Boutique Hotels & Wellness Centers",
        description: "Seeking premium products for their guests.",
    },
    {
        icon: Monitor,
        title: "Online Stores",
        description: "Looking to add unique, sustainable items to their product lineup.",
    },
];

const options = [
    {
        icon: PackagePlus,
        text: "Custom packaging solutions",
    },
    {
        icon: Boxes,
        text: "Bulk purchasing",
    },
    {
        icon: Scale,
        text: "Flexible order quantities",
    },
]

export function WholesaleOpportunitiesSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="flex justify-center items-center gap-3">
                        <Package className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Wholesale Opportunities</h2>
                    </div>
                    <p className="mt-4 text-muted-foreground text-lg">
                        We offer competitive wholesale pricing on a wide range of products, including herbal teas, dried fruits, and special blends. Our products are perfect for:
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 my-12">
                    {opportunities.map((op, index) => (
                        <Card key={index} className="text-center p-8 bg-card shadow-sm hover:shadow-lg transition-shadow">
                            <div className="mb-4 inline-block bg-primary/10 text-primary p-4 rounded-full">
                                <op.icon className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{op.title}</h3>
                            <p className="text-muted-foreground">{op.description}</p>
                        </Card>
                    ))}
                </div>
                
                <div className="bg-muted p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-center mb-6">Our wholesale options include:</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6 text-center">
                        {options.map((option, index) => (
                            <div key={index} className="flex items-center justify-center gap-3">
                                <option.icon className="h-6 w-6 text-primary" />
                                <span className="font-medium">{option.text}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-muted-foreground max-w-4xl mx-auto">
                        We work closely with our wholesale partners to ensure timely delivery, high-quality standards, and reliable customer service. Whether you&apos;re a small boutique or a large retailer, we can meet your needs.
                    </p>
                </div>
            </div>
        </section>
    );
}
