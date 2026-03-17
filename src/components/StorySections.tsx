"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StorySection {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse: boolean;
}

const sections: StorySection[] = [
  {
    title: "Har Chai Mein Royal Swad",
    subtitle: "The Royal Taste",
    description:
      "Every sip of Maharaja Amruttulya carries the legacy of royal chai traditions. Our master blenders craft each cup with precision, balancing bold CTC leaves with aromatic spices to deliver a taste that's truly regal.",
    image: "/images/story-royal.jpg",
    reverse: false,
  },
  {
    title: "Authentic Amruttulya Experience",
    subtitle: "Time-Honored Tradition",
    description:
      "Born from the bustling chai stalls of Maharashtra, the Amruttulya tradition represents generations of tea-making mastery. We honor this heritage by using authentic recipes passed down through decades, ensuring every cup tells a story.",
    image: "/images/story-tradition.jpg",
    reverse: true,
  },
  {
    title: "Premium Quality Ingredients",
    subtitle: "Crafted With Care",
    description:
      "We source only the finest Assam CTC tea leaves, hand-picked cardamom from Kerala, Ceylon cinnamon, and fresh dairy. No shortcuts, no compromises — just pure, premium ingredients that elevate your daily chai ritual.",
    image: "/images/story-ingredients.jpg",
    reverse: false,
  },
];

const sectionVariants = {
  hidden: (reverse: boolean) => ({
    opacity: 0,
    x: reverse ? 80 : -80,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: (reverse: boolean) => ({
    opacity: 0,
    x: reverse ? -80 : 80,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
      delay: 0.2,
    },
  },
};

export default function StorySections() {
  return (
    <section className="relative py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 flex flex-col items-center gap-4 px-6 text-center"
      >
        <span className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.4em] uppercase text-royal-gold">
          Our Story
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-warm-dark sm:text-4xl md:text-5xl">
          A Legacy of{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8B0000, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Excellence
          </span>
        </h2>
        <div className="flex items-center gap-3">
          <div
            className="h-[1px] w-12"
            style={{
              background: "linear-gradient(90deg, transparent, #D4AF37)",
            }}
          />
          <div className="h-1.5 w-1.5 rotate-45 bg-royal-gold" />
          <div
            className="h-[1px] w-12"
            style={{
              background: "linear-gradient(90deg, #D4AF37, transparent)",
            }}
          />
        </div>
      </motion.div>

      {/* Story Cards */}
      <div className="mx-auto flex max-w-6xl flex-col gap-32 px-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-12 ${
              section.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Text Content */}
            <motion.div
              custom={section.reverse}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-1 flex-col gap-4"
            >
              <span className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.3em] uppercase text-royal-gold">
                {section.subtitle}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-warm-dark sm:text-3xl md:text-4xl">
                {section.title}
              </h3>
              <div
                className="h-[2px] w-16"
                style={{
                  background: "linear-gradient(90deg, #D4AF37, transparent)",
                }}
              />
              <p className="font-[family-name:var(--font-outfit)] text-base leading-relaxed text-warm-dark/70 sm:text-lg">
                {section.description}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              custom={section.reverse}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative flex-1"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                {/* Gold border accent */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                />
              </div>
              {/* Decorative shadow */}
              <div
                className="absolute -bottom-4 left-1/2 -z-10 h-8 w-3/4 -translate-x-1/2 rounded-full opacity-30 blur-xl"
                style={{
                  background: "rgba(139,0,0,0.3)",
                }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
