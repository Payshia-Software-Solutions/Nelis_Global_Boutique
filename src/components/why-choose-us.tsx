
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
        <section className="relative w-full py-24">
            <Image
                src="https://content-provider.payshia.com/nelis-global/new/why-choose.webp"
                alt="Background image of tea leaves and flowers"
                fill
                objectFit="cover"
                className="z-0"
                data-ai-hint="tea leaves flowers"
            />
            <div className="container mx-auto px-4 relative z-10 flex justify-start">
                <div className="max-w-xl">
                    <div className="space-y-12 text-black">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us?</h2>
                        </div>
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="bg-black/10 rounded-full p-4 flex-shrink-0">
                                    <feature.icon className="h-8 w-8 text-black" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-lg">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
