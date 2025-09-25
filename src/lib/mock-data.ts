
import type { Product, ApiResponse, ApiProductData, Collection, CollectionProduct, SingleProductApiResponse, ApiProductImage } from './types';

const imageBaseUrl = "https://content-provider.payshia.com/payshia-erp";
const apiBaseUrl = "https://server-erp.payshia.com";
const companyId = "3";

const mapApiProductToProduct = (apiProductData: ApiProductData): Product => {
  const allImages = (apiProductData.product_images || []).map(img => 
    `${imageBaseUrl}${img.img_url}`
  );
  
  const firstImage = allImages.find(img => img.includes('front')) || allImages[0] || 'https://placehold.co/600x400.png';
  
  return {
    id: apiProductData.product.id,
    name: apiProductData.product.name,
    description: apiProductData.product.description,
    price: parseFloat(apiProductData.product.price) || 0,
    imageUrl: firstImage,
    category: apiProductData.product.category,
    slug: apiProductData.product.slug,
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
    
    const products = data.products.map(apiProductData => mapApiProductToProduct(apiProductData));
    
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

export const getProductsByCollection = async (collectionId: string): Promise<Product[]> => {
    try {
        const response = await fetch(`${apiBaseUrl}/collection-products/get/by?collection_id=${collectionId}&company_id=${companyId}`);
        if (!response.ok) {
            console.error(`Failed to fetch products for collection ${collectionId}: ${response.status}`);
            return [];
        }
        const data: ApiResponse = await response.json();
        
        if (!data.products) {
            return [];
        }

        const products = data.products.map(apiProductData => mapApiProductToProduct(apiProductData));
        return products;
    } catch (error) {
        console.error(`Failed to fetch products for collection ${collectionId}:`, error);
        return [];
    }
}


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
    const products = await getProducts();
    return products.find(p => p.slug === slug);
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
        return data.filter(c => c.status === 'active');
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
        
        const images: ApiProductImage[] = Array.isArray(imagesData) ? imagesData : [imagesData].filter(Boolean);
        
        return images.map(img => `${imageBaseUrl}${img.img_url}`);
    } catch (error) {
        console.error(`Error fetching images for product ${productId}:`, error);
        return [];
    }
}
