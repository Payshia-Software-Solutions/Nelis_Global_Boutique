"use client";

import Image from 'next/image';

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
            </div>
        </section>
    );
}
