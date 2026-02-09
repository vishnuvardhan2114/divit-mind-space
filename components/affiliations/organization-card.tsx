"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface OrganizationCardProps {
  title: string;
  description: string | ReactNode;
  logo?: string;
  accentColor?: "blue" | "green" | "purple" | "yellow";
  delay?: number;
}

export function OrganizationCard({ 
  title, 
  description, 
  logo, 
  accentColor = "blue",
  delay = 0 
}: OrganizationCardProps) {
  // Get dynamic class names
  const getBgClass = () => {
    switch(accentColor) {
      case 'blue': return 'bg-gradient-to-br from-blue/15 via-blue/10 to-blue/5';
      case 'green': return 'bg-gradient-to-br from-green-lite/15 via-green-lite/10 to-green-lite/5';
      case 'purple': return 'bg-gradient-to-br from-purple/15 via-purple/10 to-purple/5';
      case 'yellow': return 'bg-gradient-to-br from-yellow/15 via-yellow/10 to-yellow/5';
      default: return 'bg-gradient-to-br from-blue/15 via-blue/10 to-blue/5';
    }
  };

  const getBorderClass = () => {
    switch(accentColor) {
      case 'blue': return 'border-blue/25';
      case 'green': return 'border-green-lite/25';
      case 'purple': return 'border-purple/25';
      case 'yellow': return 'border-yellow/25';
      default: return 'border-blue/25';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="group relative"
    >
      {/* Frosted Glass Card with Dynamic Background */}
      <div className={`
        relative overflow-hidden rounded-2xl
        ${getBgClass()}
        backdrop-blur-sm
        border ${getBorderClass()}
        p-8 md:p-10
        shadow-lg hover:shadow-2xl
        transition-all duration-500
      `}>
        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
        
        {/* Floating background element with dynamic color */}
        <motion.div
          className={`absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-30 ${
            accentColor === 'blue' ? 'bg-linear-to-br from-blue/20 to-blue/5' :
            accentColor === 'green' ? 'bg-linear-to-br from-green-lite/20 to-green-lite/5' :
            accentColor === 'purple' ? 'bg-linear-to-br from-purple/20 to-purple/5' :
            'bg-linear-to-br from-yellow/20 to-yellow/5'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Logo area placeholder */}
          {logo && (
            <div className="h-16 flex items-center">
              <div className="text-sm font-medium text-green/70">{logo}</div>
            </div>
          )}

          {/* Title with dynamic color */}
          <h3 
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-green leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
          >
            {title}
          </h3>

          {/* Description with dynamic color */}
          <div className={`text-base md:text-lg leading-relaxed space-y-4 ${
            accentColor === 'green' ? 'text-green/75' : 'text-green/70'
          }`}>
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>

          {/* Decorative accent line with dynamic color */}
          <motion.div
            className={`h-1 w-0 rounded-full ${
              accentColor === 'blue' ? 'bg-blue' :
              accentColor === 'green' ? 'bg-green-lite' :
              accentColor === 'purple' ? 'bg-purple' :
              'bg-yellow'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
          />
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 blur-xl ${
            accentColor === 'blue' ? 'bg-linear-to-br from-blue/20 via-blue/10 to-transparent' :
            accentColor === 'green' ? 'bg-linear-to-br from-green-lite/20 via-green-lite/10 to-transparent' :
            accentColor === 'purple' ? 'bg-linear-to-br from-purple/20 via-purple/10 to-transparent' :
            'bg-linear-to-br from-yellow/20 via-yellow/10 to-transparent'
          }`} />
        </div>
      </div>
    </motion.div>
  );
}
