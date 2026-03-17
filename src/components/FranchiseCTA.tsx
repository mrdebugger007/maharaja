"use client";

import { motion } from "framer-motion";

export default function FranchiseCTA() {
  return (
    <section
      id="franchise"
      className="relative overflow-hidden py-24"
      style={{
        background:
          "linear-gradient(180deg, #F5E6D3 0%, #2D1810 40%, #1A0A00 100%)",
      }}
    >
      {/* Decorative gold circles */}
      <div
        className="absolute -left-20 top-20 h-40 w-40 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #D4AF37, transparent 70%)",
        }}
      />
      <div
        className="absolute -right-20 bottom-20 h-60 w-60 rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #D4AF37, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.4em] uppercase text-royal-gold"
        >
          Business Opportunity
        </motion.span>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        >
          Start Your{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #D4AF37, #F5E6A3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Royal Franchise
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl font-[family-name:var(--font-outfit)] text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          Join the Maharaja Amruttulya family and bring the royal chai experience
          to your city. With low investment, strong brand recall, and a proven
          business model — your success is brewed in.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 grid grid-cols-3 gap-8 sm:gap-16"
        >
          {[
            { number: "500+", label: "Outlets" },
            { number: "50+", label: "Cities" },
            { number: "10L+", label: "Cups/Day" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                className="font-[family-name:var(--font-playfair)] text-2xl font-bold sm:text-3xl"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F5E6A3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.number}
              </span>
              <span className="font-[family-name:var(--font-outfit)] text-xs tracking-wider text-gray-400 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="animate-pulse-glow rounded-full px-8 py-3.5 font-[family-name:var(--font-outfit)] text-sm font-semibold tracking-wider text-warm-black uppercase transition-all"
            style={{
              background:
                "linear-gradient(135deg, #D4AF37, #E8D48B, #D4AF37)",
            }}
          >
            Start Your Franchise
          </motion.a>
          <motion.a
            href="#model"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-royal-gold/40 px-8 py-3.5 font-[family-name:var(--font-outfit)] text-sm font-semibold tracking-wider text-royal-gold uppercase transition-all hover:border-royal-gold hover:bg-royal-gold/10"
          >
            View Business Model
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
