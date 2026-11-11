export const profile = {
  name: "Negesu Tolessa Likasa",
  shortName: "Negesu Tolessa",
  firstName: "Negesu",
  lastName: "Tolessa",
  initials: "NT",
  title: "Regional Sales Manager · Telecom & Digital Financial Services",
  roleLine: "A Sales & Marketing Leader From Ambo, Ethiopia",
  headline:
    "I turn ambitious sales targets into market leadership — through people, distribution, and the growth of M-PESA.",
  tagline:
    "Sales & marketing leader with 10+ years turning regional targets into market leadership across Safaricom and Ethio Telecom.",
  location: "Ambo, Oromia, Ethiopia",
  phones: ["+251 917 837 779", "+251 799 337 779"],
  phoneLinks: ["+251917837779", "+251799337779"],
  whatsapp: "251917837779",
  email: "nagasu.tolessa@gmail.com",
  linkedin: "https://www.linkedin.com/in/negesu-tolessa-250359221",
  photo: "/images/negesu/portrait.jpg",
  company: "Safaricom Telecommunications Ethiopia PLC",
  summary:
    "Results-oriented Sales and Marketing professional with over 10 years of experience across telecommunications, sales management, customer service, and team leadership. I specialise in market expansion, distribution management, M-PESA growth, digital financial services, and operational excellence — pairing strong leadership and analytical thinking with a track record of consistently hitting targets and building high-performing teams.",
  available: "Open to senior sales & commercial leadership roles",
  stats: [
    { value: "10+", label: "Years in telecom sales" },
    { value: "3", label: "Promotions earned" },
    { value: "M-PESA", label: "Digital finance growth" },
    { value: "MBA", label: "Postgraduate qualified" },
  ],
};

export type Expertise = {
  title: string;
  description: string;
  icon:
    | "distribution"
    | "leadership"
    | "mpesa"
    | "growth"
    | "customer"
    | "analytics";
  items: string[];
};

export const expertise: Expertise[] = [
  {
    title: "Sales & Distribution",
    description:
      "Building route-to-market systems that move product and hit number, region after region.",
    icon: "distribution",
    items: [
      "Sales & Distribution Management",
      "Territory & Channel Strategy",
      "Target Achievement",
      "Market Expansion",
    ],
  },
  {
    title: "Leadership & Coaching",
    description:
      "Leading, coaching, and holding high-performing teams accountable to clear KPIs.",
    icon: "leadership",
    items: [
      "Team Leadership",
      "Coaching & Mentoring",
      "Performance Management",
      "KPI Monitoring",
    ],
  },
  {
    title: "M-PESA & Digital Finance",
    description:
      "Driving adoption and growth of mobile money, agents, and digital financial services.",
    icon: "mpesa",
    items: [
      "M-PESA Operations",
      "Agent & Merchant Networks",
      "Digital Financial Services",
      "Customer Onboarding",
    ],
  },
  {
    title: "Business Development",
    description:
      "Opening new markets and partnerships that compound into sustainable revenue.",
    icon: "growth",
    items: [
      "Business Development",
      "Market Activation",
      "Partnership Building",
      "Strategic Planning",
    ],
  },
  {
    title: "Customer Experience",
    description:
      "Turning service quality and relationships into retention and advocacy.",
    icon: "customer",
    items: [
      "Customer Relationship Management",
      "Service Excellence",
      "Retention & Loyalty",
      "Communication Skills",
    ],
  },
  {
    title: "Analytics & Reporting",
    description:
      "Reading the numbers, spotting the gap, and acting before the quarter turns.",
    icon: "analytics",
    items: [
      "Data Analysis & Reporting",
      "Sales Forecasting",
      "Excel, Word & PowerPoint",
      "Problem Solving",
    ],
  },
];

