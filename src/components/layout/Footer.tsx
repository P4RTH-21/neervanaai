"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG, GLOBAL_OFFICES, CERTIFICATIONS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  Cpu,
  Mail,
  ShieldCheck,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setNewsletterEmail("");
    }, 600);
  };

  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-slate-800/80">
      {/* Upper Footer: Enterprise CTA & Newsletter */}
      <div className="border-b border-slate-800/80 py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-teal">
                Neervanaai Monthly AI Insights
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Practical AI Strategies for Business Leaders
              </h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Get practical guides on private AI, cost-cutting tips, and real-world case studies delivered to your inbox once a month.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterStatus === "success" ? (
                <div className="bg-brand-navy/80 border border-brand-teal/40 rounded-xl p-4 flex items-center gap-3 text-brand-teal">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-sm text-slate-200">
                    Subscribed successfully. You will receive our next executive briefing.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your corporate email..."
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-brand-slate border border-slate-700 text-white placeholder-slate-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    />
                    <Button
                      type="submit"
                      variant="secondary"
                      size="md"
                      isLoading={newsletterStatus === "loading"}
                      className="shrink-0"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Zero spam. Unsubscribe at any time. Enterprise privacy strictly protected.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-14 lg:py-16">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-4 space-y-4">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-signal">
                  <Cpu className="w-5 h-5 text-signal" />
                </div>
                <span className="text-xl font-extrabold text-white tracking-tight">
                  Neervana<span className="text-signal">ai</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                We build, launch, and manage secure AI solutions that help companies save time, cut costs, and protect confidential data.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-slate flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-slate flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-brand-slate flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              {/* Enterprise Guarantee */}
              <div className="pt-2 flex items-center gap-2 text-xs text-brand-teal">
                <ShieldCheck className="w-4 h-4" />
                <span>{SITE_CONFIG.guaranteeSLA}</span>
              </div>
            </div>

            {/* Services Links */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                Enterprise Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/services#ai-strategy" className="hover:text-white transition-colors">
                    AI Strategy & Roadmapping
                  </Link>
                </li>
                <li>
                  <Link href="/services#generative-ai-rag" className="hover:text-white transition-colors">
                    Private LLMs & Enterprise RAG
                  </Link>
                </li>
                <li>
                  <Link href="/services#custom-ml-dev" className="hover:text-white transition-colors">
                    Custom ML & Edge Computer Vision
                  </Link>
                </li>
                <li>
                  <Link href="/services#governance-compliance" className="hover:text-white transition-colors">
                    EU AI Act & Governance Audits
                  </Link>
                </li>
                <li>
                  <Link href="/services#managed-mlops" className="hover:text-white transition-colors">
                    Managed MLOps & GPU FinOps
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries Links */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                Industries
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/industries#fintech" className="hover:text-white transition-colors">
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link href="/industries#healthcare" className="hover:text-white transition-colors">
                    Healthcare & BioPharma
                  </Link>
                </li>
                <li>
                  <Link href="/industries#manufacturing" className="hover:text-white transition-colors">
                    Aerospace & Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/industries#logistics" className="hover:text-white transition-colors">
                    Logistics & Supply Chain
                  </Link>
                </li>
                <li>
                  <Link href="/industries#retail" className="hover:text-white transition-colors">
                    Retail & E-Commerce
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Resources */}
            <div className="col-span-2 md:col-span-4 lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                Organization & Legal
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Neervanaai & Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">
                    Enterprise Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="hover:text-white transition-colors">
                    AI Ethics & EU AI Act Guardrails
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers <span className="text-[10px] bg-brand-teal/20 text-brand-teal px-1.5 py-0.5 rounded ml-1 font-semibold">We&apos;re Hiring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy (GDPR & CCPA)
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Master Service Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Office Locations */}
          <div className="mt-12 pt-8 border-t border-slate-800/80">
            <h5 className="text-xs uppercase tracking-wider font-bold text-slate-300 mb-4">
              Global Offices & Innovation Hubs
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-400">
              {GLOBAL_OFFICES.map((office) => (
                <div key={office.city} className="bg-brand-slate/60 p-3.5 rounded-lg border border-slate-800">
                  <div className="flex items-center justify-between font-semibold text-slate-200 mb-1">
                    <span>{office.city} {office.isHQ && "(Global HQ)"}</span>
                    <MapPin className="w-3.5 h-3.5 text-brand-teal" />
                  </div>
                  <p>{office.address}</p>
                  <p className="text-slate-500">{office.region}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Bar */}
          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-3">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert.name}
                  className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700/80 text-[11px] text-slate-300"
                >
                  <strong className="text-white">{cert.name}</strong> • {cert.badge}
                </span>
              ))}
            </div>

            <div className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
