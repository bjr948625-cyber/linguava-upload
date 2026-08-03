'use client';

import { useEffect, useState } from 'react';
import { Languages, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/site/ThemeToggle';
import { LanguageSwitcher } from '@/components/site/LanguageSwitcher';
import { useTranslations } from '@/lib/i18n/LanguageProvider';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

function Logo({ label }: { label: string }) {
  return (
    <a href="#home" className="flex items-center gap-2 shrink-0" aria-label={label}>
      <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
        <Languages className="size-4.5" strokeWidth={2.25} />
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-foreground" translate="no">
        {label}
      </span>
    </a>
  );
}

export function Navbar() {
  const { dict } = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: dict.nav.home, href: '#home' },
    { label: dict.nav.services, href: '#services' },
    { label: dict.nav.about, href: '#about' },
    { label: dict.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,23,42,0.04)] dark:shadow-[0_1px_0_0_rgba(0,0,0,0.3)]'
          : 'border-b border-transparent bg-background/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo label={dict.nav.logo} />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="ghost"
            className="rounded-full text-sm font-medium"
            asChild
          >
            <a href="#contact">{dict.nav.signIn}</a>
          </Button>
          <Button
            className="rounded-full bg-primary px-5 text-sm font-medium shadow-sm hover:bg-primary/90"
            asChild
          >
            <a href="#contact">{dict.nav.bookDemo}</a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label={dict.nav.openMenu}>
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>
                  <Logo label={dict.nav.logo} />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="mt-4 w-full rounded-full" asChild>
                    <a href="#contact">{dict.nav.bookDemo}</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
