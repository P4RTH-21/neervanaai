"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BookCallModal } from "@/components/forms/BookCallModal";
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Zap,
  CheckCircle2,
  Coins,
  Star,
  Layers,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] border-b border-[#E5E7EB] pt-14 pb-20 lg:pt-20 lg:pb-28">
        {/* Top Signal Accent Line */}
        <div aria-hidden="true" className="hero-ribbon" />

        {/* Blueprint Grid Pattern */}
        <div aria-hidden="true" className="hero-blueprint pointer-events-none absolute inset-0" />

        {/* Ambient Warm Amber & Sky Radial Lighting Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#FEF3C7] to-transparent blur-3xl opacity-80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Clear Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Live status badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-medium text-slate-700 shadow-subtle">
                <span className="flex h-2 w-2 relative">
                  <span className="hero-live-ping absolute inline-flex h-full w-full rounded-full bg-precision" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-precision" />
                </span>
                <span className="font-semibold text-slate-900">Custom Enterprise AI Solutions</span>
                <span className="text-slate-300">|</span>
                <span className="text-signal-dark font-medium">100% Private Cloud</span>
              </div>

              {/* High-impact headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.12]">
                Custom AI Built for Your Business.{" "}
                <span className="text-signal">Deployed in Weeks.</span>
              </h1>

              {/* Clear subheadline */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                We build private AI search assistants, automate repetitive document paperwork, and deploy fast vision models that run securely inside your company—with zero data leaks.
              </p>

              {/* Quick 3 Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-700">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-subtle">
                  <Lock className="w-4 h-4 text-signal shrink-0" />
                  <span className="font-semibold">100% Data Privacy</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-subtle">
                  <Zap className="w-4 h-4 text-signal shrink-0" />
                  <span className="font-semibold">Sub-45ms Speed</span>
                </div>
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200 shadow-subtle">
                  <Coins className="w-4 h-4 text-signal shrink-0" />
                  <span className="font-semibold">Up to 40% Cost Cut</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  variant="signal"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="group font-bold justify-center"
                  rightIcon={<ArrowRight className="w-5 h-5 btn-hover-arrow" />}
                >
                  Book a Free 30-Min Strategy Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/case-studies"
                  className="text-slate-700 border-[#CBD5E1] hover:bg-slate-50 justify-center font-semibold"
                >
                  See Client Case Studies
                </Button>
              </div>

              {/* Trust bar & Social Proof */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-slate-500 border-t border-[#EEF1F5]">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-precision" />
                  <span>ISO 27001 & SOC-2 Audited</span>
                </div>
                <span>•</span>
                <div>Strict Mutual NDA Signed First</div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  </div>
                  <span className="font-semibold text-slate-800">5.0</span>
                  <span>rating</span>
                </div>
              </div>

            </div>

            {/* Right Column: Company Motive, Aim & What We Deliver to Clients (No Photos) */}
            <div className="lg:col-span-5 relative">
              
              {/* Outer soft ambient backlight */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-white/80 via-transparent to-[#FEF3C7]/40 pointer-events-none"
              />

              {/* Main Executive Commitment Card */}
              <div className="relative rounded-[22px] border border-[#E5E7EB] bg-white p-6 sm:p-7 shadow-card space-y-5">
                
                {/* Header */}
                <div className="border-b border-[#EEF1F5] pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                      Our Core Purpose & Aim
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                      <span className="h-2 w-2 rounded-full bg-precision" />
                      Client-First Delivery
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    What We Give To Your Business
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
                    We bridge the gap between academic AI and everyday business execution. Here is our direct commitment to every enterprise partner:
                  </p>
                </div>

                {/* 4 Pillars of Value Delivery */}
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 mt-0.5 text-signal">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        100% Private Cloud & Data Sovereignty
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Your files, customer records, and internal queries never leave your private perimeter. Zero public model training, zero data leaks.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 mt-0.5 text-signal">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Measurable Business ROI in Weeks
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        We build in 2-week sprints so you test living software connected to your staging data. You see real time and cost savings without endless consulting delays.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 mt-0.5 text-signal">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Complete Intellectual Property (IP) Ownership
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        You own 100% of the custom algorithms, code, models, and runbooks we build. No hidden recurring licensing fees or vendor lock-in.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/70 flex items-center justify-center shrink-0 mt-0.5 text-signal">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Production Reliability & 99.9% Uptime SLA
                      </h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                        Engineered with sub-45ms response benchmarks, continuous GPU telemetry, and 24/7 automated monitoring for rock-solid reliability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Trust Guarantees */}
                <div className="pt-3 border-t border-[#EEF1F5] flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-precision" />
                    <span>Strict Mutual NDA First</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-precision" />
                    <span>Full Source Handover</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* Booking Modal */}
      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
