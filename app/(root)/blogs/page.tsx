import { Metadata } from "next";
import BlogPage from "@/components/blogs/blog-page";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import type { PostsQueryResult } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Blog | Divit MindSpace",
  description:
    "Explore our latest insights on neurodivergent care, special education, diagnostic assessments, and teaching strategies for individuals with unique learning needs.",
  openGraph: {
    title: "Blog | Divit MindSpace",
    description:
      "Explore our latest insights on neurodivergent care, special education, diagnostic assessments, and teaching strategies for individuals with unique learning needs.",
    type: "website",
    url: "https://divitmindspace.com/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Divit MindSpace",
    description:
      "Explore our latest insights on neurodivergent care, special education, diagnostic assessments, and teaching strategies for individuals with unique learning needs.",
  },
};

export default async function BlogsListPage() {
  const { data: posts } = await sanityFetch({
    query: ALL_POSTS_QUERY,
    tags: ["post"],
  });

  return <BlogPage posts={(posts as PostsQueryResult) || []} />;
}
