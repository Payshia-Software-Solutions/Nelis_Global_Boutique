
"use client";

import { Leaf, Recycle, Award } from "lucide-react";
import Image from "next/image";

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
        <section className="py-16 relative">
            <Image
                src="https://content-provider.payshia.com/nelis-global/new/why-choose.webp"
                alt="Background image of tea leaves and flowers"
                fill
                objectFit="cover"
                className="z-0"
                data-ai-hint="tea leaves flowers"
            />
            <div className="absolute inset-0 bg-white/70 dark:bg-black/70 z-10" />
            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Why Choose Us?</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-primary/20 dark:bg-white/20 rounded-full p-4 mb-4">
                                <feature.icon className="h-10 w-10 text-primary dark:text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="max-w-xs text-foreground/90 dark:text-white/90">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
