'use client';

import { ArrowUpRight, FileSearch, Gavel, Globe2, ScrollText, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/site/Reveal';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

const SERVICE_ICONS = [Gavel, Sparkles, ScrollText, Globe2, FileSearch];
const SERVICE_STYLES = [
  { gradient: 'from-blue-500 to-indigo-600', glow: 'shadow-blue-500/30' },
  { gradient: 'from-sky-400 to-blue-600', glow: 'shadow-sky-500/30' },
  { gradient: 'from-violet-500 to-blue-600', glow: 'shadow-violet-500/30' },
  { gradient: 'from-cyan-400 to-sky-600', glow: 'shadow-cyan-500/30' },
  { gradient: 'from-indigo-500 to-blue-700', glow: 'shadow-indigo-500/30' },
];

export function Services() {
  const { dict } = useTranslations();
  const { services } = dict;

  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{services.eyebrow}</span>
          <h2 id="services-heading" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{services.subtitle}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = SERVICE_ICONS[i];
            const style = SERVICE_STYLES[i];
            return (
              <Reveal key={service.title} delay={i * 80}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_28px_56px_-24px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.6)]">
                  {/* badge */}
                  {service.badge && (
                    <span
                      className={`absolute right-5 top-5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                        service.badge === 'popular'
                          ? 'bg-blue-50 text-blue-600 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20'
                          : 'bg-slate-50 text-slate-600 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10'
                      }`}
                    >
                      {service.badge === 'popular' ? services.badgePopular : services.badgeEnterprise}
                    </span>
                  )}

                  {/* gradient icon */}
                  <span
                    aria-hidden="true"
                    className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${style.gradient} text-white shadow-lg ${style.glow} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                  >
                    <Icon className="size-5.5" strokeWidth={2} />
                  </span>

                  <h3 className="mt-6 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-2.5"
                  >
                    {services.learnMore}
                    <span className="sr-only"> &ndash; {service.title}</span>
                    <ArrowUpRight aria-hidden="true" className="size-3.5 rtl-flip transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* ambient corner glow on hover */}
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-16 -left-16 size-40 rounded-full bg-gradient-to-br ${style.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
