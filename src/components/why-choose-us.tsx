
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
        <section className="relative w-full py-24 text-white">
            <Image
                src="https://content-provider.payshia.com/nelis-global/new/why-choose.webp"
                alt="Background image of tea leaves and flowers"
                fill
                objectFit="cover"
                className="z-0"
                data-ai-hint="tea leaves flowers"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="container mx-auto px-4 relative z-20">
                <div className="max-w-2xl">
                    <div className="space-y-12">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us?</h2>
                        </div>
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="bg-white/20 rounded-full p-4 flex-shrink-0">
                                    <feature.icon className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-white/80 text-lg">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
