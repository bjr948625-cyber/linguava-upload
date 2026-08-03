'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { dict } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add('theme-transition');
    setTheme(theme === 'dark' ? 'light' : 'dark');
    window.setTimeout(() => root.classList.remove('theme-transition'), 500);
  };

  const isDark = mounted && theme === 'dark';

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? dict.nav.switchToLight : dict.nav.switchToDark}
      className={`relative rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground ${className ?? ''}`}
    >
      {mounted ? (
        <>
          <Sun
            aria-hidden="true"
            className={`size-4.5 transition-all duration-300 ${
              isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}
          />
          <Moon
            aria-hidden="true"
            className={`absolute size-4.5 transition-all duration-300 ${
              isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'
            }`}
          />
        </>
      ) : (
        <Sun aria-hidden="true" className="size-4.5 opacity-0" />
      )}
    </Button>
  );
}
