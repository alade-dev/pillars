"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { programs } from "@/lib/data";
import { ArrowUpRight, Ribbon, Filter } from "lucide-react";

const categories = [
  "All",
  ...Array.from(new Set(programs.map((p) => p.category))),
];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-sdg-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-pink/20 border border-pink/30 rounded-full px-4 py-2 mb-6">
              <Ribbon className="w-4 h-4 text-pink" />
              <span className="text-pink-light text-sm font-medium">
                Our Programs
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Community
              <br />
              <span className="gradient-text">Initiatives</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Our on-the-ground programmes bring breast cancer awareness, free
              screenings, and health education directly to Nigerian women in
              their markets, churches, mosques, schools, and communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <Filter className="w-5 h-5 text-gray-400" />
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-pink text-white shadow-lg shadow-pink/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Programs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((program, i) => (
                <ScrollReveal key={program.id} delay={0.05 * i}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all h-full flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-pink text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {program.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">
                          {program.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                        {program.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-sm font-bold text-pink">
                            {program.impact}
                          </div>
                          <div className="text-xs text-gray-400">
                            Measured Impact
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 45 }}
                          className="w-12 h-12 rounded-full bg-pink/10 flex items-center justify-center group-hover:bg-pink transition-colors cursor-pointer"
                        >
                          <ArrowUpRight className="w-5 h-5 text-pink group-hover:text-white transition-colors" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Impact Banner */}
      <section className="py-20 bg-pink relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxek0yNCAzMGgxMnYtMkgyNHYyem0wLTRoMTJ2LTJIMjR2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Reaching Women Across Nigeria
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our programmes have touched communities in over 15 states,
              bringing life-saving knowledge and free screenings to women who
              need them most.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              {[
                { value: "15+", label: "States" },
                { value: "5,000+", label: "Women Screened" },
                { value: "150+", label: "Corps Ambassadors" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
