
import type { Product, ApiResponse, ApiProductData, Collection, CollectionProduct, SingleProductApiResponse, ApiProductImage } from './types';

const imageBaseUrl = "https://content-provider.payshia.com/payshia-erp";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const companyId = process.env.NEXT_PUBLIC_COMPANY_ID;

const mapApiProductToProduct = (apiProduct: ApiProductData, productImages: ApiProductImage[]): Product => {
  const allImages = Array.isArray(productImages) ? productImages.map(img => 
    `${imageBaseUrl}${img.img_url}`
  ) : [];
  
  // Use the first image from the variant if available, otherwise use a placeholder
  const firstVariantImage = apiProduct.product_images?.[0]?.img_url;
  const initialImageUrl = firstVariantImage ? `${imageBaseUrl}${firstVariantImage}` : 'https://placehold.co/600x400.png';

  const firstImage = allImages[0] ?? initialImageUrl;
  
  return {
    id: apiProduct.product.id,
    name: apiProduct.product.name,
    description: apiProduct.product.description,
    price: parseFloat(apiProduct.product.price) || 0,
    imageUrl: firstImage,
    category: apiProduct.product.category,
    slug: apiProduct.product.slug,
    rating: 5, // Static value as it's not in the API response
    reviewCount: 0, // Static value as it's not in the API response
    featured: true, // Static value as it's not in the API response
    details: [], // Static value as it's not in the API response
    images: allImages.length > 0 ? allImages : (firstVariantImage ? [initialImageUrl] : [])
  };
};

export const getProductImages = async (productId: string): Promise<string[]> => {
    try {
        const imagesResponse = await fetch(`https://server-erp.payshia.com/product-images/${productId}`);
        if (!imagesResponse.ok) {
            if (imagesResponse.status !== 404) {
                 console.error(`Failed to fetch images for product ${productId}: ${imagesResponse.status}`);
            }
            return [];
        }
        let imagesData = await imagesResponse.json();
        const images: ApiProductImage[] = Array.isArray(imagesData) ? imagesData : [imagesData];
        return images.map(img => `${imageBaseUrl}${img.img_url}`);
    } catch (error) {
        console.error(`Error fetching images for product ${productId}:`, error);
        return [];
    }
}


export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${apiBaseUrl}/products/with-variants/by-company?company_id=${companyId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    
    // Map products without fetching all images initially
    const products = data.products.map(apiProduct => mapApiProductToProduct(apiProduct, []));
    
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
    try {
        const products = await getProducts();
        return products.find(p => p.id === id);
    } catch (error) {
        console.error("Failed to fetch product by id:", error);
        return undefined;
    }
};

export const getProductBySlug = async (slug: string): Promise<Product | undefined> => {
  try {
    const response = await fetch(`${apiBaseUrl}/products/details/slug/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: SingleProductApiResponse = await response.json();

    let images: ApiProductImage[] = [];
    // Initially, we won't fetch images here to speed up page load.
    // The client will fetch them. We pass an empty array.

    const allImages = (data.product_images || []).map(img => 
      `${imageBaseUrl}${img.img_url}`
    );
    const firstImage = allImages[0] ?? 'https://placehold.co/600x400.png';

    return {
      id: data.product.id,
      name: data.product.name,
      description: data.product.description,
      price: parseFloat(data.product.price) || 0,
      imageUrl: firstImage,
      category: data.product.category,
      slug: data.product.slug,
      rating: 5,
      reviewCount: 0,
      featured: true,
      details: [],
      images: allImages,
    };
  } catch (error) {
    console.error(`Failed to fetch product by slug ${slug}:`, error);
    return undefined;
  }
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
    try {
        const products = await getProducts();
        // Assuming all products can be featured for now.
        // Add specific logic if there is a featured flag from the API
        return products;
    } catch (error) {
        console.error("Failed to fetch featured products:", error);
        return [];
    }
};

export const getCollections = async (): Promise<Collection[]> => {
    try {
        const response = await fetch(`${apiBaseUrl}/collections/company?company_id=${companyId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Collection[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch collections:", error);
        return [];
    }
}

export const getCollectionProducts = async (): Promise<CollectionProduct[]> => {
    try {
        const response = await fetch(`${apiBaseUrl}/collection-products/company?company_id=${companyId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: CollectionProduct[] = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch collection products:", error);
        return [];
    }
}
