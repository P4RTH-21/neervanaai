"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Calendar, ShieldCheck, Clock } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    topic: "Enterprise AI Architecture & Strategy",
    preferredTime: "Next Available Slot (Within 24h)",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !formData.company) {
      setError("Please complete all required fields.");
      return;
    }
    if (!formData.workEmail.includes("@")) {
      setError("Please provide a valid business email address.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          serviceInterest: formData.topic,
          budgetRange: "Enterprise Scoping ($50k+)",
          timeline: "Immediate / Within 30 days",
          message: `Consultation Call Request: ${formData.preferredTime}. Notes: ${formData.notes || "None provided"}`,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setError("Failed to schedule call. Please try again or email partners@neervanaai.com.");
      }
    } catch {
      setError("An unexpected network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setError("");
    setFormData({
      fullName: "",
      workEmail: "",
      company: "",
      topic: "Enterprise AI Architecture & Strategy",
      preferredTime: "Next Available Slot (Within 24h)",
      notes: "",
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title="Book a Free 30-Minute AI Strategy Call"
      description="Talk directly with our senior technology partners about your goals, data, and timeline."
      maxWidth="lg"
    >
      {isSuccess ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-brand-navy">Call Request Received</h4>
          <p className="text-sm text-slate-600 max-w-sm mx-auto">
            Thank you, <span className="font-semibold">{formData.fullName}</span>. A calendar invitation and confirmation have been sent to <span className="font-semibold text-brand-navy">{formData.workEmail}</span>.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-teal" />
              <span>Response time: We reply within 4 business hours</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              <span>Protected by our mutual enterprise non-disclosure agreement (NDA)</span>
            </div>
          </div>
          <Button variant="primary" className="w-full mt-4" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Eleanor Vance"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. eleanor@company.com"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
              />
            </div>
          </div>

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
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              What Are You Looking to Build?
            </label>
            <select
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none bg-white"
            >
              <option value="AI Strategy & Roadmap">AI Strategy & Implementation Roadmap</option>
              <option value="Private AI Search & Document Assistant">Private AI Search & Document Assistant</option>
              <option value="Custom Machine Learning & Computer Vision">Custom Machine Learning & Computer Vision</option>
              <option value="AI Safety, Ethics & Compliance">AI Safety, Ethics & Compliance</option>
              <option value="Cloud Cost Cuts & 24/7 Monitoring">Cloud Cost Cuts & 24/7 Monitoring</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Preferred Timing
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none bg-white"
            >
              <option value="Next Available Slot (Within 24h)">Next Available Slot (Within 24h)</option>
              <option value="This Week (Morning EST / GMT)">This Week (Morning EST / GMT)</option>
              <option value="This Week (Afternoon PST)">This Week (Afternoon PST)</option>
              <option value="Next Week">Next Week</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Brief Context / Technical Objectives (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Inquiring about deploying an internal air-gapped RAG system over our compliance archives..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Strict enterprise NDA guaranteed</span>
            </div>
            <Button
              type="submit"
              variant="signal"
              isLoading={isSubmitting}
              leftIcon={<Calendar className="w-4 h-4" />}
              className="font-bold shadow-signal"
            >
              Confirm Booking
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
