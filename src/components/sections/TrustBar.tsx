"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { CLIENT_LOGOS } from "@/lib/constants";

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200/80 py-7">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0">
            Trusted by teams in fintech, healthcare & manufacturing
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center flex-1">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="py-2.5 px-3 bg-slate-50/70 border border-slate-200/60 rounded-lg flex flex-col items-center justify-center text-center hover:border-slate-300 transition-colors"
              >
                <span className="text-xs font-semibold text-slate-800 tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  {client.highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
