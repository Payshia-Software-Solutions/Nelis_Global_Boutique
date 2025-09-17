
"use client";

import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

import 'swiper/css';

interface ProductSwiperClientProps {
  products: Product[];
}

export function ProductSwiperClient({ products }: ProductSwiperClientProps) {
  return (
    <section id="our-products" className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl">Our Products</h2>
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
