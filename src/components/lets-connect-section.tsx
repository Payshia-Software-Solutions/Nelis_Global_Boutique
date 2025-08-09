"use client";

import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function LetsConnectSection() {
    return (
        <section className="bg-primary/10 py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center gap-3">
                    <MessageSquare className="h-8 w-8 text-primary" />
                    <h2 className="text-4xl font-bold">Let's Connect</h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    Ready to take your business to the next level with our premium products? Whether you're a retailer, distributor, or international buyer, we are here to discuss partnership opportunities.
                </p>
                <div className="mt-8">
                    <Button asChild variant="secondary" size="lg">
                        <Link href="/contact">
                            Contact us today for wholesale pricing and export inquiries!
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
