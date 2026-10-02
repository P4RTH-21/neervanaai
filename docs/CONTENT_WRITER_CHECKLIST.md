# Neervanaai — Content Writer Upgrade Checklist & Specification
*A Complete Step-by-Step Handover Guide to Replace Demo Content with Real Production Copy*

---

## 📌 Instructions for the Content Writer

This website is already fully designed, responsive, and code-complete. All text content is organized into modular configuration and data files. 

Your task is to provide the **real content** for each section listed below. You do not need to write code—simply provide the text in a document (Google Docs, Word, or Markdown) following the templates and character limits in this guide.

---

## 1. Company Identity & Global Brand Info
*File in code: `src/lib/constants.ts`*

Please provide:
- [ ] **Official Legal Company Name**: (Current demo: *Neervanaai Technologies Inc.*)
- [ ] **Short Brand Name**: (Current demo: *Neervanaai*)
- [ ] **Primary Tagline**: (Current demo: *Enterprise AI Solutions That Actually Work* — 5 to 8 words)
- [ ] **Company One-Liner Description**: (Current demo: *Neervanaai helps businesses build, launch, and manage secure AI systems. From custom models to private enterprise search, we turn AI into real business results.* — 25 to 35 words)
- [ ] **Primary Contact Email**: (Current demo: *partners@neervanaai.com*)
- [ ] **Official Contact Phone Number**: (Current demo: *+1 (800) 584-2438*)
- [ ] **Response SLA Promise**: (Current demo: *We reply to all inquiries within 12 hours*)
- [ ] **NDA Statement**: (Current demo: *Mutual NDA signed before discussing your project or data*)
- [ ] **Physical Office Location(s)**:
  - City, Street Address, Country, Local Phone Number. (Current demo has San Francisco, New York, London, Bengaluru — specify which are real or if you have a single primary office/remote address).
- [ ] **Social Links**: Real company LinkedIn URL, Twitter/X, GitHub (if applicable).

---

## 2. Key Trust Metrics & Certifications
*File in code: `src/lib/constants.ts` and `src/components/sections/StatsTicker.tsx`*

### A. Four Headline Stats (Ticker)
Please provide 4 quantifiable achievements of your company:
- [ ] **Stat 1**: (e.g., Number of models/systems deployed, e.g., *"250+ Models in Production"*)
- [ ] **Stat 2**: (e.g., Cost savings or business value generated, e.g., *"$42M+ Saved"*)
- [ ] **Stat 3**: (e.g., Client ownership / security metric, e.g., *"100% Private Cloud"*)
- [ ] **Stat 4**: (e.g., Delivery speed or latency metric, e.g., *"4–6 Weeks to Production"*)

### B. Certifications & Compliance Badges
List which certifications Neervanaai holds or strictly complies with:
- [ ] Real security & cloud standards (e.g., SOC 2 Type II, ISO 27001, HIPAA, GDPR, EU AI Act, AWS Partner, Azure Partner, etc.).

### C. Client Logos or Anonymized Tiers
- [ ] List 6 real client names (or if under NDA, anonymized labels like *"Tier-1 US Investment Bank"*, *"Fortune 500 Healthcare Network"*, *"Global E-Commerce Brand"*).

---

## 3. Homepage (Hero & Value Proposition)
*File in code: `src/components/sections/HeroSection.tsx`*

- [ ] **Hero Badge / Live Status**: (Current demo: *Next-Gen Enterprise AI Engineering • Accepting New Enterprise Deployments*)
- [ ] **Main Hero Headline**: (Current demo: *Custom AI Solutions Built for Real Business Impact.* — Bold, punchy, 6 to 10 words)
- [ ] **Hero Subtitle**: (Current demo: *We design, build, and deploy enterprise-grade AI systems that run inside your private cloud—cutting operational costs, automating complex workflows, and protecting your proprietary data.* — 2 to 3 sentences)
- [ ] **The 4 Executive Client Commitments (Right-hand Card)**:
  - *Commitment 1 (Cloud / Security)*: Title + 1 sentence description (e.g., 100% Private Cloud).
  - *Commitment 2 (Timeline / Speed)*: Title + 1 sentence description (e.g., Measurable ROI in Weeks).
  - *Commitment 3 (Intellectual Property)*: Title + 1 sentence description (e.g., Full IP Ownership).
  - *Commitment 4 (Uptime / Reliability)*: Title + 1 sentence description (e.g., 99.9% Enterprise SLA).

