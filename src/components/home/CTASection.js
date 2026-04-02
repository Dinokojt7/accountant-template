"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import siteData from "@/lib/data/site-data.json";

export default function CTASection() {
  const { business } = siteData;

  return (
    <section id="contact" className="w-full py-10 px-4">
      <div
        className="max-w-7xl mx-auto rounded-2xl py-14 px-8 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-8"
        style={{ backgroundColor: "var(--primary)" }}
      >
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2
            className="text-white mb-3 leading-none"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(32px, 5vw, 56px)",
            }}
          >
            Ready to grow<br />
            <em>with confidence?</em>
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm mt-4">
            Book a no-obligation consultation with Krol Finance today and take the first step toward financial clarity.
          </p>
        </motion.div>

        {/* Center: chevrons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="hidden md:flex items-center gap-1 self-center"
          aria-hidden="true"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 32" fill="none" className="w-5 h-8" style={{ opacity: 0.1 + i * 0.07 }}>
              <path d="M2 2L18 16L2 30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ))}
        </motion.div>

        {/* Right: buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="self-center flex flex-col sm:flex-row gap-3"
        >
          <Link
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-gray-900 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--bg-warm)" }}
          >
            WhatsApp us
          </Link>
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center justify-center h-12 px-8 border-2 border-white/30 text-sm font-medium text-white rounded-full hover:border-white/70 transition-colors"
          >
            Call us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
