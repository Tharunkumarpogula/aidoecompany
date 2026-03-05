import { generateDynamicIntro } from '@/ai/flows/dynamic-homepage-intro';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';

const aiTools = [
  "Diagnostics support",
  "Patient data analytics",
  "Decision-making assistance",
  "Workflow automation",
];

const cloudAdvantages = [
  "Secure and scalable",
  "Easy integration with hospital systems",
  "Minimal infrastructure requirements",
];

export async function TechSaaSSection() {
  const staticIntro = "Aidoe allows healthcare providers to adopt advanced technology efficiently, safely, and cost-effectively.";
  
  return (
    <section id="features" className="bg-secondary/50 py-20 md:py-32 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container fade-in max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl lg:text-5xl">
            Healthcare & Tech SaaS
          </h2>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 justify-center">
          <Card className="group flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardTitle>AI-Powered Tools</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {aiTools.map((tool) => (
                  <li key={tool} className="group flex items-start rounded-md transition-colors duration-200 hover:bg-accent/30 p-2">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground">{tool}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="group flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader>
              <CardTitle>Cloud Advantage</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {cloudAdvantages.map((advantage) => (
                  <li key={advantage} className="group flex items-start rounded-md transition-colors duration-200 hover:bg-accent/30 p-2">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground">{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mt-16 text-center text-lg text-foreground/80 max-w-4xl mx-auto font-medium">
          {staticIntro}
        </p>
      </div>
    </section>
  );
}
