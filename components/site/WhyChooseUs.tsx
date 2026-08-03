'use client';

import { Bot, Gauge, Globe, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from '@/components/site/Reveal';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

const FEATURE_ICONS = [ShieldCheck, Bot, Gauge, Zap, Globe];
const FEATURE_CLASSNAMES = ['sm:col-span-2', '', '', '', 'sm:col-span-2'];

export function WhyChooseUs() {
  const { dict } = useTranslations();
  const { whyChooseUs } = dict;

  return (
    <section id="about" aria-labelledby="why-choose-us-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{whyChooseUs.eyebrow}</span>
          <h2 id="why-choose-us-heading" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {whyChooseUs.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{whyChooseUs.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((feature, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <Reveal key={feature.title} delay={i * 70} className={FEATURE_CLASSNAMES[i]}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_24px_48px_-20px_rgba(37,99,235,0.28)] dark:shadow-none dark:hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.55)]">
                  {/* accent glow on hover */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/0 blur-2xl transition-colors duration-500 group-hover:bg-primary/15"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span aria-hidden="true" className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/25">
                      <Icon className="size-5.5" strokeWidth={2} />
                    </span>

                    <div className="text-right">
                      <p className="text-xl font-semibold tracking-tight text-primary sm:text-2xl">
                        {feature.stat}
                      </p>
                      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        {feature.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="relative mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                  <div className="relative mt-5 h-px w-full bg-border" />
                  <div aria-hidden="true" className="relative mt-5 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {whyChooseUs.learnMore}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
