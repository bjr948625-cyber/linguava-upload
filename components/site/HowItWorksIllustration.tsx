'use client';

import { Bot, FileCheck2, Languages, ShieldCheck } from 'lucide-react';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

const NODE_ICONS = [Languages, Bot, ShieldCheck, FileCheck2];
const NODE_POSITIONS = [
  { top: '8%', left: '10%' },
  { top: '38%', left: '58%' },
  { top: '68%', left: '18%' },
  { top: '86%', left: '62%' },
];

export function HowItWorksIllustration() {
  const { dict } = useTranslations();
  const { illustration } = dict.howItWorks;
  const nodeLabels = [
    illustration.sourceText,
    illustration.aiEngine,
    illustration.qaCheck,
    illustration.finalOutput,
  ];

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-[4/5] w-full max-w-xs rounded-[1.75rem] border border-border bg-card/80 p-6 shadow-[0_30px_60px_-30px_rgba(37,99,235,0.25)] backdrop-blur-sm lg:max-w-sm dark:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-[1.75rem] bg-primary/5 blur-2xl"
      />

      <svg
        aria-hidden
        viewBox="0 0 100 120"
        className="absolute inset-0 size-full p-6"
        preserveAspectRatio="none"
      >
        <path
          d="M 14 10 C 40 10, 30 45, 62 48 C 80 50, 45 68, 22 72 C 5 75, 45 90, 66 92"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1"
        />
        <path
          d="M 14 10 C 40 10, 30 45, 62 48 C 80 50, 45 68, 22 72 C 5 75, 45 90, 66 92"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="6 8"
          className="workflow-path"
        />
      </svg>

      {NODE_ICONS.map((Icon, i) => (
        <div
          key={nodeLabels[i]}
          className="workflow-node absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ top: NODE_POSITIONS[i].top, left: NODE_POSITIONS[i].left, animationDelay: `${i * 220 + 300}ms` }}
        >
          <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-sm">
            <Icon className="size-4" strokeWidth={2} />
          </span>
          <span className="rounded-full bg-card/90 px-2 py-0.5 text-[10px] font-medium text-muted-foreground shadow-sm ring-1 ring-border">
            {nodeLabels[i]}
          </span>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
        {illustration.workflowActive}
      </div>
    </div>
  );
}
