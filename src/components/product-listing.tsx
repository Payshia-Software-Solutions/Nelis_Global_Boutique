
"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "./product-card";
import type { Product, Collection, CollectionProduct } from "@/lib/types";
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
  products: Product[];
  categories: string[];
  collections: Collection[];
  collectionProducts: CollectionProduct[];
}

export function ProductListing({ products, categories, collections, collectionProducts }: ProductListingProps) {
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
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
  }, [searchParams, filters.collection]);

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

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (filters.collection.length > 0) {
        const productIdsInCollection = collectionProducts
            .filter(cp => filters.collection.includes(cp.collection_id))
            .map(cp => cp.product_id);
        const uniqueProductIds = [...new Set(productIdsInCollection)];
        filtered = filtered.filter(product => uniqueProductIds.includes(product.id));
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
        // No specific sort for featured, could be based on a featured flag or default order
        break;
    }

    return filtered;
  }, [products, filters, collectionProducts]);

  const groupedProducts = useMemo(() => {
    const group: Record<string, Product[]> = {};

    const collectionsToDisplay = filters.collection.length > 0
        ? collections.filter(c => filters.collection.includes(c.id))
        : collections;

    collectionsToDisplay.forEach(collection => {
        const productIdsForCollection = new Set(
            collectionProducts
                .filter(cp => cp.collection_id === collection.id)
                .map(cp => cp.product_id)
        );

        const productsInCollection = filteredAndSortedProducts.filter(p => productIdsForCollection.has(p.id));

        if (productsInCollection.length > 0) {
            if (!group[collection.title]) {
                group[collection.title] = [];
            }
            group[collection.title].push(...productsInCollection);
        }
    });

    // If no collection filter is active, group all filtered products
    if(filters.collection.length === 0) {
        filteredAndSortedProducts.forEach(product => {
            const productCollections = collectionProducts.filter(cp => cp.product_id === product.id);
            if (productCollections.length > 0) {
                productCollections.forEach(pc => {
                    const collection = collections.find(c => c.id === pc.collection_id);
                    if (collection) {
                        if (!group[collection.title]) {
                            group[collection.title] = [];
                        }
                        if (!group[collection.title].some(p => p.id === product.id)) {
                             group[collection.title].push(product);
                        }
                    }
                });
            } else {
                if (!group['Uncategorized']) {
                    group['Uncategorized'] = [];
                }
                if (!group['Uncategorized'].some(p => p.id === product.id)) {
                    group['Uncategorized'].push(product);
                }
            }
        });
    }

    // Sort products within each group
    for (const collectionTitle in group) {
        let groupProducts = group[collectionTitle];
        switch (filters.sortBy) {
            case "price-asc":
                groupProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                groupProducts.sort((a, b) => b.price - a.price);
                break;
            case "rating-desc":
                groupProducts.sort((a, b) => b.rating - a.rating);
                break;
            case "featured":
            default:
                // Keep original order or implement featured logic
                break;
        }
    }

    return group;
  }, [filteredAndSortedProducts, collections, collectionProducts, filters.collection, filters.sortBy]);

  const FilterControls = () => (
    <div className="space-y-6">
        <div>
            <h3 className="text-lg font-medium mb-2">Collection</h3>
            <div className="space-y-2">
            {collections.map((col) => (
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
              {categories.map((cat) => (
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
                <p className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} products found</p>
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
              {Object.entries(groupedProducts).length > 0 ? (
                Object.entries(groupedProducts).map(([collectionTitle, products]) => (
                  <div key={collectionTitle}>
                    <h2 className="text-3xl text-center mb-8">{collectionTitle} ({products.length})</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}
            </div>

        </div>
    </div>
  );
}
