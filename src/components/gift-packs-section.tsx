
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
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Gift Packs – Perfect for Every Occasion</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className="order-1 md:order-2 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4">Celebrate with Authentic Flavors</h3>
                    <p className="text-muted-foreground mb-6">
                        Our specially curated gift packs are perfect for New Year celebrations, Sinhala Tamil New Year, Christmas, and special occasions. Each pack contains a thoughtful selection of our finest products, beautifully packaged to share the taste of Sri Lanka with your loved ones.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {giftPackFeatures.map((feature, index) => (
                             <li key={index} className="flex items-center">
                                <Check className="h-5 w-5 text-primary mr-3" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Button asChild size="lg" className="pointer-events-none opacity-50">
                        <Link href="/gift-packs">
                            <Gift />
                            Shop Gift Packs
                        </Link>
                    </Button>
                </div>
                <div className="order-2 md:order-1 h-full">
                     <Image
                        src="https://content-provider.payshia.com/nelis-global/600x400-gift-packs-optimized.webp"
                        alt="A collection of beautifully packaged gift packs"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-full object-cover"
                        data-ai-hint="gift packs collection"
                    />
                </div>
            </div>
        </section>
    );
}
