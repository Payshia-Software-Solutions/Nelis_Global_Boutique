
"use client";

import Image from 'next/image';

interface PageHeroSectionProps {
    title: string;
    subtitle?: string;
}

export function PageHeroSection({ title, subtitle }: PageHeroSectionProps) {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white">
            <Image
                src="https://content-provider.payshia.com/nelis-global/hero-img3.jpg"
                alt="A market stall with various natural products"
                layout="fill"
                objectFit="cover"
                className="opacity-100"
                data-ai-hint="natural products market"
                priority
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{title}</h1>
                {subtitle && <p className="mt-4 text-xl md:text-2xl text-primary/90">{subtitle}</p>}
            </div>
        </section>
    );
}
