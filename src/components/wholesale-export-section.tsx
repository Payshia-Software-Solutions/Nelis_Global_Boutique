"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Package, Ship } from "lucide-react";

export function WholesaleExportSection() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className="order-2 md:order-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                        <Ship className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold">Wholesale & Export</h2>
                    </div>
                    <p className="text-muted-foreground mb-8">
                        Partner with us for bulk purchases and international trade opportunities. We offer competitive pricing for businesses looking to source premium Sri Lankan products for retail or distribution.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">
                            <Package className="mr-2 h-5 w-5" />
                            Inquire Now
                        </Link>
                    </Button>
                </div>
                <div className="order-1 md:order-2 h-full">
                    <Image
                        src="https://content-provider.payshia.com/nelis-global/export-packages-600x400-optimized.webp"
                        alt="Boxes of products ready for export"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-full object-cover"
                        data-ai-hint="export packages"
                    />
                </div>
            </div>
        </section>
    );
}
