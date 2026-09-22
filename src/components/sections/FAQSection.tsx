"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS } from "@/lib/data/faqs";

export const FAQSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Security & IP", "Engagement", "Technical", "Pricing"];

  const filteredFaqs =
    selectedCategory === "All"
      ? FAQS
      : FAQS.filter((f) => f.category === selectedCategory);

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <Container size="lg">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="brand" className="mb-3">
            Pre-Engagement Clarity
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Transparent answers regarding IP ownership, data privacy, compliance safeguards, and commercial arrangements.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={filteredFaqs} />
        </div>
      </Container>
    </section>
  );
};
