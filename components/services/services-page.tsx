"use client";

import { useEffect, useState } from "react";
import { ServiceCard } from "./service-card";
import type { ServiceListItem } from "@/sanity/types";

interface ServicesPageProps {
  services: ServiceListItem[];
  title?: string;
}

export default function ServicesPage({ services, title = "Our Services" }: ServicesPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-cream via-[#FDFBF7] to-green-lite/10 pt-16 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-green/70 leading-relaxed">
              Discover our comprehensive range of specialized services designed to support neurodivergent individuals 
              and their families with expert care and personalized attention.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 md:py-16">
        {/* Single services list */}
        {services.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service._id}
                  className="animate-fade-in"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Empty State */}
        {services.length === 0 && (
          <div className="text-center py-16 md:py-24">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-green-lite/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-lite"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-green mb-4">
                No services available yet
              </h3>
              <p className="text-green/70">
                Check back soon! We&apos;re working on bringing you exceptional services.
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
