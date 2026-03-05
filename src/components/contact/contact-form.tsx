'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 disabled:hover:scale-100 disabled:hover:shadow-none">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <Card className="w-full group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:shadow-primary/10">
      <CardHeader className="group-hover:bg-primary/5 transition-colors duration-300">
        <CardTitle className="group-hover:text-primary transition-colors duration-300">Send us a message</CardTitle>
        <CardDescription className="group-hover:text-foreground transition-colors duration-300">Fill out the form below and we'll get back to you.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="hover:text-primary transition-colors duration-200">Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required aria-describedby="name-error" className="transition-all duration-300 hover:border-primary focus:scale-[1.01]" />
            {state.errors?.name && <p id="name-error" className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="hover:text-primary transition-colors duration-200">Phone Number (Optional)</Label>
            <Input id="phone" name="phone" placeholder="(123) 456-7890" aria-describedby="phone-error" className="transition-all duration-300 hover:border-primary focus:scale-[1.01]" />
            {state.errors?.phone && <p id="phone-error" className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="hover:text-primary transition-colors duration-200">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required aria-describedby="email-error" className="transition-all duration-300 hover:border-primary focus:scale-[1.01]" />
            {state.errors?.email && <p id="email-error" className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="hover:text-primary transition-colors duration-200">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message here..." required minLength={10} aria-describedby="message-error" className="transition-all duration-300 hover:border-primary focus:scale-[1.01] min-h-[120px]" />
            {state.errors?.message && <p id="message-error" className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
