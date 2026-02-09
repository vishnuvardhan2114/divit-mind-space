import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JobDetail } from "@/components/careers/job-detail";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { ALL_CAREER_SLUGS_QUERY, SINGLE_CAREER_QUERY } from "@/sanity/lib/queries";
import type { Career } from "@/sanity/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all careers at build time
export async function generateStaticParams() {
  const careers = await client.fetch<{ slug: string }[]>(ALL_CAREER_SLUGS_QUERY);
  
  return careers?.map((career) => ({
    slug: career.slug,
  })) || [];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: job } = await sanityFetch({
    query: SINGLE_CAREER_QUERY,
    params: { slug },
    tags: ["career"],
  });

  const jobData = job as Career;

  if (!jobData) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${jobData.title} | Careers | Divit MindSpace`,
    description: `Apply for ${jobData.title} position at Divit MindSpace. ${jobData.department} • ${jobData.employmentType.replace('-', ' ')}`,
    openGraph: {
      title: `${jobData.title} | Careers | Divit MindSpace`,
      description: `Apply for ${jobData.title} position at Divit MindSpace`,
      type: "website",
      url: `https://divitmindspace.com/careers/${jobData.slug.current}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${jobData.title} | Careers | Divit MindSpace`,
      description: `Apply for ${jobData.title} position at Divit MindSpace`,
    },
    alternates: {
      canonical: `https://divitmindspace.com/careers/${jobData.slug.current}`,
    },
  };
}

export default async function JobDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  
  const { data: job } = await sanityFetch({
    query: SINGLE_CAREER_QUERY,
    params: { slug },
    tags: ["career"],
  });

  const jobData = job as Career;

  if (!jobData) {
    notFound();
  }

  return <JobDetail job={jobData} />;
}
