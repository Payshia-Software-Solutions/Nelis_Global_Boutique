
import { notFound } from "next/navigation";
import { getProductBySlug, getReviewsByProductId } from "@/lib/mock-data";
import type { Review } from "@/lib/types";
import { ProductDisplay } from "@/components/product-display";

type ProductPageProps = {
    params: {
        productId: string;
    }
}

export async function generateMetadata({ params }: ProductPageProps) {
    const product = await getProductBySlug(params.productId); // productId is the slug
    if (!product) {
        return { title: "Product Not Found" };
    }
    return {
        title: `${product.name} | NelisGlobal Marketplace`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.productId); // productId is the slug
  
  if (!product) {
    notFound();
  }
  
  const reviews = await getReviewsByProductId(product.id);

  return <ProductDisplay product={product} reviews={reviews} />;
}
