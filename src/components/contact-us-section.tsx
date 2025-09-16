
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const contactDetails = [
    {
        icon: MapPin,
        text: "Colombo, Sri Lanka",
    },
    {
        icon: Phone,
        text: "+94 775 430 700",
    },
    {
        icon: Mail,
        text: "info@nelisglobal.com",
    },
]

export function ContactUsSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl mb-4">Contact Us</h2>
                    <p className="text-muted-foreground mb-8">
                        Ready to experience the finest Sri Lankan products? Get in touch with us today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
                        {contactDetails.map((detail, index) => (
                            <div key={index} className="flex items-center gap-3 text-muted-foreground">
                                <detail.icon className="h-5 w-5 text-primary" />
                                <span>{detail.text}</span>
                            </div>
                        ))}
                    </div>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
