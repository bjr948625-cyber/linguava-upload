'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Reveal } from '@/components/site/Reveal';
import { useTranslations } from '@/lib/i18n/LanguageProvider';
import type { Dictionary } from '@/lib/i18n/dictionaries/en';

const DETAIL_ICONS = [Mail, MapPin, MessageCircle];

function buildContactSchema(form: Dictionary['contact']['form']) {
  return z.object({
    name: z.string().min(2, form.nameError),
    email: z.string().email(form.emailError),
    company: z.string().min(2, form.companyError),
    message: z.string().min(10, form.messageError),
  });
}

type ContactFormValues = z.infer<ReturnType<typeof buildContactSchema>>;

export function Contact() {
  const { dict } = useTranslations();
  const { contact } = dict;
  const contactSchema = buildContactSchema(contact.form);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const contactDetails = [
    { label: contact.details.emailLabel, value: contact.details.emailValue },
    { label: contact.details.addressLabel, value: contact.details.addressValue },
    { label: contact.details.responseLabel, value: contact.details.responseValue },
  ];

  const onSubmit = async (values: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success(contact.form.toastTitle, {
      description: contact.form.toastDescription.replace('{name}', values.name.split(' ')[0]),
    });
    reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <span className="text-sm font-medium text-primary">{contact.eyebrow}</span>
            <h2 id="contact-heading" className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">{contact.subtitle}</p>

            <div className="mt-10 flex flex-col gap-6">
              {contactDetails.map((item, i) => {
                const Icon = DETAIL_ICONS[i];
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="size-4.5" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-[15px] font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-border bg-card p-8 shadow-[0_20px_50px_-25px_rgba(37,99,235,0.2)]"
              noValidate
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">{contact.form.nameLabel}</Label>
                  <Input
                    id="name"
                    placeholder={contact.form.namePlaceholder}
                    {...register('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">{contact.form.emailLabel}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={contact.form.emailPlaceholder}
                    {...register('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="company">{contact.form.companyLabel}</Label>
                <Input
                  id="company"
                  placeholder={contact.form.companyPlaceholder}
                  {...register('company')}
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                />
                {errors.company && (
                  <p id="company-error" role="alert" className="text-xs text-destructive">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="message">{contact.form.messageLabel}</Label>
                <Textarea
                  id="message"
                  placeholder={contact.form.messagePlaceholder}
                  className="min-h-28"
                  {...register('message')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-xs text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 h-12 w-full rounded-full bg-primary text-base font-medium shadow-sm hover:bg-primary/90"
              >
                {isSubmitting ? contact.form.submitting : contact.form.submit}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
