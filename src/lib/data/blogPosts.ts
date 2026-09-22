import { BlogPost } from "@/types";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    slug: "production-rag-2025",
    title: "How to Build an Internal AI Search Engine That Actually Works",
    excerpt:
      "Why basic AI prototypes often give wrong answers, and how smart enterprise teams build accurate, private search systems across their company files.",
    category: "Generative AI",
    tags: ["Enterprise AI", "Smart Search", "Data Privacy", "Productivity"],
    author: {
      name: "Dr. Aris Thorne",
      role: "Chief Technology Officer",
      avatar: "/images/team/aris.jpg",
      bio: "Former AI researcher at DeepMind and MIT PhD graduate.",
    },
    date: "2025-01-14",
    readTime: "5 min read",
    featured: true,
    content: `
### Why Basic AI Search Tools Often Fail

Many companies tried creating internal AI assistants by simply uploading company PDFs into basic tools. At first, quick demonstrations looked impressive. But when employees started using them for real daily work, three major problems surfaced:

1. **Inaccurate Numbers and Dates**: Basic AI often mixes up dates, tables, and financial figures from different years.
2. **Missing Context**: Chopping documents into small pieces means the AI misses the full story—like mistaking a draft proposal for an approved contract.
3. **Made-Up Answers (Hallucinations)**: When the AI cannot find an exact answer, it sometimes makes one up rather than admitting it does not know.

---

### How to Fix It: A Practical 3-Step Approach

To build an AI search engine that your employees can actually trust, professional engineering teams follow three straightforward rules:

#### 1. Combine Keyword Search with Smart Meaning Search
Keyword search is great at finding exact part numbers, contract clauses, and employee names. Smart AI search is great at understanding concepts and synonyms. Combining both gives you the best of both worlds.

#### 2. Always Include Exact Page Links
Every single answer the AI provides should include a direct link to the exact page and paragraph in the source document. If an analyst or manager cannot verify where an answer came from in two seconds, they will not trust it.

#### 3. Automatic Fact-Checking Before Showing the Answer
Before showing a response, a quick verification check should compare the generated answer against the source text. If the numbers do not match up, the AI asks the user for clarification instead of guessing.

---

### The Bottom Line for Business Leaders
Building a private AI assistant for your team is one of the highest-ROI investments you can make this year. Focus first on clean document organization and verified answers, and your team will save hours every week.
    `,
  },
  {
    id: "post-2",
    slug: "eu-ai-act-compliance",
    title: "A Practical Guide to the EU AI Act for Business Leaders",
    excerpt:
      "A straightforward summary of what the new European AI rules mean for your company, and how to stay fully compliant without slowing down innovation.",
    category: "AI Governance",
    tags: ["AI Regulations", "Compliance", "Risk Management", "Business Safety"],
    author: {
      name: "Sophia Sterling",
      role: "Head of AI Ethics & Compliance",
      avatar: "/images/team/sophia.jpg",
      bio: "Former European technology policy advisor and certified lead auditor.",
    },
    date: "2025-02-03",
    readTime: "6 min read",
    featured: true,
    content: `
### Why Global Companies Need to Pay Attention

The European Union has introduced the world's first comprehensive rules for artificial intelligence—the **EU AI Act**. Just like GDPR for data privacy, this law applies to any company worldwide whose software or services are used by people in Europe.

Non-compliance can result in severe financial fines. Fortunately, getting compliant is completely manageable when you understand the basic rules.

---

### The Four Risk Categories Explained Simply

The law divides AI tools into four practical categories:

1. **Prohibited Systems**: AI used for harmful activities like social scoring or manipulative behavior is strictly banned.
2. **High-Risk Systems**: AI that makes important life decisions—such as automated job applicant screening, credit approvals, or medical diagnosis. These require safety checks, fair testing, and clear human oversight.
3. **General AI Tools**: General tools like chatbots and image generators must clearly label AI-generated content and respect copyright rules.
4. **Low-Risk Tools**: Everyday tools like spam filters and inventory dashboards have minimal rules and can be used freely.

---

### Three Practical Steps to Prepare Your Company

- **Step 1: Make a List of Your AI Tools**: Identify every AI system currently used in your organization and what data it touches.
- **Step 2: Check for Fairness**: Test your models to make sure they do not discriminate unfairly against any group of customers.
- **Step 3: Keep a Human in the Loop**: Ensure your team can always review, edit, or override any automated AI recommendation.
    `,
  },
  {
    id: "post-3",
    slug: "sovereign-llm-fine-tuning",
    title: "Why Enterprises are Choosing Private AI Over Public Cloud Tools",
    excerpt:
      "Why top companies are hosting their own private models instead of relying on public APIs, saving money and keeping confidential data safe.",
    category: "Enterprise Strategy",
    tags: ["Private AI", "Data Security", "Cloud Costs", "Business Strategy"],
    author: {
      name: "Vikram Malhotra",
      role: "Managing Partner",
      avatar: "/images/team/vikram.jpg",
      bio: "Ex-McKinsey Partner advising executives on practical technology investments.",
    },
    date: "2025-02-18",
    readTime: "5 min read",
    featured: false,
    content: `
### The Hidden Costs of Public AI Subscriptions

When generative AI first became popular, paying a monthly fee for public cloud APIs seemed like the fastest way to get started. But as companies scaled up their usage to thousands of employees, three big issues emerged:

1. **Unpredictable Monthly Bills**: Paying per question or token adds up quickly. For a large enterprise, public API bills can easily exceed \$50,000 to \$100,000 every month.
2. **Confidentiality Risks**: Legal and risk teams are uncomfortable sending internal legal briefs, customer records, and future product roadmaps to third-party public clouds.
3. **Lack of Control**: When an external AI vendor changes or updates their model, your company's software integrations can break overnight without warning.

---

### The Power of Owning Your Own AI

Open-source AI models (like Meta's Llama 3) have improved dramatically. They can now be hosted entirely inside your company's private cloud account.

By hosting your own model, you gain three huge advantages:
- **Fixed, Predictable Costs**: You pay for regular cloud servers instead of paying per question.
- **100% Privacy**: Your proprietary company knowledge never leaves your company's secure boundary.
- **Permanent Asset**: The customized model belongs completely to your business.
    `,
  },
  {
    id: "post-4",
    slug: "mlops-at-scale-gpu-finops",
    title: "How to Cut Your Company's AI Cloud Bills by 40%",
    excerpt:
      "Simple, proven methods to make your AI models run faster on smaller servers, reducing expensive monthly cloud bills.",
    category: "MLOps & Infrastructure",
    tags: ["Cloud Savings", "Infrastructure", "Cost Optimization", "Fast AI"],
    author: {
      name: "Kavita Reddy",
      role: "Head of Infrastructure",
      avatar: "/images/team/kavita.jpg",
      bio: "Former engineering lead at Uber and AWS.",
    },
    date: "2025-03-01",
    readTime: "5 min read",
    featured: false,
    content: `
### The Problem: Wasted Cloud Server Power

AI models require powerful computer processors (called GPUs) to run. These specialized servers are expensive to rent on Amazon Web Services, Microsoft Azure, and Google Cloud.

Surprisingly, our audits show that the average company only uses about **25% of the computer power they pay for**. The other 75% is wasted while servers sit idle waiting between user queries.

---

### Three Ways We Cut Costs Immediately

1. **Batch Requests Intelligently**: Instead of answering one question at a time, smart software groups incoming requests together so the server works at full efficiency.
2. **Model Compression (Quantization)**: Specialized techniques can shrink the size of an AI model by up to 50% without any noticeable drop in accuracy, allowing it to run on much cheaper servers.
3. **Automatic Scaling**: Automatically turn off extra servers during nights and weekends when employee traffic is low, and spin them back up only when demand rises.
    `,
  },
];
