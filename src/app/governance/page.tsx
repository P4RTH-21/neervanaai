import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  FileCheck,
  Scale,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Governance, Ethics & Regulatory Safety",
  description:
    "How Neervanaai engineers algorithmic fairness, bias mitigation, EU AI Act conformity, and zero-leakage enterprise AI systems.",
};

export default function GovernancePage() {
  const pillars = [
    {
      icon: <Scale className="w-6 h-6 text-signal" />,
      title: "EU AI Act & Global Regulatory Conformance",
      description:
        "Comprehensive classification and audit workflows for High-Risk AI systems under the EU AI Act, NIST AI Risk Management Framework, and emerging SEC guidelines.",
      features: [
        "Conformity assessments and technical documentation dossiers",
        "Automated model cards with training lineage and demographic audits",
        "Continuous regulatory drift monitoring and legal compliance reporting",
      ],
    },
    {
      icon: <FileCheck className="w-6 h-6 text-signal" />,
      title: "Algorithmic Fairness & Bias Mitigation",
      description:
        "Mathematical auditing of predictive and generative systems to eliminate protected demographic disparities in credit underwriting, healthcare, and hiring.",
      features: [
        "Disparate impact analysis and demographic parity scoring",
        "Counterfactual fairness testing on edge-case cohorts",
        "Automated feature attribution explainability reports",
      ],
    },
    {
      icon: <Lock className="w-6 h-6 text-signal" />,
      title: "Data Sovereignty & Zero Training Leakage",
      description:
        "Architectural guarantees ensuring proprietary enterprise IP and customer PII are never utilized to train commercial models or retained by third parties.",
      features: [
        "100% private VPC and air-gapped GovCloud deployments",
        "Streaming real-time PII anonymization and synthetic masking",
        "Cryptographic proof of zero-data-retention at inference endpoints",
      ],
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-signal" />,
      title: "Adversarial Robustness & Jailbreak Defense",
      description:
        "Continuous automated penetration testing to protect LLMs and agent swarms against prompt injection, data extraction, and model inversion attacks.",
      features: [
        "Deterministic real-time guardrails intercepting adversarial tokens",
        "Automated synthetic red-teaming across thousands of threat vectors",
        "Immutable tamper-proof audit trails for forensic accountability",
      ],
    },
  ];

  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Hero */}
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
              Ethical AI & Compliance Framework
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Responsible AI Engineering by Design
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              As artificial intelligence transitions from experimental tools to core company infrastructure, enterprise trust hinges on safety, auditability, and full regulatory compliance.
            </p>
          </div>
        </Container>
      </section>

      {/* Governance Pillars */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h2 className="font-display text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-precision shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Audit CTA */}
          <div className="mt-16 bg-gradient-to-b from-white to-[#F8FAFC] border border-slate-200/90 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-card">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block">
              Safety Verification
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Need an AI Compliance & Safety Audit?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              We conduct comprehensive algorithmic risk assessments and safety reviews for enterprise AI pipelines before production deployment.
            </p>
            <div className="pt-2">
              <Button variant="signal" size="lg" href="/contact" className="group font-bold">
                <span>Request a Compliance Audit</span>
                <ArrowRight className="w-4 h-4 btn-hover-arrow" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
