"use client";

import { motion } from "framer-motion";

export default function HeroScene() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* Crown Icon */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="animate-crown-float"
        >
          <svg
            width="60"
            height="40"
            viewBox="0 0 60 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 35 L10 10 L20 22 L30 5 L40 22 L50 10 L55 35 Z"
              fill="url(#crownGradient)"
              stroke="#B8960F"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="10" r="3" fill="#D4AF37" />
            <circle cx="30" cy="5" r="3.5" fill="#D4AF37" />
            <circle cx="50" cy="10" r="3" fill="#D4AF37" />
            <defs>
              <linearGradient
                id="crownGradient"
                x1="5"
                y1="5"
                x2="55"
                y2="35"
              >
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F5E6A3" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="font-[family-name:var(--font-cinzel)] text-4xl font-bold tracking-wider sm:text-6xl md:text-7xl"
          style={{
            background:
              "linear-gradient(135deg, #8B0000 0%, #D4AF37 50%, #8B0000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 60px rgba(212,175,55,0.2)",
          }}
        >
          Maharaja
          <br />
          Amruttulya
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-[family-name:var(--font-playfair)] text-lg tracking-wide text-warm-dark/80 sm:text-xl"
          style={{ fontStyle: "italic" }}
        >
          A Royal Tea Experience
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="h-[1px] w-32"
          style={{
            background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.3em] uppercase text-warm-dark/50">
          Scroll to pour
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="h-8 w-5 rounded-full border-2 border-royal-gold/40 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-royal-gold"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
