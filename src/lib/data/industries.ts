import { Industry } from "@/types";

export const INDUSTRIES: Industry[] = [
  {
    id: "fintech",
    slug: "financial-services",
    name: "Financial Services & Banking",
    tagline: "Fast, Secure AI for High-Stakes Financial Decisions",
    description:
      "We build secure AI systems that help financial institutions analyze reports faster, detect fraud in real time, and protect client privacy.",
    icon: "Landmark",
    challenges: [
      "Strict banking regulations and privacy rules",
      "Confidential customer and market data cannot be uploaded to public AI tools",
      "Manual review of thousands of financial filings takes hundreds of analyst hours",
      "Fraud attempts are becoming more sophisticated and harder to detect manually",
    ],
    solutions: [
      "Private internal AI search that answers questions with exact document page links",
      "Real-time fraud detection models that flag suspicious transactions immediately",
      "Automated summary generation for earnings calls and annual company reports",
      "Complete data isolation: your financial data remains in your secure cloud",
    ],
    useCases: [
      {
        title: "Private Document Search",
        description: "Ask questions across years of financial filings and get answers with exact source links.",
        impact: "78% faster research time",
      },
      {
        title: "Real-Time Fraud Prevention",
        description: "Catch complex fraud rings before transactions clear.",
        impact: "34% higher fraud detection",
      },
      {
        title: "Automated Loan Reviews",
        description: "Review credit documents faster with clear, explainable decision records.",
        impact: "4x faster loan turnarounds",
      },
    ],
    stat: {
      value: "$14B+",
      label: "In daily financial transactions analyzed securely by our systems",
    },
    caseStudySlug: "enterprise-rag-fintech",
  },
  {
    id: "healthcare",
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-Compliant AI That Supports Doctors & Protects Patients",
    description:
      "We partner with health systems and medical providers to reduce paperwork burnout, speed up patient care, and keep sensitive health data strictly confidential.",
    icon: "HeartPulse",
    challenges: [
      "Doctors spend hours every evening typing clinical notes instead of seeing patients",
      "Strict HIPAA laws require absolute privacy for all patient medical records",
      "Complex medical abbreviations make standard search software inaccurate",
      "Delays in insurance pre-approvals slow down needed medical care",
    ],
    solutions: [
      "Voice-to-note clinical assistants that organize patient visits automatically",
      "Complete de-identification: patient names and details are never exposed",
      "Smart pre-billing checks that prevent insurance claim denials",
      "Direct integration with Epic, Cerner, and hospital electronic health systems",
    ],
    useCases: [
      {
        title: "Clinical Note Assistant",
        description: "Automatically organize doctor-patient visits into standard medical records.",
        impact: "1.5 hours saved daily per doctor",
      },
      {
        title: "Insurance Claim Verification",
        description: "Check treatment codes before submission to prevent insurance denials.",
        impact: "28% fewer claim rejections",
      },
      {
        title: "Patient History Search",
        description: "Quickly locate relevant medical history across years of previous visits.",
        impact: "60% faster patient intake",
      },
    ],
    stat: {
      value: "1.8M+",
      label: "Patient consultations assisted with 100% privacy compliance",
    },
    caseStudySlug: "hipaa-clinical-note-extraction",
  },
  {
    id: "manufacturing",
    slug: "industrial-manufacturing",
    name: "Manufacturing & Aerospace",
    tagline: "Automated Visual Quality Checks on Factory Assembly Lines",
    description:
      "We deploy smart cameras and AI models directly onto factory floors to spot defects instantly and prevent costly equipment breakdowns.",
    icon: "Factory",
    challenges: [
      "Human visual inspection misses microscopic cracks when parts move fast",
      "Unexpected factory machine breakdowns cost millions in stopped production",
      "Factory floors have dust, vibrations, and limited internet connectivity",
      "Legacy factory machinery is difficult to connect to modern cloud software",
    ],
    solutions: [
      "Smart cameras that inspect items on the conveyor belt in under 40 milliseconds",
      "Vibration sensors that alert engineers weeks before a motor or bearing breaks",
      "Systems that run locally on factory floor computers without needing internet",
      "Direct integration with existing factory robotic arms and sorting bins",
    ],
    useCases: [
      {
        title: "Automated Part Inspection",
        description: "Spot surface cracks on metal and plastic components in milliseconds.",
        impact: "99.9% defect catch rate",
      },
      {
        title: "Early Breakdown Warning",
        description: "Detect unusual machine vibrations before a part breaks down.",
        impact: "88% less unplanned downtime",
      },
      {
        title: "Energy Use Optimization",
        description: "Schedule high-power machinery during off-peak electricity hours.",
        impact: "19% lower factory power bills",
      },
    ],
    stat: {
      value: "< 45ms",
      label: "Time required to inspect and verify each manufactured part",
    },
    caseStudySlug: "edge-vision-aerospace-manufacturing",
  },
  {
    id: "logistics",
    slug: "supply-chain-logistics",
    name: "Logistics & Supply Chain",
    tagline: "Intelligent Fleet Routing & Freight Cost Savings",
    description:
      "We help shipping companies and fleet operators save fuel, avoid port congestion, and deliver goods on schedule.",
    icon: "Truck",
    challenges: [
      "Rising fuel costs and empty return trips eat into profit margins",
      "Traffic jams and weather delays cause missed delivery windows",
      "Port congestion leads to expensive storage and delay penalties",
      "Manual paper shipping documents cause processing delays",
    ],
    solutions: [
      "Automated route recalculation every 15 minutes to bypass traffic and delays",
      "Port delay predictions to reroute cargo ships before bottlenecks form",
      "Instant data extraction from shipping documents and customs forms",
      "Warehouse placement AI that puts popular items closer to packing stations",
    ],
    useCases: [
      {
        title: "Smart Route Dispatch",
        description: "Automatically optimize truck driver schedules based on live traffic.",
        impact: "14.2% fleet fuel savings",
      },
      {
        title: "Port Delay Avoidance",
        description: "Reroute shipping containers ahead of terminal congestion.",
        impact: "$32M saved in delay fees",
      },
      {
        title: "Warehouse Picking Speed",
        description: "Organize warehouse item locations based on seasonal demand.",
        impact: "22% faster order packing",
      },
    ],
    stat: {
      value: "12,000+",
      label: "Delivery routes automatically optimized every day",
    },
    caseStudySlug: "predictive-logistics-route-optimization",
  },
  {
    id: "retail",
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Instant Recommendations That Increase Basket Size",
    description:
      "We build fast recommendation tools for online stores that suggest the right items in milliseconds without slowing down your site.",
    icon: "ShoppingBag",
    challenges: [
      "Slow recommendation widgets cause shoppers to leave before checking out",
      "Recommending items that are out of stock in local warehouses hurts customer trust",
      "Privacy changes make third-party tracking cookies unreliable",
      "Poorly timed discounts erode profit margins",
    ],
    solutions: [
      "Lightning-fast recommendations that load in under 15 milliseconds",
      "Real-time stock checks to only recommend items ready to ship immediately",
      "Recommendations that adapt to in-session shopping behavior without tracking cookies",
      "Image search: shoppers upload photos to find matching styles quickly",
    ],
    useCases: [
      {
        title: "Smart Product Bundles",
        description: "Suggest complementary products that shoppers actually want to add.",
        impact: "+23% larger order values",
      },
      {
        title: "Local Inventory Matching",
        description: "Promote items available in the nearest warehouse for fast delivery.",
        impact: "31% lower split-shipping costs",
      },
      {
        title: "Visual Style Match",
        description: "Allow customers to search for clothing items using phone photos.",
        impact: "3x higher search purchases",
      },
    ],
    stat: {
      value: "12ms",
      label: "Recommendation load speed—fast enough for instant mobile browsing",
    },
    caseStudySlug: "realtime-omnichannel-personalization",
  },
];
