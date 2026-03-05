import { Mail, MessageCircle } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container py-12 sm:py-16 lg:py-24 fade-in">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-animate">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground mx-auto text-animate text-animate-delay-1">
          We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 max-w-5xl mx-auto items-start">
        <div className="w-full">
          <ContactForm />
        </div>
        <div className="flex flex-col space-y-8">
          <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] cursor-pointer">
            <CardHeader className="group-hover:bg-primary/5 transition-colors duration-300">
              <CardTitle className="flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                For any inquiries, please email us. We'll get back to you as soon as possible.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-primary group-hover:text-primary-foreground" variant="outline">
                <Link href="mailto:contact@aidoe.com">Send Email</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] cursor-pointer">
            <CardHeader className="group-hover:bg-primary/5 transition-colors duration-300">
              <CardTitle className="flex items-center gap-3 group-hover:text-primary transition-colors duration-300">
                <MessageCircle className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                Chatbot
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                Have a quick question? Our friendly chatbot is here to help you 24/7.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-primary/90">Start Chat</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
