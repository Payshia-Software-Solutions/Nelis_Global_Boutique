
"use client";

import Image from "next/image";
import { Leaf, Recycle, Heart } from "lucide-react";

export function SustainabilityCommitmentSection() {
    return (
        <section className="relative w-full py-24 text-white">
            <Image
                src="http://content-provider.payshia.com/nelis-global/new/commitment%20to%20sustainability.webp"
                alt="Two women working in a sustainable workshop"
                layout="fill"
                objectFit="cover"
                className="z-[-1]"
                data-ai-hint="sustainable business workers"
            />
            <div className="absolute inset-0 bg-black/50 z-[-1]"></div>
            <div className="container mx-auto px-4 flex justify-end">
                <div className="max-w-xl bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-lg">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Leaf className="h-10 w-10 text-primary" />
                                <h2 className="text-4xl font-bold">Our Commitment to Sustainability</h2>
                            </div>
                            <p className="text-white/90">
                                At Nelis Pvt Ltd, sustainability is at the core of everything we do. From the way we source raw materials to our production processes, we strive to create a business model that benefits people and the planet.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Recycle className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-semibold">Eco-Conscious Production</h3>
                                </div>
                                <p className="text-white/90">
                                    We implement sustainable practices in every stage of our production, from energy-efficient machinery to waste reduction initiatives. Our factory operates with a focus on minimizing environmental impact, ensuring that we leave a positive legacy for future generations.
                                </p>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <Heart className="h-6 w-6 text-primary" />
                                    <h3 className="text-2xl font-semibold">Supporting Communities</h3>
                                </div>
                                <p className="text-white/90">
                                    We believe that business should be a force for good. By working with local communities and suppliers, we ensure that our success is shared with those who help make it possible. We provide opportunities for education, job training, and personal growth, enabling the women we employ to break the cycle of poverty.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
