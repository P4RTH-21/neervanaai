import { FAQ } from "@/types";

export const FAQS: FAQ[] = [
  {
    id: "faq-ip",
    question: "Who owns the code, models, and intellectual property we build?",
    answer:
      "You do—100%. Everything we develop for you belongs entirely to your company. This includes all source code, model configurations, data pipelines, and documentation. We sign a strict mutual agreement before starting any work.",
    category: "Security & IP",
  },
  {
    id: "faq-security",
    question: "Is our confidential business data safe from being leaked or used for training?",
    answer:
      "Yes, completely. We build private systems that run inside your own secure cloud accounts (like AWS, Azure, or Google Cloud) or on your own office servers. Your data is never shared with public tools like ChatGPT and is never used to train outside models.",
    category: "Security & IP",
  },
  {
    id: "faq-engagement",
    question: "How does a typical project work from start to finish?",
    answer:
      "We follow three simple steps: 1) Initial Assessment (2–3 weeks) to examine your data and plan the project; 2) Working Prototype (4–6 weeks) to test the AI on real tasks; and 3) Full Launch (6–8 weeks) to integrate it with your existing software and train your team.",
    category: "Engagement",
  },
  {
    id: "faq-vendor-lockin",
    question: "Will we be locked into a specific vendor or proprietary software?",
    answer:
      "No. We build on open industry standards like Python, PyTorch, Docker, and Kubernetes. You can host and run your models anywhere you want, and your own engineering team can easily maintain them.",
    category: "Technical",
  },
  {
    id: "faq-compliance",
    question: "How do you handle regulations like the EU AI Act and GDPR?",
    answer:
      "Our compliance team audits every model for fairness, data privacy, and legal safety. We provide ready-to-share audit reports and documentation so your legal team and regulators are completely satisfied.",
    category: "Security & IP",
  },
  {
    id: "faq-maintenance",
    question: "What happens after the project goes live?",
    answer:
      "You have two options: we can either fully train your internal team to take over the code, or our dedicated support squad can manage, update, and monitor your AI 24/7 to ensure maximum uptime.",
    category: "Engagement",
  },
  {
    id: "faq-pricing",
    question: "How do your pricing and contracts work?",
    answer:
      "We offer transparent, milestone-based fixed fees for project builds, or monthly retainer plans for continuous engineering squads. You always know exactly what you are paying for with no surprise charges.",
    category: "Pricing",
  },
  {
    id: "faq-timeline",
    question: "How quickly can we see a working version of our AI solution?",
    answer:
      "Most clients see a fully functioning, private prototype connected to their real data within 3 to 4 weeks. Full enterprise rollout typically takes 8 to 12 weeks.",
    category: "Engagement",
  },
];
