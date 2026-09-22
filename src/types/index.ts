export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  deliverables: string[];
  sampleArchitecture: string;
  typicalTimeline: string;
  targetAudience: string;
  startingPrice?: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientRole?: string;
  industry: string;
  heroImage: string;
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  technologies: string[];
  results: {
    metric: string;
    label: string;
    context: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  duration: string;
}

export interface Industry {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  useCases: {
    title: string;
    description: string;
    impact: string;
  }[];
  stat: {
    value: string;
    label: string;
  };
  caseStudySlug?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Generative AI" | "AI Governance" | "MLOps & Infrastructure" | "Enterprise Strategy";
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials: string[];
  linkedIn: string;
  github?: string;
  featured?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "Security & IP" | "Engagement" | "Technical" | "Pricing";
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  phone?: string;
  serviceInterest: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
