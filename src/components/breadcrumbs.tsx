
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
