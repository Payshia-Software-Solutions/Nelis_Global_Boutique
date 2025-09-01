
"use client"

import { Coffee } from 'lucide-react';
import { CategoryProductCard } from './category-product-card';
import { getProducts } from '@/lib/mock-data';
import type { Product } from '@/lib/types';
import { useEffect, useState } from 'react';

const specialBlendsContent: { name: string; description: string }[] = [
    { name: 'Chai Latte Blend', description: 'Our Chai Latte Blend is a flavorful fusion of black tea, organic cinnamon, cardamom, and exotic spices, crafted to give you the perfect cup of spiced warmth. With no added sugars or preservatives, this blend is perfect for brewing with hot milk, creating a rich, creamy drink that’s both comforting and energizing.' }
];

export function SpecialBlendsSection() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts();
            const blendNames = specialBlendsContent.map(b => b.name);
            const blendProducts = allProducts.filter(p => blendNames.includes(p.name));
            
            const enrichedProducts = blendProducts.map(apiProduct => {
                const content = specialBlendsContent.find(p => p.name.toLowerCase() === apiProduct.name.toLowerCase());
                return content ? { ...apiProduct, description: content.description } : apiProduct;
            });

            setProducts(enrichedProducts);
        }
        fetchProducts();
    }, []);

    return (
        <section id="special-blends" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-3">
                        <Coffee className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl font-bold">Special Blends</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Enjoy our unique blends that combine herbs and spices for a flavorful and health-boosting experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {products.map((product) => (
                        <CategoryProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
