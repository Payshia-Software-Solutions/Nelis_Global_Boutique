
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { CartProvider } from '@/context/cart-provider';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { ProgressBar } from '@/components/progress-bar';
import { Suspense } from 'react';
import { ThemeProvider } from '@/context/theme-provider';
import { GoogleAnalytics } from '@/components/google-analytics';

export const metadata: Metadata = {
  title: {
    template: '%s | Nelis Global Boutique - Natural Products from Sri Lanka',
    default: 'NelisGlobal Boutique | Natural Products from Sri Lanka'
  },
  description: 'Discover the finest natural products from Sri Lanka. We bring you premium dried fruits, herbal teas, and authentic flavors crafted with sustainable practices and community care.',
  openGraph: {
    title: 'NelisGlobal Boutique | Natural Products from Sri Lanka',
    description: 'Discover the finest natural products from Sri Lanka, from herbal teas to dried fruits.',
    images: [
      {
        url: "https://content-provider.payshia.com/nelis-global/hero.webp",
        width: 1920,
        height: 1080,
        alt: "A market stall with various natural products",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <Suspense>
              <ProgressBar />
              <GoogleAnalytics />
            </Suspense>
            {children}
            <Toaster />
            <WhatsAppButton />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
