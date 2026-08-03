'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Reveal } from '@/components/site/Reveal';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

export function FAQ() {
  const { dict } = useTranslations();
  const { faq } = dict;

  return (
    <section aria-labelledby="faq-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-medium text-primary">{faq.eyebrow}</span>
          <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{faq.subtitle}</p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-12 rounded-2xl border border-border bg-card px-6 shadow-sm">
            {faq.items.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
