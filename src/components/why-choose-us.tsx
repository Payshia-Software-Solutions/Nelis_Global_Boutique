
"use client";

import { Leaf, Recycle, Award } from "lucide-react";

const features = [
    {
        icon: Leaf,
        title: "100% Natural",
        description: "No artificial preservatives, colors, or additives. Pure, natural goodness in every product.",
    },
    {
        icon: Recycle,
        title: "Sustainable",
        description: "Committed to environmentally friendly practices and supporting local communities.",
    },
    {
        icon: Award,
        title: "Premium Quality",
        description: "Carefully selected and processed to maintain the highest standards of quality and freshness.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-primary/20 rounded-full p-4 mb-4">
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
