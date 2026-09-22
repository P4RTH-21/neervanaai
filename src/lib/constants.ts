export const SITE_CONFIG = {
  name: "Neervanaai",
  legalName: "Neervanaai Technologies Inc.",
  tagline: "Enterprise AI Solutions That Actually Work",
  description:
    "Neervanaai helps businesses build, launch, and manage secure AI systems. From custom models to private enterprise search, we turn AI into real business results.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://neervanaai.com",
  contactEmail: "partners@neervanaai.com",
  phone: "+1 (800) 584-2438",
  guaranteeSLA: "We reply to all inquiries within 12 hours",
  ndaGuarantee: "Mutual NDA signed before discussing your project or data",
};

export const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Responsible AI", href: "/governance" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/blog" },
];

export const CLIENT_LOGOS = [
  { name: "Apex Global", tier: "Banking", highlight: "Fraud Detection AI" },
  { name: "Aegis Health", tier: "Healthcare", highlight: "Patient Notes AI" },
  { name: "Veritas Logistics", tier: "Shipping", highlight: "Smart Route Planning" },
  { name: "OmniRetail", tier: "E-Commerce", highlight: "Product Recommendations" },
  { name: "Synapse Bio", tier: "Biotech", highlight: "Research Automation" },
  { name: "Stratum Aero", tier: "Manufacturing", highlight: "Visual Quality Checks" },
];

export const CERTIFICATIONS = [
  { name: "ISO 27001", badge: "Data Security Certified", issuer: "BSI" },
  { name: "SOC 2 Type II", badge: "Verified Privacy Controls", issuer: "AICPA" },
  { name: "HIPAA Compliant", badge: "Healthcare Data Protected", issuer: "Audited" },
  { name: "EU AI Act Ready", badge: "Safety Standards Met", issuer: "Compliance" },
  { name: "AWS Partner", badge: "Certified Cloud AI Partner", issuer: "Amazon" },
  { name: "NVIDIA Partner", badge: "Accelerated Computing", issuer: "NVIDIA" },
];

export const STATS = [
  { value: "250+", label: "AI Models Deployed in Production", sub: "Running reliably 24/7" },
  { value: "$180M+", label: "Client Cost Savings Generated", sub: "Verified across enterprise projects" },
  { value: "100%", label: "Client Ownership of Code & Data", sub: "Your data is never used to train public models" },
  { value: "< 50ms", label: "Fast Response Times", sub: "Optimized for speed and high volume" },
];

export const GLOBAL_OFFICES = [
  {
    city: "San Francisco",
    address: "555 California Street, Suite 4100",
    region: "San Francisco, CA 94104",
    phone: "+1 (415) 890-3411",
    isHQ: true,
  },
  {
    city: "New York",
    address: "One World Trade Center, Floor 68",
    region: "New York, NY 10007",
    phone: "+1 (212) 745-9800",
    isHQ: false,
  },
  {
    city: "London",
    address: "100 Bishopsgate, Level 19",
    region: "London, EC2N 4AG",
    phone: "+44 (20) 7946 0920",
    isHQ: false,
  },
  {
    city: "Bengaluru",
    address: "UB City, Concorde Tower, 14th Floor",
    region: "Bengaluru, KA 560001",
    phone: "+91 80 4123 7890",
    isHQ: false,
  },
];
