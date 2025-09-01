
"use client";

import { Leaf, Gift, Globe, Calendar } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "Premium Quality Ingredients",
        description: "Sourced from the finest gardens and producers across Sri Lanka",
    },
    {
        icon: Gift,
        title: "Thoughtfully Curated",
        description: "Each pack is carefully assembled with complementary flavors and experiences",
    },
    {
        icon: Globe,
        title: "Sustainable & Ethical",
        description: "Supporting local communities and environmentally responsible practices",
    },
    {
        icon: Calendar,
        title: "Perfect for Any Occasion",
        description: "From intimate gatherings to grand celebrations, we have the perfect gift",
    },
];

export function WhyChooseGiftPacksSection() {
    return (
        <section className="bg-muted/30 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl">Why Choose Nelis Gift Packs?</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-primary/10 rounded-full p-4 mb-4">
                                <feature.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground max-w-xs">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
