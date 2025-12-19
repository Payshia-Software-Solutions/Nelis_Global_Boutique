
"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "./product-card";
import type { Product, Collection } from "@/lib/types";
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

interface CollectionWithProducts {
  collection: Collection;
  products: Product[];
}

interface ProductListingProps {
  collectionsWithProducts: CollectionWithProducts[];
  allProducts: Product[];
  allCategories: string[];
  allCollections: Collection[];
}

export function ProductListing({ collectionsWithProducts, allProducts, allCategories, allCollections }: ProductListingProps) {
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
    searchQuery: searchParams.get("q") || "",
    category: searchParams.get("category") || "all",
    collection: (searchParams.get("collection") ? [searchParams.get("collection")!] : []) as string[],
    priceRange: [0, 5000],
    rating: 0,
    sortBy: "featured",
  });
  const [isFiltersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const collectionFromUrl = searchParams.get("collection");
    if (collectionFromUrl && !filters.collection.includes(collectionFromUrl)) {
      setFilters(prev => ({ ...prev, collection: [collectionFromUrl] }));
    }
    const searchFromUrl = searchParams.get("q") || "";
    if (searchFromUrl !== filters.searchQuery) {
      setFilters(prev => ({...prev, searchQuery: searchFromUrl}));
    }
  }, [searchParams, filters.collection, filters.searchQuery]);

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  
  const handleCollectionChange = (collectionId: string) => {
    setFilters(prev => {
        const newCollections = prev.collection.includes(collectionId)
            ? prev.collection.filter(id => id !== collectionId)
            : [...prev.collection, collectionId];
        return { ...prev, collection: newCollections };
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

    if (filters.collection.length > 0) {
      const selectedCollectionIds = new Set(filters.collection);
      const productsInSelectedCollections = new Set<string>();
      collectionsWithProducts.forEach(cwp => {
        if(selectedCollectionIds.has(cwp.collection.id)) {
          cwp.products.forEach(p => productsInSelectedCollections.add(p.id));
        }
      });
      filtered = filtered.filter(p => productsInSelectedCollections.has(p.id));
    }

    filtered = filtered.filter((product) => {
      const categoryMatch = filters.category === "all" || product.category === filters.category;
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const ratingMatch = product.rating >= filters.rating;
      return categoryMatch && priceMatch && ratingMatch;
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
    
    // Remove duplicates
    return Array.from(new Map(filtered.map(p => [p.id, p])).values());

  }, [allProducts, filters, collectionsWithProducts]);

  const displayedGroupedProducts = useMemo(() => {
    if (filters.collection.length > 0) {
      const selectedCollectionIds = new Set(filters.collection);
      return collectionsWithProducts.filter(cwp => selectedCollectionIds.has(cwp.collection.id));
    }
    return collectionsWithProducts;
  }, [collectionsWithProducts, filters.collection]);

  const productsInCollections = useMemo(() => {
    const productIds = new Set<string>();
    collectionsWithProducts.forEach(cwp => {
      cwp.products.forEach(p => productIds.add(p.id));
    });
    return productIds;
  }, [collectionsWithProducts]);

  const productsNotInAnyCollection = useMemo(() => {
    return allProducts.filter(p => !productsInCollections.has(p.id));
  }, [allProducts, productsInCollections]);


  const FilterControls = () => (
    <div className="space-y-6">
        <div>
            <h3 className="text-lg font-medium mb-2">Collection</h3>
            <div className="space-y-2">
            {allCollections.map((col) => (
                <div key={col.id} className="flex items-center space-x-2">
                    <Checkbox 
                        id={`collection-${col.id}`}
                        checked={filters.collection.includes(col.id)}
                        onCheckedChange={() => handleCollectionChange(col.id)}
                    />
                    <Label htmlFor={`collection-${col.id}`} className="font-normal">{col.title}</Label>
                </div>
            ))}
            </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Category</h3>
          <Select
            value={filters.category}
            onValueChange={(value) => handleFilterChange("category", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {allCategories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
  
  const hasActiveFilters = filters.collection.length > 0 || filters.category !== 'all' || filters.priceRange[0] !== 0 || filters.priceRange[1] !== 5000 || filters.rating !== 0 || filters.searchQuery !== '';

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
                 {displayedGroupedProducts.map(({ collection, products }) => {
                    let collectionProducts = products;
                    
                    switch (filters.sortBy) {
                        case "price-asc":
                            collectionProducts.sort((a, b) => a.price - b.price);
                            break;
                        case "price-desc":
                            collectionProducts.sort((a, b) => b.price - a.price);
                            break;
                        case "rating-desc":
                            collectionProducts.sort((a, b) => b.rating - a.rating);
                            break;
                        default:
                            break;
                    }

                    return (
                        <div key={collection.id}>
                            <h2 className="text-3xl font-bold text-center mb-8">{collection.title}</h2>
                            {collectionProducts.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {collectionProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8">
                                    <p className="text-muted-foreground">No products found for this collection.</p>
                                </div>
                            )}
                        </div>
                    );
                })}
                {productsNotInAnyCollection.length > 0 && (
                  <div>
                      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {productsNotInAnyCollection.map((product) => (
                              <ProductCard key={product.id} product={product} />
                          ))}
                      </div>
                  </div>
                )}
                </>
              )}
            </div>
        </div>
    </div>
  );
}
