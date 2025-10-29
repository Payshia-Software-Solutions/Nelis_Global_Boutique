
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
  slug: string;
};

export type ApiProduct = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  company_id: string;
  slug: string;
}

export type ApiProductImage = {
  id: string;
  product_id: string;
  img_url: string;
  display_order: number;
}

export type ApiProductData = {
  product: ApiProduct;
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

export type SingleProductApiResponse = {
  product: ApiProduct;
  variants: {
      id: string;
      sku: string;
  }[];
  images?: {
      id: string;
      img_url: string;
  }[];
}

export type ApiResponse = {
  company_id: string;
  total_products: number;
  products: ApiProductData[];
};


export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

export type Collection = {
    id: string;
    title: string;
    description: string;
    cover_image_url: string;
    status: string;
    company_id: string;
}

export type CollectionProduct = {
  id: string;
  collection_id: string;
  product_id: string;
  company_id: string;
};
