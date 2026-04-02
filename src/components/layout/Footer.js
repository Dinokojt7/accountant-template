"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import siteData from "@/lib/data/site-data.json";

export default function Footer() {
  const { business, footer } = siteData;

  const socialLinks = [
    { icon: Instagram, href: business.social.instagram, label: "Instagram" },
    { icon: Facebook, href: business.social.facebook, label: "Facebook" },
    { icon: Twitter, href: business.social.twitter, label: "Twitter" },
    { icon: Linkedin, href: business.social.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="w-full relative border-t border-gray-200" style={{ backgroundColor: "var(--bg-warm)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-5"
          >
            <div className="relative h-16 w-44">
              <Image
                src="/images/logo.png"
                alt={business.name}
                fill
                className="object-contain object-left brightness-0"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#5A5A5A" }}>{business.description}</p>
            <p className="text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: "var(--primary)" }}>
              {business.tagline}
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center transition-all hover:border-gray-900"
                  style={{ color: "#5A5A5A" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                  onMouseLeave={e => e.currentTarget.style.color = "#5A5A5A"}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-5" style={{ color: "var(--primary)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "#5A5A5A" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                    onMouseLeave={e => e.currentTarget.style.color = "#5A5A5A"}
                  >
                    <ChevronRight className="w-3.5 h-3.5" style={{ color: "#C0BDBA" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-5" style={{ color: "var(--primary)" }}>Legal</h4>
            <ul className="space-y-3">
              {footer.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 text-sm transition-colors" style={{ color: "#5A5A5A" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                    onMouseLeave={e => e.currentTarget.style.color = "#5A5A5A"}
                  >
                    <ChevronRight className="w-3.5 h-3.5" style={{ color: "#C0BDBA" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs mt-6 pt-4 border-t border-gray-200" style={{ color: "#A0A09C" }}>
              All services subject to engagement letter.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase mb-5" style={{ color: "var(--primary)" }}>Contact</h4>
            <div className="space-y-4">
              <a href={`tel:${business.phone}`} className="flex items-center gap-3 transition-colors group" style={{ color: "#5A5A5A" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                onMouseLeave={e => e.currentTarget.style.color = "#5A5A5A"}
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">{business.phone}</span>
              </a>
              <a href={`mailto:${business.email}`} className="flex items-center gap-3 transition-colors group" style={{ color: "#5A5A5A" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                onMouseLeave={e => e.currentTarget.style.color = "#5A5A5A"}
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm break-all">{business.email}</span>
              </a>
              <div className="flex items-start gap-3" style={{ color: "#5A5A5A" }}>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm leading-relaxed">{business.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#A0A09C" }}>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: "#A0A09C" }}>Powered by</span>
            <div className="relative h-6 w-24">
              <Image src="/images/addin-flux.png" alt="Addin Flux" fill className="object-contain object-left brightness-0" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
