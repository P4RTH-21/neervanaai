import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { StatsTicker } from "@/components/sections/StatsTicker";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AIReadinessCalculator } from "@/components/sections/AIReadinessCalculator";
import { ArchitectureStack } from "@/components/sections/ArchitectureStack";
import { EnterpriseProcess } from "@/components/sections/EnterpriseProcess";
import { CaseStudyHighlight } from "@/components/sections/CaseStudyHighlight";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsTicker />
      <ServicesGrid />
      <AIReadinessCalculator />
      <ArchitectureStack />
      <EnterpriseProcess />
      <CaseStudyHighlight />
      <WhyChooseUs />
      <TeamPreview />
      <TestimonialsGrid />
      <FAQSection />
      <CTASection />
    </>
  );
}
