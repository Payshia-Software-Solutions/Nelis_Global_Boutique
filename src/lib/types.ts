
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  details: string[];
};

export type Category = {
  id: string;
  name: string;
  imageUrl: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export type Review = {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  date: string;
  comment: string;
}
