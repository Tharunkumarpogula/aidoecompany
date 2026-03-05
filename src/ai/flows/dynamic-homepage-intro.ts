'use server';

/**
 * @fileOverview Dynamically generates an introduction paragraph for the homepage's Tech SaaS section based on the latest AI healthcare advancements.
 *
 * - generateDynamicIntro - An async function that returns a dynamic intro paragraph.
 * - DynamicIntroOutput - The output type for the generateDynamicIntro function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicIntroOutputSchema = z.object({
  introParagraph: z
    .string()
    .describe(
      'A paragraph summarizing recent advancements in AI-powered healthcare solutions.'
    ),
});

export type DynamicIntroOutput = z.infer<typeof DynamicIntroOutputSchema>;

export async function generateDynamicIntro(): Promise<DynamicIntroOutput> {
  return dynamicHomepageIntroFlow({});
}

const dynamicHomepageIntroPrompt = ai.definePrompt({
  name: 'dynamicHomepageIntroPrompt',
  output: {schema: DynamicIntroOutputSchema},
  prompt: `You are an expert in AI-powered healthcare solutions. Generate a paragraph summarizing the most recent advancements in the field. The paragraph should be engaging and informative for visitors to Aidoe's homepage, a company providing AI-powered healthcare solutions. Focus on the benefits and impact of these advancements.`,
});

const dynamicHomepageIntroFlow = ai.defineFlow(
  {
    name: 'dynamicHomepageIntroFlow',
    outputSchema: DynamicIntroOutputSchema,
  },
  async () => {
    const {output} = await dynamicHomepageIntroPrompt({});
    return output!;
  }
);
