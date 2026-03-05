import Image from 'next/image';
import { Logo } from '@/components/logo';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center bg-background py-20 md:py-32">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 fade-in">
        <div className="relative flex flex-col justify-center md:order-1 items-start text-left pl-6 md:pl-12">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-animate">
            Aidoe – AI for Healthcare
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl text-animate text-animate-delay-1">
            Transforming healthcare with intelligence. Aidoe is an AI-driven
            med-tech platform revolutionizing how hospitals and clinics deliver
            care. Our cloud-based solutions empower medical teams to make
            faster, smarter, and data-driven decisions—improving patient
            outcomes while reducing operational workload.
          </p>
        </div>
        <div className="relative flex items-center justify-end md:order-2 pr-6 md:pr-12">
          <div className="relative w-full max-w-none aspect-[16/9] overflow-hidden">
            <Image
              src="/Home.png"
              alt="Advanced telehealth interface with Dr. Aris Thorne and patient monitoring"
              fill
              className="object-cover rounded-md shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
