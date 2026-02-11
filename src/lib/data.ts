export const pillars = [
  {
    id: "1",
    title: "Early Detection",
    description:
      "Promoting regular breast self-examinations and clinical screenings to catch breast cancer at its earliest, most treatable stages across Nigerian communities.",
    icon: "Search",
    stat: "70%",
    statLabel: "late-stage cases preventable",
  },
  {
    id: "2",
    title: "Free Screening Outreach",
    description:
      "Organising free clinical breast examinations and mammography referrals in underserved Nigerian communities, markets, churches, and mosques.",
    icon: "Heart",
    stat: "5,000+",
    statLabel: "women screened",
  },
  {
    id: "3",
    title: "Health Education",
    description:
      "Conducting awareness campaigns in local languages—Yoruba, Hausa, Igbo, and Pidgin—to break myths and empower women with knowledge about breast health.",
    icon: "BookOpen",
    stat: "50+",
    statLabel: "communities reached",
  },
  {
    id: "4",
    title: "Self-Exam Training",
    description:
      "Teaching women step-by-step breast self-examination (BSE) techniques so they can monitor their own breast health monthly from the comfort of their homes.",
    icon: "Hand",
    stat: "3,000+",
    statLabel: "women trained",
  },
  {
    id: "5",
    title: "Survivor Support",
    description:
      "Building support networks for breast cancer survivors and those undergoing treatment, providing emotional, psychological, and peer-group care.",
    icon: "Users",
    stat: "200+",
    statLabel: "survivors supported",
  },
  {
    id: "6",
    title: "Advocacy & Policy",
    description:
      "Advocating for increased government funding for cancer care, subsidised treatment, and inclusion of breast cancer screening in Nigeria's NHIS.",
    icon: "Megaphone",
    stat: "3",
    statLabel: "policy briefs submitted",
  },
  {
    id: "7",
    title: "Youth Corps Mobilisation",
    description:
      "Engaging fellow NYSC corps members as health ambassadors to amplify breast cancer awareness across all 36 states and the FCT.",
    icon: "Flag",
    stat: "150+",
    statLabel: "corps members involved",
  },
  {
    id: "8",
    title: "Rural Health Access",
    description:
      "Bringing breast health services to rural and hard-to-reach communities in Nigeria where hospitals and clinics are scarce or non-existent.",
    icon: "MapPin",
    stat: "30+",
    statLabel: "rural communities served",
  },
];

export const globalStats = [
  {
    value: 27,
    suffix: "K+",
    label: "New Breast Cancer Cases Yearly in Nigeria",
  },
  { value: 70, suffix: "%", label: "Cases Detected at Late Stages" },
  {
    value: 11,
    suffix: "K+",
    label: "Nigerian Women Die from Breast Cancer Yearly",
  },
  {
    value: 1,
    suffix: " in 4",
    label: "Women in Nigeria Unaware of Breast Self-Exam",
  },
];

export const programs = [
  {
    id: 1,
    title: "Community Screening Drives",
    description:
      "Free breast screening outreach in markets, churches, mosques, and community centres across Nigeria. Our trained health workers provide clinical breast examinations and refer for mammography when needed.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    category: "Screening",
    impact: "5,000+ women screened",
  },
  {
    id: 2,
    title: "Know Your Breast Workshop",
    description:
      "Interactive workshops teaching women breast self-examination techniques, warning signs to watch for, and when to seek medical help. Conducted in Yoruba, Igbo, Hausa, and Pidgin English.",
    image:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=800&q=80",
    category: "Education",
    impact: "3,000+ women trained",
  },
  {
    id: 3,
    title: "Pink October Awareness Campaign",
    description:
      "Annual breast cancer awareness month campaign featuring road walks, media appearances, social media drives, and community rallies to break the silence on breast cancer in Nigeria.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    category: "Awareness",
    impact: "100K+ people reached",
  },
  {
    id: 4,
    title: "Survivor Circle Support Group",
    description:
      "Safe, stigma-free peer support groups connecting breast cancer survivors and those undergoing treatment. Providing emotional support, shared experiences, and access to resources.",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    category: "Support",
    impact: "200+ survivors supported",
  },
  {
    id: 5,
    title: "School & Campus Outreach",
    description:
      "Taking breast health education to secondary schools and university campuses, empowering young Nigerian women with knowledge about their bodies and early detection.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    category: "Education",
    impact: "20+ schools visited",
  },
  {
    id: 6,
    title: "Corps Members Health Ambassador Programme",
    description:
      "Training and deploying NYSC corps members as Pillars Health Ambassadors in their Places of Primary Assignment (PPA) and host communities across Nigeria.",
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?w=800&q=80",
    category: "Training",
    impact: "150+ ambassadors deployed",
  },
];

