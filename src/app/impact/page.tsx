"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { impactData } from "@/lib/data";
import { Ribbon, TrendingUp, BarChart3, Globe } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#E84393", "#f06eb4", "#ff9ff3", "#c2185b"];

export default function ImpactPage() {
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
              <BarChart3 className="w-4 h-4 text-pink" />
              <span className="text-pink-light text-sm font-medium">
                Impact Dashboard
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Measuring
              <br />
              <span className="gradient-text">Our Impact</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Real data tracking our progress in breast cancer awareness,
              screenings, and community reach across Nigeria. Transparent,
              measurable, and growing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Ribbon,
                value: "5,500+",
                label: "Free Screenings Conducted",
                change: "+37.5% YoY",
                color: "text-pink",
              },
              {
                icon: TrendingUp,
                value: "80K+",
                label: "People Reached (Awareness)",
                change: "+100% YoY",
                color: "text-pink",
              },
              {
                icon: Globe,
                value: "50+",
                label: "Communities Served",
                change: "+66% YoY",
                color: "text-pink",
              },
              {
                icon: BarChart3,
                value: "400+",
                label: "Referrals for Further Care",
                change: "+43% YoY",
                color: "text-pink",
              },
            ].map((metric, i) => (
              <ScrollReveal key={metric.label} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center">
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {metric.change}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-sdg-dark mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Chart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-sdg-dark">
                  Growth Over Time
                </h3>
                <p className="text-gray-500 mt-2">
                  Tracking our screening, awareness, and training numbers since
                  inception
                </p>
              </div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={impactData.yearlyProgress}>
                    <defs>
                      <linearGradient
                        id="screenings"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#E84393"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#E84393"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="trainings"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#f06eb4"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#f06eb4"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" stroke="#9CA3AF" fontSize={12} />
                    <YAxis stroke="#9CA3AF" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="screenings"
                      stroke="#E84393"
                      strokeWidth={2}
                      fill="url(#screenings)"
                      name="Free Screenings"
                    />
                    <Area
                      type="monotone"
                      dataKey="trainings"
                      stroke="#f06eb4"
                      strokeWidth={2}
                      fill="url(#trainings)"
                      name="BSE Trainings"
                    />
                    <Area
                      type="monotone"
                      dataKey="referrals"
                      stroke="#c2185b"
                      strokeWidth={2}
                      fill="transparent"
                      name="Medical Referrals"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Regional + Awareness Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-sdg-dark mb-2">
                  Regional Screening Coverage
                </h3>
                <p className="text-gray-500 mb-8">
                  Coverage percentage vs. target by Nigerian geo-political zone
                </p>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={impactData.regionData}
                      layout="vertical"
                      margin={{ left: 20 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f0f0f0"
                        horizontal={false}
                      />
                      <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                      <YAxis
                        dataKey="region"
                        type="category"
                        stroke="#9CA3AF"
                        fontSize={11}
                        width={100}
                      />
                      <Tooltip
                        contentStyle={{
                          borderRadius: "12px",
                          border: "1px solid #e5e7eb",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="coverage"
                        name="Current Coverage"
                        fill="#E84393"
                        radius={[0, 6, 6, 0]}
                      />
                      <Bar
                        dataKey="target"
                        name="Target"
                        fill="#E5E7EB"
                        radius={[0, 6, 6, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-sdg-dark mb-2">
                  Awareness Metrics Among Women Reached
                </h3>
                <p className="text-gray-500 mb-8">
                  Post-programme awareness levels in served communities
                </p>
                <div className="space-y-6">
                  {impactData.awarenessMetrics.map((item, i) => (
                    <div key={item.metric}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sdg-dark text-sm">
                          {item.metric}
                        </span>
                        <span className="font-bold text-pink text-sm">
                          {item.percentage}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${item.percentage}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.1 * i,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${COLORS[i % COLORS.length]}, ${COLORS[(i + 1) % COLORS.length]})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-pink/5 rounded-xl border border-pink/10">
                  <div className="text-sm text-gray-600">
                    <strong className="text-pink">Note:</strong> Metrics based
                    on post-programme surveys conducted in communities served by
                    Pillars. Baseline awareness levels were
                    significantly lower before our interventions.
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Data Source */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <Globe className="w-12 h-12 text-pink mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-sdg-dark mb-4">
                Data-Driven Community Health
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto">
                Our impact data is collected through screening records,
                community surveys, and programme attendance tracking. We
                collaborate with local health centres, the NYSC state
                secretariats, and partner NGOs to verify and validate our
                numbers. Breast cancer statistics for Nigeria are sourced from
                WHO GLOBOCAN and the Nigerian National Cancer Registry. Pillars
                is committed to full transparency.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
