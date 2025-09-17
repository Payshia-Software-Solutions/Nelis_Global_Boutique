
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function JoinOurJourneySection() {
    return (
        <section className="bg-muted py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Join Our Journey</h2>
                    <p className="text-muted-foreground mb-8">
                        At Nelis Pvt Ltd, we are not just a business – we are a movement towards a healthier, more sustainable future. Whether you are a consumer, a retailer, or a business looking for bulk supply, we invite you to be part of our journey.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Get in Touch to Collaborate</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
