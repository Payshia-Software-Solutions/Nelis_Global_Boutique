
"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { cn } from "@/lib/utils";
import { useState, useEffect, FormEvent, useRef } from "react";
import type { Collection, Product } from "@/lib/types";
import { getCollections, getProducts } from "@/lib/mock-data";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger, PopoverAnchor } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

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
    { href: "/store", label: "Online Store" },
    { href: "/our-impact", label: "Impact & Sustainability" },
    { href: "/wholesale", label: "Wholesale & Export" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
];

export function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const { itemCount, openCart } = useCart();
    const [isMenuOpen, setMenuOpen] = useState(false);
    
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    
    const [collections, setCollections] = useState<Collection[]>([]);

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const [collectionsData, productsData] = await Promise.all([getCollections(), getProducts()]);
                setCollections(collectionsData);
                setAllProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch collections or products in Header:", error);
            }
        };
        fetchHeaderData();
    }, []);
    
    useEffect(() => {
        if (searchQuery) {
            const results = allProducts
                .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .slice(0, 5);
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    }, [searchQuery, allProducts]);

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        router.push(`/store?q=${encodeURIComponent(searchQuery)}`);
        setIsSearchOpen(false);
    };

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

    const desktopNavLinks = navLinks.filter(link => link.label !== "Online Store");

    const SearchBarContent = () => (
        <form onSubmit={handleSearchSubmit} className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
            />
        </form>
    );

    const closeSearch = () => {
      setIsSearchOpen(false);
      setSearchQuery('');
      setFilteredProducts([]);
    }

    return (
        <header className="bg-card text-card-foreground border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/">
                        <Logo />
                    </Link>

                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {desktopNavLinks.slice(0, 2).map((link) => (
                                    <NavigationMenuItem key={link.href}>
                                        <Link href={link.href} passHref>
                                            <NavigationMenuLink asChild>
                                                <div className={cn(navigationMenuTriggerStyle(), pathname === link.href ? "text-primary" : "text-muted-foreground", "cursor-pointer")}>
                                                    {link.label}
                                                </div>
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn((pathname.startsWith('/store') || pathname.startsWith('/products')) && "text-primary")}>Online Store</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[400px] grid-cols-2 gap-x-8 p-4">
                                            <div>
                                                <h3 className="font-semibold text-sm mb-2 px-3">SHOP TEA</h3>
                                                <ul className="space-y-1">
                                                    <ListItem href="/store" title="Shop All Products" />
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-sm mb-2 px-3">SHOP BY COLLECTION</h3>
                                                <ul className="space-y-1">
                                                    {collections.map((collection) => (
                                                        <ListItem key={collection.id} href={`/store?collection=${collection.id}`} title={collection.title} />
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {desktopNavLinks.slice(2).map((link) => (
                                    <NavigationMenuItem key={link.href}>
                                        <Link href={link.href} passHref>
                                            <NavigationMenuLink asChild>
                                                <div className={cn(navigationMenuTriggerStyle(), pathname === link.href ? "text-primary" : "text-muted-foreground", "cursor-pointer")}>
                                                    {link.label}
                                                </div>
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                            <PopoverTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                                    <Search className="h-5 w-5" />
                                </Button>
                            </PopoverTrigger>
                             <PopoverContent className="w-[450px] p-0" align="end" sideOffset={10}>
                                <SearchBarContent />
                                {filteredProducts.length > 0 && (
                                    <>
                                        <Separator />
                                        <div className="max-h-[60vh] overflow-y-auto">
                                        {filteredProducts.map(product => (
                                            <Link key={product.id} href={`/products/${product.slug}`} onClick={closeSearch}>
                                                <div className="flex items-center gap-4 p-3 hover:bg-muted">
                                                    <Image src={product.imageUrl} alt={product.name} width={50} height={50} className="rounded-md object-cover" />
                                                    <div className="flex-grow">
                                                        <p className="font-medium truncate">{product.name}</p>
                                                        <p className="text-sm text-muted-foreground">Rs {product.price.toFixed(2)}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                        </div>
                                        <Separator />
                                        <form onSubmit={handleSearchSubmit}>
                                            <Button type="submit" variant="ghost" className="w-full justify-center p-3">
                                                View all results for &quot;{searchQuery}&quot;
                                            </Button>
                                        </form>
                                    </>
                                )}
                            </PopoverContent>
                        </Popover>
                        
                        <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
                            <ShoppingCart className="h-5 w-5" />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </Button>
                        <ThemeToggle />
                        
                        <div className="md:hidden">
                            <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left">
                                    <div className="p-4 flex justify-between items-center">
                                      <Logo />
                                    </div>
                                    <nav className="flex flex-col items-start space-y-2 p-4">
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
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
