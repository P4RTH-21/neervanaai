"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { CASE_STUDIES } from "@/lib/data/caseStudies";
import { ArrowRight, Filter } from "lucide-react";

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = [
    "All",
    "Financial Services",
    "Industrial Manufacturing",
    "Healthcare & Life Sciences",
    "Logistics & Supply Chain",
    "Retail & E-Commerce",
  ];

  const filteredStudies =
    selectedIndustry === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.industry === selectedIndustry);

  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] border-b border-[#E5E7EB] pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div aria-hidden="true" className="hero-ribbon" />
        <div aria-hidden="true" className="hero-blueprint pointer-events-none absolute inset-0" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FEF3C7] to-transparent blur-3xl opacity-75"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-4">
              Production Case Studies
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Enterprise Deployments & Measurable ROI
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Explore how Neervanaai engineers mission-critical AI systems across banking, healthcare, aerospace, logistics, and retail—delivering verified cost reductions and performance breakthroughs.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter and Grid */}
      <section className="py-12">
        <Container>
          {/* Industry Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5 shrink-0">
              <Filter className="w-3.5 h-3.5 text-signal" />
              Filter by Industry:
            </span>
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedIndustry === ind
                    ? "bg-slate-900 text-white shadow-subtle"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Card
                key={study.id}
                className="flex flex-col justify-between overflow-hidden bg-white border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card transition-all duration-200"
              >
                <div>
                  <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                    <div className="flex items-center justify-between text-xs font-semibold mb-2">
                      <span className="text-signal-dark font-mono uppercase tracking-wider">
                        {study.industry}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{study.duration}</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-slate-900 tracking-tight line-clamp-2">
                      {study.title}
                    </h2>
                    <div className="text-xs text-slate-500 mt-1 font-medium">
                      Client: {study.client}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6 space-y-4">
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 bg-amber-50/50 border border-amber-200/60 p-3 rounded-xl">
                      {study.results.slice(0, 2).map((res, rIdx) => (
                        <div key={rIdx}>
                          <div className="text-xl font-extrabold text-slate-900">
                            {res.metric}
                          </div>
                          <div className="text-[10px] text-slate-600 font-medium leading-tight mt-0.5">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {study.technologies.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-900 hover:text-white py-2.5 rounded-lg transition-colors group"
                  >
                    <span>Read Architecture Deep-Dive</span>
                    <ArrowRight className="w-3.5 h-3.5 btn-hover-arrow" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
