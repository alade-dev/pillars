"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Ribbon, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
          alt="Healthcare professionals providing breast cancer screening"
          fill
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sdg-dark/90 via-sdg-dark/70 to-sdg-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-sdg-dark/80 via-transparent to-sdg-dark/30" />
        <div className="absolute inset-0 bg-pink/5 mix-blend-multiply" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-pink/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-pink/20 border border-pink/30 rounded-full px-4 py-2 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-pink animate-pulse" />
              <span className="text-pink-light text-sm font-medium">
                NYSC CDS Project &bull; SDG 3: Good Health &amp; Well-being
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              <span className="gradient-text">Pillars</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-300">
                Breast Cancer Awareness &amp; Early Detection
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
            >
              Empowering Nigerian women through free breast cancer screenings,
              self-examination training, and community health education. Because
              every woman deserves to know her body and protect her health.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/programs"
                className="group inline-flex items-center gap-2 bg-pink text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-dark transition-all shadow-xl shadow-pink/25 hover:shadow-pink/40"
              >
                Our Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/impact"
                className="group inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                <Play className="w-5 h-5" />
                See Our Impact
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { value: "5,000+", label: "Women Screened" },
                { value: "50+", label: "Communities" },
                { value: "150+", label: "Corps Members" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold text-pink">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full aspect-square max-w-md mx-auto"
            >
              {/* Central Circle */}
              <div className="absolute inset-[15%] rounded-full border-2 border-dashed border-pink/30 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-[30%] rounded-full border border-pink/20" />

              {/* Center Icon */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-pink flex items-center justify-center shadow-2xl shadow-pink/40"
              >
                <Ribbon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Floating Cards */}
              {[
                { Icon: Shield, label: "Prevention", top: "5%", left: "50%", delay: 0.6 },
                { Icon: Users, label: "Community", top: "35%", left: "85%", delay: 0.8 },
                { Icon: Ribbon, label: "Awareness", top: "70%", left: "75%", delay: 1.0 },
              ].map(({ Icon, label, top, left, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay }}
                  className="absolute glass-card rounded-2xl p-4 flex items-center gap-3"
                  style={{ top, left, transform: "translate(-50%, -50%)" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-pink/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-pink" />
                  </div>
                  <span className="text-white font-medium text-sm">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