---

## 4. The 6 Core Services Offered
*File in code: `src/lib/data/services.ts` and `/services` page*

Please confirm or update the list of services Neervanaai offers. For each service (up to 6), provide:

```text
Service 1: [Service Title, e.g., Private Generative AI & Enterprise Search]
- Short Summary (1 sentence for cards):
- Full Description (2-3 sentences explaining the business problem):
- 5 Key Features / Capabilities (bullet points):
- 4 Tangible Deliverables given to the client:
- Typical Engagement Timeline (e.g., "4 to 8 Weeks"):
- Target Audience (e.g., "CTOs, Heads of Data, Legal Teams"):
- 2 Metric Highlights (e.g., "94% adoption rate", "60% cost reduction"):
```

*Current 6 services on the website:*
1. AI Strategy & Implementation Roadmap
2. Private Generative AI & Smart Enterprise Search (RAG)
3. Autonomous AI Agents & Workflow Automation
4. Computer Vision & Visual Quality Inspection
5. Predictive Machine Learning & Forecasting
6. Enterprise AI Governance, Ethics & Security Audits

*(If you only offer 3 or 4 services, state which ones to keep and which to remove).*

---

## 5. Target Industries & Sector Use Cases
*File in code: `src/lib/data/industries.ts` and `/industries` page*

For each industry you target, provide:
1. **Industry Name** (Current: Financial Services, Healthcare, Retail, Manufacturing, Legal, Software/SaaS)
2. **Key Challenge Faced by this Industry** (1-2 sentences)
3. **Neervanaai's Custom Solution** (2 sentences)
4. **Key Regulatory Standard** (e.g., SEC/FINRA, HIPAA, FDA, ISO, etc.)
5. **Measurable Outcome/Impact** (e.g., "73% faster claim processing")

---

## 6. Real Client Case Studies
*File in code: `src/lib/data/caseStudies.ts` and `/case-studies` page*

Please provide 3 to 6 real (or anonymized) case studies. For each case study, fill out this template:

```text
Case Study: [Title, e.g., Private AI Search for Global Investment Bank]
- Industry: [e.g., Financial Services]
- Client Name or Anonymized Title: [e.g., Tier-1 Investment Bank or Company Name]
- Client Role: [e.g., Managing Director of Quantitative Technology]
- Engagement Timeline: [e.g., 10 Weeks from Kickoff to Launch]
- Executive Summary (1-2 sentences):
- The Challenge (What problem was costing the client time or money? 2-3 sentences):
- The Solution (What exact system did Neervanaai engineer and deploy? 2-3 sentences):
- 3 Quantified Business Results (Number + Label + Context):
    Result 1: [e.g., 78% Faster Document Research]
    Result 2: [e.g., $24M Annual Operational Savings]
    Result 3: [e.g., 0% Data Leakage / 100% Private Cloud]
- Client Quote / Testimonial: [2-3 sentences of praise]
- Client Quote Author & Title: [e.g., Marcus Vance, Head of Tech]
```

---

## 7. Client Testimonials & Social Proof
*File in code: `src/components/sections/TestimonialsGrid.tsx`*

Please provide 3 executive testimonials from real clients (or approved anonymized client quotes):
- **Quote**: 2–3 sentences highlighting the business value, speed, or technical excellence of Neervanaai.
- **Author Name**: Real name or title.
- **Job Title**: (e.g., *Chief Technology Officer*, *VP of Engineering*, *Head of Data*).
- **Company**: (e.g., *Aegis Health*, *FinTech Corp*, or real company name).
- **Key Metric Pill**: (e.g., *"$24.8M direct annual value"*, *"99.94% defect capture"*).