export const competencies = [
  "Sales & Distribution Management",
  "Team Leadership & Coaching",
  "Business Development",
  "M-PESA Operations",
  "Market Activation",
  "Customer Relationship Management",
  "Data Analysis & Reporting",
  "KPI Monitoring",
  "Strategic Planning",
  "Problem Solving",
  "Communication Skills",
  "Microsoft Excel, Word & PowerPoint",
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Regional Sales Manager",
    company: "Safaricom Telecommunications Ethiopia PLC",
    period: "Apr 2024 – Present",
    location: "Ambo Region, Oromia",
    summary: "Leading regional sales operations with full ownership of the commercial agenda.",
    points: [
      "Lead regional sales operations across the Ambo Region.",
      "Drive M-PESA, Airtime, SIM, and Digital Financial Services growth.",
      "Manage Shop Managers, TDRs, TADRs, DSAs, and Business Advisors.",
      "Analyse sales performance and implement improvement strategies.",
      "Coordinate market activations and customer acquisition campaigns.",
      "Build strong relationships with distributors and merchants.",
    ],
    current: true,
  },
  {
    role: "Area Sales Manager",
    company: "Safaricom Telecommunications Ethiopia PLC",
    period: "Jan 2022 – Apr 2024",
    location: "Oromia, Ethiopia",
    summary: "Owned regional sales teams and distribution channels across the area.",
    points: [
      "Managed regional sales teams and distribution channels.",
      "Increased SIM registrations and M-PESA adoption.",
      "Conducted market analysis and competitor assessments.",
      "Supervised sales activities and ensured target achievement.",
    ],
  },
  {
    role: "Shop Supervisor",
    company: "Ethio Telecom",
    period: "Mar 2019 – Jan 2022",
    location: "Oromia, Ethiopia",
    summary: "Ran day-to-day shop operations, people, and customer experience.",
    points: [
      "Supervised daily shop operations.",
      "Led customer service and sales teams.",
      "Managed cash handling and inventory control.",
      "Delivered excellent customer experience.",
    ],
  },
  {
    role: "Sales Representative",
    company: "Ethio Telecom",
    period: "Mar 2015 – Mar 2019",
    location: "Oromia, Ethiopia",
    summary: "Built the foundations of a sales career on the front line.",
    points: [
      "Promoted telecom products and services.",
      "Achieved monthly sales targets.",
      "Assisted customers with product selection and technical support.",
    ],
  },
  {
    role: "Secondary School Teacher",
    company: "Accounting & Business Education",
    period: "2010 – 2015",
    location: "Ethiopia",
    summary: "Where communication, structure, and mentoring first took shape.",
    points: [
      "Delivered Accounting and Business-related subjects.",
      "Prepared lesson plans and assessed student performance.",
    ],
  },
];

export type GalleryItem = {
  src: string;
  title: string;
  category: string;
  description: string;
  tall?: boolean;
};

export const gallery: GalleryItem[] = [
  {
    src: "/images/negesu/safaricom-foundation-books.jpg",
    title: "Safaricom Foundation — Book Distribution",
    category: "Community & Education",
    description:
      "Handing over revision books to students alongside the regional team and the Safaricom Ethiopia Foundation.",
  },
  {
    src: "/images/negesu/mpesa-field-activation.jpg",
    title: "M-PESA Field Activation",
    category: "Market Activation",
    description:
      "On-the-ground customer onboarding and product hand-over under the M-PESA activation tent.",
    tall: true,
  },
  {
    src: "/images/negesu/mpesa-stage-event.jpg",
    title: "M-PESA Community Activation",
    category: "Market Activation",
    description:
      "Leading a live community engagement on the M-PESA activation stage.",
  },
  {
    src: "/images/negesu/mpesa-prize-giveaway.jpg",
    title: "M-PESA Customer Reward — 100,000 ETB",
    category: "Recognition",
    description:
      "Awarding the Qaruukee Haa Taanu grand prize to a customer — building trust and excitement around M-PESA.",
    tall: true,
  },
  {
    src: "/images/negesu/mpesa-shop-launch.jpg",
    title: "M-PESA Shop Activation",
    category: "Retail & Distribution",
    description:
      "Speaking at a merchant shop activation, energising the crowd and the sales team.",
  },
  {
    src: "/images/negesu/safaricom-shop-anniversary.jpg",
    title: "Safaricom Shop Milestone",
    category: "Team & Retail",
    description:
      "Celebrating a shop milestone with the regional team and a traditional ceremony.",
    tall: true,
  },
  {
    src: "/images/negesu/team-training-1.jpg",
    title: "Field Team Training",
    category: "Team Leadership",
    description:
      "Leading a training session for the M-PESA field team — aligning agents and DSAs on targets and best practice.",
  },
  {
    src: "/images/negesu/team-training-2.jpg",
    title: "Team Coaching Session",
    category: "Team Leadership",
    description:
      "Coaching agents and distributors in the field, turning strategy into daily execution.",
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Leadstar College",
    degree: "Master of Business Administration (MBA)",
  },
  {
    institution: "Bachelor of Arts",
    degree: "Accounting and Finance",
  },
  {
    institution: "Bachelor of Education (B.Ed.)",
    degree: "Education",
  },
];

