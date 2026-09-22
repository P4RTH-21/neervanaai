"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Database, BrainCircuit, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";

export const ArchitectureStack: React.FC = () => {
  const layers = [
    {
      number: "04",
      name: "Step 4: 24/7 System Monitoring & Cloud Cost Control",
      subtitle: "Keeping your systems fast, reliable, and affordable",
      icon: <Activity className="w-5 h-5 text-signal" />,
      items: [
        "24/7 uptime monitoring with fast incident resolution",
        "Cloud cost controls to keep monthly bills low",
        "Automatic system updates when your business data changes",
        "Clear monthly performance and savings reports",
      ],
      tech: "Secure Cloud • Automated Monitoring • Disaster Recovery",
    },
    {
      number: "03",
      name: "Step 3: Verified Fact-Checking & Smart Search",
      subtitle: "Accurate answers with exact document citations",
      icon: <BrainCircuit className="w-5 h-5 text-signal" />,
      items: [
        "Smart search that understands human questions and context",
        "Automatic fact-checking to prevent false answers",
        "Exact document and page citations for every response",
        "Permission checks so employees only access approved files",
      ],
      tech: "Private Search • Fact Verifier • Role-Based Access",
    },
    {
      number: "02",
      name: "Step 2: Private Custom AI Models",
      subtitle: "Tailored to your industry terminology and workflow",
      icon: <ShieldCheck className="w-5 h-5 text-signal" />,
      items: [
        "Models fine-tuned on your company's unique domain language",
        "Runs 100% inside your own private cloud or local servers",
        "Zero data shared with public tools like ChatGPT",
        "Speed optimization for instant responses",
      ],
      tech: "Private Open Models • Fast Inference • Air-Gapped Security",
    },
    {
      number: "01",
      name: "Step 1: Secure Data Cleaning & Organization",
      subtitle: "Connecting your existing business documents safely",
      icon: <Database className="w-5 h-5 text-signal" />,
      items: [
        "Automatic removal of confidential and personal information (PII)",
        "Reads PDFs, scanned documents, tables, and databases",
        "Connects to Google Drive, SharePoint, and company databases",
        "Full audit trail for compliance and security checks",
      ],
      tech: "Secure Connectors • Document Parsing • Data Privacy Filters",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#FCFCFD] to-[#F8FAFC] py-20 lg:py-28 border-b border-[#E5E7EB] relative">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark mb-2">
            System Architecture
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 tracking-[-0.02em]">
            Our 4-Step Technical Architecture
          </h2>
          <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
            A clear, secure foundation engineered to deliver accurate answers while keeping your data 100% private.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {layers.map((layer) => (
            <div
              key={layer.number}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3.5 mb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center">
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {layer.name}
                    </h3>
                    <p className="text-xs text-slate-500">{layer.subtitle}</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-slate-700 px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200 self-start sm:self-auto">
                  {layer.number}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3.5">
                {layer.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-precision shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                <span className="text-slate-800 font-semibold">Core Components:</span> {layer.tech}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
