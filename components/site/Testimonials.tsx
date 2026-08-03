'use client';

import { Star } from 'lucide-react';
import { Reveal } from '@/components/site/Reveal';
import { interpolate, useTranslations } from '@/lib/i18n/LanguageProvider';

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function Testimonials() {
  const { dict } = useTranslations();
  const { testimonials } = dict;

  return (
    <section aria-labelledby="testimonials-heading" className="bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{testimonials.eyebrow}</span>
          <h2 id="testimonials-heading" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm dark:shadow-none">
                <div>
                  <div
                    role="img"
                    aria-label={interpolate(testimonials.ratingLabel, { rating: 5 })}
                    className="flex gap-0.5 text-primary"
                  >
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} aria-hidden="true" className="size-4 fill-current" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {getInitials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