export const languages = [
  { name: "Afaan Oromo", level: "Native" },
  { name: "Amharic", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export const highlights = [
  "10+ years across telecommunications sales, distribution, and leadership",
  "Proven M-PESA and digital financial services growth",
  "Leads multi-level teams — Shop Managers, TDRs, TADRs, DSAs, and Advisors",
  "Consistent record of hitting and exceeding regional targets",
];

/* ── Dizme-style section content ───────────────────────────── */

export const featureStrip = [
  {
    title: "Target Driven",
    text: "A decade of consistently hitting and beating regional sales targets across telecom and M-PESA.",
    icon: "target" as const,
  },
  {
    title: "People First",
    text: "Builds, coaches, and leads high-performing teams — from DSAs to Shop Managers.",
    icon: "users" as const,
  },
  {
    title: "Digital Finance",
    text: "Drives M-PESA adoption and digital financial services deep into the field.",
    icon: "wallet" as const,
  },
];

export type Service = {
  title: string;
  tag: string;
  description: string;
  icon: "distribution" | "activation" | "leadership" | "mpesa";
  accent: "brand" | "purple" | "green";
};

export const services: Service[] = [
  {
    title: "Sales & Distribution",
    tag: "Regional growth",
    description:
      "Designing territory and channel strategy that moves product and hits number across the region.",
    icon: "distribution",
    accent: "brand",
  },
  {
    title: "Market Activation",
    tag: "On the ground",
    description:
      "Planning and running activations and acquisition campaigns that convert customers on the spot.",
    icon: "activation",
    accent: "purple",
  },
  {
    title: "Team Leadership",
    tag: "Coaching",
    description:
      "Coaching multi-level sales teams on targets, discipline, and daily execution with clear KPIs.",
    icon: "leadership",
    accent: "green",
  },
  {
    title: "M-PESA & DFS Growth",
    tag: "Digital finance",
    description:
      "Growing agent and merchant networks while driving M-PESA adoption and customer onboarding.",
    icon: "mpesa",
    accent: "brand",
  },
];

export const skillBars = [
  { label: "Sales & Distribution", value: 95 },
  { label: "Team Leadership", value: 92 },
  { label: "M-PESA Operations", value: 90 },
  { label: "Business Development", value: 88 },
  { label: "Data & Reporting", value: 85 },
];

export const approach = {
  quote:
    "Great sales results are not luck. They come from clarity of targets, coaching the people closest to the customer, and relentless follow-through — every single week.",
  name: "Negesu Tolessa",
  role: "Regional Sales Manager, Safaricom Ethiopia",
};

export const organizations = [
  "Safaricom Ethiopia",
  "Ethio Telecom",
  "M-PESA",
  "Safaricom Foundation",
  "Digital Financial Services",
  "Ambo Region",
];

export type Story = {
  image: string;
  tag: string;
  title: string;
  excerpt: string;
};

export const stories: Story[] = [
  {
    image: "/images/negesu/mpesa-field-activation.jpg",
    tag: "M-PESA",
    title: "Activations that convert right on the spot",
    excerpt:
      "How on-the-ground customer onboarding under the M-PESA tent turns interest into active users.",
  },
  {
    image: "/images/negesu/team-training-1.jpg",
    tag: "Leadership",
    title: "Turning field agents into a motivated sales force",
    excerpt:
      "Training and coaching agents and DSAs on targets, best practice, and daily execution.",
  },
  {
    image: "/images/negesu/safaricom-foundation-books.jpg",
    tag: "Community",
    title: "Giving back: books for the next generation",
    excerpt:
      "Supporting the Safaricom Ethiopia Foundation to hand revision books to local students.",
  },
];
