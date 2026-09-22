import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TEAM_MEMBERS } from "@/lib/data/team";
import { CERTIFICATIONS } from "@/lib/constants";
import {
  Target,
  Award,
  Linkedin,
  Github,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Engineering Leadership",
  description:
    "Learn about Neervanaai's mission, values, academic research pedigree, and the leadership team architecting enterprise artificial intelligence.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Engineering Quality & Reliability",
      description:
        "We treat AI as mission-critical software engineering. Every model is thoroughly tested, dependable, and built to run smoothly in daily business operations.",
    },
    {
      title: "Complete Data Privacy & Ownership",
      description:
        "Your data and AI models belong exclusively to your company. We build private systems where confidential information never leaves your secure perimeter.",
    },
    {
      title: "Measurable Business Results",
      description:
        "We measure our success in hours reclaimed, costs reduced, and clear financial ROI for your company—not flashy test demos that never ship.",
    },
    {
      title: "Safety, Ethics & Compliance",
      description:
        "We make sure your AI systems are fair, transparent, and fully compliant with global data privacy and safety regulations like the EU AI Act and GDPR.",
    },
  ];

  return (
    <div className="bg-[#FCFCFD] min-h-screen pb-24">
      {/* Hero Section */}
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
              About Neervanaai
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.15]">
              Turning AI Innovation Into Everyday Business Value
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We help companies build, launch, and manage private AI systems that integrate with existing software, protect confidential data, and deliver measurable ROI.
            </p>
          </div>
        </Container>
      </section>

      {/* Story & Mission */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-signal-dark">
                Our Story
              </span>
              <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                Built to Make AI Practical for Real Companies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                After years of building machine learning systems at companies like DeepMind, Uber, and McKinsey, our founding team saw a recurring issue: many enterprise AI projects stalled as fragile prototypes that never reached actual employees.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Companies were offered generic, public AI tools that risked leaking confidential files and delivered inaccurate answers.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Neervanaai was founded to provide a better path: private, tailored AI systems built inside your own cloud, connecting directly with your databases and workflows.
              </p>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-b from-white to-amber-50/30 p-8 rounded-2xl border border-amber-200/80 space-y-5 shadow-card">
              <div className="flex items-center gap-3 border-b border-amber-200/60 pb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-signal">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Our Core Mission</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                &ldquo;To help businesses deploy secure, private artificial intelligence that saves time, cuts costs, and protects company data.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-subtle">
                  <div className="text-2xl font-extrabold text-slate-900">250+</div>
                  <div className="text-xs text-slate-500 font-medium">Models in Production</div>
                </div>
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-subtle">
                  <div className="text-2xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Client Data Privacy</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Principles & Values */}
      <section className="py-16 sm:py-20 border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-3">
              Guiding Engineering Principles
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              The Neervanaai Standard
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              The fundamental tenets governing our technical decisions and client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card transition-all duration-200"
              >
                <div className="text-xs font-mono font-bold text-signal-dark mb-2">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full Team Roster */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <Container>
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-3">
              Leadership & Practice Directors
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Meet Our Senior Partners
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Hands-on practitioners who actively lead client engineering squads from initial scoping through production go-live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <Card
                key={idx}
                className="flex flex-col justify-between p-6 bg-white border border-slate-200/90 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-card transition-all duration-200"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg mb-4 shadow-subtle">
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-signal-dark mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {member.credentials.map((cred, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-semibold bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-md text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications & Strategic Alliances */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-dark bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60 inline-block mb-3">
              Independent Accreditation
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
              Certifications & Cloud Competencies
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Audited by international standards bodies and recognized by primary hardware and cloud providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 flex items-center gap-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 text-signal flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{cert.name}</h4>
                  <p className="text-xs text-signal-dark font-semibold">{cert.badge}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Issuer: {cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Button
              variant="signal"
              size="lg"
              href="/contact"
              className="group font-bold"
              rightIcon={<ArrowRight className="w-4 h-4 btn-hover-arrow" />}
            >
              Initiate Collaboration With Our Practice
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
