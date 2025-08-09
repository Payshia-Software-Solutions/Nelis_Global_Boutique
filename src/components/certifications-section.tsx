
"use client";

import { Pin } from "lucide-react";

const certifications = [
    {
        title: "ISO",
        subtitle: "22000:2018",
    },
    {
        title: "HACCP",
        subtitle: "• Certified",
    },
    {
        title: "GMP",
        subtitle: "Certified",
    },
];

export function CertificationsSection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our Certifications & Achievements</h2>
                    <div className="flex justify-center items-center gap-2 text-muted-foreground">
                        <Pin className="h-5 w-5 text-destructive transform -rotate-45" />
                        <span>Certified for Quality – ISO 22000:2018, HACCP, and GMP</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-muted/50 p-8 rounded-lg text-center flex flex-col justify-center items-center min-h-[150px] min-w-[200px]">
                                <h3 className="text-3xl font-bold text-primary/80">{cert.title}</h3>
                                <p className="text-muted-foreground mt-2">{cert.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
