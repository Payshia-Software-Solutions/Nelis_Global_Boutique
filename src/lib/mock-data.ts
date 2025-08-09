
import type { Product, Category, Review } from './types';

export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 'fashion', name: 'Fashion', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 'home', name: 'Home Goods', imageUrl: 'https://placehold.co/600x400.png' },
  { id: 'sports', name: 'Sports', imageUrl: 'https://placehold.co/600x400.png' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Immerse yourself in sound. These headphones feature world-class noise cancellation, high-fidelity audio, and a comfortable, lightweight design.',
    price: 299.99,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 1250,
    featured: true,
    details: [
      'Up to 20 hours of battery life',
      'Bluetooth 5.0 connectivity',
      'Built-in microphone for calls',
      'Comes with a carrying case',
    ]
  },
  {
    id: '2',
    name: 'Smartwatch Series 7',
    description: 'The most advanced smartwatch yet, with a larger, more durable display, and powerful health innovations.',
    price: 429.00,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 980,
    featured: true,
    details: [
        'Always-On Retina display',
        'Blood Oxygen and ECG apps',
        'Water-resistant up to 50 meters',
        'Available in multiple colors',
    ]
  },
  {
    id: '3',
    name: 'Classic Leather Jacket',
    description: 'A timeless wardrobe staple. Made from 100% genuine leather, this jacket offers both style and durability.',
    price: 189.50,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Fashion',
    rating: 4.6,
    reviewCount: 450,
    details: [
        '100% Genuine Lambskin Leather',
        'Polyester lining',
        'Zipper closure',
        'Two side pockets',
    ]
  },
  {
    id: '4',
    name: 'Modern Minimalist Sofa',
    description: 'Anchor your living room in style with this sleek and comfortable sofa. Features a durable wooden frame and high-density foam cushions.',
    price: 799.00,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Home Goods',
    rating: 4.7,
    reviewCount: 210,
    featured: true,
    details: [
        'Solid wood frame',
        'Seats up to 3 people',
        'Tool-free assembly',
        'Upholstered in stain-resistant fabric',
    ]
  },
  {
    id: '5',
    name: 'Professional Yoga Mat',
    description: 'Enhance your practice with this non-slip, extra-cushioned yoga mat. Made from eco-friendly materials.',
    price: 79.99,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Sports',
    rating: 4.9,
    reviewCount: 1500,
    details: [
        '72-inch length',
        '6mm thick for extra comfort',
        'Made from non-toxic TPE material',
        'Includes a carrying strap',
    ]
  },
  {
    id: '6',
    name: '4K Action Camera',
    description: 'Capture your adventures in stunning 4K. This waterproof camera is built to withstand the elements.',
    price: 249.00,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Electronics',
    rating: 4.5,
    reviewCount: 720,
    details: [
        '4K video at 60fps',
        'Waterproof up to 30 meters',
        '2-inch touchscreen display',
        'Includes various mounts and accessories',
    ]
  },
  {
    id: '7',
    name: 'Running Shoes',
    description: 'Lightweight and responsive running shoes designed for speed and comfort on any terrain.',
    price: 120.00,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Fashion',
    rating: 4.7,
    reviewCount: 2100,
    details: [
        'Breathable mesh upper',
        'Cushioned midsole for shock absorption',
        'Durable rubber outsole',
        'Ideal for road running',
    ]
  },
  {
    id: '8',
    name: 'Espresso Machine',
    description: 'Become your own barista with this semi-automatic espresso machine. Brews cafe-quality coffee at home.',
    price: 550.00,
    imageUrl: 'https://placehold.co/600x400.png',
    category: 'Home Goods',
    rating: 4.8,
    reviewCount: 650,
    details: [
        '15-bar professional pressure',
        'Built-in steam wand for milk frothing',
        '1.5L removable water tank',
        'Stainless steel construction',
    ]
  },
];

export const reviews: Review[] = [
  { id: 'r1', author: 'Jane Doe', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704d', rating: 5, date: '2 weeks ago', comment: 'Absolutely love these headphones! The noise cancellation is top-notch and they are so comfortable to wear for hours.' },
  { id: 'r2', author: 'John Smith', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704e', rating: 4, date: '1 month ago', comment: 'Great sound quality and battery life. My only complaint is that they can get a little warm after extended use.' },
  { id: 'r3', author: 'Emily Johnson', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704f', rating: 5, date: '3 days ago', comment: 'The best headphones I have ever owned. Worth every penny. The build quality is excellent.' },
];

// Functions to simulate API calls
export const getProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products), 500));
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  return new Promise(resolve => setTimeout(() => resolve(products.find(p => p.id === id)), 500));
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return new Promise(resolve => setTimeout(() => resolve(products.filter(p => p.featured)), 500));
};

export const getCategories = async (): Promise<Category[]> => {
    return new Promise(resolve => setTimeout(() => resolve(categories), 500));
};

export const getReviewsByProductId = async (productId: string): Promise<Review[]> => {
    return new Promise(resolve => setTimeout(() => resolve(reviews), 500));
}