---

## 8. Leadership & Team Bios
*File in code: `src/lib/data/team.ts` and `/about` page*

Please provide the real founders and key leadership team members:
For each person:
- [ ] **Full Name**
- [ ] **Exact Title / Role** (e.g., *Co-Founder & CEO*, *CTO*, *Head of AI Solutions*)
- [ ] **Professional Bio**: 2 to 3 sentences covering background, past companies/universities, and what they do at Neervanaai.
- [ ] **3 Bullet Credentials**: (e.g., *"PhD MIT"*, *"Ex-Google AI"*, *"15+ Years Enterprise Systems"*)
- [ ] **Professional Headshot Photo**: High-resolution image (at least 600x600px).
- [ ] **LinkedIn URL** & **GitHub URL** (optional).

---

## 9. About Us Page (Company Mission & Philosophy)
*File in code: `src/app/about/page.tsx`*

- [ ] **Company Founding Story**: Why was Neervanaai started? What gap in the AI consulting market does Neervanaai solve? (100–150 words).
- [ ] **Mission Statement**: 1 to 2 clear sentences.
- [ ] **Core Operational Values** (Provide 4 core values):
  - *Example 1*: Data Sovereignty & Client Privacy
  - *Example 2*: Engineering Rigor over Marketing Hype
  - *Example 3*: 100% Client Code & IP Ownership
  - *Example 4*: Measurable Business ROI

---

## 10. Responsible AI & Governance Commitments
*File in code: `src/app/governance/page.tsx`*

Explain your company's actual safety, compliance, and governance practices:
- [ ] How do you handle client data privacy and prevent data leaks?
- [ ] How do you test and prevent AI hallucinations?
- [ ] How do you audit for algorithmic bias?
- [ ] Which regulations do you support (EU AI Act, HIPAA, SOC 2, US Executive Orders)?

---

## 11. Frequently Asked Questions (FAQ)
*File in code: `src/lib/data/faqs.ts` and homepage FAQ section*

Please provide 6 to 8 real questions that prospective enterprise clients frequently ask you, along with your company's approved answers. Topics usually include:
1. *Will our private company data be used to train public AI models?*
2. *How long does an initial pilot project take?*
3. *Who owns the intellectual property and code?*
4. *How do you price your engagements (fixed-bid, retainer, or milestone-based)?*
5. *How do you ensure systems don't hallucinate or give wrong answers?*
6. *Can your systems deploy on-premises or inside our specific cloud (AWS/Azure/GCP)?*

---

## 12. Technical Whitepapers / Blog Articles
*File in code: `src/lib/data/blogPosts.ts` and `/blog` page*

Provide 4 to 6 real articles or whitepapers representing your team's thought leadership:
For each article:
- **Title**: (e.g., *"The Enterprise Guide to Private Cloud RAG in 2026"*)
- **Category**: (e.g., *Architecture*, *Governance*, *Cost Optimization*, *Engineering*)
- **Short Summary / Excerpt**: (2 sentences)
- **Read Time**: (e.g., *"6 min read"*)
- **Author**: (Name and role)
- **Full Article Content**: (Markdown format with headings, bullet points, and code snippets if applicable).

---

## 13. Legal Documents
*Files in code: `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`*

- [ ] **Privacy Policy**: Official legal policy with registered company name, address, governing state/country, and privacy contact email.
- [ ] **Terms of Service**: Standard enterprise consulting terms of service.

---

## 📦 How to Deliver the Content

Your content writer can provide this in any of the following formats:
1. **A Shared Google Doc or Word Document** organized using the headers in this checklist.
2. **Direct Markdown files** (`.md`).
3. Once received, we will paste the real data directly into the clean data files in `src/lib/data/` and `src/lib/constants.ts`—and the website will immediately update across all pages automatically!
