
"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
    {
        quote: "The New Year gift pack was absolutely perfect. The presentation was beautiful and the quality of the products exceeded our expectations. Our clients were delighted.",
        author: "Sarah M.",
        title: "Corporate Client",
    },
    {
        quote: "I ordered the Avurudu collection for my family. The authentic flavors brought back so many memories. Thank you for keeping our traditions alive!",
        author: "Priya K.",
        title: "International Customer",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">What Our Clients Say</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-muted/30 border-none shadow-none">
                            <CardContent className="p-8 space-y-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                                <p className="font-semibold text-right">- {testimonial.author}, <span className="font-normal">{testimonial.title}</span></p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
