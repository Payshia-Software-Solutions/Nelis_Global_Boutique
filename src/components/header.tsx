
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import type { Collection } from "@/lib/types";
import { getCollections } from "@/lib/mock-data";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Our Products"},
    { href: "/store", label: "Online Store" },
    { href: "/our-impact", label: "Impact & Sustainability" },
    { href: "/wholesale", label: "Wholesale & Export" },
    { href: "/contact", label: "Contact Us" },
];

export function Header() {
    const pathname = usePathname();
    const { itemCount } = useCart();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [collections, setCollections] = useState<Collection[]>([]);

    useEffect(() => {
        const fetchCollections = async () => {
            const data = await getCollections();
            setCollections(data);
        };
        fetchCollections();
    }, []);

    const ListItem = ({ href, title }: { href: string; title: string }) => (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    );

    const desktopNavLinks = navLinks.filter(link => link.label !== "Our Products");

    return (
        <header className="bg-card text-card-foreground border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/">
                        <Logo useDarkText={true} />
                    </Link>

                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {desktopNavLinks.slice(0, 2).map((link) => (
                                     <NavigationMenuItem key={link.href}>
                                         <Link href={link.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === link.href ? "text-primary" : "text-muted-foreground")}>
                                                 {link.label}
                                             </NavigationMenuLink>
                                         </Link>
                                     </NavigationMenuItem>
                                ))}

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn(pathname.startsWith('/products') && "text-primary")}>Our Products</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[600px] grid-cols-3 gap-x-8 p-4">
                                            <div>
                                                <h3 className="font-semibold text-sm mb-2 px-3">SHOP TEA</h3>
                                                <ul className="space-y-1">
                                                    <ListItem href="/products" title="Shop All Teas" />
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-sm mb-2 px-3">SHOP BY COLLECTION</h3>
                                                 <ul className="space-y-1">
                                                    {collections.map((collection) => (
                                                        <ListItem key={collection.id} href={`/products#${collection.id}`} title={collection.title} />
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-sm mb-2 px-3">SHOP BY BRAND</h3>
                                                 <ul className="space-y-1">
                                                    {/* Add brand links here when available */}
                                                    <ListItem href="#" title="Brand A" />
                                                    <ListItem href="#" title="Brand B" />
                                                </ul>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {desktopNavLinks.slice(2).map((link) => (
                                     <NavigationMenuItem key={link.href}>
                                         <Link href={link.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === link.href ? "text-primary" : "text-muted-foreground")}>
                                                 {link.label}
                                             </NavigationMenuLink>
                                         </Link>
                                     </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
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
                        <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <nav className="flex flex-col items-start space-y-4 py-4">
                                    {navLinks.map((link) => (
                                        <Link 
                                            key={link.href} 
                                            href={link.href}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-primary w-full text-left p-2 rounded-md",
                                                pathname === link.href ? "text-primary bg-muted" : "text-muted-foreground"
                                            )}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="flex items-center space-x-2 pt-4">
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
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
