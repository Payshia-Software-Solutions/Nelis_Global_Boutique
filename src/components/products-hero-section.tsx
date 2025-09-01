"use client";

import Image from 'next/image';

export function ProductsHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-start text-white">
            <Image
                src="https://placehold.co/1920x700.png"
                alt="A collection of natural products"
                layout="fill"
                objectFit="cover"
                className="opacity-40"
                data-ai-hint="natural products background"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 text-left relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-5xl md:text-7xl tracking-tight text-black">OUR PRODUCTS</h1>
                    <h2 className="mt-4 text-3xl md:text-4xl  text-cyan-600">Discover the Pure Goodness of Nature</h2>
                    <p className="mt-6 text-md text-gray-700">
                        At Nelis Pvt Ltd, we take pride in offering a range of premium, natural products made with care and dedication. Our selection of Herbal Teas, Dried Fruits, and Special Blends is crafted to bring you health, wellness, and authentic Sri Lankan flavors. Every product is 100% natural, free from preservatives, and sourced sustainably from local farmers.
                    </p>
                </div>
            </div>
        </section>
    );
}
