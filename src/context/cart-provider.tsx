
"use client";

import type { CartItem } from "@/lib/types";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type OrderData = {
  formValues: any;
  cart: CartItem[];
  cartTotal: number;
  itemCount: number;
  invoiceId?: string;
} | null;

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  buyNow: (item: CartItem) => void;
  cartTotal: number;
  itemCount: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  orderData: OrderData;
  setOrderData: (data: OrderData) => void;
  restoreCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderData, setOrderData] = useState<OrderData>(null);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("nelisglobal-cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const storedOrderData = sessionStorage.getItem("nelisglobal-order");
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
  }, []);

  useEffect(() => {
    const buyNowCart = sessionStorage.getItem("nelisglobal-buy-now-cart");
    if (!buyNowCart) {
      localStorage.setItem("nelisglobal-cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleSetOrderData = (data: OrderData) => {
    setOrderData(data);
    if (data) {
      sessionStorage.setItem("nelisglobal-order", JSON.stringify(data));
    } else {
      sessionStorage.removeItem("nelisglobal-order");
    }
  };


  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem("nelisglobal-buy-now-cart");
    localStorage.removeItem("nelisglobal-cart-backup");
  };

  const buyNow = (item: CartItem) => {
    // Backup current cart
    localStorage.setItem("nelisglobal-cart-backup", JSON.stringify(cart));
    // Set cart to only the buy now item
    setCart([item]);
    // Mark that we are in a buy now flow
    sessionStorage.setItem("nelisglobal-buy-now-cart", "true");
    // Redirect to checkout
    router.push('/checkout');
  };

  const restoreCart = () => {
    const backup = localStorage.getItem("nelisglobal-cart-backup");
    const isBuyNow = sessionStorage.getItem("nelisglobal-buy-now-cart");

    if (isBuyNow && backup) {
      setCart(JSON.parse(backup));
      localStorage.removeItem("nelisglobal-cart-backup");
      sessionStorage.removeItem("nelisglobal-buy-now-cart");
    }
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        buyNow,
        cartTotal,
        itemCount,
        isCartOpen,
        openCart,
        closeCart,
        orderData,
        setOrderData: handleSetOrderData,
        restoreCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

    