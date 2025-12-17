
"use client";

import Image from "next/image";

const certificationLogos = [
    {
        src: "http://content-provider.payshia.com/nelis-global/new/iso.png",
        alt: "ISO 22000 Certified",
    },
    {
        src: "http://content-provider.payshia.com/nelis-global/new/haccp-removebg-preview.png",
        alt: "HACCP Certified",
    },
    {
        src: "http://content-provider.payshia.com/nelis-global/new/gmp-quality-seeklogo.png",
        alt: "GMP Quality Certified",
    },
];

export function CertificationsSection() {
    return (
        <section className="relative py-20 text-white">
            <Image
                src="https://content-provider.payshia.com/nelis-global/new/product-background.webp"
                alt="Natural ingredients background"
                layout="fill"
                objectFit="cover"
                className="z-[-1]"
                data-ai-hint="natural ingredients spices"
            />
            <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Certifications & Achievements</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-4xl mx-auto">
                    {certificationLogos.map((logo, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <div className="relative bg-white rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-lg">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={120}
                                    height={120}
                                    className="object-contain w-24 h-24 md:w-32 md:h-32"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
