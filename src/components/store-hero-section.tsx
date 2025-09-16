
"use client";

import Image from 'next/image';

export function StoreHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white">
            <Image
                src="https://placehold.co/1920x700.png"
                alt="Nelis Global Boutique Online Store"
                layout="fill"
                objectFit="cover"
                className="opacity-100"
                data-ai-hint="tea products market"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl tracking-tight">Online Store</h1>
                <p className="mt-4 text-xl md:text-2xl text-primary/90">Nelis Global Boutique (Pvt) Ltd</p>
            </div>
        </section>
    );
}
