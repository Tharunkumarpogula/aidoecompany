import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const whyAidoePoints = [
  {
    title: 'Smarter Healthcare',
    description: 'Combining AI and medicine for better patient care.',
  },
  {
    title: 'Operational Efficiency',
    description: 'Automate tasks and simplify workflows.',
  },
  {
    title: 'Enhanced Communication',
    description: 'Recuria connects staff and patients instantly.',
  },
  {
    title: 'Future-Ready',
    description: 'Scalable, secure, and continuously improving solutions.',
  },
];

export default function WhyAidoePage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-24 fade-in">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-animate">
          Why Aidoe?
        </h1>
      </div>

      {/* Illustration */}
      <div className="mt-10 flex justify-center">
        <div className="relative w-full max-w-3xl aspect-[16/9] overflow-hidden">
          <Image
            src="/why-aidoe.jpg"
            alt="Why Aidoe illustration"
            fill
            className="object-cover rounded-md shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110"
            unoptimized
            priority
          />
        </div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto">
        <Card className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardHeader>
            <CardTitle>The Aidoe Advantage</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-6">
              {whyAidoePoints.map((point) => (
                <li key={point.title} className="flex items-start group text-animate">
                  <CheckCircle2 className="mr-4 h-6 w-6 flex-shrink-0 text-primary mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div className="transition-colors duration-300 group-hover:text-foreground">
                    <h3 className="text-lg font-semibold">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-16 text-center text-lg text-foreground/80 max-w-4xl mx-auto font-medium text-animate text-animate-delay-2">
        Aidoe is redefining healthcare by merging innovation, technology, and compassion—making advanced medical intelligence accessible to all.
      </p>
    </div>
  );
}
