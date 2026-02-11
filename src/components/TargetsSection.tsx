"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { pillars } from "@/lib/data";
import {
  Search,
  Heart,
  BookOpen,
  Hand,
  Users,
  Megaphone,
  Flag,
  MapPin,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Heart,
  BookOpen,
  Hand,
  Users,
  Megaphone,
  Flag,
  MapPin,
};

export default function TargetsSection() {
  return (
    <section className="py-24 bg-gray-50" id="targets">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink font-semibold text-sm uppercase tracking-wider">
              Our Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sdg-dark mt-3">
              What We Do
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Eight interconnected pillars driving our mission to make breast
              cancer a story of early detection and survival — not late
              diagnosis and loss.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] || Heart;
            return (
              <ScrollReveal key={pillar.id} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-pink/20 transition-all h-full group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-pink/10 flex items-center justify-center group-hover:bg-pink group-hover:shadow-lg group-hover:shadow-pink/25 transition-all">
                      <Icon className="w-7 h-7 text-pink group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-pink bg-pink/10 px-3 py-1 rounded-full">
                      0{pillar.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-sdg-dark mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-pink">
                      {pillar.stat}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {pillar.statLabel}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
