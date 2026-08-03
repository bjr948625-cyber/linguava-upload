'use client';

import { Languages, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useTranslations } from '@/lib/i18n/LanguageProvider';

const PRODUCT_HREFS = ['#services', '#services', '#services', '#services'];
const COMPANY_HREFS = ['#about', '#home', '#home', '#contact'];
const LEGAL_HREFS = ['#', '#', '#', '#'];

const SOCIALS = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
  const { dict } = useTranslations();
  const { footer, nav } = dict;

  const columns = [
    { heading: footer.columns.product, links: footer.productLinks, hrefs: PRODUCT_HREFS },
    { heading: footer.columns.company, links: footer.companyLinks, hrefs: COMPANY_HREFS },
    { heading: footer.columns.legal, links: footer.legalLinks, hrefs: LEGAL_HREFS },
  ];

  return (
    <footer aria-label={footer.landmarkLabel} className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span aria-hidden="true" className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Languages className="size-4.5" strokeWidth={2.25} />
              </span>
              <span className="text-[17px] font-semibold tracking-tight text-foreground">
                {nav.logo}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <social.icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-foreground">{column.heading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((label, i) => (
                  <li key={label}>
                    <a
                      href={column.hrefs[i]}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {footer.bottom.copyright.replace('{year}', String(new Date().getFullYear()))}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">{footer.bottom.privacy}</a>
            <a href="#" className="hover:text-primary">{footer.bottom.terms}</a>
            <a href="#contact" className="hover:text-primary">{footer.bottom.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
