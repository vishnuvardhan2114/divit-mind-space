import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { ServiceHeader } from "@/components/services/service-header";
import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { ALL_SERVICE_SLUGS_QUERY, SINGLE_SERVICE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Service } from "@/sanity/types";
import { BookConsultationModal } from "@/components/book-consultation-modal";
import { Button } from "@/components/ui/button";
import { portableTextComponents } from "@/components/portable-text-components";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all services at build time
export async function generateStaticParams() {
  const services = await client.fetch<{ slug: string }[]>(ALL_SERVICE_SLUGS_QUERY);

  return services?.map((service) => ({
    slug: service.slug,
  })) || [];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: service } = await sanityFetch({
    query: SINGLE_SERVICE_QUERY,
    params: { slug },
    tags: ["services"],
  });

  const serviceData = service as Service;

  if (!serviceData) {
    return {
      title: "Service Not Found",
    };
  }

  const title = serviceData.seo?.metaTitle || serviceData.title;
  const description = serviceData.seo?.metaDescription || serviceData.description || "";
  const ogImage = serviceData.seo?.ogImage || serviceData.image;
  const ogImageUrl = ogImage ? urlFor(ogImage)?.width(1200).height(630).url() : null;
  const serviceUrl = `https://divitmindspace.com/services/${serviceData.slug.current}`;

  return {
    title: `${title} | Divit MindSpace`,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: serviceUrl,
      images: ogImageUrl ? [{ url: ogImageUrl, width: 1200, height: 630, alt: title }] : [],
      siteName: "Divit MindSpace",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
    alternates: {
      canonical: serviceUrl,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  
  const { data: service } = await sanityFetch({
    query: SINGLE_SERVICE_QUERY,
    params: { slug },
    tags: ["services"],
  });

  const serviceData = service as Service;

  if (!serviceData) {
    notFound();
  }

  // Get main image URL
  const mainImageUrl = serviceData.image
    ? urlFor(serviceData.image)?.width(1200).height(600).url()
    : null;

  // JSON-LD structured data for SEO with EEAT signals
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.title,
    description: serviceData.description || "",
    image: mainImageUrl || "",
    provider: {
      "@type": "Organization",
      name: "Divit MindSpace",
      url: "https://divitmindspace.com",
      logo: {
        "@type": "ImageObject",
        url: "https://divitmindspace.com/logo.png",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Healthcare/Education",
    url: `https://divitmindspace.com/services/${serviceData.slug.current}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceData.title,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceData.title,
            description: serviceData.description || "",
          },
        },
      ],
    },
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#FDFBF7] min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="bg-cream/50 border-b border-green/10">
          <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-green/60">
              <Link href="/" className="hover:text-green transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-green transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-green font-medium">{serviceData.title}</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 lg:px-8 md:py-16">
          {/* Service Header */}
          <ServiceHeader
            title={serviceData.title}
            description={serviceData.description}
            popular={serviceData.popular}
          />

          {/* Main Image */}
          {mainImageUrl && (
            <div className="mt-12 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={mainImageUrl}
                alt={serviceData.image?.alt || serviceData.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {serviceData.image?.caption && (
                <p className="mt-3 text-sm text-green/60 text-center italic">
                  {serviceData.image.caption}
                </p>
              )}
            </div>
          )}

          {/* Service Content with PortableText */}
          <article className="mt-12 max-w-none">
            {Array.isArray(serviceData.body) && (
              <PortableText 
                value={serviceData.body} 
                components={portableTextComponents}
              />
            )}
          </article>

          {/* Call to Action Section */}
          <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-green to-green-lite rounded-2xl text-white shadow-2xl">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90">
                Book a consultation with our specialists to learn more about how we can help you.
              </p>
              <BookConsultationModal>
                <Button
                  size="lg"
                  className="bg-yellow text-green hover:bg-yellow/90 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a Consultation
                </Button>
              </BookConsultationModal>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-cream/50 rounded-xl border border-green/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-green mb-2">
                  Have Questions?
                </h3>
                <p className="text-green/70">
                  Our team is here to help you understand our services better.
                </p>
              </div>
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  className="border-green text-green hover:bg-green hover:text-white transition-all duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Back to Services Link */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-green hover:text-green-lite transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">Back to All Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
