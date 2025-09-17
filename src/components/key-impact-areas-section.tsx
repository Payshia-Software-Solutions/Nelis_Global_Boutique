
"use client";

import { Users, Recycle, Wheat, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const impactAreas = [
    {
        icon: Users,
        title: "Empowering Rural Women",
        description: "A major part of our impact is our commitment to creating sustainable livelihoods for rural women. Over 99% of our workers and suppliers are women from rural communities in Sri Lanka. We provide them with fair wages, and opportunities for personal and professional growth. By empowering women, we help uplift their families and strengthen local communities.",
    },
    {
        icon: Recycle,
        title: "Reducing Food Waste",
        description: "We are dedicated to reducing food waste by utilizing surplus fruits and vegetables that would otherwise go unused. By transforming these materials into healthy, chemical-free products, we help preserve the environment and reduce the strain on natural resources. Our innovative approach helps both farmers and consumers benefit from products that would otherwise be wasted.",
    },
    {
        icon: Wheat,
        title: "Supporting Local Agriculture",
        description: "We source our raw materials from local farmers who use sustainable practices. Most of our fruits and herbs are grown in the farmers' home gardens, promoting organic farming and preserving biodiversity. This supports the local agricultural economy and ensures that our products are not only of the highest quality but also sustainable.",
    },
    {
        icon: Package,
        title: "Eco-Friendly Packaging",
        description: "We are committed to using eco-friendly, biodegradable packaging materials to minimize our carbon footprint. Our packaging solutions are designed to reduce plastic waste and encourage sustainability in every step of the supply chain.",
    },
];

export function KeyImpactAreasSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold">Our Key Impact Areas</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {impactAreas.map((area, index) => (
                        <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                           <CardContent className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex-shrink-0 bg-primary/20 rounded-full p-3">
                                        <area.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl">{area.title}</h3>
                                </div>
                                <p className="text-muted-foreground">{area.description}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
