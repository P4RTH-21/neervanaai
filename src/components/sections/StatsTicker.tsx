"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { STATS } from "@/lib/constants";

export const StatsTicker: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] border-b border-[#E5E7EB] py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:border-amber-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-signal-dark transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-2">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
