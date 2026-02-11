"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import {
  Ribbon,
  Search,
  BookOpen,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Ribbon,
    title: "Breast Cancer Awareness",
    description:
      "Breaking the silence around breast cancer in Nigerian communities through culturally sensitive education.",
  },
  {
    icon: Search,
    title: "Free Screenings",
    description:
      "Providing free clinical breast examinations in markets, churches, mosques, and community centres.",
  },
  {
    icon: BookOpen,
    title: "Self-Exam Training",
    description:
      "Teaching women how to perform monthly breast self-examinations for early detection at home.",
  },
  {
    icon: Users,
    title: "NYSC Corps Network",
    description:
      "Mobilising corps members across Nigeria as Breast Health Ambassadors in their host communities.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                  alt="Community health screening in Nigeria"
                  width={700}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sdg-dark/40 to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="text-3xl font-bold text-pink">5,000+</div>
                <div className="text-sm text-gray-500">Women Screened</div>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-pink/10 -z-10" />
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div>
            <ScrollReveal>
              <span className="text-pink font-semibold text-sm uppercase tracking-wider">
                About Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sdg-dark mt-3 mb-6 leading-tight">
                A Nigeria Where No Woman
                <br />
                <span className="gradient-text">Dies of Late Detection</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                <strong>Pillars</strong> is a Community Development
                Service (CDS) project under the National Youth Service Corps
                (NYSC), aligned with SDG 3: Good Health &amp; Well-being. We
                are dedicated to reducing breast cancer mortality in Nigeria
                through awareness, free screenings, and empowering women with
                knowledge about early detection.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={0.1 * i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl border border-gray-100 hover:border-pink/20 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center mb-4 group-hover:bg-pink/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-pink" />
                    </div>
                    <h3 className="font-semibold text-sdg-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
