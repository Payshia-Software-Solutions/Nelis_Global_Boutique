
"use client";

import { useState, useEffect } from 'react';
import type { Product } from '@/lib/types';
import { getProductImages } from '@/lib/mock-data';

export function useProductImages(initialProduct: Product) {
  const [product, setProduct] = useState<Product>(initialProduct);

  useEffect(() => {
    let isMounted = true;

    async function fetchImages() {
      // Only fetch if the imageUrl is a placeholder
      if (initialProduct.imageUrl.includes('placehold.co')) {
        const images = await getProductImages(initialProduct.id);
        if (isMounted && images.length > 0) {
          setProduct(prevProduct => ({
            ...prevProduct,
            imageUrl: images[0],
            images: images,
          }));
        }
      }
    }

    fetchImages();

    return () => {
      isMounted = false;
    };
  }, [initialProduct.id, initialProduct.imageUrl]);

  return { product };
}
