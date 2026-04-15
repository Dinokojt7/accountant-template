"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.65);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header — fixed, floats over the hero image */}
      <header
        className={`fixed z-50 transition-all duration-500 ${
          pastHero ? "top-3 left-4 right-4 rounded-2xl" : "top-0 left-0 right-0"
        }`}
        style={
          pastHero
            ? {
                backgroundColor: "rgba(15,14,12,0.4)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }
            : {
                background:
                  "linear-gradient(to right, rgba(15,14,12,1) 0%, rgba(15,14,12,0.5) 18%, transparent 52%)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative h-14 w-40 shrink-0">
            <Image
              src="/images/logo.webp"
              alt={siteData.business.name}
              fill
              priority
              className="object-contain object-left brightness-0 invert"
            />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold tracking-widest uppercase text-white hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* LET'S TALK button */}
            <Link
              href="/contact"
              className="hidden sm:flex h-10 px-6 items-center border-2 border-white/40 text-white text-xs font-medium tracking-wide rounded-full hover:border-white transition-colors"
            >
              Let&apos;s talk
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 text-white lg:hidden border-2 border-white/40 rounded-md"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Floating GET IN TOUCH tab */}
      <a
        href={siteData.business.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center"
        style={{
          backgroundColor: "var(--accent)",
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
          padding: "14px 10px",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
          GET IN&nbsp;&nbsp;TOUCH
        </span>
      </a>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-4/5 max-w-xs z-50 flex flex-col"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link
                  href="/"
                  className="relative h-12 w-32"
                  onClick={() => setMenuOpen(false)}
                >
                  <Image
                    src="/images/logo.webp"
                    alt={siteData.business.name}
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 px-6 py-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-white text-base font-semibold tracking-wide border-b border-white/10 transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="px-6 py-5 border-t border-white/10">
                <p className="text-xs text-white/40 mb-2 uppercase tracking-widest">
                  Contact
                </p>
                <p className="text-sm text-white/70">
                  {siteData.business.phone}
                </p>
                <p className="text-sm text-white/70 mt-1">
                  {siteData.business.email}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
