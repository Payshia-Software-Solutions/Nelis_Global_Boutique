
"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";
import { getFeaturedProducts } from "@/lib/mock-data";
import { Skeleton } from "./ui/skeleton";

import 'swiper/css';

export function ProductSwiperClient() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const featuredProducts = await getFeaturedProducts();
      setProducts(featuredProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
        <section className="w-full py-24">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-8">
                    <Skeleton className="h-8 w-48 mx-auto" />
                    <Skeleton className="h-4 w-96 mx-auto mt-4" />
                </div>
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
            </div>
        </section>
    )
  }

  return (
    <section id="our-products" className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-bold">Our Products</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm md:text-base">
            Explore our carefully curated selection of premium natural products
            sourced directly from Sri Lankan farms.
          </p>
        </div>
        <Swiper
          spaceBetween={4}
          slidesPerView={1.5}
          breakpoints={{
            640: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 16,
            },
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
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/store">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
