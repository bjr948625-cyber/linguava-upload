const en = {
  nav: {
    logo: 'Linguava',
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    signIn: 'Sign in',
    bookDemo: 'Book a Demo',
    openMenu: 'Open menu',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
    language: 'Language',
  },
  hero: {
    badge: 'Trusted by 200+ global enterprises',
    titleHighlight: 'AI Language Solutions',
    titleRest: 'for Global Businesses',
    subtitle:
      'Secure, accurate, AI-powered translation and multilingual solutions for modern enterprises. Ship content in 100+ languages without slowing down.',
    getStarted: 'Get Started',
    bookDemo: 'Book a Demo',
    compliance: 'SOC 2 Type II certified \u00b7 ISO 27001 compliant',
    trustHeading: 'Powering multilingual operations for teams worldwide',
    console: {
      title: 'AI Command Center',
      subtitle: 'Multilingual operations, live',
      live: 'Live',
      agents: [
        { name: 'Legal Agent', pair: 'EN \u2192 \u4e2d\u6587', status: 'Translating' },
        { name: 'Localization Agent', pair: 'DE \u2192 FR', status: 'Reviewing' },
        { name: 'Support Agent', pair: 'JA \u2192 EN', status: 'Translating' },
      ],
      accuracy: 'Accuracy',
      security: 'Security check passed',
      securityDetail: 'SOC 2 \u00b7 ISO 27001',
      languages: '100+ languages',
    },
  },
  services: {
    eyebrow: 'Services',
    title: 'Every language service your business needs',
    subtitle:
      'From certified legal translation to AI-powered localization, one platform covers the full spectrum of enterprise language needs.',
    learnMore: 'Learn more',
    badgeEnterprise: 'Enterprise',
    badgePopular: 'Popular',
    items: [
      {
        title: 'Legal Translation',
        description:
          'Certified, precision translation for contracts, litigation, and compliance documents handled by subject-matter linguists.',
        badge: 'enterprise' as 'enterprise' | 'popular' | null,
      },
      {
        title: 'AI Translation',
        description:
          'Real-time, high-fidelity machine translation across 100+ languages, tuned for tone, terminology, and context.',
        badge: 'popular' as 'enterprise' | 'popular' | null,
      },
      {
        title: 'MTPE',
        description:
          'Machine translation post-editing that pairs AI speed with expert linguists for publication-ready accuracy.',
        badge: null as 'enterprise' | 'popular' | null,
      },
      {
        title: 'Localization',
        description:
          'Adapt products, marketing, and UX copy to local markets, dialects, and cultural nuance at scale.',
        badge: 'popular' as 'enterprise' | 'popular' | null,
      },
      {
        title: 'Document Review',
        description:
          'Rigorous quality assurance and compliance review for high-stakes, regulated, and enterprise documentation.',
        badge: 'enterprise' as 'enterprise' | 'popular' | null,
      },
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'From upload to delivery in four steps',
    subtitle: 'A streamlined workflow that combines AI speed with human precision, end to end.',
    stepLabel: 'Step',
    steps: [
      {
        title: 'Upload Documents',
        description: 'Drop in files of any format through our secure portal or API integration.',
      },
      {
        title: 'AI Processing',
        description: 'Our engines translate content instantly while preserving formatting and context.',
      },
      {
        title: 'Human Review',
        description: 'Certified linguists review, refine, and validate every translation for accuracy.',
      },
      {
        title: 'Delivery',
        description: 'Receive polished, ready-to-use documents in your original format, on time.',
      },
    ],
    illustration: {
      sourceText: 'Source text',
      aiEngine: 'AI engine',
      qaCheck: 'QA check',
      finalOutput: 'Final output',
      workflowActive: 'Workflow active',
    },
  },
  whyChooseUs: {
    eyebrow: 'Why choose us',
    title: "Built for enterprises that can't afford mistakes",
    subtitle:
      'The security, accuracy, and speed global teams need to communicate with confidence in any language.',
    learnMore: 'Learn more',
    items: [
      {
        title: 'Enterprise Security',
        description:
          'SOC 2 Type II and ISO 27001 certified infrastructure with end-to-end encryption for every document.',
        stat: '100%',
        statLabel: 'Encrypted in transit',
      },
      {
        title: 'Dedicated AI Agents',
        description: 'Custom-trained models that learn your terminology, tone, and brand voice.',
        stat: '24',
        statLabel: 'AI agents live',
      },
      {
        title: 'High Accuracy',
        description: 'Industry-leading accuracy backed by expert human review.',
        stat: '99.8%',
        statLabel: 'Accuracy rate',
      },
      {
        title: 'Fast Delivery',
        description: 'Average turnaround even for complex, large-volume projects.',
        stat: '<4h',
        statLabel: 'Avg. delivery time',
      },
      {
        title: 'Global Support',
        description: 'A follow-the-sun team of linguists and specialists across 40+ countries.',
        stat: '24/7',
        statLabel: 'Global support',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: "Trusted by teams who can't afford to get it wrong",
    ratingLabel: 'Rated {rating} out of 5 stars',
    items: [
      {
        quote:
          'Linguava cut our contract translation turnaround from days to hours without sacrificing legal precision. It\u2019s now core to how our global counsel team operates.',
        name: 'Elena Fischer',
        title: 'General Counsel',
        company: 'Vertex Legal Group',
      },
      {
        quote:
          'The AI translation quality combined with human review gives us confidence to launch in new markets faster than we ever thought possible.',
        name: 'Marcus Chen',
        title: 'VP of Global Growth',
        company: 'Solace Retail',
      },
      {
        quote:
          'Enterprise security was non-negotiable for us in healthcare. Linguava\u2019s compliance posture and audit trail made the decision easy.',
        name: 'Priya Nandakumar',
        title: 'Director of Operations',
        company: 'Aurora Health',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    subtitle: 'Everything you need to know about working with us.',
    items: [
      {
        question: 'How accurate is your AI translation?',
        answer:
          'Our AI models achieve 95-99% accuracy depending on content type and language pair. For legal, medical, and other high-stakes content, every translation also goes through human expert review before delivery.',
      },
      {
        question: 'Is my data secure and confidential?',
        answer:
          'Yes. We are SOC 2 Type II and ISO 27001 certified, with end-to-end encryption in transit and at rest, strict access controls, and no use of client data to train shared models.',
      },
      {
        question: 'Which languages do you support?',
        answer:
          'We support over 100 languages and regional dialects, including all major European, Asian, Middle Eastern, and African languages, with dedicated linguists for specialized terminology.',
      },
      {
        question: 'How fast is turnaround time?',
        answer:
          'Most standard documents are delivered in under 4 hours. Complex legal or technical projects with human review typically complete within 24-48 hours, and rush options are available.',
      },
      {
        question: 'How does pricing work?',
        answer:
          'Pricing is based on volume, language pair, and service tier (AI-only, MTPE, or full human review). Enterprise plans include custom AI agents, dedicated support, and volume discounts. Contact us for a tailored quote.',
      },
      {
        question: 'Do real linguists review AI translations?',
        answer:
          'Yes, for MTPE, legal, and document review services, certified professional linguists review and refine every AI-generated translation before it is delivered.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your language needs",
    subtitle:
      "Tell us about your business and we'll show you how Linguava can help you communicate with confidence, anywhere in the world.",
    details: {
      emailLabel: 'Email us',
      emailValue: 'hello@linguava.ai',
      addressLabel: 'Headquarters',
      addressValue: '548 Market St, San Francisco, CA',
      responseLabel: 'Response time',
      responseValue: 'Within 1 business day',
    },
    form: {
      nameLabel: 'Full name',
      namePlaceholder: 'Jordan Lee',
      nameError: 'Enter your full name',
      emailLabel: 'Work email',
      emailPlaceholder: 'jordan@company.com',
      emailError: 'Enter a valid email address',
      companyLabel: 'Company',
      companyPlaceholder: 'Acme Inc.',
      companyError: 'Enter your company name',
      messageLabel: 'How can we help?',
      messagePlaceholder: 'Tell us about your languages, volume, and timeline...',
      messageError: 'Tell us a bit more about your needs',
      submit: 'Send message',
      submitting: 'Sending...',
      toastTitle: 'Message sent',
      toastDescription: 'Thanks {name}, our team will reach out shortly.',
    },
  },
  notFound: {
    eyebrow: '404 error',
    title: "This page went missing in translation",
    subtitle:
      "The page you're looking for doesn't exist or may have moved. Let's get you back on track.",
    homeButton: 'Back to home',
    contactButton: 'Contact support',
  },
  errorPage: {
    eyebrow: 'Something went wrong',
    title: "We hit an unexpected error",
    subtitle:
      "Our team has been notified. Please try again, or head back to the homepage if the problem continues.",
    retryButton: 'Try again',
    homeButton: 'Back to home',
  },
  loadingScreen: {
    label: 'Loading Linguava\u2026',
  },
  legal: {
    backButton: 'Back to home',
    updated: 'Last updated: {date}',
    privacy: {
      title: 'Privacy Policy',
      intro:
        'Linguava ("we", "our", "us") respects your privacy. This policy explains what data we collect, how we use it, and the choices you have.',
      sections: [
        {
          heading: 'Information we collect',
          body: 'We collect information you provide directly (such as name, email, and company details submitted through our contact form) and information collected automatically (such as usage data and device information) to operate and improve our services.',
        },
        {
          heading: 'How we use your information',
          body: 'We use collected information to deliver and improve our translation and localization services, respond to inquiries, provide customer support, and comply with legal obligations.',
        },
        {
          heading: 'Data security',
          body: 'We maintain SOC 2 Type II and ISO 27001 aligned safeguards, including encryption in transit and at rest, access controls, and regular security reviews to protect your data.',
        },
        {
          heading: 'Data sharing',
          body: 'We do not sell your personal information. We may share data with trusted service providers who help us operate our platform, always under strict confidentiality obligations.',
        },
        {
          heading: 'Your rights',
          body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting us at privacy@linguava.ai.',
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      intro:
        'These Terms of Service govern your access to and use of Linguava\u2019s translation, localization, and related services. By using our services, you agree to these terms.',
      sections: [
        {
          heading: 'Use of services',
          body: 'You may use our services only for lawful purposes and in accordance with these terms. You are responsible for the accuracy and legality of content you submit for translation.',
        },
        {
          heading: 'Intellectual property',
          body: 'You retain ownership of all content you submit. Linguava retains ownership of its platform, AI models, and underlying technology.',
        },
        {
          heading: 'Service levels',
          body: 'Turnaround times and accuracy targets vary by service tier and are detailed in your enterprise agreement or order form.',
        },
        {
          heading: 'Limitation of liability',
          body: 'To the extent permitted by law, Linguava\u2019s liability for any claim arising from these terms is limited to the fees paid for the services in the preceding 12 months.',
        },
        {
          heading: 'Changes to these terms',
          body: 'We may update these terms from time to time. Continued use of our services after changes take effect constitutes acceptance of the revised terms.',
        },
      ],
    },
    security: {
      title: 'Security',
      intro:
        'Security is foundational to how we build and operate Linguava. Our program is designed to protect the confidentiality, integrity, and availability of your data.',
      sections: [
        {
          heading: 'Certifications',
          body: 'Linguava is SOC 2 Type II audited and ISO 27001 aligned, with independent third-party assessments performed regularly.',
        },
        {
          heading: 'Encryption',
          body: 'All data is encrypted in transit using TLS 1.2+ and at rest using industry-standard AES-256 encryption.',
        },
        {
          heading: 'Access control',
          body: 'We enforce role-based access control, single sign-on, and least-privilege principles across our infrastructure and internal systems.',
        },
        {
          heading: 'Monitoring and incident response',
          body: 'Our systems are continuously monitored for anomalies, and we maintain a documented incident response plan with defined escalation paths.',
        },
        {
          heading: 'Report a vulnerability',
          body: 'If you believe you have found a security vulnerability, please contact security@linguava.ai and our team will respond promptly.',
        },
      ],
    },
    compliance: {
      title: 'Compliance',
      intro:
        'We help enterprises meet their regulatory and compliance obligations when translating and localizing sensitive content.',
      sections: [
        {
          heading: 'Regulatory alignment',
          body: 'Our practices are designed to align with GDPR, CCPA, and industry-specific regulations depending on your sector and jurisdiction.',
        },
        {
          heading: 'Data residency',
          body: 'Enterprise customers can request data residency and processing location controls to meet local regulatory requirements.',
        },
        {
          heading: 'Audit trails',
          body: 'Every document and translation workflow includes a full audit trail, supporting internal governance and external audits.',
        },
        {
          heading: 'Data processing agreements',
          body: 'We offer Data Processing Agreements (DPAs) and can support due diligence questionnaires for enterprise procurement.',
        },
        {
          heading: 'Questions',
          body: 'For compliance documentation or questionnaires, contact compliance@linguava.ai.',
        },
      ],
    },
  },
  footer: {
    landmarkLabel: 'Footer',
    tagline:
      'AI-powered translation and localization for global enterprises, backed by expert human review and enterprise-grade security.',
    columns: {
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
    },
    productLinks: ['Legal Translation', 'AI Translation', 'MTPE', 'Localization'],
    companyLinks: ['About', 'How it works', 'Testimonials', 'Contact'],
    legalLinks: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'],
    bottom: {
      copyright: '\u00a9 {year} Linguava. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      contact: 'Contact',
    },
  },
};

export default en;
export type Dictionary = typeof en;
