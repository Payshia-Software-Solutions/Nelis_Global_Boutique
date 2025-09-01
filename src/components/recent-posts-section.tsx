
"use client";

import { BlogPostCard } from "./blog-post-card";
import { Leaf, Recycle, Sprout } from "lucide-react";

const posts = [
  {
    title: "The Benefits of Herbal Teas: A Natural Way to Boost Your Health",
    description: "Learn how our herbal teas, like Butterfly Pea, Lotus, and Hibiscus, can help enhance your well-being with their natural properties and health benefits.",
    imageUrl: "https://placehold.co/600x400.png",
    icon: Leaf,
    iconColor: "text-green-500",
    imageHint: "herbal tea flowers"
  },
  {
    title: "Dried Fruits: A Healthy Snack with a Long Shelf Life",
    description: "Explore the nutritional value of our dried fruits and how they make for the perfect snack on the go.",
    imageUrl: "https://placehold.co/600x400.png",
    icon: Sprout,
    iconColor: "text-orange-500",
    imageHint: "dried fruits bowl"
  },
  {
    title: "Reducing Food Waste with Sustainable Practices",
    description: "Discover how Nelis Global Boutique is working to reduce food waste while supporting local communities and promoting eco-friendly practices.",
    imageUrl: "https://placehold.co/600x400.png",
    icon: Recycle,
    iconColor: "text-blue-500",
    imageHint: "seedling planting"
  },
  {
    title: "The Power of Organic Farming: Why We Choose Sustainable Suppliers",
    description: "Read about how we support organic farming and work with local suppliers who are committed to sustainability.",
    imageUrl: "https://placehold.co/600x400.png",
    icon: Leaf,
    iconColor: "text-teal-500",
    imageHint: "organic farm field"
  },
];

export function RecentPostsSection() {
  return (
    <section className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl">Recent Posts</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <BlogPostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
