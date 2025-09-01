
"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LocationSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <MapPin className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl">Our Location</h2>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-muted rounded-lg w-full h-96 flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                            <MapPin className="h-16 w-16 mx-auto" />
                            <p className="mt-2">Google Maps Embed</p>
                        </div>
                    </div>
                    <div>
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle>Visit Our Office</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-muted-foreground text-lg">
                                <p className="font-semibold text-foreground">Nelis Global Boutique (Pvt) Ltd</p>
                                <p>No 666/1/1/1, Colombo Road</p>
                                <p>Palmgarden, Sri Lanka</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
