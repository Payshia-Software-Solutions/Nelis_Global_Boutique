"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartSidebar } from "@/components/cart-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CartSidebar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
