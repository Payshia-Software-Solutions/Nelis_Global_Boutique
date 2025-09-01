
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const collections = [
    {
        title: "New Year Gift Packs",
        description: "Welcome the new year with our specially curated collection featuring premium herbal teas, organic dried fruits, and traditional Sri Lankan delicacies. Perfect for sharing prosperity and good health with friends and family.",
        features: [
            "Premium Ceylon tea blends",
            "Organic dried fruits and nuts",
            "Traditional sweets and treats",
        ],
        buttonText: "Shop New Year Gift Packs",
        buttonLink: "#",
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "new year gift pack",
        layout: "image-left",
    },
    {
        title: "Sinhala Tamil New Year Collection",
        description: "Celebrate Avurudu with authentic Sri Lankan flavors and traditional favorites. Our heritage collection brings together the finest local ingredients and time-honored recipes in beautiful presentation.",
        features: [
            "Traditional Avurudu sweets",
            "Heritage tea varieties",
            "Cultural gift presentation",
        ],
        buttonText: "Shop Avurudu Collection",
        buttonLink: "#",
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "new year collection",
        layout: "image-right",
    },
    {
        title: "Christmas Hampers",
        description: "Spread holiday cheer with our festive hampers filled with warming spices, special tea blends, and seasonal delights. Each hamper is beautifully packaged to bring joy to your celebrations.",
        features: [
            "Festive spice collections",
            "Holiday tea blends",
            "Seasonal treats and sweets",
        ],
        buttonText: "Shop Christmas Hampers",
        buttonLink: "#",
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "christmas hamper",
        layout: "image-left",
    },
];

export function CuratedCelebrationsSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl tracking-tight">Curated for Every Celebration</h2>
                </div>

                <div className="space-y-20">
                    {collections.map((collection, index) => (
                        <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`order-1 ${collection.layout === 'image-right' ? 'md:order-2' : 'md:order-1'}`}>
                                <Image 
                                    src={collection.imageUrl}
                                    alt={collection.title}
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-xl w-full h-auto object-cover"
                                    data-ai-hint={collection.imageHint}
                                />
                            </div>
                            <div className={`order-2 ${collection.layout === 'image-right' ? 'md:order-1' : 'md:order-2'}`}>
                                <h3 className="text-3xl font-semibold mb-4">{collection.title}</h3>
                                <p className="text-muted-foreground mb-6">{collection.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {collection.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild size="lg">
                                    <Link href={collection.buttonLink}>{collection.buttonText}</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
