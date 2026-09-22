import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/data/services";
import {
  Compass,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise AI Services & Capabilities",
  description:
    "Comprehensive enterprise AI consulting offerings: Strategy Roadmaps, Private Generative AI, Custom ML Engineering, EU AI Act Compliance, and 24/7 Managed MLOps.",
};

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-7 h-7 text-signal" />,
  BrainCircuit: <BrainCircuit className="w-7 h-7 text-signal" />,
  Cpu: <Cpu className="w-7 h-7 text-signal" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-signal" />,
  Activity: <Activity className="w-7 h-7 text-signal" />,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Page Hero Header */}
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
              What We Do
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Our AI Consulting & Engineering Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We design, build, and deploy private AI solutions that connect seamlessly with your existing enterprise systems—keeping your data 100% sovereign and secure.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detailed List */}
      <section className="py-16">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] overflow-hidden hover:shadow-card transition-all duration-200"
              >
                <div className="p-8 sm:p-10 border-b border-slate-100 bg-gradient-to-r from-white via-slate-50/50 to-white">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0">
                        {iconMap[service.icon] || <Cpu className="w-7 h-7 text-signal" />}
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-signal-dark uppercase tracking-wider mb-1">
                          Capability Pillar 0{index + 1}
                        </div>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                          {service.title}
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                          {service.fullDescription}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                      <Button
                        variant="signal"
                        size="md"
                        href="/contact"
                        className="group font-bold"
                        rightIcon={<ArrowRight className="w-4 h-4 btn-hover-arrow" />}
                      >
                        Discuss This Project
                      </Button>
                      <div className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-signal" />
                        <span>Typical Scope: {service.typicalTimeline}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: What's Included */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5">
                        What&apos;s Included in the Engagement
                      </h3>
                      <div className="space-y-3">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-precision shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Architecture Concept */}
                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Sample Architecture Pipeline
                      </h4>
                      <div className="p-4 bg-slate-900 text-amber-300 font-mono text-xs rounded-xl overflow-x-auto shadow-inner">
                        {service.sampleArchitecture}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Specs */}
                  <div className="lg:col-span-5 bg-slate-50/80 p-6 rounded-2xl border border-slate-200/80 space-y-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                        Typical Client Deliverables
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0 mt-1.5" />
                            <span className="font-semibold text-slate-800">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-200">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Target Stakeholders
                        </span>
                        <span className="text-xs text-slate-700 font-medium">{service.targetAudience}</span>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Engagement Model
                        </span>
                        <span className="text-xs text-slate-700 font-medium">
                          {service.startingPrice || "Milestone-based or dedicated squad retainer"}
                        </span>
                      </div>

                      {/* Verified Metrics */}
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        {service.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="bg-white p-3 rounded-xl border border-slate-200 shadow-subtle">
                            <div className="text-base font-extrabold text-slate-900">{m.value}</div>
                            <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="mt-12">
        <Container>
          <div className="bg-gradient-to-b from-white to-[#F8FAFC] border border-slate-200/90 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-card">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block">
              Scale Your Capabilities
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Require a Dedicated Enterprise AI Squad?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We assemble cross-functional teams of senior AI researchers, MLOps architects, and compliance auditors for long-term production initiatives.
            </p>
            <div className="pt-2">
              <Button variant="signal" size="lg" href="/contact" className="group font-bold">
                <span>Schedule an Engineering Briefing</span>
                <ArrowRight className="w-4 h-4 btn-hover-arrow" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
