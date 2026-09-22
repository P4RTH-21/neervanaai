import { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "ai-strategy",
    slug: "ai-strategy-and-roadmap",
    title: "AI Strategy & Implementation Roadmap",
    shortDescription:
      "We help business leaders identify high-value AI opportunities, calculate realistic ROI, and build a clear step-by-step rollout plan.",
    fullDescription:
      "Many companies spend months on AI tests that never deliver value. We work with your leadership and engineering teams to audit your existing data, choose the right AI tools, and create a realistic plan that cuts costs and increases revenue.",
    icon: "Compass",
    features: [
      "Assess your company's data and readiness for AI",
      "Calculate expected costs and return on investment (ROI)",
      "Help leadership align on practical AI use cases",
      "Ensure systems meet data privacy laws (EU AI Act, GDPR, HIPAA)",
      "Recommend the best approach: open-source vs. cloud AI services",
    ],
    deliverables: [
      "Clear 1-to-3 year AI implementation plan",
      "Technical architecture diagram and tool recommendations",
      "Data privacy and security guidelines",
      "Budget forecast and estimated business savings",
    ],
    sampleArchitecture: "Your Company Data -> Secure Clean-up -> Private AI Engine -> Business Dashboard & Workflow Apps",
    typicalTimeline: "3 – 5 Weeks",
    targetAudience: "CTOs, CIOs, Business Leaders, and Product Heads",
    startingPrice: "Custom project scope",
    metrics: [
      { label: "Successful Rollout Rate", value: "94%" },
      { label: "Average Cloud Savings", value: "38%" },
    ],
  },
  {
    id: "generative-ai-rag",
    slug: "generative-ai-llm-integration",
    title: "Private Generative AI & Smart Enterprise Search",
    shortDescription:
      "Search across millions of company documents, contracts, and emails instantly—with 100% data privacy and accurate answers.",
    fullDescription:
      "We build internal AI assistants and search engines that understand your company's documents. Your team gets instant, accurate answers with exact page citations, while your confidential data never leaves your secure cloud environment.",
    icon: "BrainCircuit",
    features: [
      "Smart search that finds exact answers with document links",
      "Complete data privacy: your data is never sent to public models",
      "Built-in fact-checking to prevent false or inaccurate answers",
      "Connects directly with SharePoint, Google Drive, databases, and internal tools",
      "Role-based access: employees only see data they are permitted to view",
    ],
    deliverables: [
      "A ready-to-use private AI search assistant inside your cloud (AWS/Azure/GCP)",
      "Custom connectors for your internal documents and databases",
      "Real-time safety checks to ensure accurate answers",
      "Admin dashboard with usage reports and security logs",
    ],
    sampleArchitecture: "Company Documents -> Smart Indexing -> Verified Fact-Checking -> Secure AI Assistant -> Team Chat / Web App",
    typicalTimeline: "6 – 10 Weeks",
    targetAudience: "Engineering Heads, Legal Teams, and Knowledge Workers",
    startingPrice: "Based on team size and document volume",
    metrics: [
      { label: "Answer Accuracy", value: "99.6%" },
      { label: "Faster Research", value: "10x" },
    ],
  },
  {
    id: "custom-ml-dev",
    slug: "custom-ai-ml-development",
    title: "Custom Machine Learning & Computer Vision",
    shortDescription:
      "Bespoke AI models built for your unique business needs—from automatic quality inspection to sales and inventory forecasting.",
    fullDescription:
      "Off-the-shelf software often cannot solve specialized industry challenges. We develop tailored AI models that automatically spot manufacturing defects, forecast customer demand, and automate complex tasks.",
    icon: "Cpu",
    features: [
      "Visual quality checks: spot defective items on assembly lines in milliseconds",
      "Demand and sales forecasting to prevent overstocking or shortages",
      "Automated document processing: extract text from invoices, receipts, and scans",
      "Fast models optimized to run on factory computers and local devices",
      "Continuous learning: models improve automatically as more data comes in",
    ],
    deliverables: [
      "Fully trained, proprietary AI models that you own 100%",
      "Easy-to-use software interfaces and APIs for your developers",
      "Integration with your current factory floor equipment or cloud software",
      "Testing reports showing accuracy benchmarks",
    ],
    sampleArchitecture: "Cameras & Data Sensors -> Fast Local AI Check -> Immediate Alert / Automation System",
    typicalTimeline: "8 – 12 Weeks",
    targetAudience: "Heads of Operations, Manufacturing Directors, and Product Managers",
    startingPrice: "Fixed milestone pricing",
    metrics: [
      { label: "Inspection Speed", value: "< 45ms" },
      { label: "Accuracy Improvement", value: "+34%" },
    ],
  },
  {
    id: "governance-compliance",
    slug: "ai-governance-and-compliance",
    title: "AI Safety, Ethics & Regulatory Compliance",
    shortDescription:
      "Keep your company safe from legal risks. We ensure your AI models are fair, secure, and compliant with EU AI Act and GDPR rules.",
    fullDescription:
      "Global regulations around artificial intelligence are expanding quickly. We test your models for fairness, prevent accidental data leaks, and provide the technical documentation required by regulators and enterprise clients.",
    icon: "ShieldCheck",
    features: [
      "EU AI Act and international regulation compliance checks",
      "Testing against security attacks, hacks, and sensitive data leaks",
      "Audits to ensure your AI makes fair decisions without bias",
      "Automatic documentation and explanation cards for every model",
      "Employee guidelines and company-wide AI usage policies",
    ],
    deliverables: [
      "Official compliance audit report for leadership and regulators",
      "Safety filters that block personal information (PII) from leaking",
      "Security test report with recommended fixes",
      "Clear corporate AI handbook for your employees",
    ],
    sampleArchitecture: "User Question -> Safety & Privacy Filter -> Private AI Model -> Answer Verification -> Secure Audit Log",
    typicalTimeline: "3 – 6 Weeks",
    targetAudience: "Chief Legal Officers, Risk Managers, and Security Teams (CISOs)",
    startingPrice: "Fixed audit fee or ongoing support",
    metrics: [
      { label: "Data Leakage Rate", value: "0%" },
      { label: "Audit Pass Rate", value: "100%" },
    ],
  },
  {
    id: "managed-mlops",
    slug: "managed-mlops-and-observability",
    title: "24/7 Managed AI & Cloud Cost Optimization",
    shortDescription:
      "We keep your AI running smoothly around the clock while reducing your monthly cloud computing bills by up to 45%.",
    fullDescription:
      "Deploying an AI model is only the first step. Over time, models can slow down or produce outdated answers, and cloud GPU costs can quickly spiral out of control. Our dedicated team monitors your systems 24/7, fixes issues, and keeps costs low.",
    icon: "Activity",
    features: [
      "24/7 performance and uptime monitoring with rapid incident response",
      "Cloud cost cuts: make your models run on smaller, cheaper servers without losing speed",
      "Automatic updates when your data changes to keep answers fresh",
      "Smooth rollouts with zero downtime for your end users",
      "Clear monthly reports on system performance, speed, and cloud spend",
    ],
    deliverables: [
      "Real-time monitoring dashboard showing speed, errors, and costs",
      "Automated update pipeline for new models",
      "Monthly cost-savings and system health reviews",
      "Guaranteed uptime SLA backed by our support team",
    ],
    sampleArchitecture: "User Traffic -> Smart Load Balancer -> Optimized Fast Servers -> 24/7 Health Monitoring -> Automated Alerts",
    typicalTimeline: "Ongoing monthly support or 4-week setup",
    targetAudience: "VPs of Infrastructure, Engineering Directors, and IT Leaders",
    startingPrice: "Monthly plan based on usage volume",
    metrics: [
      { label: "Uptime Guarantee", value: "99.98%" },
      { label: "Cloud Bill Reduction", value: "45%" },
    ],
  },
];
