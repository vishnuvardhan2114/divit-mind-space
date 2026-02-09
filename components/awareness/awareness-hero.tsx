"use client";

import { motion } from "motion/react";

export function AwarenessHero() {
  const titleWords = "Building Awareness, Breaking Barriers".split(" ");
  const subtitle = "Empowering Communities Through Education";

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#FAF9F5] via-cream to-[#FAF9F5]">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large organic blob - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-linear-to-br from-green-lite/20 to-green/10 blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
        
        {/* Medium organic blob - bottom left */}
        <motion.div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-linear-to-tr from-yellow/15 to-purple/10 blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
        
        {/* Small accent blob - center */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-linear-to-br from-purple/5 to-transparent blur-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXhpIHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cGF0aCBkPSJNMCAwaDMwMHYzMDBIMHoiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Title with Word-by-Word Animation */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-green leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {titleWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-3 md:mr-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + idx * 0.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-green/70 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {subtitle}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="flex justify-center items-center gap-4 pt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="h-px w-16 md:w-24 bg-linear-to-r from-transparent via-green/30 to-green/30" />
            <div className="w-2 h-2 rounded-full bg-yellow" />
            <div className="h-px w-16 md:w-24 bg-linear-to-l from-transparent via-green/30 to-green/30" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-green/60 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            FREE awareness sessions across preschools, schools, colleges, and organizations.
            <br className="hidden md:block" />
            Join us in creating an inclusive society where every child can thrive.
          </motion.p>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#FAF9F5] to-transparent" />
    </section>
  );
}
