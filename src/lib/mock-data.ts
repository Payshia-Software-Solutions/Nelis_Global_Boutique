

import type { Product, ApiResponse, ApiProductData, Collection, CollectionProduct, SingleProductApiResponse } from './types';

const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL_BASE || '';
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const companyId = process.env.NEXT_PUBLIC_COMPANY_ID;

const mapApiProductToProduct = (apiProduct: ApiProductData): Product => {
  const firstImage = apiProduct.product_images?.[0]?.img_url ?? 'https://placehold.co/600x400.png';
  
  return {
    id: apiProduct.product.id,
    name: apiProduct.product.name,
    description: apiProduct.product.description,
    price: parseFloat(apiProduct.product.price) || 0,
    imageUrl: firstImage.startsWith('http') ? firstImage : `${imageBaseUrl}${firstImage}`,
    category: apiProduct.product.category,
    slug: apiProduct.product.slug,
    rating: 5, // Static value as it's not in the API response
    reviewCount: 0, // Static value as it's not in the API response
    featured: true, // Static value as it's not in the API response
    details: [], // Static value as it's not in the API response
    images: apiProduct.product_images.map(img => img.img_url.startsWith('http') ? img.img_url : `${imageBaseUrl}${img.img_url}`)
  };
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${apiBaseUrl}/products/with-variants/by-company?company_id=${companyId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    return data.products.map(mapApiProductToProduct);
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
    const firstImage = data.product_images?.[0]?.img_url ?? 'https://placehold.co/600x400.png';

    return {
      id: data.product.id,
      name: data.product.name,
      description: data.product.description,
      price: parseFloat(data.product.price) || 0,
      imageUrl: firstImage.startsWith('http') ? firstImage : `${imageBaseUrl}${firstImage}`,
      category: data.product.category,
      slug: data.product.slug,
      rating: 5,
      reviewCount: 0,
      featured: true,
      details: [],
      images: data.product_images?.map(img => img.img_url.startsWith('http') ? img.img_url : `${imageBaseUrl}${img.img_url}`) ?? [firstImage]
    };
  } catch (error) {
    console.error(`Failed to fetch product by slug ${slug}:`, error);
    return undefined;
  }
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
    try {
        const products = await getProducts();
        return products.filter(p => p.featured);
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
