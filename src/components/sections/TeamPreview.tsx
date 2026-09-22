"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { TEAM_MEMBERS } from "@/lib/data/team";
import { Linkedin, Github, ArrowRight } from "lucide-react";

export const TeamPreview: React.FC = () => {
  const featuredTeam = TEAM_MEMBERS.filter((m) => m.featured);

  return (
    <section className="bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] py-20 lg:py-28 border-b border-[#E5E7EB] relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark mb-2">
              Leadership & Senior Fellows
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
              Elite Technical Pedigree & Proven Execution
            </h2>
            <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
              Our partners bring deep academic and industry credentials from MIT, DeepMind, Uber, and McKinsey, pairing mathematical precision with executive boardroom acumen.
            </p>
          </div>
          <Button
            variant="outline"
            href="/about"
            className="group"
            rightIcon={<ArrowRight className="w-4 h-4 btn-hover-arrow" />}
          >
            Meet the Entire Team
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredTeam.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all duration-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              <div>
                {/* Monogram avatar */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg mb-4 shadow-subtle">
                  {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-signal-dark mt-0.5">
                  {member.role}
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1 mb-3">
                  {member.credentials.slice(0, 2).map((cred, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-semibold bg-slate-50 border border-slate-200 px-2 py-0.5 rounded text-slate-700"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {member.linkedIn && (
                    <a
                      href={member.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
