'use client';

import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroMeshBackground } from '@/components/site/HeroMeshBackground';
import { HeroVisual } from '@/components/site/HeroVisual';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

const TRUST_LOGOS = ['Northwind', 'Vertex Legal', 'Aurora Health', 'Bramble Bank', 'Solace Retail'];

export function Hero() {
  const { dict } = useTranslations();
  const { hero } = dict;

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <HeroMeshBackground />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm">
            <Sparkles aria-hidden="true" className="size-3.5" />
            {hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-primary">{hero.titleHighlight}</span> {hero.titleRest}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-full bg-primary px-7 text-base font-medium shadow-md shadow-primary/20 hover:bg-primary/90"
              asChild
            >
              <a href="#services">
                {hero.getStarted}
                <ArrowRight aria-hidden="true" className="size-4 rtl-flip" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-border bg-card px-7 text-base font-medium text-foreground hover:bg-secondary"
              asChild
            >
              <a href="#contact">
                <PlayCircle aria-hidden="true" className="size-4" />
                {hero.bookDemo}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
            {hero.compliance}
          </div>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {hero.trustHeading}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TRUST_LOGOS.map((name) => (
            <span key={name} translate="no" className="text-lg font-semibold tracking-tight text-foreground/80">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
