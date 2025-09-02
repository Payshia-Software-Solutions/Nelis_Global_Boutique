
"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProductSwiperProps {
  products: Product[];
}

export function ProductSwiper({ products }: ProductSwiperProps) {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-3xl">Our Products</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Explore our carefully curated selection of premium natural products sourced directly from Sri Lankan farms.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem 
                key={product.id} 
                className="basis-[calc(100%/1.5)] sm:basis-[calc(100%/2.5)] md:basis-[calc(100%/3.5)] lg:basis-[calc(100%/4.5)]"
              >
                <div className="p-1">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
                <Link href="/store">View All Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
