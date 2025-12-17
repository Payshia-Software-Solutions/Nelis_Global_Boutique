
"use client";

import Image from "next/image";

const certificationLogos = [
    {
        src: "https://content-provider.payshia.com/nelis-global/certificates/iso.webp",
        alt: "ISO 22000 Certified",
    },
    {
        src: "https://content-provider.payshia.com/nelis-global/certificates/haccp.webp",
        alt: "HACCP Certified",
    },
    {
        src: "https://content-provider.payshia.com/nelis-global/certificates/gmp.webp",
        alt: "GMP Quality Certified",
    },
];

export function CertificationsSection() {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="bg-muted/50 p-6 md:p-10 rounded-t-lg">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Certifications & Achievements</h2>
                </div>
                <div className="bg-muted/50 pb-10">
                    <div className="w-full border-t border-border"></div>
                    <div className="grid grid-cols-3 gap-4 md:gap-8 items-center justify-items-center max-w-4xl mx-auto py-8">
                        {certificationLogos.map((logo, index) => (
                            <div key={index} className="relative w-24 h-24 md:w-36 md:h-36">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full aspect-w-16 aspect-h-7 rounded-b-lg overflow-hidden">
                    <Image
                        src="https://content-provider.payshia.com/nelis-global/new/certification-img.webp"
                        alt="Nelis Global Boutique product collection"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="tea products collection"
                    />
                </div>
            </div>
        </section>
    );
}
