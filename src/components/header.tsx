
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

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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
    const [collections, setCollections] = useState<Collection[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [searchResults, setSearchResults] = useState<Product[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchCollectionsAndProducts = async () => {
            try {
                const [collectionsData, productsData] = await Promise.all([
                    getCollections(),
                    getProducts()
                ]);
                setCollections(collectionsData);
                setAllProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch collections or products in Header:", error);
            }
        };
        fetchCollectionsAndProducts();
    }, []);

    useEffect(() => {
        const queryFromUrl = searchParams.get("q") || "";
        if(!isSearchOpen) {
            setSearchQuery(queryFromUrl);
        }
    }, [searchParams, isSearchOpen]);


    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults([]);
            return;
        }

        const filtered = allProducts
            .filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0, 5);
        setSearchResults(filtered);
    }, [searchQuery, allProducts]);

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        router.push(`/store?q=${encodeURIComponent(searchQuery)}`);
        setIsSearchOpen(false);
    };

    const handleResultClick = () => {
        setIsSearchOpen(false);
        setSearchQuery("");
    }

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

    const searchPopoverContent = (
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" onOpenAutoFocus={(e) => e.preventDefault()}>
            {searchResults.length > 0 ? (
                <div className="divide-y">
                    {searchResults.map(product => (
                        <Link key={product.id} href={`/products/${product.slug}`} onClick={handleResultClick} className="flex items-center gap-4 p-2 hover:bg-accent">
                            <Image src={product.imageUrl} alt={product.name} width={40} height={40} className="rounded-md" />
                            <div className="flex-grow">
                                <p className="font-medium line-clamp-2">{product.name}</p>
                                <p className="text-sm text-muted-foreground">LKR {product.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    ))}
                    <form onSubmit={handleSearchSubmit}>
                        <button type="submit" className="w-full text-center p-2 text-sm text-primary hover:bg-accent">
                            View all results for &quot;{searchQuery}&quot;
                        </button>
                    </form>
                </div>
            ) : (
                <div className="p-4 text-center text-sm text-muted-foreground">No results found.</div>
            )}
        </PopoverContent>
    );
    
    const SearchBar = ({ isMobile = false }: { isMobile?: boolean }) => (
      <Popover open={isSearchFocused && searchQuery.length > 0}>
        <PopoverTrigger asChild>
          <form onSubmit={handleSearchSubmit} className="relative">
            <Input
              ref={searchInputRef}
              type="search"
              placeholder="Search products..."
              className={cn("w-full pr-10", isMobile ? "" : "max-w-md")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              autoFocus
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </PopoverTrigger>
        {searchPopoverContent}
      </Popover>
    );

    return (
        <header className="bg-card text-card-foreground border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/">
                        <Logo />
                    </Link>

                    <div className="hidden md:flex flex-1 items-center justify-center">
                       {isSearchOpen ? (
                           <div className="w-full max-w-md">
                                <SearchBar />
                           </div>
                       ) : (
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
                       )}
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
                        </Button>
                        <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
                            <ShoppingCart className="h-5 w-5" />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </Button>
                        <ThemeToggle />
                    </div>
                    
                    <div className="md:hidden flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                             {isSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
                        </Button>
                        <Button variant="ghost" size="icon" className="relative" onClick={openCart}>
                            <ShoppingCart className="h-6 w-6" />
                            {itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {itemCount}
                                </span>
                            )}
                        </Button>
                        <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <div className="p-4 flex justify-between items-center">
                                  <Logo />
                                  <ThemeToggle />
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
                 {isSearchOpen && (
                    <div className="md:hidden py-2">
                        <SearchBar isMobile={true} />
                    </div>
                )}
            </div>
        </header>
    );
}

    