
"use client";

import Link from "next/link";
import { Globe, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConnectOnlineSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center gap-3">
                    <Globe className="h-8 w-8 text-primary" />
                    <div>
                        <h2 className="text-3xl">Connect with Us</h2>
                        <h2 className="text-3xl">Online</h2>
                    </div>
                </div>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Follow us on our social media platforms to stay updated on the latest products, news, and promotions.
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="#"><Facebook className="h-6 w-6" /></Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="#"><Instagram className="h-6 w-6" /></Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="#"><Linkedin className="h-6 w-6" /></Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="#"><Twitter className="h-6 w-6" /></Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
