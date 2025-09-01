
"use client";

import Image from 'next/image';

export function BlogHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white">
            <Image
                src="https://placehold.co/1920x700.png"
                alt="A cozy scene with a cup of tea and a notebook"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
                data-ai-hint="cozy tea notebook"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl tracking-tight">Blog - Nelis Global Boutique</h1>
                <p className="mt-4 text-xl md:text-2xl text-primary/90">Welcome to the Nelis Global Boutique blog!</p>
                <p className="mt-6 max-w-3xl mx-auto text-lg">
                    Here, we share insightful articles, tips, news, and updates related to our products, sustainability efforts, and the world of healthy living. We aim to engage with our customers and provide valuable information on how to incorporate our products into your daily life.
                </p>
            </div>
        </section>
    );
}
