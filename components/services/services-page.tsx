"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ServiceCard } from "./service-card";
import { WhatsAppConsultationLink } from "@/components/whatsapp-consultation-link";
import type { ServiceListItem } from "@/sanity/types";
import { ClipboardCheck, Heart, Users, GraduationCap } from "lucide-react";

interface ServicesPageProps {
  services: ServiceListItem[];
  title?: string;
}

const categories = [
  { id: "all", label: "All Services", icon: null },
  { id: "assessments", label: "Assessments", icon: ClipboardCheck, color: "bg-green" },
  { id: "therapy", label: "Therapy", icon: Heart, color: "bg-blue" },
  { id: "guidance", label: "Guidance", icon: Users, color: "bg-yellow" },
  { id: "programs", label: "Programs", icon: GraduationCap, color: "bg-purple" },
];

const categoryDescriptions: Record<string, string> = {
  all: "Comprehensive support for neurodivergent children and families",
  assessments: "Get clear answers about your child's needs with professional evaluations",
  therapy: "Build confidence, communication, and essential life skills",
  guidance: "Practical strategies for parents and educators",
  programs: "Structured learning and development experiences",
};

export default function ServicesPage({ services, title = "Our Services" }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return services;
    return services.filter((s) => (s as any).category === activeCategory);
  }, [services, activeCategory]);

  // Count services per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: services.length };
    services.forEach((s) => {
      const cat = (s as any).category;
      if (cat) {
        counts[cat] = (counts[cat] || 0) + 1;
      }
    });
    return counts;
  }, [services]);

  return (
    <div className="min-h-screen bg-[#FAF9F5]">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-[#FAF9F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-purple/10 text-purple text-xs font-bold uppercase tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-purple" />
              Expert Care
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-green mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-green/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {categoryDescriptions[activeCategory]}
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-green">{services.length}+</div>
                <div className="text-xs text-green/60 uppercase tracking-wide">Services</div>
              </div>
              <div className="w-px h-8 bg-green/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-green">6+</div>
                <div className="text-xs text-green/60 uppercase tracking-wide">Specialists</div>
              </div>
              <div className="w-px h-8 bg-green/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-green">100+</div>
                <div className="text-xs text-green/60 uppercase tracking-wide">Families</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <WhatsAppConsultationLink className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-green text-white font-semibold hover:bg-green/90 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book a Free Consultation
              </WhatsAppConsultationLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-cream sticky top-20 z-40 border-y border-green/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all
                    ${isActive
                      ? "bg-green text-white shadow-md"
                      : "bg-white text-green/70 hover:bg-green/5 border border-green/10"
                    }
                  `}
                >
                  {cat.icon && <cat.icon className="w-4 h-4" />}
                  {cat.label}
                  {count > 0 && (
                    <span className={`
                      text-xs px-1.5 py-0.5 rounded-full
                      ${isActive ? "bg-white/20" : "bg-green/10"}
                    `}>
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-16 bg-[#FAF9F5]">
        <div className="container mx-auto px-4">
          {filteredServices.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-4 bg-green/10 rounded-full flex items-center justify-center">
                  <ClipboardCheck className="w-8 h-8 text-green/50" />
                </div>
                <h3 className="text-xl font-semibold text-green mb-2">
                  No services in this category yet
                </h3>
                <p className="text-green/60 text-sm">
                  Check other categories or contact us to learn about upcoming services.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-8 lg:p-10 border border-green/10 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl lg:text-3xl font-serif text-green mb-4"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
            >
              Not Sure Where to Start?
            </h2>
            <p className="text-green/70 mb-6">
              Book a free consultation and we'll help you understand which services are right for your child.
            </p>
            <WhatsAppConsultationLink className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-green text-white font-semibold hover:bg-green/90 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Get Free Guidance
            </WhatsAppConsultationLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
