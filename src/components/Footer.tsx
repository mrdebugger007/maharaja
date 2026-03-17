"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    brand: [
      { label: "About Us", href: "#about" },
      { label: "Our Story", href: "#story" },
      { label: "Menu", href: "#menu" },
      { label: "Gallery", href: "#gallery" },
    ],
    franchise: [
      { label: "Start a Franchise", href: "#franchise" },
      { label: "Franchise Model", href: "#model" },
      { label: "Investment", href: "#investment" },
      { label: "Locations", href: "#locations" },
    ],
    contact: [
      { label: "info@maharajaamruttulya.com", href: "mailto:info@maharajaamruttulya.com" },
      { label: "+91 98765 43210", href: "tel:+919876543210" },
      { label: "Mumbai, Maharashtra", href: "#" },
    ],
    social: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1A0A00 0%, #0D0500 100%)",
      }}
    >
      {/* Top border accent */}
      <div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, #D4AF37 50%, transparent 90%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3
                className="font-[family-name:var(--font-cinzel)] text-xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #D4AF37, #F5E6A3)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Maharaja Amruttulya
              </h3>
              <p className="mt-3 font-[family-name:var(--font-outfit)] text-sm leading-relaxed text-gray-400">
                Experience the royal taste of authentic Amruttulya chai. Every
                cup crafted with tradition and premium ingredients.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {footerLinks.brand.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[family-name:var(--font-outfit)] text-sm text-gray-500 transition-colors duration-300 hover:text-royal-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Franchise Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wider uppercase text-royal-gold">
              Franchise
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.franchise.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[family-name:var(--font-outfit)] text-sm text-gray-500 transition-colors duration-300 hover:text-royal-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wider uppercase text-royal-gold">
              Contact
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.contact.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[family-name:var(--font-outfit)] text-sm text-gray-500 transition-colors duration-300 hover:text-royal-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <h4 className="font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wider uppercase text-royal-gold">
              Follow Us
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-[family-name:var(--font-outfit)] text-sm text-gray-500 transition-colors duration-300 hover:text-royal-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:justify-between">
          <p className="font-[family-name:var(--font-outfit)] text-xs text-gray-600">
            © {currentYear} Maharaja Amruttulya. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-outfit)] text-xs text-gray-600">
              Crafted with
            </span>
            <span className="text-deep-red">♥</span>
            <span className="font-[family-name:var(--font-outfit)] text-xs text-gray-600">
              for chai lovers
            </span>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div
        className="absolute right-0 top-0 h-64 w-64 opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 70%)",
        }}
      />
    </footer>
  );
}
