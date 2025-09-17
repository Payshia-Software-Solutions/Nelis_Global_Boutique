
"use client";

import { BlogPostCard } from "./blog-post-card";
import { Leaf, Recycle, Sprout } from "lucide-react";

const posts: any[] = [];

export function RecentPostsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Recent Posts</h2>
        </div>
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No recent posts to display.</p>
          </div>
        )}
      </div>
    </section>
  );
}
