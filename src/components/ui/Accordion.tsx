"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  dark?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  dark = false,
}) => {
  return (
    <div
      className={cn(
        "border-b transition-colors",
        dark ? "border-slate-800" : "border-slate-200"
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          "w-full py-5 px-1 flex items-center justify-between text-left font-semibold text-lg transition-colors focus:outline-none",
          dark
            ? "text-slate-100 hover:text-brand-teal"
            : "text-slate-900 hover:text-brand-navy"
        )}
        aria-expanded={isOpen}
      >
        <span className="pr-4 leading-snug">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180",
            dark ? "text-brand-teal" : "text-slate-400"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out overflow-hidden",
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p
            className={cn(
              "leading-relaxed text-base",
              dark ? "text-slate-300" : "text-slate-600"
            )}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  dark?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, dark = false, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y-0", className)}>
      {items.map((item, idx) => (
        <AccordionItem
          key={item.id || idx}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
          dark={dark}
        />
      ))}
    </div>
  );
};
