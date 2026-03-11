import type { Metadata } from "next";
import ServicesPage from "@/components/services/services-page";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_SERVICES_QUERY, THERAPY_SERVICES_QUERY } from "@/sanity/lib/queries";
import type { ServicesQueryResult } from "@/sanity/types";

interface PageProps {
  searchParams: Promise<{ therapy?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const isTherapy = params.therapy === "true";

  if (isTherapy) {
    return {
      title: "Therapy & Support | Divit MindSpace",
      description:
        "Therapy and support services for neurodivergent individuals and their families. Professional care tailored to your needs.",
      openGraph: {
        title: "Therapy & Support | Divit MindSpace",
        description:
          "Therapy and support services for neurodivergent individuals and their families.",
        type: "website",
        url: "https://divitmindspace.com/services?therapy=true",
      },
      twitter: {
        card: "summary_large_image",
        title: "Therapy & Support | Divit MindSpace",
        description: "Therapy and support services for neurodivergent individuals and their families.",
      },
      alternates: {
        canonical: "https://divitmindspace.com/services?therapy=true",
      },
    };
  }

  return {
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
}

export default async function ServicesListPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const isTherapy = params.therapy === "true";

  const { data: services } = await sanityFetch({
    query: isTherapy ? THERAPY_SERVICES_QUERY : ALL_SERVICES_QUERY,
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

      <ServicesPage services={servicesData} title={isTherapy ? "Therapy & Support" : "Our Services"} />
    </>
  );
}
