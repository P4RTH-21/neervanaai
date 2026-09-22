"use client";

import React, { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BookCallModal } from "@/components/forms/BookCallModal";
import { formatNumber } from "@/lib/utils";
import {
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const AIReadinessCalculator: React.FC = () => {
  const [industry, setIndustry] = useState<string>("fintech");
  const [teamSize, setTeamSize] = useState<number>(500);
  const [maturity, setMaturity] = useState<string>("poc");
  const [focusArea, setFocusArea] = useState<string>("rag");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamic ROI calculation algorithm
  const calculations = useMemo(() => {
    let baseHourlyRate = 85; // Default average knowledge worker hourly cost
    if (industry === "fintech") baseHourlyRate = 120;
    if (industry === "healthcare") baseHourlyRate = 110;
    if (industry === "manufacturing") baseHourlyRate = 75;
    if (industry === "logistics") baseHourlyRate = 70;
    if (industry === "retail") baseHourlyRate = 65;

    let efficiencyMultiplier = 0.22; // 22% time saved
    if (focusArea === "rag") efficiencyMultiplier = 0.28;
    if (focusArea === "vision") efficiencyMultiplier = 0.35;
    if (focusArea === "mlops") efficiencyMultiplier = 0.20;

    let maturityDiscount = 1.0;
    if (maturity === "exploring") maturityDiscount = 0.75;
    if (maturity === "poc") maturityDiscount = 1.0;
    if (maturity === "scaling") maturityDiscount = 1.35;

    const annualWorkHours = 2000;
    const totalTeamHours = teamSize * annualWorkHours;
    const hoursSaved = Math.round(totalTeamHours * efficiencyMultiplier * 0.4 * maturityDiscount);
    const estimatedSavings = Math.round(hoursSaved * baseHourlyRate);

    const paybackMonths = maturity === "scaling" ? 3.5 : maturity === "poc" ? 5 : 7;

    return {
      hoursSaved: formatNumber(hoursSaved),
      estimatedSavings: (estimatedSavings / 1_000_000).toFixed(2),
      paybackMonths,
    };
  }, [industry, teamSize, maturity, focusArea]);

  return (
    <>
      <section className="bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] py-20 lg:py-28 border-b border-[#E5E7EB] relative overflow-hidden">
        {/* Ambient Warm Lighting */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 right-10 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl opacity-60"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-slate-700 shadow-subtle mb-3">
              <Calculator className="w-3.5 h-3.5 text-signal" />
              <span>Interactive Feasibility Modeler</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
              Enterprise AI ROI & Readiness Calculator
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Model the measurable financial impact, hours reclaimed, and payback velocity of deploying private enterprise AI.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-card space-y-6">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Sparkles className="w-4 h-4 text-signal" />
                <span>Tell Us About Your Organization</span>
              </h3>

              {/* Industry Selection */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
                  Your Industry
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: "fintech", label: "Financial Services" },
                    { id: "healthcare", label: "Healthcare" },
                    { id: "manufacturing", label: "Manufacturing" },
                    { id: "logistics", label: "Logistics & Shipping" },
                    { id: "retail", label: "Retail & E-Commerce" },
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setIndustry(ind.id)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-left ${
                        industry === ind.id
                          ? "bg-amber-50 border-amber-300 text-slate-900 shadow-subtle"
                          : "bg-slate-50 border-slate-200/80 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                    Number of Impacted Employees
                  </label>
                  <span className="text-sm font-extrabold text-slate-900" suppressHydrationWarning>
                    {formatNumber(teamSize)} Employees
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>50 (Small Team)</span>
                  <span>1,000 (Department)</span>
                  <span>5,000+ (Entire Company)</span>
                </div>
              </div>

              {/* AI Maturity */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
                  Where Are You in Your AI Journey?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "exploring", label: "Just Exploring", sub: "Researching options" },
                    { id: "poc", label: "Running a Pilot", sub: "Testing an initial idea" },
                    { id: "scaling", label: "Scaling Up", sub: "Rolling out company-wide" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMaturity(m.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        maturity === m.id
                          ? "bg-amber-50 border-amber-300 text-slate-900 shadow-subtle"
                          : "bg-slate-50 border-slate-200/80 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="text-xs font-bold">{m.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{m.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Solution */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-500 tracking-wider mb-2">
                  What Is Your Primary Goal?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "rag", label: "Private AI Search", desc: "Find answers in company files" },
                    { id: "vision", label: "Automated Checks", desc: "Spot errors in real time" },
                    { id: "mlops", label: "Cut Cloud Bills", desc: "Reduce monthly server costs" },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFocusArea(f.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        focusArea === f.id
                          ? "bg-amber-50 border-amber-300 text-slate-900 shadow-subtle"
                          : "bg-slate-50 border-slate-200/80 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="text-xs font-bold">{f.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{f.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Output Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white to-amber-50/40 p-6 sm:p-8 rounded-2xl border border-amber-200/90 shadow-card flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-signal-dark block mb-1">
                  Estimated 12-Month Economic Impact
                </span>
                <h4 className="text-xl font-bold text-slate-900">Projected Enterprise Yield</h4>

                <div className="mt-6 space-y-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-subtle">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                      <DollarSign className="w-4 h-4 text-signal" />
                      <span>Net Annual Operational Value</span>
                    </div>
                    <div
                      className="text-4xl font-extrabold text-slate-900 mt-1"
                      suppressHydrationWarning
                    >
                      ${calculations.estimatedSavings}M
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Direct labor reallocation + infrastructure optimization
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5 text-signal" />
                        <span>Hours Reclaimed</span>
                      </div>
                      <div
                        className="text-xl font-bold text-slate-900 mt-1"
                        suppressHydrationWarning
                      >
                        {calculations.hoursSaved} hrs
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-subtle">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                        <TrendingUp className="w-3.5 h-3.5 text-signal" />
                        <span>Payback Horizon</span>
                      </div>
                      <div
                        className="text-xl font-bold text-slate-900 mt-1"
                        suppressHydrationWarning
                      >
                        ~{calculations.paybackMonths} Months
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2 shadow-subtle">
                    <ShieldCheck className="w-4 h-4 text-precision shrink-0 mt-0.5" />
                    <span>
                      Calculations model private VPC deployment with strict zero-leakage enterprise governance.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-amber-200/60 mt-6">
                <Button
                  variant="signal"
                  size="lg"
                  className="w-full justify-center group font-bold"
                  onClick={() => setIsModalOpen(true)}
                  rightIcon={<ArrowRight className="w-5 h-5 btn-hover-arrow" />}
                >
                  Schedule Feasibility Scoping
                </Button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  Receive a customized 15-page architectural feasibility breakdown.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
