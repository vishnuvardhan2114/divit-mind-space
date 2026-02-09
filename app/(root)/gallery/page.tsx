import { Metadata } from "next";
import { GalleryPage } from "@/components/gallery/gallery-page";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_GALLERY_IMAGES_QUERY } from "@/sanity/lib/queries";
import type { GalleryQueryResult } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Gallery | Divit MindSpace",
  description:
    "Explore our gallery of events and activities celebrating neurodivergent learners, special education sessions, and community achievements.",
  openGraph: {
    title: "Gallery | Divit MindSpace",
    description:
      "Explore our gallery of events and activities celebrating neurodivergent learners, special education sessions, and community achievements.",
    type: "website",
    url: "https://divitmindspace.com/gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Divit MindSpace",
    description:
      "Explore our gallery of events and activities celebrating neurodivergent learners, special education sessions, and community achievements.",
  },
  alternates: {
    canonical: "https://divitmindspace.com/gallery",
  },
};

export default async function GalleryRoute() {
  const { data: images } = await sanityFetch({
    query: ALL_GALLERY_IMAGES_QUERY,
    tags: ["gallery"],
  });

  return <GalleryPage images={(images as GalleryQueryResult) || []} />;
}
