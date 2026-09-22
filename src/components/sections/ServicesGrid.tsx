"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { SERVICES } from "@/lib/data/services";
import {
  Compass,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-signal" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-signal" />,
  Cpu: <Cpu className="w-6 h-6 text-signal" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-signal" />,
  Activity: <Activity className="w-6 h-6 text-signal" />,
};

export const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle light blueprint background */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark mb-2">
            What We Build
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
            Our Core AI Services & Capabilities
          </h2>
          <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
            From strategic roadmaps to private search tools and round-the-clock support, we deliver complete, production-ready AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => (
            <Card
              key={service.id}
              className={`flex flex-col justify-between hover-glow transition-all duration-300 border-slate-200/90 bg-white ${
                index === 1 ? "border-amber-300 shadow-card relative" : "shadow-subtle"
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-3 right-6 bg-slate-900 text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-700">
                  Most Popular
                </div>
              )}

              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center mb-5">
                  {iconMap[service.icon] || <Cpu className="w-6 h-6 text-signal" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDescription}
                </p>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Features preview */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    What&apos;s Included:
                  </span>
                  {service.features.slice(0, 3).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-precision shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  {service.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-sm sm:text-base font-extrabold text-slate-900">{m.value}</div>
                      <div className="text-[10px] text-slate-500 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-900 hover:text-signal-dark transition-colors group pt-1"
                >
                  <span>View full service details</span>
                  <ArrowRight className="w-3.5 h-3.5 btn-hover-arrow text-signal" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
