"use client";

import { Globe, Truck, Store, Wand2 } from "lucide-react";

export function ExportOfferingsSection() {
    const offerings = [
        {
            icon: Truck,
            title: "Bulk Orders",
            description: "For large-scale distribution",
        },
        {
            icon: Store,
            title: "Ready-to-Retail Products",
            description: "For businesses looking to resell",
        },
        {
            icon: Wand2,
            title: "Custom Product Requests",
            description: "To suit unique market needs",
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="flex justify-center items-center gap-3">
                        <Globe className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Exporting Sri Lanka's Rich Flavors</h2>
                    </div>
                    <p className="mt-4 text-muted-foreground text-lg">
                        As part of our global expansion, Nelis Pvt Ltd proudly exports products to various countries, offering international buyers the opportunity to experience the natural goodness of Sri Lankan products. We are committed to ensuring that our export process is smooth and efficient, with attention to packaging, quality, and compliance with international standards.
                    </p>
                </div>

                <div className="bg-muted rounded-lg p-12 mt-12">
                    <h3 className="text-2xl font-semibold mb-8">Our export offerings include:</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {offerings.map((offering, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="text-primary mt-1">
                                    <offering.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">{offering.title}</h4>
                                    <p className="text-muted-foreground text-sm">{offering.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
