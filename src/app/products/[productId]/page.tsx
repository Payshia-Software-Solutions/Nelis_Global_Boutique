
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/mock-data";
import { ProductDisplay } from "@/components/product-display";
import MainLayout from "@/app/(main)/layout";

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
  
  if (!product) {
    notFound();
  }

  return (
    <MainLayout>
      <ProductDisplay product={product} />
    </MainLayout>
  );
}
