import { Metadata } from "next";
import ServicesPage from "@/components/services/services-page";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_SERVICES_QUERY } from "@/sanity/lib/queries";
import type { ServicesQueryResult } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Our Services | Divit MindSpace",
  description:
    "Explore our comprehensive range of specialized services including educational assessments, psychometric assessments, special education sessions, and training programs for neurodivergent individuals.",
  openGraph: {
    title: "Our Services | Divit MindSpace",
    description:
      "Explore our comprehensive range of specialized services including educational assessments, psychometric assessments, special education sessions, and training programs for neurodivergent individuals.",
    type: "website",
    url: "https://divitmindspace.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Divit MindSpace",
    description:
      "Explore our comprehensive range of specialized services including educational assessments, psychometric assessments, special education sessions, and training programs for neurodivergent individuals.",
  },
  alternates: {
    canonical: "https://divitmindspace.com/services",
  },
};

export default async function ServicesListPage() {
  const { data: services } = await sanityFetch({
    query: ALL_SERVICES_QUERY,
    tags: ["services"],
  });

  const servicesData = (services as ServicesQueryResult) || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Divit MindSpace Services",
    description:
      "Comprehensive services for neurodivergent individuals including assessments, special education, and training programs.",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description || "",
        url: `https://divitmindspace.com/services/${service.slug.current}`,
        provider: {
          "@type": "Organization",
          name: "Divit MindSpace",
          url: "https://divitmindspace.com",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ServicesPage services={servicesData} />
    </>
  );
}
