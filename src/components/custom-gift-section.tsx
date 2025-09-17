
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export function CustomGiftSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                 <div className="flex justify-center items-center gap-3 mb-4">
                    <Gift className="h-8 w-8 text-primary" />
                    <h2 className="text-4xl font-bold tracking-tight">Create Your Custom Gift</h2>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                    Can&apos;t find the perfect fit? Design your own unique gift pack by selecting from our wide range of herbal teas, dried fruits, and special blends. Perfect for a truly personal touch!
                </p>
                <Button asChild size="lg" variant="outline">
                    <Link href="#">Customize Your Gift</Link>
                </Button>
            </div>
        </section>
    );
}
