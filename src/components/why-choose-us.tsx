
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
        <section className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-12">
                        <div className="text-left">
                            <h2 className="text-3xl font-bold text-foreground">Why Choose Us?</h2>
                        </div>
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-3 flex-shrink-0">
                                    <feature.icon className="h-8 w-8 text-primary dark:text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative w-full h-96 md:h-[500px]">
                        <Image
                            src="https://content-provider.payshia.com/nelis-global/new/why-choose.webp"
                            alt="Background image of tea leaves and flowers"
                            fill
                            objectFit="contain"
                            className="z-0"
                            data-ai-hint="tea leaves flowers"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
