
"use client";

import { Leaf, Users, Wand2, Clock, Star } from "lucide-react";

const reasons = [
    {
        icon: Leaf,
        title: "High-Quality Products",
        description: "We produce chemical-free, preservative-free products made from local, sustainably sourced ingredients.",
    },
    {
        icon: Users,
        title: "Fair Trade & Empowerment",
        description: "Our business supports rural women and local farmers, creating a positive impact on the community.",
    },
    {
        icon: Wand2,
        title: "Customization & Flexibility",
        description: "We offer custom packaging, private labeling, and flexible ordering options to suit your business needs.",
    },
    {
        icon: Clock,
        title: "Efficient Service",
        description: "From order processing to delivery, we ensure a seamless experience for our wholesale and export clients.",
    },
];

export function WhyChooseNelisSection() {
    return (
        <section className="py-24 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-2">
                        <Star className="h-7 w-7 text-yellow-500" />
                        <h2 className="text-3xl font-bold">Why Choose Nelis Pvt Ltd for Wholesale & Export?</h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-card p-8 rounded-lg shadow-sm text-center flex flex-col items-center">
                            <div className="bg-primary/10 rounded-full p-4 mb-6">
                                <reason.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                            <p className="text-muted-foreground flex-grow">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
