"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Send,
  CheckCircle,
  ShieldCheck,
  Clock,
  Building2,
  Mail,
  Phone,
  Lock,
} from "lucide-react";
import { SITE_CONFIG, GLOBAL_OFFICES } from "@/lib/constants";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    jobTitle: "",
    phone: "",
    serviceInterest: "Private Generative AI & Enterprise RAG",
    budgetRange: "$50,000 – $150,000",
    timeline: "1 – 3 Months",
    message: "",
    honeypot: "", // Bot prevention
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      setIsSuccess(true);
      return;
    }

    if (!formData.fullName || !formData.workEmail || !formData.company || !formData.message) {
      setErrorMessage("Please complete all required fields marked with an asterisk (*).");
      return;
    }

    if (!formData.workEmail.includes("@") || !formData.workEmail.includes(".")) {
      setErrorMessage("Please enter a valid enterprise email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        const errorData = await res.json().catch(() => ({}));
        setErrorMessage(errorData.error || "Submission failed. Please try again or reach us directly.");
      }
    } catch {
      setErrorMessage("Network error connecting to the intake server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      workEmail: "",
      company: "",
      jobTitle: "",
      phone: "",
      serviceInterest: "Private Generative AI & Enterprise RAG",
      budgetRange: "$50,000 – $150,000",
      timeline: "1 – 3 Months",
      message: "",
      honeypot: "",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Direct Info & Trust */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-brand-teal block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Let&apos;s Discuss Your AI Project
          </h2>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
            Whether you want to build a private AI search assistant, automate manual paperwork, or reduce cloud bills, our senior partners are ready to help. Every conversation is protected by our mutual enterprise NDA.
          </p>
        </div>

        {/* SLA & Guarantee Cards */}
        <div className="space-y-3">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
            <Clock className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                Fast Response Guarantee
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                We review all inquiries and reply within 12 business hours.
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
            <Lock className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                Strict Confidentiality & NDA
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                We sign a standard mutual non-disclosure agreement before reviewing your data or architecture.
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contacts */}
        <div className="border-t border-slate-200 pt-6 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Direct Executive Channels
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Mail className="w-4 h-4 text-brand-teal shrink-0" />
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-brand-navy font-semibold">
              {SITE_CONFIG.contactEmail}
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <Phone className="w-4 h-4 text-brand-teal shrink-0" />
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-brand-navy font-semibold">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        {/* Global HQ Info */}
        <div className="border-t border-slate-200 pt-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Global Headquarters
          </div>
          <p className="text-sm font-semibold text-brand-navy">
            {GLOBAL_OFFICES[0].city} (HQ)
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            {GLOBAL_OFFICES[0].address}, {GLOBAL_OFFICES[0].region}
          </p>
        </div>
      </div>

      {/* Right Column: Intake Form */}
      <div className="lg:col-span-7">
        <Card className="p-8 sm:p-10 shadow-lg border-slate-200">
          {isSuccess ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">
                Inquiry Received Successfully
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-brand-navy">{formData.fullName}</span>. Your technical inquiry for <span className="font-bold text-brand-navy">{formData.company}</span> has been dispatched to our Senior AI Practice Lead.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 max-w-sm mx-auto space-y-1">
                <p>✓ Confirmation email sent to <strong>{formData.workEmail}</strong></p>
                <p>✓ SLA Target: Response within 12 business hours</p>
              </div>
              <div className="pt-4">
                <Button variant="outline" onClick={handleReset}>
                  Submit Another Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-brand-navy">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us a bit about your goals and our senior team will reply within 12 hours.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Honeypot field (hidden from users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Catherine Price"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. catherine@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Company & Job Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Job Title / Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Engineering Lead / Director"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Service Interest & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Service Needed
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none bg-white transition-all"
                  >
                    <option value="Private Generative AI & Smart Search">Private Generative AI & Smart Search</option>
                    <option value="AI Strategy & Implementation Roadmap">AI Strategy & Implementation Roadmap</option>
                    <option value="Custom Machine Learning & Vision">Custom Machine Learning & Vision</option>
                    <option value="AI Safety, Ethics & Compliance">AI Safety, Ethics & Compliance</option>
                    <option value="24/7 Managed AI & Cloud Cost Cuts">24/7 Managed AI & Cloud Cost Cuts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none bg-white transition-all"
                  >
                    <option value="$25,000 – $50,000 (Initial Assessment / Pilot)">$25,000 – $50,000 (Initial Assessment / Pilot)</option>
                    <option value="$50,000 – $150,000 (Full Implementation)">$50,000 – $150,000 (Full Implementation)</option>
                    <option value="$150,000+ (Multi-Department Program)">$150,000+ (Multi-Department Program)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Timeline */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Expected Timeline
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Within 30 Days", "1 – 3 Months", "Future Planning"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeline: t })}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all ${
                        formData.timeline === t
                          ? "bg-brand-navy text-white border-brand-navy"
                          : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  How Can We Help? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project, goals, or any specific questions you have..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none resize-none transition-all"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your information is protected by our mutual enterprise NDA.</span>
                </div>
                <Button
                  type="submit"
                  variant="signal"
                  size="lg"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                  className="w-full sm:w-auto font-bold shadow-signal"
                >
                  Send Inquiry
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};
