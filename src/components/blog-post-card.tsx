
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Recycle, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BlogPostCardProps {
  post: {
    title: string;
    description: string;
    imageUrl: string;
    icon: React.ElementType;
    iconColor: string;
    imageHint: string;
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const Icon = post.icon;
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={600}
        height={400}
        className="w-full h-auto object-cover aspect-[16/9]"
        data-ai-hint={post.imageHint}
      />
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Icon className={cn("h-6 w-6 mt-1 flex-shrink-0", post.iconColor)} />
          <div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">
              {post.description}
            </p>
            <Link href="#" className="flex items-center text-primary font-medium hover:underline">
              Read More <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
