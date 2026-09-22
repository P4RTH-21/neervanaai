import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { GLOBAL_OFFICES } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Enterprise Practice & Book Consultation",
  description:
    "Schedule a confidential enterprise AI architecture briefing or submit an RFP. Guaranteed response within 12 business hours under bilateral NDA.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Page Header */}
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
              Direct Practice Intake
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Enterprise Consultation & RFP Submission
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Connect directly with our senior technology partners. Every discussion is treated with strict enterprise confidentiality and backed by our standard bilateral NDA.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Intake Form Section */}
      <section className="py-16 bg-[#FCFCFD] border-b border-slate-200/80">
        <Container>
          <ContactForm />
        </Container>
      </section>

      {/* Global Offices Matrix */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-2">
              Global Presence
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Worldwide Innovation Hubs & Engineering Centers
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our engineering squads and practice leads are based across four global financial and technology centers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GLOBAL_OFFICES.map((office) => (
              <div
                key={office.city}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:shadow-card transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-base font-bold text-slate-900">
                      {office.city}
                    </span>
                    {office.isHQ && (
                      <span className="text-[10px] uppercase font-bold bg-amber-50 text-signal-dark border border-amber-200/60 px-2 py-0.5 rounded">
                        HQ
                      </span>
                    )}
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600 mb-2">
                    <MapPin className="w-4 h-4 text-signal shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-800">{office.address}</p>
                      <p className="text-slate-500">{office.region}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-signal" />
                  <a href={`tel:${office.phone}`} className="hover:text-slate-900">
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
