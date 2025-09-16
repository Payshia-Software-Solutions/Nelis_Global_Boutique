
"use client";

import Image from 'next/image';

export function GiftPacksHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white">
            <Image
                src="https://placehold.co/1920x700.png"
                alt="A collection of beautifully wrapped gift packs with festive decorations"
                layout="fill"
                objectFit="cover"
                className="opacity-100"
                data-ai-hint="gift packs festive"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl tracking-tight">Gift Packs – Perfect for Every Occasion</h1>
            </div>
        </section>
    );
}
