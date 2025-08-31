
import { getProducts } from '@/lib/mock-data';
import { CategoryProductCard } from './category-product-card';
import { Coffee } from 'lucide-react';

export async function SpecialBlendsSection() {
    const allProducts = await getProducts();
    // Assuming 'special-blends' category products are special blends for demonstration
    const specialBlends = allProducts.filter(p => p.category === 'special-blends').slice(0, 3); 

    return (
        <section id="special-blends" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <Coffee className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Special Blends</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Enjoy our unique blends that combine herbs and spices for a flavorful and health-boosting experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialBlends.map(product => (
                        <CategoryProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
