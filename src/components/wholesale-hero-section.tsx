
"use client";

import Image from 'next/image';

export function WholesaleHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center text-white">
            <Image
                src="https://content-provider.payshia.com/nelis-global/wholesale-and-export-1920x700.webp"
                alt="A warehouse with shelves stocked with products"
                layout="fill"
                objectFit="cover"
                className="opacity-100"
                data-ai-hint="warehouse products"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl tracking-tight">Wholesale & Export</h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg">
                    Bringing Sri Lanka&apos;s Finest Products to the World. At Nelis Pvt Ltd, we are proud to offer premium-quality products for wholesale and export. Our mission is to share the natural goodness of Sri Lanka with the world, providing businesses globally with healthy, chemical-free products that cater to the growing demand for sustainable, authentic goods.
                </p>
            </div>
        </section>
    );
}
