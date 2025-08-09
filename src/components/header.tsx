"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products" },
    { href: "/our-impact", label: "Impact & Sustainability" },
    { href: "/wholesale", label: "Wholesale & Export" },
    { href: "/contact", label: "Contact Us" },
];

export function Header() {
    const pathname = usePathname();
    const { itemCount } = useCart();
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-card text-card-foreground border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-8">
                        <Link href="/">
                            <Logo useDarkText={true} />
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center justify-center flex-1 space-x-6">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="icon">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Link href="/cart">
                            <Button variant="ghost" size="icon" className="relative">
                                <ShoppingCart className="h-5 w-5" />
                                {itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                        {itemCount}
                                    </span>
                                )}
                            </Button>
                        </Link>
                    </div>
                    
                    <div className="md:hidden">
                        <Button onClick={() => setMenuOpen(!isMenuOpen)} variant="ghost" size="icon">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>
            
            {isMenuOpen && (
                 <div className="md:hidden bg-card border-t">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                                )}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                         <div className="flex items-center space-x-4 pt-4">
                            <Button variant="ghost" size="icon">
                                <Search className="h-6 w-6" />
                            </Button>
                            <Link href="/cart">
                                <Button variant="ghost" size="icon" className="relative">
                                    <ShoppingCart className="h-6 w-6" />
                                    {itemCount > 0 && (
                                        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                            {itemCount}
                                        </span>
                                    )}
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
