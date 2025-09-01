"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Utensils } from 'lucide-react';

export function ProductsHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white">
            <Image
                src="https://placehold.co/1920x700.png"
                alt="A collection of natural products"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
                data-ai-hint="natural products background"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">OUR PRODUCTS</h1>
                <p className="mt-4 text-2xl md:text-3xl text-primary/90">Discover the Pure Goodness of Nature</p>
                <div className="mt-8 flex justify-center items-center gap-8 text-lg font-medium">
                    <Link href="#herbal-teas" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Leaf className="h-5 w-5" />
                        <span>Herbal Teas</span>
                    </Link>
                    <Link href="#dried-fruits" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Utensils className="h-5 w-5" />
                        <span>Dried Fruits</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
