
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
    "Herbal Teas",
    "Dried Fruits",
    "Sustainability",
    "Organic Farming",
    "Healthy Living",
];

export function BlogFilterSection() {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4 max-w-2xl">
                <div className="mb-8">
                    <Input
                        type="search"
                        placeholder="Search blog posts..."
                        className="w-full h-12 text-base"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-6">Categories</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                            <Button
                                key={category}
                                variant={index === 0 ? "default" : "outline"}
                                className="rounded-full px-6 py-2"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
