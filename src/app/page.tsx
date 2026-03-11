import { HeroSection } from '@/components/landing/hero-section';

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-secondary/50 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-primary">Why Aidoe?</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Aidoe is not just about providing another digital tool for hospitals — it is about solving real problems that patients and healthcare systems face every day. Instead of simply offering a service, Aidoe aims to remove the barriers that exist between patients and healthcare systems, making hospitals more accessible, organized, and patient-friendly through smart AI-driven solutions.
          </p>
        </div>
      </section>
    </>
  );
}
