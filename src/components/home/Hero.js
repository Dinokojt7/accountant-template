"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import siteData from "@/lib/data/site-data.json";

export default function Hero() {
  const { business } = siteData;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        minHeight: "clamp(560px, 78vh, 860px)",
        borderRadius: "0 0 64px 64px",
      }}
    >
      {/* Full-bleed image — object-cover, less zoomed via reduced section height */}
      <Image
        src="/images/hero.png"
        alt="Financial documents and tools"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Left-side gradient for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,14,12,0.60) 0%, rgba(15,14,12,0.30) 52%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-8 sm:px-14 md:px-20 flex flex-col justify-center"
        style={{ minHeight: "clamp(560px, 78vh, 860px)", paddingTop: "140px", paddingBottom: "80px" }}
      >
        <div className="max-w-xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.25em] uppercase text-white/60 mb-8"
          >
            {business.tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-white mb-8"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(34px, 7vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Taxes, bookkeeping<br />
            &amp; financial clarity,<br />
            <em>done right.</em>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mb-10"
          >
            {business.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-gray-900 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--bg-warm)" }}
            >
              Book a consultation
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center h-12 px-8 border-2 border-white/40 text-sm font-medium text-white rounded-full hover:border-white/80 transition-colors"
            >
              Our services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
