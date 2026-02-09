import { BlogPostCard } from "./blog-post-card";
import type { PostListItem } from "@/sanity/types";

interface BlogPageProps {
  posts: PostListItem[];
  title?: string;
}

export default function BlogPage({ posts, title = "Our Blogs" }: BlogPageProps) {
  // Split posts into recent (first 3) and all posts
  const recentPosts = posts.slice(0, 3);
  const hasMorePosts = posts.length > 3;

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-green mx-auto text-center mb-8">
        {title}
      </h1>

      {/* Recent Blogs Section */}
      {recentPosts.length > 0 && (
        <div className="mt-12">
          <div className="mb-6 flex items-center">
            <h2 className="text-2xl font-semibold text-green">Recent Blogs</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* All Blogs Section */}
      {posts.length > 0 && (
        <div className="mt-12">
          <div className="mb-6 flex items-center">
            <h2 className="text-2xl font-semibold text-green">
              {hasMorePosts ? "All Blogs" : ""}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No blog posts available yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
