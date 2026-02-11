"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { timelineEvents, pillars } from "@/lib/data";
import {
  Ribbon,
  Target,
  Globe,
  Users,
  ChevronRight,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-sdg-dark" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-transparent" />
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-pink/40"
              style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
              animate={{ y: [-15, 15, -15], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

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
                About Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="gradient-text">Pillars</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Pillars is an NYSC Community Development Service project
              dedicated to breast cancer awareness, free screenings, and early
              detection education for Nigerian women — aligned with SDG 3: Good
              Health &amp; Well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                    alt="Breast cancer screening and awareness in Nigeria"
                    width={700}
                    height={500}
                    className="object-cover w-full h-[450px]"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 bg-pink rounded-2xl p-6 text-white shadow-xl"
                >
                  <div className="text-4xl font-bold">5,000+</div>
                  <div className="text-sm opacity-90">Women Screened Free</div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="text-pink font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-sdg-dark mt-3 mb-6">
                A Nigeria Where No Woman Dies From Late Breast Cancer Detection
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong>Pillars</strong> was born from a simple but
                powerful conviction: no Nigerian woman should lose her life to
                breast cancer because it was caught too late. As a Community
                Development Service (CDS) project under the National Youth
                Service Corps (NYSC), we harness the energy and reach of corps
                members across Nigeria to bring breast health education and free
                screenings directly to communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Breast cancer is the leading cancer among Nigerian women, yet
                over 70% of cases are detected at advanced stages when treatment
                options are limited. We are changing that reality — one
                community, one screening, one life at a time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Target, label: "8 Pillars", desc: "Core focus areas" },
                  { icon: Globe, label: "36 States + FCT", desc: "National reach" },
                  { icon: Users, label: "150+ Corpers", desc: "Health ambassadors" },
                  { icon: Heart, label: "SDG 3", desc: "Health & Well-being" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-pink" />
                    </div>
                    <div>
                      <div className="font-semibold text-sdg-dark text-sm">
                        {label}
                      </div>
                      <div className="text-xs text-gray-400">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What is NYSC CDS */}
      <section className="py-20 bg-pink/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-full bg-sdg-green/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-sdg-green" />
              </div>
              <h3 className="text-2xl font-bold text-sdg-dark mb-4">
                What is NYSC Community Development Service?
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
                The National Youth Service Corps (NYSC) requires every Nigerian
                graduate to participate in Community Development Service (CDS)
                during their service year. CDS groups allow corps members to
                contribute meaningfully to their host communities.{" "}
                <strong className="text-pink">Pillars</strong> is a
                health-focused CDS project that channels this national service
                into life-saving breast cancer awareness and screening
                initiatives — directly supporting SDG 3.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink font-semibold text-sm uppercase tracking-wider">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-sdg-dark mt-3">
                Milestones &amp; Timeline
              </h2>
              <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Key moments in the Pillars story — from concept to community
              impact.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-pink/20 -translate-x-1/2 hidden md:block" />

            {timelineEvents.map((event, i) => (
              <ScrollReveal
                key={event.year}
                delay={0.1 * i}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex items-center gap-8 mb-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all inline-block max-w-sm"
                    >
                      <div className="text-pink font-bold text-lg mb-1">
                        {event.year}
                      </div>
                      <h3 className="font-bold text-sdg-dark mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      className="w-4 h-4 rounded-full bg-pink shadow-lg shadow-pink/30"
                    />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-pink font-semibold text-sm uppercase tracking-wider">
                Our Focus Areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-sdg-dark mt-3">
                All 8 Pillars of Our Work
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.id} delay={0.05 * i}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:bg-pink/5 border border-transparent hover:border-pink/10 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-pink/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-pink">
                      0{pillar.id}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-sdg-dark mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-3xl font-bold text-pink">
                      {pillar.stat}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                      {pillar.statLabel}
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-300 hidden md:block" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
