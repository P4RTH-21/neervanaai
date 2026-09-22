# Neervanaai — Enterprise AI Consulting Platform

> **Production-Grade B2B Digital Platform for Neervanaai Technologies Inc.**  
> Designing, building, and deploying sovereign, mission-critical enterprise AI systems inside private clouds.

---

## 🌟 Executive Overview

**Neervanaai** is a premier enterprise AI engineering consultancy. This platform communicates complex AI engineering capabilities (Private LLMs, Autonomous Workflow Agents, Enterprise RAG, Computer Vision, and AI Governance) with clarity, rigor, and executive credibility.

### Key Value Propositions
- **100% Private Cloud Deployment**: Systems deploy directly inside client VPCs (AWS, Azure, GCP, or on-prem) with zero external data sharing.
- **Measurable ROI in Weeks**: Production-ready pilots delivered in 4 to 6 weeks.
- **Full IP Ownership**: Clients retain 100% of code, weights, pipelines, and data assets with no vendor lock-in.
- **99.9% Production SLA**: High-availability enterprise architectures backed by round-the-clock monitoring and guarantees.

---

## 🏗️ Architecture & Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Static Site Generation (SSG), automated route prefetching, SEO metadata, and serverless API handlers. |
| **Language** | **TypeScript (Strict Mode)** | End-to-end type safety across components, models, and data contracts. |
| **Styling** | **Tailwind CSS + CSS Variables** | Custom enterprise design system (Light Blueprint Canvas, Warm Amber Signal accents, Precision Emerald indicators). |
| **Icons** | **Lucide React** | High-performance vector iconography. |
| **Interactive Tools** | **React Hooks & Custom Primitives** | Interactive AI Readiness Calculator, dynamic filters, and zero-dependency modal systems. |

---

## 📁 Repository Structure

```text
neervanaai/
├── docs/
│   └── WEBSITE_EXECUTIVE_GUIDE.md  # Complete feature, sales pitch, and section guide
├── public/
│   ├── documents/                  # Whitepapers, research briefs, downloadable assets
│   ├── icons/                      # Brand vector icons, favicons
│   └── images/                     # Case study assets, graphics
├── src/
│   ├── app/                        # Next.js App Router (Pages & API endpoints)
│   │   ├── layout.tsx              # Root layout & global metadata
│   │   ├── page.tsx                # Homepage (/)
│   │   ├── services/page.tsx       # 6 Core AI Engineering Practices (/services)
│   │   ├── industries/page.tsx     # Enterprise Industry Verticals (/industries)
│   │   ├── case-studies/           # Case study directory & dynamic details (/case-studies/[slug])
│   │   ├── governance/page.tsx     # AI Ethics & EU AI Act Compliance (/governance)
│   │   ├── about/page.tsx          # Mission, Values, & Team Leadership (/about)
│   │   ├── blog/                   # Research whitepapers & briefings (/blog/[slug])
│   │   ├── contact/page.tsx        # Discovery intake form & coordinates (/contact)
│   │   └── api/contact/route.ts    # Lead intake endpoint with CRM validation
│   ├── components/
│   │   ├── layout/                 # Header, Footer, Container
│   │   ├── sections/               # HeroSection, TrustBar, StatsTicker, ServicesGrid,
│   │   │                           # AIReadinessCalculator, ArchitectureStack,
│   │   │                           # ProcessTimeline, CaseStudyHighlight, WhyChooseUs,
│   │   │                           # TeamPreview, TestimonialsGrid, FAQSection, CTASection
│   │   ├── forms/                  # ContactForm, BookCallModal
│   │   └── ui/                     # Button, Badge, Card, Modal, Accordion
│   ├── lib/
│   │   ├── data/                   # Structured data (services, case studies, blogs, team)
│   │   ├── constants.ts            # Site configuration, navigation links
│   │   └── utils.ts                # Helper functions, formatters, cn
│   └── styles/
│       ├── globals.css             # Tailwind base & typography rules
│       ├── variables.css           # Design tokens & color variables
│       └── utilities.css           # Blueprint grid & ribbon animation classes
├── .env.example                    # Sample environment variables
├── .gitignore                      # Git exclusion rules
├── package.json                    # Project dependencies & scripts
├── tailwind.config.ts              # Custom theme extensions & color palette
└── tsconfig.json                   # Strict TypeScript compiler configuration
```

---

## 🚀 Quickstart & Local Setup

### 1. Prerequisites
- **Node.js**: v18.17.0+ (Tested on Node v20+)
- **npm**: v9.0.0+

### 2. Installation
```bash
# Clone the private repository
git clone https://github.com/YOUR_USERNAME/neervanaai.git

# Navigate into directory
cd neervanaai

# Install dependencies
npm install
```

### 3. Environment Configuration
Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

Configurable keys:
```env
NEXT_PUBLIC_SITE_URL=https://neervanaai.com
CONTACT_LEAD_WEBHOOK_URL=https://your-crm-webhook-endpoint.com/leads
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📚 Documentation & Sales Resources

For a complete breakdown of every section, page, client takeaway, and 60-second pitch talking points, consult:
- **[`docs/WEBSITE_EXECUTIVE_GUIDE.md`](./docs/WEBSITE_EXECUTIVE_GUIDE.md)**: Master Reference & Sales Guide.

---

## 🔒 Security & Privacy

This repository and codebase contain proprietary software belonging to **Neervanaai Technologies Inc.**
- Ensure this repository remains **Private**.
- Never commit API keys, service credentials, or production environment files.

---

## 📄 License & Ownership
Copyright © 2025–2026 Neervanaai Technologies Inc. All rights reserved.  
Proprietary enterprise source code.
