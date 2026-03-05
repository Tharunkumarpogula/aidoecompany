import { HeroSection } from '@/components/landing/hero-section';
import { TechSaaSSection } from '@/components/landing/tech-saas-section';
import { HealthcareShowcase } from '@/components/landing/healthcare-showcase';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <TechSaaSSection />
      <HealthcareShowcase />
    </React.Fragment>
  );
}
