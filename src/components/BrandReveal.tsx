"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BrandReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.35], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.35], [60, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(139,0,0,0.1) 50%, transparent 70%)",
          }}
        />
      </div>

      {/* Brand Reveal Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
      >
        {/* Crown */}
        <motion.div className="animate-crown-float">
          <svg
            width="80"
            height="55"
            viewBox="0 0 80 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 48 L15 15 L27 30 L40 8 L53 30 L65 15 L72 48 Z"
              fill="url(#revealCrown)"
              stroke="#B8960F"
              strokeWidth="1.5"
            />
            <circle cx="15" cy="14" r="4" fill="#D4AF37" />
            <circle cx="40" cy="7" r="5" fill="#D4AF37" />
            <circle cx="65" cy="14" r="4" fill="#D4AF37" />
            <rect x="6" y="47" width="68" height="4" rx="2" fill="#D4AF37" />
            <defs>
              <linearGradient
                id="revealCrown"
                x1="8"
                y1="8"
                x2="72"
                y2="48"
              >
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="30%" stopColor="#F5E6A3" />
                <stop offset="60%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#B8960F" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Main Brand Text */}
        <div className="flex flex-col items-center gap-3">
          <h2
            className="gold-shimmer-text font-[family-name:var(--font-cinzel)] text-5xl font-bold tracking-widest sm:text-6xl md:text-8xl"
          >
            Maharaja
          </h2>
          <h2
            className="gold-shimmer-text font-[family-name:var(--font-cinzel)] text-3xl font-bold tracking-[0.4em] sm:text-4xl md:text-5xl"
          >
            Amruttulya
          </h2>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-4">
          <div
            className="h-[1px] w-16 sm:w-24"
            style={{
              background: "linear-gradient(90deg, transparent, #D4AF37)",
            }}
          />
          <div className="h-2 w-2 rotate-45 bg-royal-gold" />
          <div
            className="h-[1px] w-16 sm:w-24"
            style={{
              background: "linear-gradient(90deg, #D4AF37, transparent)",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          className="font-[family-name:var(--font-playfair)] text-lg tracking-wider text-warm-dark/70 sm:text-xl"
          style={{ fontStyle: "italic" }}
        >
          &ldquo;Har Chai Mein Royal Swad&rdquo;
        </p>

        {/* Glow ring behind text */}
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full opacity-30 sm:h-96 sm:w-96"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 60%)",
          }}
        />
      </motion.div>
    </section>
  );
}
