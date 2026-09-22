import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Master Terms of Service",
  description: "Terms of service and legal agreement for Neervanaai Technologies Inc.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
          Terms of Service
        </h1>
        <p className="text-xs font-semibold text-slate-400 mb-8 pb-4 border-b border-slate-200">
          Last Updated: January 1, 2025 | Neervanaai Technologies Inc.
        </p>

        <div className="prose prose-slate text-sm leading-relaxed space-y-6 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing the website and informational materials provided by {SITE_CONFIG.legalName} (&quot;Neervanaai&quot;), you agree to be bound by these Terms of Service. If you are accessing this site on behalf of an enterprise or entity, you represent that you possess the authority to bind such entity.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">2. Consulting Engagements & Master Services Agreements</h2>
            <p>
              Informational content on this site does not constitute a formal contractual commitment or warranty of specific algorithmic yields. All professional consulting, system engineering, and MLOps retainers are executed via custom, bilateral Master Services Agreements (MSAs) and Statements of Work (SOWs).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">3. Intellectual Property Rights</h2>
            <p>
              All website content, logos, proprietary frameworks, and architectural whitepapers published on this site are the exclusive intellectual property of Neervanaai. Custom software, models, and fine-tuned checkpoints developed under paid client engagements belong entirely to the respective client as delineated in individual MSAs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">4. Limitation of Liability</h2>
            <p>
              To the fullest extent permissible by applicable law, Neervanaai shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this informational website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">5. Governing Law</h2>
            <p>
              These terms are governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law principles.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
