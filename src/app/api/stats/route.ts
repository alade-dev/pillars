import { NextResponse } from "next/server";
import { impactData, globalStats, pillars } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    overview: {
      project: "Pillars",
      type: "NYSC Community Development Service",
      sdgAlignment: "SDG 3: Good Health & Well-being",
      country: "Nigeria",
      lastUpdated: new Date().toISOString(),
    },
    globalStats: globalStats.map((stat) => ({
      ...stat,
      formattedValue: `${stat.value}${stat.suffix}`,
    })),
    pillars: pillars.map((pillar) => ({
      id: pillar.id,
      title: pillar.title,
      description: pillar.description,
      stat: pillar.stat,
      statLabel: pillar.statLabel,
    })),
    progressData: impactData.yearlyProgress,
    regionData: impactData.regionData,
    awarenessMetrics: impactData.awarenessMetrics,
    metadata: {
      source: "Pillars Programme Records, WHO GLOBOCAN, Nigerian National Cancer Registry",
      methodology: "Data compiled from screening records, community surveys, and programme reports",
      disclaimer:
        "National breast cancer statistics sourced from WHO and Nigerian health agencies. Programme-specific data from Pillars internal records.",
    },
  });
}
