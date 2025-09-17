"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const sliderItems = [
  {
    src: "https://content-provider.payshia.com/nelis-global/hero.webp",
    alt: "A market stall with various natural products",
    hint: "natural products market",
  },
  {
    src: "https://content-provider.payshia.com/nelis-global/002-1080x1920-optimized.webp",
    alt: "A person holding a cup of butterfly pea tea",
    hint: "butterfly pea tea",
  },
  {
    src: "https://content-provider.payshia.com/nelis-global/003-1080x1920-optimized.webp",
    alt: "Dried fruits and spices on a wooden table",
    hint: "dried fruits spices",
  },
];

export function HeroSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[500px]">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {sliderItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[calc(100vh-4rem)] min-h-[500px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  objectFit="cover"
                  className="opacity-100"
                  data-ai-hint={item.hint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="container mx-auto h-full flex flex-col items-center md:items-start justify-center text-center md:text-left relative z-10 text-white px-4">
          <div className="max-w-2xl bg-black/40 p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl tracking-tight">
              Welcome to Nelis Global Boutique
            </h1>
            <p className="mt-4 text-base md:text-xl">
              Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="/store">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            {sliderItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 w-2 rounded-full bg-white/50 transition-all",
                  current === index ? "h-6 bg-white" : "hover:bg-white/75"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Link href="#our-products" className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-8 w-8 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}