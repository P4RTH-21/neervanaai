"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import {
  ShieldCheck,
  Lock,
  Cpu,
  Layers,
  Award,
  Zap,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const differentiators = [
    {
      icon: <Lock className="w-5 h-5 text-signal" />,
      title: "100% Client Data Ownership",
      description:
        "Your data and AI models belong entirely to you. We never train public models on your proprietary information or share it with third parties.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-signal" />,
      title: "Production-Ready Engineering",
      description:
        "We build complete, reliable systems that your employees can use daily—fully integrated with your existing databases and security setup.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-signal" />,
      title: "Strict Safety & Compliance",
      description:
        "We audit all models for fairness, safety, and regulatory compliance (EU AI Act, HIPAA, GDPR), protecting your business from legal risks.",
    },
    {
      icon: <Zap className="w-5 h-5 text-signal" />,
      title: "Lower Cloud Computing Bills",
      description:
        "We optimize your systems so your models run faster on smaller servers, cutting monthly cloud bills by up to 45%.",
    },
    {
      icon: <Layers className="w-5 h-5 text-signal" />,
      title: "No Vendor Lock-In",
      description:
        "We build on open industry standards. You can run your models on AWS, Azure, Google Cloud, or your own office servers at any time.",
    },
    {
      icon: <Award className="w-5 h-5 text-signal" />,
      title: "Senior Hands-On Experts",
      description:
        "Your project is led directly by senior engineers and strategists from MIT, DeepMind, Uber, and McKinsey with dozens of successful launches.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] py-20 lg:py-28 border-b border-[#E5E7EB] relative">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark mb-2">
            Why Work With Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
            How We Are Different
          </h2>
          <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
            Clear commitments and practical engineering that protect your data and maximize your return on investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center mb-4">
                {diff.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                {diff.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
