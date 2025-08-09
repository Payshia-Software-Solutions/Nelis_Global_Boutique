
import { getProducts } from '@/lib/mock-data';
import { CategoryProductCard } from './category-product-card';
import { Leaf } from 'lucide-react';

export async function HerbalTeasSection() {
    const allProducts = await getProducts();
    // Assuming 'Fashion' category products are herbal teas for demonstration
    const herbalTeas = allProducts.filter(p => p.category === 'Fashion').slice(0, 4); 

    return (
        <section id="herbal-teas" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center gap-3">
                        <Leaf className="h-8 w-8 text-primary" />
                        <h2 className="text-4xl font-bold">Herbal Teas</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Experience the essence of nature with our handcrafted herbal teas, rich in antioxidants and wellness benefits.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {herbalTeas.map(product => (
                        <CategoryProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
