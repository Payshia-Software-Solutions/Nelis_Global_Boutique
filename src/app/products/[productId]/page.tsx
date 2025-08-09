
import { notFound } from "next/navigation";
import { getProductById, getReviewsByProductId } from "@/lib/mock-data";
import type { Review } from "@/lib/types";
import { ProductDisplay } from "@/components/product-display";

type ProductPageProps = {
    params: {
        productId: string;
    }
}

export async function generateMetadata({ params }: ProductPageProps) {
    const product = await getProductById(params.productId);
    if (!product) {
        return { title: "Product Not Found" };
    }
    return {
        title: `${product.name} | NelisGlobal Marketplace`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.productId);
  const reviews = await getReviewsByProductId(params.productId);

  if (!product) {
    notFound();
  }

  return <ProductDisplay product={product} reviews={reviews} />;
}
