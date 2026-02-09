import { Metadata } from "next";
import { CareersPage } from "@/components/careers/careers-page";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_CAREERS_QUERY } from "@/sanity/lib/queries";
import type { CareersQueryResult } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Careers | Divit MindSpace",
  description:
    "Join our team and make a difference in neurodivergent care and education. Explore open positions in education, training, clinical services, and more.",
  openGraph: {
    title: "Careers | Divit MindSpace",
    description:
      "Join our team and make a difference in neurodivergent care and education. Explore open positions in education, training, clinical services, and more.",
    type: "website",
    url: "https://divitmindspace.com/careers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Divit MindSpace",
    description:
      "Join our team and make a difference in neurodivergent care and education. Explore open positions in education, training, clinical services, and more.",
  },
  alternates: {
    canonical: "https://divitmindspace.com/careers",
  },
};

interface PageProps {
  searchParams: Promise<{ type?: string }>;
}

export default async function CareersRoute({ searchParams }: PageProps) {
  const params = await searchParams;
  const { data: jobs } = await sanityFetch({
    query: ALL_CAREERS_QUERY,
    tags: ["career"],
  });

  return <CareersPage jobs={(jobs as CareersQueryResult) || []} initialFilter={params.type} />;
}
