
import type { Product, ApiResponse, ApiProductData, Collection, CollectionProduct, SingleProductApiResponse, ApiProductImage, CustomField } from './types';

const imageBaseUrl = "https://content-provider.payshia.com/payshia-erp";
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://server-nelis.payshia.com";
const companyId = "3";

const mapApiProductToProduct = (apiProductData: ApiProductData): Product => {
  const allImages = (apiProductData.product_images || []);
  
  const frontImages = allImages.filter(img => img.image_type === 'front img');
  
  let primaryImage;
  if (frontImages.length > 0) {
    // Sort by id descending to get the one with the highest id
    frontImages.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    primaryImage = frontImages[0];
  } else if (allImages.length > 0) {
    // Fallback to the image with the highest id if no 'front img' is available
    allImages.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    primaryImage = allImages[0];
  }

  const imageUrl = primaryImage ? `${imageBaseUrl}${primaryImage.img_url}` : 'https://placehold.co/600x400.png';
  const allImageUrls = allImages.map(img => `${imageBaseUrl}${img.img_url}`);
  
  return {
    id: apiProductData.product.id,
    name: apiProductData.product.name,
    description: apiProductData.product.description,
    price: parseFloat(apiProductData.product.price) || 0,
    imageUrl: imageUrl,
    category: apiProductData.product.category,
    slug: apiProductData.product.slug,
    rating: 5, // Static value as it's not in the API response
    reviewCount: 0, // Static value as it's not in the API response
    featured: true, // Static value as it's not in the API response
    details: [], // Static value as it's not in the API response
    images: allImageUrls
  };
};

const mapSingleApiProductToProduct = (apiProductData: SingleProductApiResponse): Product => {
    const allImages = (apiProductData.images || []);
    
    const frontImages = allImages.filter(img => img.image_type === 'front img');

    let primaryImage;
    if (frontImages.length > 0) {
      frontImages.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      primaryImage = frontImages[0];
    } else if (allImages.length > 0) {
      allImages.sort((a, b) => parseInt(b.id) - parseInt(a.id));
      primaryImage = allImages[0];
    }

    const imageUrl = primaryImage ? `${imageBaseUrl}${primaryImage.img_url}` : 'https://placehold.co/600x400.png';
    const allImageUrls = allImages.map(img => `${imageBaseUrl}${img.img_url}`);
  
  return {
    id: apiProductData.product.id,
    name: apiProductData.product.name,
    description: apiProductData.product.description,
    price: parseFloat(apiProductData.product.price) || 0,
    imageUrl: imageUrl,
    category: apiProductData.product.category,
    slug: apiProductData.product.slug,
    rating: 5, // Static value as it's not in the API response
    reviewCount: 0, // Static value as it's not in the API response
    featured: true, // Static value as it's not in the API response
    details: apiProductData.custom_fields || [], 
    images: allImageUrls
  };
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${apiBaseUrl}/products/with-variants/by-company?company_id=${companyId}`, { next: { revalidate: 3600 } });
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
        const allProducts = await getProducts();
        const allProductsMap = new Map(allProducts.map(p => [p.id, p]));

        const response = await fetch(`${apiBaseUrl}/collection-products/get/by?collection_id=${collectionId}&company_id=${companyId}`);
        if (!response.ok) {
            console.error(`Failed to fetch products for collection ${collectionId}: ${response.status}`);
            return [];
        }
        const collectionProductsData: CollectionProduct[] = await response.json();
        
        if (!Array.isArray(collectionProductsData)) {
            return [];
        }
        
        const products = collectionProductsData
            .map(cp => allProductsMap.get(cp.product_id))
            .filter((p): p is Product => p !== undefined);

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
    const response = await fetch(`${apiBaseUrl}/products/details/full/slug/?slug=${slug}`);
    if (!response.ok) {
        if(response.status === 404) return undefined;
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: SingleProductApiResponse = await response.json();
    if(!data.product) return undefined;

    return mapSingleApiProductToProduct(data);
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
        const imagesResponse = await fetch(`${apiBaseUrl}/product-images/${productId}`);
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

    
