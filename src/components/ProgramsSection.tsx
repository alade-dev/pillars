"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { programs } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProgramsSection() {
  const featured = programs.slice(0, 3);

  return (
    <section className="py-24 bg-white" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
            <div>
              <span className="text-pink font-semibold text-sm uppercase tracking-wider">
                Our Initiatives
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sdg-dark mt-3">
                Health Programs
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl text-lg">
                On-the-ground initiatives reaching Nigerian women in their
                communities, places of worship, markets, and schools.
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-pink font-semibold hover:gap-3 transition-all mt-6 sm:mt-0"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((program, i) => (
            <ScrollReveal key={program.id} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all h-full flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {program.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-sdg-dark mb-3 group-hover:text-pink transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-pink">
                      {program.impact}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-pink/10 flex items-center justify-center group-hover:bg-pink transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5 text-pink group-hover:text-white transition-colors" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
