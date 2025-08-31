
import type { Product, Category, Review, ApiResponse, ApiProductData } from './types';

const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_URL_BASE;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const companyId = process.env.NEXT_PUBLIC_COMPANY_ID;

const mapApiProductToProduct = (apiProduct: ApiProductData): Product => {
  const firstImage = apiProduct.product_images?.[0]?.img_url ?? 'https://placehold.co/600x400.png';
  
  return {
    id: apiProduct.product.id,
    name: apiProduct.product.name,
    description: apiProduct.product.description,
    price: parseFloat(apiProduct.product.price) || 0,
    imageUrl: `${imageBaseUrl}${firstImage}`,
    category: apiProduct.product.category,
    rating: 5, // Static value as it's not in the API response
    reviewCount: 0, // Static value as it's not in the API response
    featured: true, // Static value as it's not in the API response
    details: [], // Static value as it's not in the API response
    images: apiProduct.product_images.map(img => `${imageBaseUrl}${img.img_url}`)
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

export const getFeaturedProducts = async (): Promise<Product[]> => {
    try {
        const products = await getProducts();
        return products.filter(p => p.featured);
    } catch (error) {
        console.error("Failed to fetch featured products:", error);
        return [];
    }
};

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 'fashion', name: 'Fashion', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 'home', name: 'Home Goods', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 'sports', name: 'Sports', imageUrl: 'https://placehold.co/600x400.png' },
];

export const reviews: Review[] = [
  { id: 'r1', author: 'Jane Doe', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704d', rating: 5, date: '2 weeks ago', comment: 'Absolutely love these headphones! The noise cancellation is top-notch and they are so comfortable to wear for hours.' },
  { id: 'r2', author: 'John Smith', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704e', rating: 4, date: '1 month ago', comment: 'Great sound quality and battery life. My only complaint is that they can get a little warm after extended use.' },
  { id: 'r3', author: 'Emily Johnson', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704f', rating: 5, date: '3 days ago', comment: 'The best headphones I have ever owned. Worth every penny. The build quality is excellent.' },
];

export const getCategories = async (): Promise<Category[]> => {
    // This can be adapted to fetch categories from an API if one exists
    return Promise.resolve(categories);
};

export const getReviewsByProductId = async (productId: string): Promise<Review[]> => {
    // This can be adapted to fetch reviews from an API
    return Promise.resolve(reviews);
}
