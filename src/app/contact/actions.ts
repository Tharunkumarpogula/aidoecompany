'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string({required_error: 'Name is required.'}).min(1, 'Name is required.'),
  phone: z.string().optional(),
  email: z.string({required_error: 'Email is required.'}).email('Invalid email address.'),
  message: z.string({required_error: 'Message is required.'}).min(1, 'Message is required.'),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = Object.fromEntries(formData.entries());
  const validatedFields = contactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: 'Failed to send message. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  // For this project, we just log the data to the server console.
  console.log('New contact form submission:');
  console.log(validatedFields.data);

  return {
    message: 'Your message has been sent successfully! We will get back to you shortly.',
    success: true,
  };
}
