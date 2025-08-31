
import { getProducts } from '@/lib/mock-data';
import { ProductCard } from './product-card';

export async function StoreDriedFruitsSection() {
    const allProducts = await getProducts();
    // Assuming 'dried-fruits' category products are dried fruits for demonstration
    const driedFruits = allProducts.filter(p => p.category === 'dried-fruits'); 

    return (
        <section id="dried-fruits" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <span className="text-4xl">🍍</span>
                        <h2 className="text-4xl font-bold">Dried Fruits</h2>
                    </div>
                    <h3 className="text-xl text-primary/90 mt-4">Sri Lankan Dried Fruits – A Taste of Nature’s Perfection</h3>
                    <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
                        At Neli’s, our Sri Lankan dried fruits are extraordinary, thanks to the island’s unique geography, fertile soil, and tropical climate. Each fruit is naturally sweetened by nature itself—without any additives or added sugar.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {driedFruits.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
