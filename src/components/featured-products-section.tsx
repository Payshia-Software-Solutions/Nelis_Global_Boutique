
import { getFeaturedProducts } from "@/lib/mock-data";
import { ProductCard } from "./product-card";
import { ShoppingBag } from "lucide-react";

export async function FeaturedProductsSection() {
    const products = await getFeaturedProducts();

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <ShoppingBag className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Featured Products</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
