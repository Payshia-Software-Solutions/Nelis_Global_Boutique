
"use client"

import { useEffect, useState } from 'react';
import { getProducts } from '@/lib/mock-data';
import type { Product } from '@/lib/types';
import { CategoryProductCard } from './category-product-card';

const driedFruitsContent: { name: string; description: string }[] = [
    { name: 'Dehydrated Mango', description: 'Our dehydrated mango is a tropical treat made from the finest mangoes of Sri Lanka, carefully dehydrated to retain their natural sweetness and rich flavor. With no added sugar, preservatives, or additives, every bite is a pure, healthy snack that showcases the true taste of Sri Lanka. Grown in the island\'s fertile soil and perfect climate, these mangoes are naturally sweet and packed with nutrients, offering you a wholesome, guilt-free indulgence.' },
    { name: 'Dehydrated Rambutan', description: 'Our dehydrated rambutan offers the perfect bite of this exotic, tropical fruit, with its unique, juicy sweetness captured in every piece. Rambutan is known for its sweet and juicy flesh, packed with vitamin C, antioxidants, and essential minerals. Dehydrated to preserve its natural flavor and nutrients, this fruit is perfect as a healthy snack or addition to smoothies and desserts.' },
    { name: 'Dehydrated Pineapple', description: 'Our dehydrated pineapple brings the tropical sweetness and tanginess of fresh pineapple in a convenient, dried form. With no added sugar, preservatives, or additives, it makes for a healthy and delicious snack on its own.' },
    { name: 'Dehydrated Banana', description: 'Our dehydrated banana is a naturally sweet, energy-boosting snack that’s perfect for any occasion. Made from the finest bananas and dried to preserve their natural flavor, this snack contains no added sugar or preservatives. The rich, smooth taste of bananas shines through, offering you a healthy, convenient option for a satisfying, wholesome treat.' },
    { name: 'Dehydrated Papaya', description: 'Our dehydrated papaya brings the tropical taste of this unique fruit right to your fingertips. Gently dried to retain its natural sweetness, the papaya slices are free from added sugar, preservatives, or additives. The result is a flavorful, chewy treat that highlights papaya’s vibrant flavor, offering a healthy, refreshing snack that’s perfect for on-the-go enjoyment.' },
    { name: 'Dehydrated Lime Slices', description: 'Our dehydrated lime slices are a perfect way to add a burst of tangy citrus flavor without any added sugar or preservatives. These slices are carefully dried to preserve their vibrant, refreshing zest and natural aroma.' },
    { name: 'Candied Ginger', description: 'Our candied ginger offers a perfect balance of sweetness and spice, with each piece of ginger carefully coated to enhance its natural flavor.' },
];

export function DriedFruitsSection() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getProducts();
            const fruitNames = driedFruitsContent.map(f => f.name);
            const fruitProducts = allProducts.filter(p => fruitNames.includes(p.name));
            
            const enrichedProducts = fruitProducts.map(apiProduct => {
                const content = driedFruitsContent.find(p => p.name.toLowerCase() === apiProduct.name.toLowerCase());
                return content ? { ...apiProduct, description: content.description } : apiProduct;
            });

            setProducts(enrichedProducts);
        }
        fetchProducts();
    }, []);

    return (
        <section id="dried-fruits" className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center items-center gap-3">
                        <span className="text-4xl">🍍</span>
                        <h2 className="text-4xl">Dried Fruits</h2>
                    </div>
                    <h3 className="text-xl text-primary/90 mt-4 font-semibold">Sri Lankan Dried Fruits – A Taste of Nature’s Perfection</h3>
                    <p className="text-muted-foreground mt-4 text-lg">
                        At Neli’s, our Sri Lankan dried fruits are extraordinary, thanks to the island’s unique geography, fertile soil, and tropical climate. Each fruit is naturally sweetened by nature itself—without any additives or added sugar.
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
