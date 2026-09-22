"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FEATURED_CASES = [
  {
    id: "fintech-search",
    tag: "Fintech & Banking",
    title: "Private AI Search Across 50,000+ Regulatory Contracts",
    description:
      "A Tier-1 financial institution needed a completely private way for risk officers to search complex vendor agreements without cloud data leakage.",
    stat: "70%",
    statLabel: "Faster contract review cycles",
    deliverable: "Private AWS VPC deployment • Sub-35ms semantic search",
    slug: "enterprise-rag-fintech",
  },
  {
    id: "manufacturing-vision",
    tag: "Aerospace Manufacturing",
    title: "Real-Time Computer Vision on the Factory Floor",
    description:
      "A precision manufacturer automated component inspection on high-speed conveyor lines, preventing micro-fracture defects before assembly.",
    stat: "99.9%",
    statLabel: "Defect detection accuracy",
    deliverable: "Edge camera inference • Zero conveyor stoppages",
    slug: "edge-vision-aerospace-manufacturing",
  },
];

export const CaseStudyHighlight: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark mb-2">
              Proven Results
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
              Real AI systems in production
            </h2>
            <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
              Measurable improvements in operational speed, cost, and accuracy.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-signal-dark transition-colors group"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4 btn-hover-arrow" />
          </Link>
        </div>

        {/* 2 Clean Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_CASES.map((cs) => (
            <div
              key={cs.id}
              className="group rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  {cs.tag}
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight mb-3">
                  {cs.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {cs.description}
                </p>

                {/* Clean Impact Metric Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {cs.stat}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {cs.statLabel}
                    </div>
                  </div>
                  <div className="text-right text-xs text-slate-600 max-w-[200px] leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-precision inline mr-1 -mt-0.5" />
                    <span>{cs.deliverable}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <Link
                href={`/case-studies/${cs.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-signal-dark transition-colors pt-2 border-t border-slate-100"
              >
                <span>Read detailed architecture breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 btn-hover-arrow" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