export const impactData = {
  yearlyProgress: [
    {
      year: "2020",
      screenings: 200,
      awareness: 500,
      trainings: 50,
      referrals: 10,
    },
    {
      year: "2021",
      screenings: 600,
      awareness: 1500,
      trainings: 150,
      referrals: 35,
    },
    {
      year: "2022",
      screenings: 1200,
      awareness: 5000,
      trainings: 400,
      referrals: 80,
    },
    {
      year: "2023",
      screenings: 2500,
      awareness: 15000,
      trainings: 900,
      referrals: 150,
    },
    {
      year: "2024",
      screenings: 4000,
      awareness: 40000,
      trainings: 2000,
      referrals: 280,
    },
    {
      year: "2025",
      screenings: 5500,
      awareness: 80000,
      trainings: 3200,
      referrals: 400,
    },
  ],
  regionData: [
    { region: "South-West", coverage: 45, target: 80 },
    { region: "South-East", coverage: 32, target: 80 },
    { region: "South-South", coverage: 28, target: 80 },
    { region: "North-Central", coverage: 22, target: 80 },
    { region: "North-West", coverage: 15, target: 80 },
    { region: "North-East", coverage: 12, target: 80 },
  ],
  awarenessMetrics: [
    { metric: "Knows BSE Technique", percentage: 62 },
    { metric: "Had Clinical Screening", percentage: 38 },
    { metric: "Aware of Warning Signs", percentage: 55 },
    { metric: "Knows Screening Centres", percentage: 30 },
    { metric: "Monthly Self-Exam Practice", percentage: 24 },
  ],
};

export const testimonials = [
  {
    quote:
      "Pillars came to our market in Kuje and screened over 200 of us for free. I discovered a lump early and got treatment on time. They saved my life.",
    author: "Mrs. Titi",
    role: "Market Woman, Kuje, Abuja",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    quote:
      "As a corps member serving in rural Kuje, this CDS project gave me purpose. We screened women who had never seen a doctor in their lives. This is what service truly means.",
    author: "Mr. Adamu Bello",
    role: "NYSC CDS Supervisor, Abuja",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
  },
];

export const timelineEvents = [
  {
    year: "2015",
    title: "UN Adopts SDG 3",
    description:
      "The United Nations adopted the 2030 Agenda including SDG 3: Good Health and Well-being for all.",
  },
  {
    year: "2019",
    title: "The Idea is Born",
    description:
      "The concept of 'Pillars' was conceived as a Community Development Service project under NYSC.",
  },
  {
    year: "2020",
    title: "First Screening Outreach",
    description:
      "Our first community breast screening event held in partnership with local health centres, reaching 200 women.",
  },
  {
    year: "2021",
    title: "State-Wide Expansion",
    description:
      "Expanded to multiple local government areas, training corps members as Breast Health Ambassadors.",
  },
  {
    year: "2023",
    title: "5,000 Women Screened",
    description:
      "Milestone of 5,000 cumulative free breast screenings reached across multiple Nigerian states.",
  },
  {
    year: "2024",
    title: "Digital Health Integration",
    description:
      "Launched digital awareness campaigns and telemedicine referral pathways for underserved communities.",
  },
  {
    year: "2025",
    title: "National Recognition",
    description:
      "Pillars gains recognition as a model CDS project, inspiring replication across NYSC batches.",
  },
  {
    year: "2030",
    title: "Vision: A Spot-Free Nigeria",
    description:
      "Our vision—every Nigerian woman has access to early breast cancer detection and no woman dies from late diagnosis.",
  },
];
