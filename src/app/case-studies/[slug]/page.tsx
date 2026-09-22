import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { CASE_STUDIES } from "@/lib/data/caseStudies";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Clock,
  CheckCircle2,
  Quote,
  Layers,
  TrendingUp,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study`,
    description: study.summary,
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Top Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFCFD] via-[#FDFDFE] to-[#F8FAFC] border-b border-[#E5E7EB] pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div aria-hidden="true" className="hero-ribbon" />
        <div aria-hidden="true" className="hero-blueprint pointer-events-none absolute inset-0" />
        <Container className="relative z-10">
          <div className="mb-6">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all case studies</span>
            </Link>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block">
                {study.industry}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Engagement Duration: {study.duration}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {study.title}
            </h1>

            <p className="text-sm font-semibold text-slate-600">
              Enterprise Client: <span className="text-slate-900 font-bold">{study.client}</span> ({study.clientRole})
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-14">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Executive Summary */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-xs uppercase font-bold tracking-wider text-brand-teal mb-3">
                  Executive Summary
                </h2>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {study.summary}
                </p>
              </div>

              {/* The Challenge */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <span>The Enterprise Challenge</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy tracking-tight">
                  Operational Bottlenecks & Strategic Constraints
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-navy px-3 py-1 rounded-full">
                  <span>The Neervanaai Architecture</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy tracking-tight">
                  Technical Architecture & Deployment Strategy
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {study.solution}
                </p>

                {/* Architecture Bullets */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Technical Decisions
                  </h4>
                  {study.architectureDetails.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote if available */}
              {study.testimonial && (
                <div className="bg-gradient-to-r from-brand-navy to-brand-slate text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                  <Quote className="w-10 h-10 text-brand-teal/30 mb-3" />
                  <p className="text-base sm:text-lg italic leading-relaxed text-slate-200 mb-6">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="font-bold text-white text-sm">{study.testimonial.author}</div>
                    <div className="text-xs text-brand-teal font-medium">{study.testimonial.role}</div>
                    <div className="text-xs text-slate-400">{study.testimonial.company}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column: Metrics, Stack, CTA */}
            <div className="lg:col-span-4 space-y-6">
              {/* Quantified Metrics Card */}
              <div className="bg-brand-dark text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-md space-y-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-teal" />
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Verified Results
                  </h3>
                </div>

                <div className="space-y-5 divide-y divide-slate-800">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className={rIdx > 0 ? "pt-5" : ""}>
                      <div className="text-3xl sm:text-4xl font-extrabold text-brand-teal">
                        {res.metric}
                      </div>
                      <div className="text-xs font-bold text-white mt-1">
                        {res.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                        {res.context}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Cpu className="w-4 h-4 text-brand-teal" />
                  <span>Deployment Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conversion CTA Card */}
              <div className="bg-brand-teal/10 border border-brand-teal/30 p-6 rounded-2xl space-y-4 text-center">
                <h4 className="text-lg font-bold text-brand-navy">
                  Want Similar Production Outcomes?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discuss how Neervanaai can adapt this architecture to your organization&apos;s data constraints and infrastructure.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4 text-brand-teal" />}
                >
                  Schedule Technical Scoping
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
