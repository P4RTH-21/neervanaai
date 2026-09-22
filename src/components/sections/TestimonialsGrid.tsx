"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Quote } from "lucide-react";

export const TestimonialsGrid: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Neervanaai delivered what three legacy consulting giants claimed was impossible: an air-gapped, multi-agent search system operating directly inside our banking perimeter with zero data leaks.",
      author: "Marcus Vance",
      role: "Global Head of Quantitative Technology",
      company: "Tier-1 Investment Bank",
      metric: "$24.8M direct annual value",
    },
    {
      quote:
        "The engineering discipline Neervanaai brought to our factory floor was staggering. They integrated sub-millimeter vision models into our rugged PLCs in 16 weeks, eliminating warranty teardowns completely.",
      author: "Elena Rostova",
      role: "VP of Advanced Manufacturing & QA",
      company: "Aerospace Systems Corp",
      metric: "99.94% defect capture rate",
    },
    {
      quote:
        "In our hospital network, physician burnout was a crisis. Neervanaai's clinical structuring assistant saved our doctors 1.5 hours of charting every night while maintaining an unbroken 100% HIPAA compliance record.",
      author: "Dr. Jonathan Reyes, MD",
      role: "Chief Medical Information Officer",
      company: "Aegis Health Alliance",
      metric: "65% documentation time reduction",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7EB] relative">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark mb-2">
            Client Testimonials
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
            Validated by Enterprise Technology Officers
          </h2>
          <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
            Direct feedback from C-level executives who entrusted Neervanaai with mission-critical production deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-7 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card transition-all duration-200"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-400/50 mb-4" />
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm">{item.author}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.role}</div>
                <div className="text-xs text-slate-600 font-medium">{item.company}</div>
                <div className="text-xs font-bold text-signal-dark mt-2.5 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block">
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
