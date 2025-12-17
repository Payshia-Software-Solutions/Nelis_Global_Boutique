
"use client";

import Image from 'next/image';

export function ImpactHeroSection() {
    return (
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-white">
            <Image
                src="http://content-provider.payshia.com/nelis-global/new/impact-and-sustainablity.webp"
                alt="Sustainability and community impact"
                layout="fill"
                objectFit="cover"
                className="opacity-100"
                data-ai-hint="sustainability community"
                priority
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Our Impact</h1>
                <p className="mt-4 text-xl md:text-2xl text-primary/90">Sustainability & Community</p>
            </div>
        </section>
    );
}
