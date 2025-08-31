

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
  images: string[];
};

export type ApiProductData = {
  product: {
    id: string;
    name: string;
    description: string;
    category: string;
    price: string;
    company_id: string;
  };
  product_images: {
    id: string;
    img_url: string;
  }[];
  variants: {
    variant: {
      id: string;
      sku: string;
    };
    images: {
      id: string;
      img_url: string;
    }[];
  }[];
};

export type ApiResponse = {
  company_id: string;
  total_products: number;
  products: ApiProductData[];
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

export type Collection = {
    id: string;
    title: string;
    description: string;
    cover_image_url: string;
    status: string;
    company_id: string;
}
