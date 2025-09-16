import { getFeaturedProducts } from "@/lib/mock-data";
import { ProductSwiperClient } from "./product-swiper-client";

export async function ProductSwiper() {
  const products = await getFeaturedProducts();
  return <ProductSwiperClient products={products} />;
}
