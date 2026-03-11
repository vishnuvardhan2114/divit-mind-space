"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

export function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      id="philosophy"
      className="relative py-24 px-4 md:px-6 lg:px-8 lg:py-22 overflow-hidden "
    >
      {/* Subtle background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[min(80%,480px)] h-96 bg-linear-to-bl from-[#89A09E]/8 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[min(60%,320px)] h-72 bg-linear-to-tr from-[#52154E]/6 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className=" relative z-10">
        <motion.div
          className="max-w-screen-2xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section label + title */}
          <motion.div
            className="mb-16 md:mb-20"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#2F3E33]/70 mb-4">
              What drives us
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2F3E33] leading-[1.12] tracking-tight">
              Our Philosophy
            </h2>
          </motion.div>

          {/* Mission + Vision: asymmetric two-column layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
            {/* Mission — dominant block with accent */}
            <motion.div
              className="lg:col-span-7 relative pl-6 md:pl-8 border-l-4 border-[#52154E]"
              variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#52154E]/10 text-[#52154E]">
                  <Target className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#52154E]">
                  Our Mission
                </span>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#2F3E33] leading-snug">
                To help kids with special needs achieve success in life by applying strength-based strategies.
              </p>
            </motion.div>

            {/* Vision — complementary, softer */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-center lg:pl-4"
              variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F3E33]/10 text-[#2F3E33]">
                  <Eye className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#2F3E33]">
                  Our Vision
                </span>
              </div>
              <p className="text-lg sm:text-xl text-[#2F3E33]/90 leading-relaxed">
                To help maximum kids and their families who have been touched by disabilities in any form.
              </p>
            </motion.div>
          </div>

          {/* Values — single refined block, two statements */}
          <motion.div
            className="relative rounded-2xl bg-[#2F3E33]/4 border border-[#2F3E33]/8 p-8 md:p-10 lg:p-12"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F3E33]/10 text-[#2F3E33]">
                <Heart className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#2F3E33]">
                Our Values
              </span>
            </div>
            <ul className="space-y-5 md:space-y-6" role="list">
              <li className="flex gap-4 md:gap-5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#52154E]" aria-hidden />
                <p className="text-base sm:text-lg text-[#2F3E33] leading-relaxed">
                  The well-being, safety, and success of our children is the highest priority we have.
                </p>
              </li>
              <li className="flex gap-4 md:gap-5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#52154E]" aria-hidden />
                <p className="text-base sm:text-lg text-[#2F3E33] leading-relaxed">
                  We focus on providing service with integrity, caring and compassion.
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
