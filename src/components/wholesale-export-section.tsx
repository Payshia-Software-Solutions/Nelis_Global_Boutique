
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WholesaleExportSection() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Wholesale & Export</h2>
                <p className="text-muted-foreground mb-8">
                    Partner with us for bulk purchases and international trade opportunities. We offer competitive pricing for businesses looking to source premium Sri Lankan products for retail or distribution.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Inquire Now</Link>
                </Button>
            </div>
        </section>
    );
}
