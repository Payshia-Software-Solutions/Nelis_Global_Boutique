
"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";
import { getFeaturedProducts } from "@/lib/mock-data";
import { Skeleton } from "./ui/skeleton";

import 'swiper/css';

export function YouMightAlsoLikeSection() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchProducts = async () => {
            const featuredProducts = await getFeaturedProducts();
            setProducts(featuredProducts.slice(0, 4));
            setLoading(false);
        };
        fetchProducts();
    }, []);

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl mb-8">You Might Also Like</h2>
                {loading ? (
                    <div className="flex space-x-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex-1 p-1 h-full">
                                <Skeleton className="w-full h-auto aspect-square" />
                                <Skeleton className="h-6 w-3/4 mt-4" />
                                <Skeleton className="h-6 w-1/2 mt-2" />
                                <Skeleton className="h-10 w-full mt-4" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.5}
                        breakpoints={{
                            640: { slidesPerView: 2.5, spaceBetween: 16 },
                            768: { slidesPerView: 3.5, spaceBetween: 16 },
                            1024: { slidesPerView: 4, spaceBetween: 16 },
                        }}
                        className="w-full"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="p-1 h-full">
                                    <ProductCard product={product} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
}
