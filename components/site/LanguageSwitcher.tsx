'use client';

import { Check, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales, localeMeta } from '@/lib/i18n/config';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, dict } = useTranslations();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={dict.nav.language}
          className={`relative rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground ${className ?? ''}`}
        >
          <Globe aria-hidden="true" className="size-4.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code)}
            className="flex items-center justify-between gap-2"
          >
            <span className="flex items-center gap-2">
              <span aria-hidden>{localeMeta[code].flag}</span>
              <span>{localeMeta[code].nativeLabel}</span>
            </span>
            {locale === code && <Check aria-hidden="true" className="size-3.5 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
