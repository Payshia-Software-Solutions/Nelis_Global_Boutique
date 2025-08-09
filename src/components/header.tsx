
"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { useCart } from "@/context/cart-provider";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/our-impact", label: "Our Impact" },
  { href: "/store", label: "Online Store" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const { itemCount } = useCart();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      hasScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md" : "bg-transparent",
    )}>
      <div className={cn(
          "container flex h-20 items-center justify-between transition-colors duration-300",
          hasScrolled ? "text-foreground" : "text-white"
      )}>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium w-1/3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden w-1/3">
          <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background text-foreground">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <Logo useDarkText={true}/>
                    </Link>
                    <SheetClose asChild>
                        <Button variant="ghost" size="icon">
                            <X />
                            <span className="sr-only">Close Menu</span>
                        </Button>
                    </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center justify-center w-1/3">
          <Link href="/">
            <Logo useDarkText={hasScrolled} />
          </Link>
        </div>

        <div className="flex w-1/3 items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#">
              <Search />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart />
              <span className="sr-only">Cart</span>
              {itemCount > 0 && (
                <Badge className="absolute -right-2 -top-2 h-6 w-6 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground">
                  {itemCount}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
