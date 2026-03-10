import { ContactForm } from '@/components/contact/contact-form';

export default function RequestDemoPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-24 fade-in">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-animate">
          Request a Demo
        </h1>
        <p className="mt-4 max-w-3xl text-center text-lg text-muted-foreground mx-auto text-animate text-animate-delay-1">
          Interested in bringing Aidoe to your hospital or clinic? Request a demo to see how our
          technology can simplify hospital operations and improve the patient experience. Our platform
          demonstrates how AI-powered assistance and digital healthcare systems can help hospitals
          become more efficient, organized, and patient-friendly.
        </p>
        <p className="mt-4 max-w-3xl text-center text-lg text-muted-foreground mx-auto">
          This allows healthcare institutions to understand the potential of integrating intelligent
          technology. Fill out the request form, and our team will connect with you to schedule a
          personalized demonstration.
        </p>
      </div>

      <div className="mt-14 max-w-3xl mx-auto">
        <ContactForm
          title="Request a demo"
          description="Fill out the request form below and we'll connect with you."
          submitLabel="Request Demo"
          submitPendingLabel="Requesting..."
        />
      </div>
    </div>
  );
}
