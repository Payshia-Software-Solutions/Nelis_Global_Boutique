
"use client"

import { Leaf } from 'lucide-react';
import { CategoryProductCard } from './category-product-card';
import { getProducts } from '@/lib/mock-data';
import type { Product } from '@/lib/types';
import { useEffect, useState } from 'react';

const teaProductsContent: Omit<Product, 'id' | 'price' | 'imageUrl' | 'category' | 'rating' | 'reviewCount' | 'featured' | 'details' | 'images' | 'slug'>[] = [
    { name: 'Butterfly Pea Tea', description: 'A vibrant blue tea that changes color when lemon is added, creating a magical transformation. Handpicked and Packed with powerful antioxidants, this tea is known to enhance brain function, reduce stress, and support eye health. It’s a caffeine-free herbal infusion perfect for relaxation and rejuvenation.' },
    { name: 'Lotus Tea', description: 'A delicate and aromatic tea made from the sacred Blue Lotus flower. Traditionally used in ancient Egyptian and Ayurvedic medicine, it is known for its calming properties, ability to reduce anxiety, and support deep relaxation. This tea is perfect for unwinding after a long day and promoting restful sleep.' },
    { name: 'Hibiscus Tea', description: 'A vibrant and tangy tea made from dried hibiscus flowers. Packed with vitamin C, hibiscus tea is known for its ability to lower blood pressure, improve heart health, and boost the immune system. It’s a refreshing and antioxidant-rich beverage that helps with digestion, hydration, and promoting glowing skin. Enjoy it hot or cold for a rejuvenating experience.' }
];

export function HerbalTeasSection() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts();
            const teaNames = ['Butterfly Pea Tea', 'Lotus Tea', 'Hibiscus Tea'];
            const teaProducts = allProducts.filter(p => teaNames.includes(p.name));
            
            const enrichedProducts = teaProducts.map(apiProduct => {
                const content = teaProductsContent.find(p => p.name.toLowerCase() === apiProduct.name.toLowerCase());
                return content ? { ...apiProduct, description: content.description } : apiProduct;
            });

            setProducts(enrichedProducts);
        }
        fetchProducts();
    }, []);

    return (
        <section id="herbal-teas" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-3">
                        <Leaf className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl">Herbal Teas</h2>
                    </div>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Experience the essence of nature with our handcrafted herbal teas, rich in antioxidants and wellness benefits.
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
