import { CaseStudy } from "@/types";

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-rag",
    slug: "enterprise-rag-fintech",
    title: "Private AI Search Assistant for a Major Investment Bank",
    client: "Global Investment Bank",
    clientRole: "Managing Director of Technology",
    industry: "Financial Services",
    heroImage: "/images/case-studies/fintech.svg",
    summary:
      "We built a secure internal AI search system that analyzes over 14 million financial documents in seconds, cutting research time by 78% with zero risk of data leaks.",
    challenge:
      "Over 4,000 financial analysts were spending more than 3 hours every day manually searching through lengthy company reports, regulatory filings, and earnings transcripts. Public AI tools like ChatGPT could not be used because of strict banking secrecy and privacy regulations.",
    solution:
      "Neervanaai installed a completely private AI search tool inside the bank's own secure cloud. The tool reads all company documents, answers questions in plain English, and provides exact page links for every fact so analysts can verify findings immediately.",
    architectureDetails: [
      "Runs entirely inside the bank's private cloud with zero public data sharing",
      "Fact-checking engine confirms every number before showing it to analysts",
      "Connects to internal employee permissions so sensitive files stay restricted",
      "Delivers instant answers in under 2 seconds across 14 million pages",
    ],
    technologies: ["Private Cloud", "Smart Document Search", "Fact Verification", "Secure Access Control"],
    results: [
      {
        metric: "78%",
        label: "Faster Document Research",
        context: "Analysts find required financial answers in 4 minutes instead of over 3 hours",
      },
      {
        metric: "0%",
        label: "Data Leakage",
        context: "All confidential bank information remains 100% private and protected",
      },
      {
        metric: "$24M+",
        label: "Annual Productivity Value",
        context: "Freed up hundreds of thousands of hours for high-value client advisory work",
      },
    ],
    testimonial: {
      quote:
        "Neervanaai delivered exactly what we needed: a fast, accurate AI tool that our analysts use daily, with complete confidence that our client data remains completely secure.",
      author: "Marcus Vance",
      role: "Head of Quantitative Technology",
      company: "Tier-1 Investment Bank",
    },
    duration: "12 Weeks from Kickoff to Firm-wide Launch",
  },
  {
    id: "manufacturing-vision",
    slug: "edge-vision-aerospace-manufacturing",
    title: "Automated Visual Quality Checks on Factory Assembly Lines",
    client: "Aerospace Components Manufacturer",
    clientRole: "VP of Quality & Manufacturing",
    industry: "Industrial Manufacturing",
    heroImage: "/images/case-studies/manufacturing.svg",
    summary:
      "Installed smart cameras with computer vision on factory lines to detect tiny metal cracks at 45 parts per minute, preventing costly product recalls.",
    challenge:
      "Inspecting precision titanium parts by eye was slow and tiring for factory workers. Tiny cracks smaller than a human hair were sometimes missed, leading to expensive part replacements and warranty claims.",
    solution:
      "We installed industrial cameras paired with fast, custom vision AI models directly on the conveyor line. The system automatically inspects each manufactured piece in under 40 milliseconds and sorts out defective parts automatically.",
    architectureDetails: [
      "High-speed industrial cameras inspect parts at full conveyor speed",
      "Custom vision AI trained to recognize even microscopic surface flaws",
      "Direct connection to robotic arms to push defective parts off the belt",
      "Runs locally on factory computers without needing an internet connection",
    ],
    technologies: ["Computer Vision", "Edge AI Cameras", "Robotics Integration", "Factory Floor Automation"],
    results: [
      {
        metric: "99.9%",
        label: "Defect Detection Rate",
        context: "Virtually zero defective parts missed across 1.2 million inspected units",
      },
      {
        metric: "38ms",
        label: "Inspection Speed",
        context: "Checks each part faster than the conveyor belt moves",
      },
      {
        metric: "$18M+",
        label: "Saved in Recall Costs",
        context: "Completely eliminated expensive warranty claims and part teardowns",
      },
    ],
    testimonial: {
      quote:
        "Neervanaai's team understood our factory environment, safety rules, and equipment. Their vision system has been running reliably on our line without missing a beat.",
      author: "Elena Rostova",
      role: "VP of Quality & Manufacturing",
      company: "Aerospace Systems Corp",
    },
    duration: "14 Weeks Turnkey Project",
  },
  {
    id: "healthcare-nlp",
    slug: "hipaa-clinical-note-extraction",
    title: "AI Note Assistant for Hospital Doctors & Nurses",
    client: "Healthcare Hospital Network (28 Hospitals)",
    clientRole: "Chief Medical Officer",
    industry: "Healthcare & Life Sciences",
    heroImage: "/images/case-studies/healthcare.svg",
    summary:
      "Helped physicians save 1.5 hours of administrative charting every evening by automatically turning patient notes into organized, HIPAA-compliant medical records.",
    challenge:
      "Doctors were working late into the night typing medical notes into computer systems, causing severe physician burnout and delays in patient insurance approvals.",
    solution:
      "Neervanaai developed a secure clinical assistant inside the hospital's private system. It automatically organizes recorded doctor notes into standard medical forms that clinicians review and sign in seconds.",
    architectureDetails: [
      "Automatically removes all personal patient identifiers to protect privacy",
      "Seamlessly connects with Epic and Cerner electronic health record systems",
      "Doctor-in-the-loop: physicians review and approve notes with one click",
      "Fully compliant with HIPAA and national health privacy standards",
    ],
    technologies: ["Healthcare AI", "Automated Note Structuring", "EHR Integration", "HIPAA Privacy Security"],
    results: [
      {
        metric: "65%",
        label: "Less Time Spent Charting",
        context: "Daily paperwork time dropped from 2 hours to just 40 minutes per doctor",
      },
      {
        metric: "100%",
        label: "Patient Privacy Preserved",
        context: "Zero privacy leaks across 1.8 million patient visits handled",
      },
      {
        metric: "28%",
        label: "Fewer Insurance Rejections",
        context: "More accurate and complete documentation speeds up billing",
      },
    ],
    testimonial: {
      quote:
        "Our doctors finally get to go home on time. Neervanaai built an AI tool that genuinely respects our clinical workflow and keeps our patient records completely private.",
      author: "Dr. Jonathan Reyes, MD",
      role: "Chief Medical Information Officer",
      company: "Aegis Health Alliance",
    },
    duration: "10 Weeks Pilot to Hospital-wide Rollout",
  },
  {
    id: "supply-chain-optimization",
    slug: "predictive-logistics-route-optimization",
    title: "Smart Route Planning & Fuel Savings for Shipping Freight",
    client: "Global Cargo Shipping & Freight Company",
    clientRole: "Chief Operating Officer",
    industry: "Logistics & Supply Chain",
    heroImage: "/images/case-studies/logistics.svg",
    summary:
      "Created an intelligent dispatch engine that optimizes 12,000 truck and cargo routes every 15 minutes, cutting fuel consumption by 14%.",
    challenge:
      "Sudden weather delays, rising fuel costs, and crowded port terminals resulted in empty cargo miles and costly shipping delays totaling millions of dollars each year.",
    solution:
      "We built an automated dispatch engine that combines weather feeds, port wait times, and traffic data. It recalculates the best routes every 15 minutes to avoid traffic jams and port congestion.",
    architectureDetails: [
      "Analyzes real-time traffic, weather, and port delay data continuously",
      "Automatically updates driver routes to avoid delays before they occur",
      "User-friendly web dashboard for logistics managers to track fleet progress",
      "Connects with existing transport management systems without disruptions",
    ],
    technologies: ["Route Optimization AI", "Real-Time Telematics", "Fleet Management", "Fuel Analytics"],
    results: [
      {
        metric: "14.2%",
        label: "Fuel Consumption Cut",
        context: "Saved over 3.8 million gallons of fuel in the first 8 months",
      },
      {
        metric: "41%",
        label: "Fewer Port Delay Penalties",
        context: "Smart rerouting kept containers moving smoothly through alternate hubs",
      },
      {
        metric: "$32M+",
        label: "Bottom-Line Savings",
        context: "Direct cost savings confirmed by company financial audits",
      },
    ],
    testimonial: {
      quote:
        "Neervanaai replaced our rigid, manual spreadsheets with a smart system that keeps our entire fleet moving efficiently. The fuel savings alone paid for the project in months.",
      author: "Siddharth Mehta",
      role: "Head of Supply Chain Optimization",
      company: "Veritas Logistics",
    },
    duration: "16 Weeks End-to-End",
  },
  {
    id: "retail-personalization",
    slug: "realtime-omnichannel-personalization",
    title: "Instant Product Recommendations for an E-Commerce Brand",
    client: "Omnichannel Fashion & Retailer",
    clientRole: "Chief Digital Officer",
    industry: "Retail & E-Commerce",
    heroImage: "/images/case-studies/retail.svg",
    summary:
      "Replaced a slow third-party recommendation widget with a fast internal AI engine, boosting average order values by 23% and generating $48M in sales.",
    challenge:
      "Their previous recommendation tool was sluggish, took too long to load on mobile phones, and frequently recommended items that were already out of stock locally.",
    solution:
      "Neervanaai built a lightweight, fast recommendation engine that learns what shoppers like in real time without storing personal tracking cookies, recommending items available in nearby warehouses.",
    architectureDetails: [
      "Loads recommendations in under 15 milliseconds for a lightning-fast experience",
      "Checks warehouse inventory in real-time so out-of-stock items are never shown",
      "Protects shopper privacy with zero reliance on intrusive tracking cookies",
      "Easily adjusts to seasonal trends and promotional campaigns",
    ],
    technologies: ["Fast Recommendation AI", "Real-Time Stock Matching", "Mobile-Optimized", "E-Commerce Cloud"],
    results: [
      {
        metric: "+23.4%",
        label: "Higher Order Values",
        context: "Relevant product suggestions encouraged shoppers to add more items",
      },
      {
        metric: "12ms",
        label: "Instant Loading Speed",
        context: "Fast page loads improved mobile checkout completion rates",
      },
      {
        metric: "$48M",
        label: "New Annual Revenue",
        context: "Directly measured through verified 50/50 randomized customer tests",
      },
    ],
    testimonial: {
      quote:
        "We took back control of our store experience and replaced an expensive, slow widget with proprietary AI software that belongs entirely to our company.",
      author: "Claire DeWitt",
      role: "Chief Digital Officer",
      company: "Maison & Co. Retail Group",
    },
    duration: "10 Weeks Implementation",
  },
  {
    id: "energy-predictive-maintenance",
    slug: "acoustic-predictive-maintenance-energy",
    title: "Predictive Equipment Alerts for Clean Energy Turbines",
    client: "Renewable Energy Operator",
    clientRole: "Director of Asset Reliability",
    industry: "Energy & Utilities",
    heroImage: "/images/case-studies/energy.svg",
    summary:
      "Installed sound and vibration sensors that predict wind turbine mechanical problems 45 days before breakdowns happen, preventing emergency outages.",
    challenge:
      "When offshore wind turbine bearings failed unexpectedly, emergency repairs and lost electricity generation cost up to $1 million per incident.",
    solution:
      "We trained an AI model on sensor vibrations to recognize early signs of equipment wear weeks before heat sensors notice anything wrong, allowing repairs during scheduled maintenance.",
    architectureDetails: [
      "Vibration sensors monitor turbines around the clock",
      "AI alerts operations teams weeks before a mechanical issue becomes severe",
      "Automatic work orders generated in existing maintenance software",
      "Works reliably on remote offshore sites with limited internet bandwidth",
    ],
    technologies: ["Sensor Analytics", "Predictive Maintenance", "Smart Alerts", "Energy Cloud"],
    results: [
      {
        metric: "45 Days",
        label: "Advance Warning Time",
        context: "Fixes are scheduled during calm weather before parts break",
      },
      {
        metric: "88%",
        label: "Fewer Emergency Outages",
        context: "Significantly reduced costly emergency technician mobilizations",
      },
      {
        metric: "$21M+",
        label: "Equipment Preserved",
        context: "Protected expensive turbine components and preserved power output",
      },
    ],
    testimonial: {
      quote:
        "Neervanaai gave our engineers early ears on every machine. We went from frantic emergency repairs to orderly, predictable maintenance.",
      author: "Henrik Lindqvist",
      role: "Director of Asset Reliability",
      company: "Nordic Energy Systems",
    },
    duration: "12 Weeks Pilot & Deployment",
  },
];
