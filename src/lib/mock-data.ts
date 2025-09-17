

import type { Product, ApiResponse, ApiProductData, Collection, CollectionProduct, SingleProductApiResponse, ApiProductImage } from './types';

const imageBaseUrl = "https://content-provider.payshia.com/payshia-erp";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const companyId = process.env.NEXT_PUBLIC_COMPANY_ID;

const mapApiProductToProduct = (apiProduct: ApiProductData, productImages: ApiProductImage[]): Product => {
  const allImages = Array.isArray(productImages) ? productImages.map(img => 
    `${imageBaseUrl}${img.img_url}`
  ) : [];
  const firstImage = allImages[0] ?? 'https://placehold.co/600x400.png';
  
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
    images: allImages
  };
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${apiBaseUrl}/products/with-variants/by-company?company_id=${companyId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    
    const productsWithImages = await Promise.all(data.products.map(async (apiProduct) => {
        try {
            const imagesResponse = await fetch(`https://server-erp.payshia.com/product-images/${apiProduct.product.id}`);
            if (!imagesResponse.ok) {
                if (imagesResponse.status !== 404) {
                    console.error(`Failed to fetch images for product ${apiProduct.product.id}: ${imagesResponse.status}`);
                }
                return mapApiProductToProduct(apiProduct, []);
            }
            let imagesData = await imagesResponse.json();
            const images: ApiProductImage[] = Array.isArray(imagesData) ? imagesData : [imagesData];
            return mapApiProductToProduct(apiProduct, images);
        } catch (error) {
            console.error(`Error fetching images for product ${apiProduct.product.id}:`, error);
            return mapApiProductToProduct(apiProduct, []);
        }
    }));
    
    return productsWithImages;
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
    try {
        const imagesResponse = await fetch(`https://server-erp.payshia.com/product-images/${data.product.id}`);
        if (imagesResponse.ok) {
            const imagesData = await imagesResponse.json();
            images = Array.isArray(imagesData) ? imagesData : [imagesData];
        } else {
            if (imagesResponse.status !== 404) {
                console.error(`Failed to fetch images for product ${data.product.id}: ${imagesResponse.status}`);
            }
        }
    } catch (error) {
        console.error(`Error fetching images for product ${data.product.id}:`, error);
    }
    
    const allImages = images.map(img => 
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
