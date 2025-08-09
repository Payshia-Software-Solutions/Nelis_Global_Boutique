
"use client";

import Image from 'next/image';

export function ContactHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white">
            <Image
                src="https://placehold.co/1920x700.png"
                alt="Hands holding a cup of tea"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
                data-ai-hint="contact hands tea"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Contact Us</h1>
                <p className="mt-4 text-xl md:text-2xl text-primary/90">We'd Love to Hear From You</p>
                <p className="mt-6 max-w-3xl mx-auto text-lg">
                    Whether you have a question about our products, want to discuss wholesale opportunities, or just want to say hello, our team is ready to assist you.
                </p>
            </div>
        </section>
    );
}
