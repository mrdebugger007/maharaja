"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo Icon */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              <ellipse cx="20" cy="28" rx="12" ry="8" fill="#8B0000" />
              <ellipse cx="20" cy="26" rx="12" ry="8" fill="#A52A2A" />
              <ellipse cx="20" cy="26" rx="10" ry="6" fill="#8B0000" />
              <path
                d="M12 18 C12 12, 28 12, 28 18 L28 26 C28 26 12 26 12 26 Z"
                fill="#8B0000"
              />
              <path
                d="M12 18 C12 12, 28 12, 28 18"
                stroke="#D4AF37"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="20" cy="10" r="3" fill="#D4AF37" />
              <path d="M17 10 L20 4 L23 10" fill="#D4AF37" />
            </svg>
          </div>
        </div>

        {/* Center: Brand Name */}
        <h1
          className="hidden font-[family-name:var(--font-playfair)] text-lg font-bold tracking-wide sm:block"
          style={{
            background: scrolled
              ? "linear-gradient(135deg, #8B0000, #D4AF37)"
              : "linear-gradient(135deg, #2D1810, #8B0000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Maharaja Amruttulya
        </h1>

        {/* Right: CTA */}
        <motion.a
          href="#franchise"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #8B0000, #A52A2A)",
            boxShadow: "0 4px 15px rgba(139, 0, 0, 0.3)",
          }}
        >
          Order Now
        </motion.a>
      </div>
    </motion.nav>
  );
}
