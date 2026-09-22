import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { INDUSTRIES } from "@/lib/data/industries";
import {
  Landmark,
  HeartPulse,
  Factory,
  Truck,
  ShoppingBag,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Verticals & Sector Solutions",
  description:
    "Tailored enterprise AI systems engineered for Financial Services, Healthcare, Aerospace Manufacturing, Supply Chain, and Retail.",
};

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-7 h-7 text-signal" />,
  HeartPulse: <HeartPulse className="w-7 h-7 text-signal" />,
  Factory: <Factory className="w-7 h-7 text-signal" />,
  Truck: <Truck className="w-7 h-7 text-signal" />,
  ShoppingBag: <ShoppingBag className="w-7 h-7 text-signal" />,
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Hero Header */}
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
              Sector Specialization
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Vertical AI Solutions for Regulated Industries
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Every industry carries unique constraints: strict audits in banking, patient privacy in healthcare, and microsecond latencies on assembly lines. We engineer private solutions tailored directly to your operational reality.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Matrix */}
      <section className="py-16">
        <Container>
          <div className="space-y-16">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                id={ind.id}
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] overflow-hidden hover:shadow-card transition-all duration-200"
              >
                {/* Header Banner */}
                <div className="p-8 sm:p-10 border-b border-slate-100 bg-gradient-to-r from-white via-slate-50/50 to-white">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0">
                        {iconMap[ind.icon] || <Landmark className="w-7 h-7 text-signal" />}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-signal-dark">
                          Vertical Practice
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-0.5">
                          {ind.name}
                        </h2>
                        <p className="text-sm font-semibold text-slate-700 mt-1">
                          {ind.tagline}
                        </p>
                        <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                          {ind.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
                      <div className="bg-amber-50/80 px-4 py-3 rounded-xl text-left lg:text-right border border-amber-200/80 shadow-subtle">
                        <div className="text-xl font-black text-slate-900">{ind.stat.value}</div>
                        <div className="text-[11px] text-slate-600 max-w-xs">{ind.stat.label}</div>
                      </div>
                      <Button
                        variant="signal"
                        size="sm"
                        href="/contact"
                        className="group font-bold"
                        rightIcon={<ArrowRight className="w-4 h-4 btn-hover-arrow" />}
                      >
                        Talk to Our {ind.name.split(" ")[0]} Experts
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Challenges vs Solutions */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5 mb-3">
                        <AlertTriangle className="w-4 h-4 text-amber-600" />
                        <span>Core Industry Challenges</span>
                      </h3>
                      <ul className="space-y-2">
                        {ind.challenges.map((c, cIdx) => (
                          <li key={cIdx} className="text-xs text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-precision" />
                        <span>Neervanaai Architectural Solutions</span>
                      </h3>
                      <ul className="space-y-2">
                        {ind.solutions.map((s, sIdx) => (
                          <li key={sIdx} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-precision shrink-0 mt-1.5" />
                            <span className="font-medium">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Key Use Cases & Linked Case Study */}
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      High-Impact Production Use Cases
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {ind.useCases.map((uc, uIdx) => (
                        <div
                          key={uIdx}
                          className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80 flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-900 mb-1">{uc.title}</div>
                            <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
                              {uc.description}
                            </p>
                          </div>
                          <div className="text-[11px] font-bold text-slate-900 bg-white border border-slate-200 p-2 rounded-lg text-center shadow-subtle">
                            {uc.impact}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Linked Case Study */}
                    {ind.caseStudySlug && (
                      <div className="mt-4 p-4 bg-amber-50/40 rounded-xl border border-amber-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-signal" />
                          <span className="text-xs text-slate-700 font-medium">
                            See verified deployment results in this sector:
                          </span>
                        </div>
                        <Link
                          href={`/case-studies/${ind.caseStudySlug}`}
                          className="text-xs font-bold text-slate-900 hover:text-signal-dark transition-colors flex items-center gap-1 shrink-0"
                        >
                          <span>Read {ind.name.split(" ")[0]} Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 btn-hover-arrow" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
