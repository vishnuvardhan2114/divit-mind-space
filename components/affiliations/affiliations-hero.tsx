"use client";

import { motion } from "motion/react";

export function AffiliationsHero() {
  const titleWords = "Strategic Partnerships".split(" ");
  const subtitle = "Collaborating for Excellence in Neurodivergent Care";

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-cream via-[#FAF9F5] to-cream">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient blob - top left */}
        <motion.div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-linear-to-br from-blue/10 to-green-lite/10 blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
        
        {/* Medium gradient blob - bottom right */}
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-linear-to-tl from-green/5 via-blue/5 to-transparent blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Floating accent circles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-purple/5 blur-2xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-yellow/5 blur-2xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title with Word Animation */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif text-green leading-tight tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {titleWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + idx * 0.15,
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
            className="text-xl md:text-2xl text-green/70 font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {subtitle}
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center items-center gap-4 pt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="h-px w-20 md:w-32 bg-linear-to-r from-transparent via-blue/30 to-blue/30" />
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-blue" />
              <div className="w-2 h-2 rounded-full bg-green-lite" />
            </div>
            <div className="h-px w-20 md:w-32 bg-linear-to-l from-transparent via-blue/30 to-blue/30" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#FAF9F5] to-transparent" />
    </section>
  );
}
