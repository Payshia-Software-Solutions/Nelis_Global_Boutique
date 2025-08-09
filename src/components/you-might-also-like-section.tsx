
import { getFeaturedProducts } from "@/lib/mock-data";
import { ProductCard } from "./product-card";

export async function YouMightAlsoLikeSection() {
    const products = (await getFeaturedProducts()).slice(0, 4);

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
