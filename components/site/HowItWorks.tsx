'use client';

import { Cpu, PackageCheck, UploadCloud, UserCheck } from 'lucide-react';
import { Reveal } from '@/components/site/Reveal';
import { HowItWorksIllustration } from '@/components/site/HowItWorksIllustration';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

const STEP_ICONS = [UploadCloud, Cpu, UserCheck, PackageCheck];
const STEP_TAGS = ['01', '02', '03', '04'];

export function HowItWorks() {
  const { dict } = useTranslations();
  const { howItWorks } = dict;

  return (
    <section aria-labelledby="how-it-works-heading" className="relative overflow-hidden bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{howItWorks.eyebrow}</span>
          <h2 id="how-it-works-heading" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{howItWorks.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
          {/* timeline */}
          <Reveal className="relative">
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-6 w-px bg-border"
            />
            <div
              aria-hidden
              className="timeline-line absolute left-6 top-2 w-px bg-gradient-to-b from-primary via-primary to-primary/40"
            />

            <ol className="flex flex-col gap-10">
              {howItWorks.steps.map((step, i) => {
                const Icon = STEP_ICONS[i];
                return (
                  <li
                    key={step.title}
                    className="timeline-step group relative flex gap-5 pl-0"
                    style={{ ['--step-delay' as string]: `${i * 180 + 200}ms` }}
                  >
                    <div aria-hidden="true" className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm ring-1 ring-border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/25 group-hover:ring-primary/30">
                      <Icon className="size-5" strokeWidth={2} />
                    </div>

                    <div className="flex-1 rounded-2xl border border-transparent p-1 transition-colors duration-300 group-hover:border-primary/15 group-hover:bg-card/70">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold tracking-wide text-primary">
                          {howItWorks.stepLabel} {STEP_TAGS[i]}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          {/* AI workflow illustration */}
          <Reveal delay={200} className="flex items-center justify-center">
            <HowItWorksIllustration />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
