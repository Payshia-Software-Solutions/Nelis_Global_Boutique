
"use client";

import { Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function BulkWholesaleSection() {
    return (
        <section className="bg-primary/10 py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center gap-3">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <h2 className="text-4xl">Bulk & Wholesale Orders</h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Looking to stock our products in your store, hotel, or wellness center? We offer bulk purchasing options with customized packaging solutions for retailers, boutique hotels, and international distributors.
                </p>
                <div className="mt-8">
                    <Button asChild variant="default" size="lg">
                        <Link href="/contact">
                            Contact us today for wholesale pricing and partnership opportunities!
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
