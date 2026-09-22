import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Code,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Open Engineering Positions",
  description:
    "Join Neervanaai to build sovereign, production-grade artificial intelligence systems for the world's most critical enterprises.",
};

export default function CareersPage() {
  const roles = [
    {
      title: "Principal Enterprise AI Architect",
      department: "Enterprise Solutions",
      locations: "San Francisco, CA / Hybrid",
      type: "Full-Time",
      description:
        "Lead technical pre-scoping and system architecture design for Fortune 500 clients. Deep mastery of hybrid RAG, multi-agent state machines, and private VPC deployment required.",
    },
    {
      title: "Staff MLOps & Distributed Systems Engineer",
      department: "Infrastructure & FinOps",
      locations: "New York / London / Remote",
      type: "Full-Time",
      description:
        "Design ultra-low-latency GPU serving clusters with Kubernetes, Ray, and vLLM. Optimize speculative decoding, continuous batching, and distributed cache layers.",
    },
    {
      title: "Senior Computer Vision Scientist",
      department: "Applied Research",
      locations: "San Francisco / Bengaluru",
      type: "Full-Time",
      description:
        "Engineer real-time edge vision models (PyTorch, TensorRT) for industrial manufacturing QA, aerospace inspection, and autonomous robotics.",
    },
    {
      title: "AI Regulatory & Governance Specialist",
      department: "Legal & Ethics",
      locations: "London / New York / Remote",
      type: "Full-Time",
      description:
        "Conduct EU AI Act conformity assessments, SHAP explainability audits, and red-team penetration tests for high-risk algorithmic banking and health deployments.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 sm:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="subtleDark" className="mb-4">
              Join Our Engineering Squads
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build Mission-Critical AI That Actually Reaches Production
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We don&apos;t build disposable marketing toys. We build sovereign, high-throughput AI infrastructure that powers global banking, surgical medicine, aerospace quality, and international freight.
            </p>
          </div>
        </Container>
      </section>

      {/* Open Roles */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
              Open Positions
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Explore our current vacancies across systems engineering, applied research, and regulatory consulting.
            </p>
          </div>

          <div className="space-y-6">
            {roles.map((role, idx) => (
              <Card key={idx} className="p-6 sm:p-8 hover:border-slate-300 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-brand-teal uppercase tracking-wider">
                        {role.department}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500 font-medium">{role.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">
                      {role.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                      {role.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                      <span>{role.locations}</span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Button
                      variant="primary"
                      size="sm"
                      href="/contact"
                      rightIcon={<ArrowRight className="w-4 h-4 text-brand-teal" />}
                    >
                      Apply for Role
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
