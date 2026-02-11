"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-pink font-semibold text-sm uppercase tracking-wider">
              Voices From The Community
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sdg-dark mt-3">
              Stories That Inspire
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Real testimonials from Nigerian women and corps members whose
              lives have been touched by Pillars.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.author} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all h-full flex flex-col"
              >
                <Quote className="w-10 h-10 text-pink/20 mb-4" />
                <p className="text-gray-600 leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-sdg-dark text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.role}
                    </div>
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
