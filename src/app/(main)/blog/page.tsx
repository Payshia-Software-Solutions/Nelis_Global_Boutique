
import { BlogHeroSection } from '@/components/blog-hero-section';
import { BlogFilterSection } from '@/components/blog-filter-section';
import { RecentPostsSection } from '@/components/recent-posts-section';

export default function BlogPage() {
  return (
    <div>
      <BlogHeroSection />
      <BlogFilterSection />
      <RecentPostsSection />
    </div>
  );
}
