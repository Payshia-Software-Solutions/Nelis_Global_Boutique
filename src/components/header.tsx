
import { Suspense } from "react";
import { HeaderClient } from "./header-client";
import { Skeleton } from "./ui/skeleton";

function HeaderSkeleton() {
    return (
        <header className="bg-card text-card-foreground border-b sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Skeleton className="h-10 w-36" />
                    <div className="hidden md:flex flex-1 items-center justify-center gap-4">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-40" />
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-24" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="md:hidden">
                            <Skeleton className="h-10 w-10 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export function Header() {
    return (
        <Suspense fallback={<HeaderSkeleton />}>
            <HeaderClient />
        </Suspense>
    )
}
