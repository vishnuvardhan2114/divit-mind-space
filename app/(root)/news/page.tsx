import { Metadata } from "next";
import BlogPage from "@/components/blogs/blog-page";
import { sanityFetch } from "@/sanity/lib/live";
import { NEWS_POSTS_QUERY } from "@/sanity/lib/queries";
import type { PostsQueryResult } from "@/sanity/types";

export const metadata: Metadata = {
  title: "News | Divit MindSpace",
  description:
    "Stay updated with the latest news and announcements from Divit MindSpace about neurodivergent care, special education, and community developments.",
  openGraph: {
    title: "News | Divit MindSpace",
    description:
      "Stay updated with the latest news and announcements from Divit MindSpace.",
    type: "website",
    url: "https://divitmindspace.com/news",
  },
  twitter: {
    card: "summary_large_image",
    title: "News | Divit MindSpace",
    description:
      "Stay updated with the latest news and announcements from Divit MindSpace.",
  },
};

export default async function NewsListPage() {
  const { data: posts } = await sanityFetch({
    query: NEWS_POSTS_QUERY,
    tags: ["post"],
  });

  return <BlogPage posts={(posts as PostsQueryResult) || []} title="Latest News" />;
}
