"use client";

import { Button } from "@/components/ui/button";
import { Check, Gift } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const giftPackFeatures = [
    "New Year Special Collections",
    "Sinhala Tamil New Year Packs",
    "Christmas Gift Sets",
    "Custom Occasion Packages",
];

export function GiftPacksSection() {
    return (
        <section className="bg-background">
            <div className="grid md:grid-cols-2 items-stretch">
                <div className="relative min-h-[500px] md:min-h-0">
                     <Image
                        src="https://content-provider.payshia.com/nelis-global/new/gift-pack.webp"
                        alt="A collection of beautifully packaged gift packs"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="gift packs collection"
                    />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-16">
                    <div className="flex items-center gap-3 mb-4">
                        <Gift className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Gift Packs</h2>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Perfect for Every Occasion</h3>
                    <p className="text-muted-foreground mb-6">
                        Our specially curated gift packs are perfect for New Year celebrations, Sinhala Tamil New Year, Christmas, and special occasions. Each pack contains a thoughtful selection of our finest products, beautifully packaged to share the taste of Sri Lanka with your loved ones.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {giftPackFeatures.map((feature, index) => (
                             <li key={index} className="flex items-center">
                                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Button size="lg" disabled>
                        Explore Gift Packs
                    </Button>
                </div>
            </div>
        </section>
    );
}
