"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { OrganizationCard } from "./organization-card";

export function PartnershipShowcase() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-green mb-6 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            Divit Health × GD Goenka Healthcare Academy
          </h2>
          <p className="text-lg md:text-xl text-green/70 leading-relaxed">
            Divit Health, in collaboration with GD Goenka Healthcare Academy, offers specialized 
            training programs and courses designed to educate parents, teachers, and professionals 
            on effectively supporting neurodivergent children while enhancing their own skills.
          </p>
        </motion.div>

        {/* Featured Partnership Image - Bento Style */}
        <motion.div
          className="max-w-6xl mx-auto mb-20 md:mb-28"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative group">
            {/* Main Image Card */}
            <div className="relative aspect-video md:aspect-21/9 overflow-hidden rounded-3xl shadow-2xl">
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Image
                  src="/affiliations.png"
                  alt="Partnership between Divit Health and GD Goenka Healthcare Academy showing collaborative healthcare education"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  priority
                />
              </motion.div>

              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-green/10 via-transparent to-transparent pointer-events-none" />

              {/* Grain texture */}
              <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXhpIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cGF0aCBkPSJNMCAwaDMwMHYzMDBIMHoiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
            </div>

            {/* Decorative shadow element */}
            <motion.div
              className="absolute -inset-4 -z-10 bg-gradient-to-br from-blue/20 via-green-lite/10 to-transparent rounded-3xl blur-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </motion.div>

        {/* Value Proposition Card */}
        <motion.div
          className="max-w-4xl mx-auto mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cream to-white p-8 md:p-12 shadow-lg border border-green/10">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif text-green mb-4" style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}>
                Evidence-Based Training Programs
              </h3>
              <p className="text-base md:text-lg text-green/70 leading-relaxed">
                These programs provide evidence-based strategies and practical knowledge to foster 
                inclusive learning environments and empower individuals working in the neurodivergence 
                space. Together, we&apos;re building a future where every professional has the tools to 
                make a meaningful difference.
              </p>
            </div>

            {/* Floating accent */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-blue/10 to-transparent rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* Organization Cards - Creative Bento Grid */}
        <div className="max-w-7xl mx-auto relative">
          {/* Desktop: Asymmetric overlapping layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 relative">
            {/* Divit Health Card - Offset left */}
            <div className="col-span-6 lg:col-span-5 relative z-10">
              <OrganizationCard
                title="Divit Health"
                description="A pioneering organization dedicated to providing comprehensive care, education, and support for neurodivergent children and their families. Through innovative approaches and evidence-based practices, Divit Health empowers communities to create inclusive environments where every child can thrive."
                accentColor="green"
                delay={0}
              />
            </div>

            {/* GD Goenka Card - Offset right and down, overlapping */}
            <div className="col-span-6 lg:col-span-7 lg:col-start-6 relative z-20 lg:mt-10">
              <OrganizationCard
                title="GD Goenka Healthcare Academy"
                description={
                  <div className="space-y-4">
                    <p>
                      The GD Goenka Group is a leading name in education and professional training, 
                      renowned for its commitment to excellence and innovation. With a strong legacy 
                      in shaping future leaders, the group has expanded into healthcare education through 
                      GD Goenka Healthcare, offering high-quality training programs across various domains.
                    </p>
                    <p>
                      Their focus on skill development and industry-relevant courses ensures that individuals 
                      are well-equipped to make meaningful contributions in their respective fields.
                    </p>
                    <div className="pt-2 space-y-2 text-sm md:text-base">
                      <p className="font-medium text-green">The GD Group Community Includes:</p>
                      <ul className="space-y-1 text-green/60">
                        <li>• 100,000+ students at GD Goenka University</li>
                        <li>• 90+ GD Goenka Senior Secondary Schools (CBSE)</li>
                        <li>• GD Goenka World School (IB)</li>
                        <li>• GD Goenka High School (ICSE)</li>
                        <li>• 30+ GD Goenka La Petite Montessori Preschools</li>
                        <li>• 50+ GD Goenka Toddler House Pre Schools and Day Care</li>
                      </ul>
                    </div>
                  </div>
                }
                accentColor="yellow"
                delay={0.2}
              />
            </div>
          </div>

          {/* Tablet: Offset layout */}
          <div className="hidden md:grid lg:hidden grid-cols-10 gap-8 relative">
            {/* Divit Health Card */}
            <div className="col-span-10 md:col-span-5">
              <OrganizationCard
                title="Divit Health"
                description="A pioneering organization dedicated to providing comprehensive care, education, and support for neurodivergent children and their families. Through innovative approaches and evidence-based practices, Divit Health empowers communities to create inclusive environments where every child can thrive."
                accentColor="green"
                delay={0}
              />
            </div>

            {/* GD Goenka Card - slightly offset */}
            <div className="col-span-10 md:col-span-6 md:col-start-5 md:mt-12">
              <OrganizationCard
                title="GD Goenka Healthcare Academy"
                description={
                  <div className="space-y-4">
                    <p>
                      The GD Goenka Group is a leading name in education and professional training, 
                      renowned for its commitment to excellence and innovation. With a strong legacy 
                      in shaping future leaders, the group has expanded into healthcare education through 
                      GD Goenka Healthcare, offering high-quality training programs across various domains.
                    </p>
                    <p>
                      Their focus on skill development and industry-relevant courses ensures that individuals 
                      are well-equipped to make meaningful contributions in their respective fields.
                    </p>
                    <div className="pt-2 space-y-2 text-sm md:text-base">
                      <p className="font-medium text-green">The GD Group Community Includes:</p>
                      <ul className="space-y-1 text-green/60">
                        <li>• 100,000+ students at GD Goenka University</li>
                        <li>• 90+ GD Goenka Senior Secondary Schools (CBSE)</li>
                        <li>• GD Goenka World School (IB)</li>
                        <li>• GD Goenka High School (ICSE)</li>
                        <li>• 30+ GD Goenka La Petite Montessori Preschools</li>
                        <li>• 50+ GD Goenka Toddler House Pre Schools and Day Care</li>
                      </ul>
                    </div>
                  </div>
                }
                accentColor="blue"
                delay={0.2}
              />
            </div>
          </div>

          {/* Mobile: Simple stack */}
          <div className="md:hidden space-y-8">
            <OrganizationCard
              title="Divit Health"
              description="A pioneering organization dedicated to providing comprehensive care, education, and support for neurodivergent children and their families. Through innovative approaches and evidence-based practices, Divit Health empowers communities to create inclusive environments where every child can thrive."
              accentColor="green"
              delay={0}
            />

            <OrganizationCard
              title="GD Goenka Healthcare Academy"
              description={
                <div className="space-y-4">
                  <p>
                    The GD Goenka Group is a leading name in education and professional training, 
                    renowned for its commitment to excellence and innovation. With a strong legacy 
                    in shaping future leaders, the group has expanded into healthcare education through 
                    GD Goenka Healthcare, offering high-quality training programs across various domains.
                  </p>
                  <p>
                    Their focus on skill development and industry-relevant courses ensures that individuals 
                    are well-equipped to make meaningful contributions in their respective fields.
                  </p>
                  <div className="pt-2 space-y-2 text-sm md:text-base">
                    <p className="font-medium text-green">The GD Group Community Includes:</p>
                    <ul className="space-y-1 text-green/60">
                      <li>• 100,000+ students at GD Goenka University</li>
                      <li>• 90+ GD Goenka Senior Secondary Schools (CBSE)</li>
                      <li>• GD Goenka World School (IB)</li>
                      <li>• GD Goenka High School (ICSE)</li>
                      <li>• 30+ GD Goenka La Petite Montessori Preschools</li>
                      <li>• 50+ GD Goenka Toddler House Pre Schools and Day Care</li>
                    </ul>
                  </div>
                </div>
              }
              accentColor="blue"
              delay={0.2}
            />
          </div>

          {/* Floating decorative elements */}
          <motion.div
            className="hidden lg:block absolute -left-8 top-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-yellow/10 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="hidden lg:block absolute -right-8 bottom-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-purple/10 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>
    </section>
  );
}
