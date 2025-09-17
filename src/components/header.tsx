
"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { cn } from "@/lib/utils";
import { useState, useEffect, FormEvent } from "react";
import type { Collection } from "@/lib/types";
import { getCollections } from "@/lib/mock-data";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";

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
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
    const [collections, setCollections] = useState<Collection[]>([]);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const data = await getCollections();
                setCollections(data);
            } catch (error) {
                console.error("Failed to fetch collections in Header:", error);
            }
        };
        fetchCollections();
    }, []);

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
                               <form onSubmit={handleSearchSubmit} className="relative">
                                   <Input 
                                       type="search" 
                                       placeholder="Search products..." 
                                       className="w-full pr-10"
                                       value={searchQuery}
                                       onChange={(e) => setSearchQuery(e.target.value)}
                                       autoFocus
                                   />
                                   <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                                       <Search className="h-5 w-5" />
                                   </Button>
                               </form>
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
                         <form onSubmit={handleSearchSubmit} className="relative">
                           <Input 
                               type="search" 
                               placeholder="Search products..." 
                               className="w-full pr-10"
                               value={searchQuery}
                               onChange={(e) => setSearchQuery(e.target.value)}
                               autoFocus
                           />
                           <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                               <Search className="h-5 w-5" />
                           </Button>
                       </form>
                    </div>
                )}
            </div>
        </header>
    );
}

    