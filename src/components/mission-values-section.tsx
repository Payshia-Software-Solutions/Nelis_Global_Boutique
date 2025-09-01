
"use client";

import { Leaf, Recycle, Users, Heart } from "lucide-react";

const values = [
    {
        icon: Leaf,
        title: "Quality & Purity",
        description: "Offering 100% natural, preservative-free products.",
    },
    {
        icon: Recycle,
        title: "Sustainability",
        description: "Minimizing food waste and reducing plastic usage.",
    },
    {
        icon: Users,
        title: "Women Empowerment",
        description: "Creating job opportunities and financial independence for rural women.",
    },
    {
        icon: Heart,
        title: "Community Growth",
        description: "Sourcing from small-scale farmers and supporting local economies.",
    },
];

export function MissionValuesSection() {
    return (
        <section className="bg-muted py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl">Our Mission & Values</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm transition-shadow hover:shadow-lg">
                            <div className="bg-primary/10 rounded-full p-4 mb-6">
                                <value.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-muted-foreground flex-grow">{value.description}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
                    We believe in ethical business practices that benefit both people and the planet.
                </p>
            </div>
        </section>
    );
}
