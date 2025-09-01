
"use client";

import { Leaf, Sun, Trash2, Apple, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const goals = [
    {
        icon: Sun,
        text: "Expand our renewable energy usage across operations",
    },
    {
        icon: Trash2,
        text: "Continue reducing waste and increasing efforts in production",
    },
    {
        icon: Apple,
        text: "Increase the sourcing of raw materials from organic farms",
    },
    {
        icon: Package,
        text: "Launch new eco-friendly packaging solutions",
    },
];

export function FutureGoalsSection() {
    return (
        <section className="py-24 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <Leaf className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl">Future Goals</h2>
                    </div>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        Our commitment to sustainability doesn't stop here. In the future, we plan to:
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {goals.map((goal, index) => (
                        <Card key={index} className="bg-card shadow-sm hover:shadow-md transition-shadow">
                           <CardContent className="p-6 flex items-center gap-6">
                                <div className="flex-shrink-0 text-primary">
                                    <goal.icon className="h-10 w-10" />
                                </div>
                                <p className="text-lg font-medium">{goal.text}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
                <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                    At Nelis Pvt Ltd, sustainability is not just a goal – it's a journey. We are constantly innovating and finding new ways to reduce our environmental footprint while improving the lives of the people we work with.
                </p>
            </div>
        </section>
    );
}
