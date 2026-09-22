"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { BookCallModal } from "@/components/forms/BookCallModal";
import { ArrowRight, ShieldCheck, Lock } from "lucide-react";

export const CTASection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-20 lg:py-28 border-b border-slate-200 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-amber-100/50 blur-3xl opacity-70"
        />

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-slate-900 leading-tight">
              Ready to explore what AI can do for your operations?
            </h2>
            <p className="text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
              Schedule a short 20-minute conversation. No high-pressure sales pitch—just practical advice on technical feasibility, costs, and timeline.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Button
                variant="signal"
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto group"
                rightIcon={<ArrowRight className="w-4 h-4 btn-hover-arrow" />}
              >
                Schedule an intro call
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="w-full sm:w-auto"
              >
                Send an email inquiry
              </Button>
            </div>

            <div className="pt-6 flex items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-200/80 max-w-sm mx-auto">
              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <ShieldCheck className="w-4 h-4 text-precision" />
                <span>Zero obligation</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 font-medium text-slate-600">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Strict Mutual NDA</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
