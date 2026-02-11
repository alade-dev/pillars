"use client";

import AnimatedCounter from "./AnimatedCounter";
import { globalStats } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="py-20 animated-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-pink font-semibold text-sm uppercase tracking-wider">
            The Crisis in Nigeria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Why Pillars Matters
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Breast cancer is the most common cancer among Nigerian women. Most
            cases are detected late, when treatment is harder and survival rates
            are lower. These numbers show the urgent need for action.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {globalStats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
