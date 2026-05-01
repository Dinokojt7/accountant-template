"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import siteData from "@/lib/data/site-data.json";

export default function TestimonialsSection() {
  const { testimonials } = siteData;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 px-4 sm:px-8"
      style={{ backgroundColor: "#F4F4F4" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.3em] uppercase mb-12 text-center"
          style={{ color: "var(--primary)" }}
        >
          Client Results
        </motion.p>

        {/* Card */}
        <div className="overflow-hidden rounded-2xl shadow-sm">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-5"
            >
              {/* Left — company identity */}
              <div className="lg:col-span-2 bg-white flex flex-col items-center justify-center gap-5 px-8 py-10">
                <div className="relative w-full h-52">
                  <Image
                    src={t.image}
                    alt={t.company}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-1">
                    {t.companyType}
                  </p>
                  <p
                    className="text-base font-black uppercase tracking-tight leading-snug"
                    style={{ color: "var(--primary)" }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>

              {/* Right — quote */}
              <div className="lg:col-span-3 bg-white flex flex-col justify-center px-10 py-12 sm:px-14">
                <div
                  className="text-8xl font-black leading-none mb-1 select-none"
                  style={{ color: "var(--gray-light)" }}
                >
                  &ldquo;
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase leading-tight mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  {t.headline}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                  {t.subheadline}
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed italic mb-8">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-px"
                    style={{ backgroundColor: "var(--primary)" }}
                  />
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: "var(--primary)" }}
                    >
                      {t.author}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 border-2 rounded-md flex items-center justify-center transition-colors"
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--primary)";
            }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === current ? "var(--primary)" : "#d1d5db",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border-2 rounded-md flex items-center justify-center transition-colors"
            style={{ borderColor: "var(--primary)", color: "var(--primary)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--primary)";
            }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--primary)" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
