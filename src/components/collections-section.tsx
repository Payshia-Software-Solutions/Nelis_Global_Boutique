
import { getCollections } from "@/lib/mock-data";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

export async function CollectionsSection() {
    const collections = await getCollections();

    return (
        <section id="collections" className="py-16 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <Layers className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Shop by Collection</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Browse our curated collections to find the perfect products for your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collections.map(collection => (
                        <Link key={collection.id} href={`/products?collection=${collection.id}`}>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                                <Image
                                    src={collection.cover_image_url || "https://placehold.co/600x400.png"}
                                    alt={collection.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                    data-ai-hint="product collection"
                                />
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-lg text-center">{collection.title}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
