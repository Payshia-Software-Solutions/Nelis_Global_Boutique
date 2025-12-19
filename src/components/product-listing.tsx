
"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ListFilter } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface ProductListingProps {
  allProducts: Product[];
  allCategories: string[];
}

export function ProductListing({ allProducts, allCategories }: ProductListingProps) {
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
    searchQuery: searchParams.get("q") || "",
    categories: (searchParams.get("category") ? [searchParams.get("category")!] : []) as string[],
    priceRange: [0, 5000],
    rating: 0,
    sortBy: "featured",
  });
  const [isFiltersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && !filters.categories.includes(categoryFromUrl)) {
      setFilters(prev => ({ ...prev, categories: [categoryFromUrl] }));
    }
    const searchFromUrl = searchParams.get("q") || "";
    if (searchFromUrl !== filters.searchQuery) {
      setFilters(prev => ({...prev, searchQuery: searchFromUrl}));
    }
  }, [searchParams, filters.categories, filters.searchQuery]);

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setFilters(prev => {
        const newCategories = prev.categories.includes(categoryId)
            ? prev.categories.filter(id => id !== categoryId)
            : [...prev.categories, categoryId];
        return { ...prev, categories: newCategories };
    });
  };

  const displayedProducts = useMemo(() => {
    let filtered = allProducts || [];

    if (filters.searchQuery) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(filters.searchQuery.toLowerCase())
        );
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    filtered = filtered.filter((product) => {
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const ratingMatch = product.rating >= filters.rating;
      return priceMatch && ratingMatch;
    });

    switch (filters.sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        // Keep original order
        break;
    }
    
    return Array.from(new Map(filtered.map(p => [p.id, p])).values());

  }, [allProducts, filters]);

  const productsByCategory = useMemo(() => {
    const grouped: { [key: string]: Product[] } = {};
    allProducts.forEach(product => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, [allProducts]);


  const FilterControls = () => (
    <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Category</h3>
          <div className="space-y-2">
            {allCategories.map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                    <Checkbox 
                        id={`category-${cat}`}
                        checked={filters.categories.includes(cat)}
                        onCheckedChange={() => handleCategoryChange(cat)}
                    />
                    <Label htmlFor={`category-${cat}`} className="font-normal">{cat}</Label>
                </div>
            ))}
            </div>
        </div>

        <div>
            <h3 className="text-lg font-medium mb-2">Price Range (LKR)</h3>
            <Slider
                defaultValue={[0, 5000]}
                max={5000}
                step={100}
                onValueChange={(value) => handleFilterChange("priceRange", value)}
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{filters.priceRange[0]}</span>
                <span>{filters.priceRange[1]}</span>
            </div>
        </div>
        
        <div>
            <h3 className="text-lg font-medium mb-2">Rating</h3>
            <Select
                value={String(filters.rating)}
                onValueChange={(value) => handleFilterChange("rating", Number(value))}
            >
                <SelectTrigger>
                    <SelectValue placeholder="Minimum rating" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="0">All Ratings</SelectItem>
                    <SelectItem value="4">4 stars & up</SelectItem>
                    <SelectItem value="3">3 stars & up</SelectItem>
                    <SelectItem value="2">2 stars & up</SelectItem>
                    <SelectItem value="1">1 star & up</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
  );
  
  const hasActiveFilters = filters.categories.length > 0 || filters.priceRange[0] !== 0 || filters.priceRange[1] !== 5000 || filters.rating !== 0 || filters.searchQuery !== '';

  return (
    <div className="flex">
        <aside className="hidden lg:block w-64 pr-8">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <FilterControls />
        </aside>

        <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
                <div className="lg:hidden">
                    <Sheet open={isFiltersOpen} onOpenChange={setFiltersOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline"><ListFilter className="mr-2 h-4 w-4" /> Filters</Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <SheetHeader>
                                <SheetTitle>Filters</SheetTitle>
                            </SheetHeader>
                            <div className="py-4">
                                <FilterControls />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <p className="text-sm text-muted-foreground">{displayedProducts.length} products found</p>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            Sort By <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => handleFilterChange("sortBy", "featured")}>Featured</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => handleFilterChange("sortBy", "price-asc")}>Price: Low to High</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => handleFilterChange("sortBy", "price-desc")}>Price: High to Low</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => handleFilterChange("sortBy", "rating-desc")}>Highest Rated</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
            <div className="space-y-12">
              {hasActiveFilters ? (
                displayedProducts.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {displayedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground">No products found matching your criteria.</p>
                  </div>
                )
              ) : (
                <>
                 {Object.entries(productsByCategory).map(([category, products]) => {
                    let categoryProducts = products;
                    
                    switch (filters.sortBy) {
                        case "price-asc":
                            categoryProducts.sort((a, b) => a.price - b.price);
                            break;
                        case "price-desc":
                            categoryProducts.sort((a, b) => b.price - a.price);
                            break;
                        case "rating-desc":
                            categoryProducts.sort((a, b) => b.rating - a.rating);
                            break;
                        default:
                            break;
                    }

                    return (
                        <div key={category}>
                            <h2 className="text-3xl font-bold text-center mb-8">{category}</h2>
                            {categoryProducts.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {categoryProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-muted-foreground">No products found for this category.</p>
                                </div>
                            )}
                        </div>
                    );
                })}
                </>
              )}
            </div>
        </div>
    </div>
  );
}
