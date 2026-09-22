"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { BookCallModal } from "@/components/forms/BookCallModal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    timeline: "Week 1",
    title: "Discovery & ROI Feasibility",
    description:
      "We analyze your workflows and proprietary documents to pinpoint high-ROI opportunities. We map clear metrics and verify technical feasibility before writing code.",
    highlights: ["Clear ROI projection", "Zero-leak data audit", "Fixed-scope plan"],
  },
  {
    step: "02",
    timeline: "Weeks 2 – 4",
    title: "Agile Development & Staging Demos",
    description:
      "We engineer your AI system in rapid two-week sprints. You test real, working software connected to your staging environment—not theoretical slide decks.",
    highlights: ["Bi-weekly staging demos", "Automated accuracy tests", "Built-in guardrails"],
  },
  {
    step: "03",
    timeline: "Week 5+",
    title: "Private Deployment & Full IP Handover",
    description:
      "We deploy directly to your private cloud infrastructure with zero downtime. You receive full source code ownership, system runbooks, and team training.",
    highlights: ["100% private cloud hosting", "Full source code ownership", "99.9% uptime SLA"],
  },
];

export const EnterpriseProcess: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative overflow-hidden">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-signal-dark uppercase mb-2">
            How We Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
            From concept to production in weeks
          </h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto mt-3 leading-relaxed">
            A clear, predictable roadmap. No endless consulting cycles or vague deliverables.
          </p>
        </div>

        {/* 3 Clean, Spacious Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-bold text-slate-900">
                    {s.step}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                    {s.timeline}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-slate-900 tracking-tight mb-2.5">
                  {s.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                {s.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-precision shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-2 rounded-[10px] bg-signal px-6 py-3.5 text-sm font-semibold text-white shadow-signal transition-all duration-150 hover:bg-signal-hover hover:shadow-signal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <span>Discuss your AI project with our team</span>
            <ArrowRight className="w-4 h-4 btn-hover-arrow" />
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
