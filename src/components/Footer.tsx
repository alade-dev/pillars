"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Ribbon,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/programs" },
    { label: "Impact Dashboard", href: "/impact" },
  ],
  resources: [
    { label: "Breast Self-Exam Guide", href: "#" },
    { label: "SDG 3 Overview", href: "#" },
    { label: "Cancer Resources Nigeria", href: "#" },
    { label: "NYSC CDS Info", href: "#" },
  ],
  getInvolved: [
    { label: "Contact Us", href: "/contact" },
    { label: "Volunteer", href: "/contact" },
    { label: "Donate", href: "/contact" },
    { label: "Partner With Us", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-sdg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center">
                <Ribbon className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">Pillars</span>
            </Link>
            <p className="text-gray-400 mb-2 text-xs font-medium uppercase tracking-wider text-pink/70">
              NYSC Community Development Service
            </p>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Empowering Nigerian women through breast cancer awareness, free
              screenings, and early detection education. Aligned with SDG 3:
              Good Health &amp; Well-being. Powered by Pillars.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4 capitalize">
                {title.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-pink transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400">
            <a
              href="mailto:pillarshealth@gmail.com"
              className="flex items-center gap-2 hover:text-pink transition-colors"
            >
              <Mail className="w-4 h-4" />
              pillarshealth@gmail.com
            </a>
            <a
              href="tel:+2348068304340"
              className="flex items-center gap-2 hover:text-pink transition-colors"
            >
              <Phone className="w-4 h-4" />
              +234 806 830 4340
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nigeria
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Pillars — NYSC Community
            Development Service | SDG 3: Good Health &amp; Well-being
          </p>
        </div>
      </div>
    </footer>
  );
}
