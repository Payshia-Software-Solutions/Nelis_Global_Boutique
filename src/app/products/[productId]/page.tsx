
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/mock-data";
import { ProductDisplay } from "@/components/product-display";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { YouMightAlsoLikeSection } from "@/components/you-might-also-like-section";

type ProductPageProps = {
    params: {
        productId: string;
    }
}

export async function generateMetadata({ params }: ProductPageProps) {
    const product = await getProductBySlug(params.productId);
    if (!product) {
        return { title: "Product Not Found" };
    }
    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: [
              {
                url: product.imageUrl,
                width: 600,
                height: 400,
                alt: product.name,
              },
            ],
        },
    };
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const product = await getProductBySlug(params.productId);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <ProductDisplay product={product} />
        <YouMightAlsoLikeSection />
      </main>
      <Footer />
    </div>
  );
}

