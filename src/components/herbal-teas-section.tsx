
"use client"
import { Leaf } from 'lucide-react';

export function HerbalTeasSection() {
    return (
        <section id="herbal-teas" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-3">
                        <Leaf className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl font-bold">Herbal Teas</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Experience the essence of nature with our handcrafted herbal teas, rich in antioxidants and wellness benefits.
                    </p>
                </div>
            </div>
        </section>
    );
}
