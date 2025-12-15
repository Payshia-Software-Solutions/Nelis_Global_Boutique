
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Package, Ship } from "lucide-react";

export function WholesaleExportSection() {
    return (
        <section className="relative w-full h-[500px] text-white">
            <div className="absolute inset-0">
                <Image
                    src="https://content-provider.payshia.com/nelis-global/new/export.webp"
                    alt="Boxes of products ready for export"
                    fill
                    className="object-cover transform -scale-x-100"
                    data-ai-hint="export packages"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/50 to-transparent" />

            <div className="relative container mx-auto px-4 h-full flex items-center justify-end">
                <div className="md:w-1/2 text-right">
                    <div className="flex items-center justify-end gap-3 mb-4">
                        <h2 className="text-3xl font-bold">Wholesale & Export</h2>
                        <Ship className="h-8 w-8" />
                    </div>
                    <p className="mb-8">
                        Partner with us for bulk purchases and international trade opportunities. We offer competitive pricing for businesses looking to source premium Sri Lankan products for retail or distribution.
                    </p>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        <Link href="/contact">
                            <Package className="mr-2 h-5 w-5" />
                            Inquire Now
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
