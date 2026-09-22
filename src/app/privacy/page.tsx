import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy (GDPR & CCPA Compliant)",
  description: "Enterprise privacy policy and data governance practices of Neervanaai Technologies Inc.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24">
      <Container size="md">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">
          Enterprise Privacy Policy
        </h1>
        <p className="text-xs font-semibold text-slate-400 mb-8 pb-4 border-b border-slate-200">
          Last Updated: January 1, 2025 | Governed by GDPR, CCPA, and Global Data Protection Standards
        </p>

        <div className="prose prose-slate text-sm leading-relaxed space-y-6 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">1. Scope and Commitment to Enterprise Data Sovereignty</h2>
            <p>
              {SITE_CONFIG.legalName} (&quot;Neervanaai&quot;, &quot;we&quot;, &quot;us&quot;) takes data privacy and enterprise confidentiality with the utmost seriousness. Unlike consumer AI tools, our business model relies strictly on paid enterprise engineering services and strategic consulting—never on the monetization, pooling, or third-party training of client data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">2. Information We Collect</h2>
            <p>
              When interacting with our website or submitting project inquiries, we collect information you voluntarily provide, such as your full name, corporate email address, employer organization, job title, and project requirements.
            </p>
            <p>
              We do not collect sensitive personal data through this website. Any proprietary datasets, model weights, or system telemetry shared during an active client engagement are governed strictly by our bilateral Non-Disclosure Agreement (NDA) and Master Services Agreement (MSA).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">3. Zero Model Training on Client Data</h2>
            <p>
              We enforce an uncompromising rule across all client engagements: <strong>We never use client proprietary code, documentation, telemetry, or personal data to train external, shared, or public foundation models</strong>. In all generative and machine learning deployments, model weights and vector embeddings remain 100% sovereign within the client&apos;s designated cloud or on-premise perimeter.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">4. Data Subject Rights (GDPR & CCPA)</h2>
            <p>
              Under the European General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you retain the right to request access to, rectification of, or permanent erasure of any personal contact information we maintain about you. Inquiries can be submitted directly to <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-teal font-semibold">{SITE_CONFIG.contactEmail}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-brand-navy mb-2">5. Security Measures</h2>
            <p>
              Our infrastructure maintains ISO/IEC 27001:2022 certified Information Security Management Systems and SOC 2 Type II controls. Data in transit is secured using TLS 1.3 encryption, and data at rest is protected with AES-256 standards.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
