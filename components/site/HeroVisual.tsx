'use client';

import { Activity, Bot, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

const AGENT_LOADS = [82, 61, 94];
const ANALYTICS_BARS = [38, 62, 48, 74, 58, 88, 70];

export function HeroVisual() {
  const { dict } = useTranslations();
  const { console: consoleDict } = dict.hero;

  return (
    <div aria-hidden="true" className="relative mx-auto max-w-md lg:max-w-lg" style={{ perspective: '1400px' }}>
      {/* glow behind the console */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
      />

      {/* main console */}
      <div
        className="hero-float relative rounded-[1.75rem] border border-white/60 bg-white/70 p-5 shadow-[0_40px_80px_-25px_rgba(37,99,235,0.35)] backdrop-blur-xl ring-1 ring-black/[0.02] dark:border-white/10 dark:bg-card/70 dark:shadow-[0_40px_80px_-25px_rgba(0,0,0,0.5)] dark:ring-white/5"
      >
        {/* console header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Bot className="size-4" strokeWidth={2.25} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{consoleDict.title}</p>
              <p className="text-[11px] text-muted-foreground">{consoleDict.subtitle}</p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            {consoleDict.live}
          </span>
        </div>

        {/* agent list */}
        <div className="mt-5 flex flex-col gap-2.5">
          {consoleDict.agents.map((agent, i) => (
            <div
              key={agent.name}
              className="hero-agent-row flex items-center justify-between rounded-xl border border-border/70 bg-white/70 px-3.5 py-2.5 dark:bg-white/5"
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50" style={{ animationDuration: '2.4s' }} />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <div>
                  <p className="text-xs font-medium text-foreground">{agent.name}</p>
                  <p className="text-[11px] text-muted-foreground" translate="no">
                    {agent.pair} &middot; {agent.status}
                  </p>
                </div>
              </div>
              <div className="h-1.5 w-14 overflow-hidden rounded-full bg-secondary">
                <div
                  className="hero-load-bar h-full rounded-full bg-primary"
                  style={{ ['--load' as string]: `${AGENT_LOADS[i]}%`, animationDelay: `${i * 140 + 300}ms` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* analytics strip */}
        <div className="mt-4 flex h-16 items-end gap-1.5 rounded-xl border border-border/70 bg-white/70 p-3.5 dark:bg-white/5">
          <Activity className="mr-1 size-3.5 shrink-0 text-primary" />
          {ANALYTICS_BARS.map((h, i) => (
            <div
              key={i}
              className="hero-bar w-full rounded-full bg-gradient-to-t from-primary/30 to-primary"
              style={{ ['--bar-h' as string]: `${h}%`, animationDelay: `${i * 90 + 200}ms` }}
            />
          ))}
        </div>
      </div>

      {/* floating glass card: accuracy */}
      <div className="hero-float-slow absolute -right-6 -top-6 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md sm:block dark:border-white/10 dark:bg-card/80 dark:shadow-black/40">
        <div className="flex items-center gap-2">
          <Sparkles className="size-3.5 text-primary" />
          <p className="text-xs text-muted-foreground">{consoleDict.accuracy}</p>
        </div>
        <p className="mt-0.5 text-lg font-semibold text-foreground" translate="no">99.2%</p>
      </div>

      {/* floating glass card: security */}
      <div className="hero-float-slower absolute -bottom-7 -left-7 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md sm:block dark:border-white/10 dark:bg-card/80 dark:shadow-black/40">
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-3.5 text-primary" />
          <p className="text-xs font-medium text-foreground">{consoleDict.security}</p>
        </div>
        <p className="mt-1 text-[11px] text-muted-foreground" translate="no">{consoleDict.securityDetail}</p>
      </div>

      {/* floating glass card: languages */}
      <div className="hero-float absolute right-[-2.5rem] bottom-10 hidden rounded-full border border-white/70 bg-white/80 px-3.5 py-2 shadow-md backdrop-blur-md lg:flex lg:items-center lg:gap-1.5 dark:border-white/10 dark:bg-card/80">
        <Globe2 className="size-3.5 text-primary" />
        <span className="text-[11px] font-medium text-foreground">{consoleDict.languages}</span>
      </div>
    </div>
  );
}
