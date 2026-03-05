import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM7 8h4.7v2h.07c.65-1.2 2.23-2.47 4.58-2.47 4.9 0 5.8 3.22 5.8 7.4V22h-5v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.7-2.49 3.44V22H7V8z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
      <defs>
        <linearGradient id="igGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f58529" />
          <stop offset="0.5" stopColor="#dd2a7b" />
          <stop offset="1" stopColor="#8134af" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#igGrad)" strokeWidth="1.5" />
      <path d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" stroke="url(#igGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="17.5" cy="6.5" r="0.75" fill="url(#igGrad)"/>
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-8 flex h-20 md:h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-10 md:h-12 md:w-12" />
          <span className="font-headline text-lg md:text-2xl font-bold">aidoe</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/why-aidoe">Why Aidoe?</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>

          <Button asChild>
            <Link
              href="https://wa.link/rrdhic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <i className="bi bi-whatsapp text-xl"></i>
            </Link>
          </Button>

          <Button asChild>
            <Link
              href="https://www.linkedin.com/company/aidoe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn"
            >
              <LinkedInIcon className="h-6 w-6 text-black" />
            </Link>
          </Button>

          <Button asChild>
            <Link
              href="https://www.instagram.com/aidoecompany?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
