import type { Dictionary } from './en';

const fr: Dictionary = {
  nav: {
    logo: 'Linguava',
    home: 'Accueil',
    services: 'Services',
    about: '\u00c0 propos',
    contact: 'Contact',
    signIn: 'Connexion',
    bookDemo: 'Demander une d\u00e9mo',
    openMenu: 'Ouvrir le menu',
    switchToDark: 'Passer au mode sombre',
    switchToLight: 'Passer au mode clair',
    language: 'Langue',
  },
  hero: {
    badge: 'Approuv\u00e9 par plus de 200 entreprises mondiales',
    titleHighlight: 'Solutions linguistiques IA',
    titleRest: 'pour les entreprises mondiales',
    subtitle:
      "Des solutions de traduction et multilingues s\u00e9curis\u00e9es, pr\u00e9cises et pilot\u00e9es par l'IA pour les entreprises modernes. D\u00e9ployez du contenu en plus de 100 langues sans ralentir.",
    getStarted: 'Commencer',
    bookDemo: 'Demander une d\u00e9mo',
    compliance: 'Certifi\u00e9 SOC 2 Type II \u00b7 Conforme ISO 27001',
    trustHeading: 'Au service des op\u00e9rations multilingues d\u2019\u00e9quipes dans le monde entier',
    console: {
      title: 'Centre de commande IA',
      subtitle: 'Op\u00e9rations multilingues, en direct',
      live: 'En direct',
      agents: [
        { name: 'Agent juridique', pair: 'EN \u2192 \u4e2d\u6587', status: 'Traduction' },
        { name: 'Agent de localisation', pair: 'DE \u2192 FR', status: 'V\u00e9rification' },
        { name: 'Agent support', pair: 'JA \u2192 EN', status: 'Traduction' },
      ],
      accuracy: 'Pr\u00e9cision',
      security: 'V\u00e9rification de s\u00e9curit\u00e9 r\u00e9ussie',
      securityDetail: 'SOC 2 \u00b7 ISO 27001',
      languages: 'Plus de 100 langues',
    },
  },
  services: {
    eyebrow: 'Services',
    title: 'Tous les services linguistiques dont votre entreprise a besoin',
    subtitle:
      'De la traduction juridique certifi\u00e9e \u00e0 la localisation assist\u00e9e par IA, une seule plateforme couvre tous les besoins linguistiques de l\u2019entreprise.',
    learnMore: 'En savoir plus',
    badgeEnterprise: 'Entreprise',
    badgePopular: 'Populaire',
    items: [
      {
        title: 'Traduction juridique',
        description:
          'Traduction certifi\u00e9e et pr\u00e9cise de contrats, de proc\u00e9dures et de documents de conformit\u00e9, r\u00e9alis\u00e9e par des linguistes sp\u00e9cialis\u00e9s.',
        badge: 'enterprise' as 'enterprise' | 'popular' | null,
      },
      {
        title: 'Traduction IA',
        description:
          'Traduction automatique en temps r\u00e9el et haute fid\u00e9lit\u00e9 dans plus de 100 langues, adapt\u00e9e au ton, \u00e0 la terminologie et au contexte.',
        badge: 'popular' as 'enterprise' | 'popular' | null,
      },
      {
        title: 'MTPE',
        description:
          "Post-\u00e9dition de traduction automatique associant la rapidit\u00e9 de l'IA \u00e0 l'expertise de linguistes pour un r\u00e9sultat pr\u00eat \u00e0 publier.",
        badge: null as 'enterprise' | 'popular' | null,
      },
      {
        title: 'Localisation',
        description:
          'Adaptez vos produits, votre marketing et votre contenu UX aux march\u00e9s locaux, aux dialectes et aux nuances culturelles, \u00e0 grande \u00e9chelle.',
        badge: 'popular' as 'enterprise' | 'popular' | null,
      },
      {
        title: 'Relecture de documents',
        description:
          'Contr\u00f4le qualit\u00e9 et relecture rigoureux pour les documents sensibles, r\u00e9glement\u00e9s et d\u2019entreprise.',
        badge: 'enterprise' as 'enterprise' | 'popular' | null,
      },
    ],
  },
  howItWorks: {
    eyebrow: 'Comment \u00e7a marche',
    title: 'Du t\u00e9l\u00e9chargement \u00e0 la livraison en quatre \u00e9tapes',
    subtitle:
      "Un flux de travail optimis\u00e9 qui combine la rapidit\u00e9 de l'IA et la pr\u00e9cision humaine, de bout en bout.",
    stepLabel: '\u00c9tape',
    steps: [
      {
        title: 'T\u00e9l\u00e9chargement des documents',
        description:
          'D\u00e9posez des fichiers de tout format via notre portail s\u00e9curis\u00e9 ou notre int\u00e9gration API.',
      },
      {
        title: 'Traitement par IA',
        description:
          'Nos moteurs traduisent le contenu instantan\u00e9ment tout en pr\u00e9servant la mise en forme et le contexte.',
      },
      {
        title: 'R\u00e9vision humaine',
        description:
          'Des linguistes certifi\u00e9s relisent, affinent et valident chaque traduction pour en garantir la pr\u00e9cision.',
      },
      {
        title: 'Livraison',
        description: 'Recevez des documents soign\u00e9s, pr\u00eats \u00e0 l\u2019emploi, dans leur format d\u2019origine, \u00e0 temps.',
      },
    ],
    illustration: {
      sourceText: 'Texte source',
      aiEngine: 'Moteur IA',
      qaCheck: 'Contr\u00f4le qualit\u00e9',
      finalOutput: 'R\u00e9sultat final',
      workflowActive: 'Flux de travail actif',
    },
  },
  whyChooseUs: {
    eyebrow: 'Pourquoi nous choisir',
    title: 'Con\u00e7u pour les entreprises qui ne peuvent pas se permettre d\u2019erreurs',
    subtitle:
      "La s\u00e9curit\u00e9, la pr\u00e9cision et la rapidit\u00e9 dont les \u00e9quipes mondiales ont besoin pour communiquer en toute confiance, dans n'importe quelle langue.",
    learnMore: 'En savoir plus',
    items: [
      {
        title: 'S\u00e9curit\u00e9 d\u2019entreprise',
        description:
          'Infrastructure certifi\u00e9e SOC 2 Type II et ISO 27001, avec chiffrement de bout en bout pour chaque document.',
        stat: '100 %',
        statLabel: 'Chiffr\u00e9 en transit',
      },
      {
        title: 'Agents IA d\u00e9di\u00e9s',
        description: 'Des mod\u00e8les entra\u00een\u00e9s sur mesure qui apprennent votre terminologie, votre ton et votre voix de marque.',
        stat: '24',
        statLabel: 'Agents IA actifs',
      },
      {
        title: 'Grande pr\u00e9cision',
        description: 'Une pr\u00e9cision de premier plan, appuy\u00e9e par une relecture humaine experte.',
        stat: '99,8 %',
        statLabel: 'Taux de pr\u00e9cision',
      },
      {
        title: 'Livraison rapide',
        description: 'Un d\u00e9lai moyen court, m\u00eame pour les projets complexes et volumineux.',
        stat: '<4h',
        statLabel: 'D\u00e9lai moyen',
      },
      {
        title: 'Support mondial',
        description: 'Une \u00e9quipe de linguistes et de sp\u00e9cialistes disponible 24h/24 dans plus de 40 pays.',
        stat: '24/7',
        statLabel: 'Support mondial',
      },
    ],
  },
  testimonials: {
    eyebrow: 'T\u00e9moignages',
    title: 'La confiance d\u2019\u00e9quipes qui ne peuvent pas se permettre de se tromper',
    ratingLabel: 'Not\u00e9 {rating} sur 5 \u00e9toiles',
    items: [
      {
        quote:
          'Linguava a r\u00e9duit le d\u00e9lai de traduction de nos contrats de plusieurs jours \u00e0 quelques heures, sans compromettre la pr\u00e9cision juridique. C\u2019est d\u00e9sormais essentiel au fonctionnement de notre \u00e9quipe juridique mondiale.',
        name: 'Elena Fischer',
        title: 'Directrice juridique',
        company: 'Vertex Legal Group',
      },
      {
        quote:
          'La qualit\u00e9 de la traduction IA combin\u00e9e \u00e0 la relecture humaine nous donne la confiance n\u00e9cessaire pour nous lancer sur de nouveaux march\u00e9s plus vite que jamais.',
        name: 'Marcus Chen',
        title: 'VP Croissance mondiale',
        company: 'Solace Retail',
      },
      {
        quote:
          'La s\u00e9curit\u00e9 d\u2019entreprise \u00e9tait non n\u00e9gociable pour nous dans le secteur de la sant\u00e9. La posture de conformit\u00e9 et le journal d\u2019audit de Linguava ont facilit\u00e9 la d\u00e9cision.',
        name: 'Priya Nandakumar',
        title: 'Directrice des op\u00e9rations',
        company: 'Aurora Health',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions fr\u00e9quentes',
    subtitle: 'Tout ce que vous devez savoir pour travailler avec nous.',
    items: [
      {
        question: 'Quelle est la pr\u00e9cision de votre traduction IA ?',
        answer:
          'Nos mod\u00e8les IA atteignent une pr\u00e9cision de 95 \u00e0 99 % selon le type de contenu et la paire de langues. Pour les contenus juridiques, m\u00e9dicaux et autres contenus sensibles, chaque traduction fait \u00e9galement l\u2019objet d\u2019une relecture humaine avant livraison.',
      },
      {
        question: 'Mes donn\u00e9es sont-elles s\u00e9curis\u00e9es et confidentielles ?',
        answer:
          'Oui. Nous sommes certifi\u00e9s SOC 2 Type II et ISO 27001, avec un chiffrement de bout en bout en transit et au repos, des contr\u00f4les d\u2019acc\u00e8s stricts, et aucune utilisation des donn\u00e9es clients pour entra\u00eener des mod\u00e8les partag\u00e9s.',
      },
      {
        question: 'Quelles langues prenez-vous en charge ?',
        answer:
          'Nous prenons en charge plus de 100 langues et dialectes r\u00e9gionaux, incluant les principales langues europ\u00e9ennes, asiatiques, moyen-orientales et africaines, avec des linguistes d\u00e9di\u00e9s pour la terminologie sp\u00e9cialis\u00e9e.',
      },
      {
        question: 'Quel est le d\u00e9lai de traitement ?',
        answer:
          'La plupart des documents standard sont livr\u00e9s en moins de 4 heures. Les projets juridiques ou techniques complexes avec relecture humaine sont g\u00e9n\u00e9ralement termin\u00e9s en 24 \u00e0 48 heures, et des options express sont disponibles.',
      },
      {
        question: 'Comment fonctionne la tarification ?',
        answer:
          'La tarification d\u00e9pend du volume, de la paire de langues et du niveau de service (IA seule, MTPE ou relecture humaine compl\u00e8te). Les forfaits entreprise incluent des agents IA personnalis\u00e9s, un support d\u00e9di\u00e9 et des remises sur volume. Contactez-nous pour un devis personnalis\u00e9.',
      },
      {
        question: 'De vrais linguistes relisent-ils les traductions IA ?',
        answer:
          'Oui, pour les services MTPE, juridiques et de relecture de documents, des linguistes professionnels certifi\u00e9s relisent et affinent chaque traduction g\u00e9n\u00e9r\u00e9e par IA avant sa livraison.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Parlons de vos besoins linguistiques',
    subtitle:
      'Parlez-nous de votre entreprise et nous vous montrerons comment Linguava peut vous aider \u00e0 communiquer en toute confiance, partout dans le monde.',
    details: {
      emailLabel: 'Envoyez-nous un e-mail',
      emailValue: 'hello@linguava.ai',
      addressLabel: 'Si\u00e8ge social',
      addressValue: '548 Market St, San Francisco, CA',
      responseLabel: 'D\u00e9lai de r\u00e9ponse',
      responseValue: 'Sous 1 jour ouvr\u00e9',
    },
    form: {
      nameLabel: 'Nom complet',
      namePlaceholder: 'Jordan Lee',
      nameError: 'Veuillez saisir votre nom complet',
      emailLabel: 'E-mail professionnel',
      emailPlaceholder: 'jordan@company.com',
      emailError: 'Veuillez saisir une adresse e-mail valide',
      companyLabel: 'Entreprise',
      companyPlaceholder: 'Acme Inc.',
      companyError: 'Veuillez saisir le nom de votre entreprise',
      messageLabel: 'Comment pouvons-nous vous aider ?',
      messagePlaceholder: 'Parlez-nous de vos langues, volumes et d\u00e9lais...',
      messageError: 'Merci de nous en dire un peu plus sur vos besoins',
      submit: 'Envoyer le message',
      submitting: 'Envoi en cours...',
      toastTitle: 'Message envoy\u00e9',
      toastDescription: 'Merci {name}, notre \u00e9quipe vous contactera tr\u00e8s bient\u00f4t.',
    },
  },
  notFound: {
    eyebrow: 'Erreur 404',
    title: "Cette page s'est perdue dans la traduction",
    subtitle:
      "La page que vous recherchez n'existe pas ou a peut-\u00e9t\u00e9 \u00e9t\u00e9 d\u00e9plac\u00e9e. Revenons sur la bonne voie.",
    homeButton: "Retour \u00e0 l'accueil",
    contactButton: 'Contacter le support',
  },
  errorPage: {
    eyebrow: 'Une erreur est survenue',
    title: 'Nous avons rencontr\u00e9 une erreur inattendue',
    subtitle:
      'Notre \u00e9quipe a \u00e9t\u00e9 inform\u00e9e. Veuillez r\u00e9essayer ou revenir \u00e0 l\u2019accueil si le probl\u00e8me persiste.',
    retryButton: 'R\u00e9essayer',
    homeButton: "Retour \u00e0 l'accueil",
  },
  loadingScreen: {
    label: 'Chargement de Linguava\u2026',
  },
  legal: {
    backButton: "Retour \u00e0 l'accueil",
    updated: 'Derni\u00e8re mise \u00e0 jour : {date}',
    privacy: {
      title: 'Politique de confidentialit\u00e9',
      intro:
        'Linguava (\u00ab nous \u00bb) respecte votre vie priv\u00e9e. Cette politique explique quelles donn\u00e9es nous collectons, comment nous les utilisons et les choix qui s\u2019offrent \u00e0 vous.',
      sections: [
        {
          heading: 'Informations que nous collectons',
          body: 'Nous collectons les informations que vous fournissez directement (nom, e-mail, entreprise via notre formulaire de contact) ainsi que des donn\u00e9es collect\u00e9es automatiquement pour exploiter et am\u00e9liorer nos services.',
        },
        {
          heading: 'Utilisation de vos informations',
          body: 'Nous utilisons les informations collect\u00e9es pour fournir et am\u00e9liorer nos services de traduction et de localisation, r\u00e9pondre \u00e0 vos demandes et respecter nos obligations l\u00e9gales.',
        },
        {
          heading: 'S\u00e9curit\u00e9 des donn\u00e9es',
          body: 'Nous maintenons des garanties align\u00e9es sur SOC 2 Type II et ISO 27001, incluant le chiffrement en transit et au repos, des contr\u00f4les d\u2019acc\u00e8s et des revues de s\u00e9curit\u00e9 r\u00e9guli\u00e8res.',
        },
        {
          heading: 'Partage des donn\u00e9es',
          body: 'Nous ne vendons pas vos donn\u00e9es personnelles. Nous pouvons les partager avec des prestataires de confiance, toujours sous des obligations strictes de confidentialit\u00e9.',
        },
        {
          heading: 'Vos droits',
          body: 'Vous pouvez demander l\u2019acc\u00e8s, la correction ou la suppression de vos donn\u00e9es personnelles \u00e0 tout moment en nous contactant \u00e0 privacy@linguava.ai.',
        },
      ],
    },
    terms: {
      title: 'Conditions d\u2019utilisation',
      intro:
        'Ces conditions r\u00e9gissent votre acc\u00e8s et votre utilisation des services de traduction, de localisation et services connexes de Linguava. En utilisant nos services, vous acceptez ces conditions.',
      sections: [
        {
          heading: 'Utilisation des services',
          body: 'Vous ne pouvez utiliser nos services qu\u2019\u00e0 des fins l\u00e9gales et conform\u00e9ment \u00e0 ces conditions. Vous \u00eates responsable de l\u2019exactitude et de la l\u00e9galit\u00e9 du contenu soumis pour traduction.',
        },
        {
          heading: 'Propri\u00e9t\u00e9 intellectuelle',
          body: 'Vous conservez la propri\u00e9t\u00e9 de tout contenu que vous soumettez. Linguava conserve la propri\u00e9t\u00e9 de sa plateforme, de ses mod\u00e8les d\u2019IA et de sa technologie sous-jacente.',
        },
        {
          heading: 'Niveaux de service',
          body: 'Les d\u00e9lais de traitement et objectifs de pr\u00e9cision varient selon le niveau de service et sont d\u00e9taill\u00e9s dans votre contrat entreprise ou bon de commande.',
        },
        {
          heading: 'Limitation de responsabilit\u00e9',
          body: 'Dans la mesure permise par la loi, la responsabilit\u00e9 de Linguava pour toute r\u00e9clamation d\u00e9coulant de ces conditions est limit\u00e9e aux frais pay\u00e9s pour les services au cours des 12 mois pr\u00e9c\u00e9dents.',
        },
        {
          heading: 'Modifications de ces conditions',
          body: 'Nous pouvons mettre \u00e0 jour ces conditions de temps \u00e0 autre. La poursuite de l\u2019utilisation de nos services apr\u00e8s l\u2019entr\u00e9e en vigueur des modifications constitue une acceptation des conditions r\u00e9vis\u00e9es.',
        },
      ],
    },
    security: {
      title: 'S\u00e9curit\u00e9',
      intro:
        'La s\u00e9curit\u00e9 est fondamentale dans la conception et l\u2019exploitation de Linguava. Notre programme vise \u00e0 prot\u00e9ger la confidentialit\u00e9, l\u2019int\u00e9grit\u00e9 et la disponibilit\u00e9 de vos donn\u00e9es.',
      sections: [
        {
          heading: 'Certifications',
          body: 'Linguava est audit\u00e9e SOC 2 Type II et align\u00e9e ISO 27001, avec des \u00e9valuations ind\u00e9pendantes r\u00e9alis\u00e9es r\u00e9guli\u00e8rement.',
        },
        {
          heading: 'Chiffrement',
          body: 'Toutes les donn\u00e9es sont chiffr\u00e9es en transit via TLS 1.2+ et au repos avec un chiffrement AES-256 standard de l\u2019industrie.',
        },
        {
          heading: 'Contr\u00f4le d\u2019acc\u00e8s',
          body: 'Nous appliquons un contr\u00f4le d\u2019acc\u00e8s bas\u00e9 sur les r\u00f4les, l\u2019authentification unique et le principe du moindre privil\u00e8ge dans toute notre infrastructure.',
        },
        {
          heading: 'Surveillance et r\u00e9ponse aux incidents',
          body: 'Nos syst\u00e8mes sont surveill\u00e9s en continu et nous maintenons un plan de r\u00e9ponse aux incidents document\u00e9 avec des proc\u00e9dures d\u2019escalade d\u00e9finies.',
        },
        {
          heading: 'Signaler une vuln\u00e9rabilit\u00e9',
          body: 'Si vous pensez avoir trouv\u00e9 une vuln\u00e9rabilit\u00e9 de s\u00e9curit\u00e9, contactez security@linguava.ai et notre \u00e9quipe r\u00e9pondra rapidement.',
        },
      ],
    },
    compliance: {
      title: 'Conformit\u00e9',
      intro:
        'Nous aidons les entreprises \u00e0 respecter leurs obligations r\u00e9glementaires lors de la traduction et de la localisation de contenus sensibles.',
      sections: [
        {
          heading: 'Alignement r\u00e9glementaire',
          body: 'Nos pratiques sont con\u00e7ues pour s\u2019aligner sur le RGPD, le CCPA et les r\u00e9glementations sectorielles selon votre secteur et votre juridiction.',
        },
        {
          heading: 'R\u00e9sidence des donn\u00e9es',
          body: 'Les clients entreprise peuvent demander des contr\u00f4les de r\u00e9sidence et de localisation de traitement des donn\u00e9es pour r\u00e9pondre aux exigences r\u00e9glementaires locales.',
        },
        {
          heading: 'Pistes d\u2019audit',
          body: 'Chaque document et flux de traduction inclut une piste d\u2019audit compl\u00e8te, appuyant la gouvernance interne et les audits externes.',
        },
        {
          heading: 'Accords de traitement des donn\u00e9es',
          body: 'Nous proposons des accords de traitement des donn\u00e9es (DPA) et pouvons r\u00e9pondre aux questionnaires de diligence raisonnable pour les achats en entreprise.',
        },
        {
          heading: 'Questions',
          body: 'Pour la documentation de conformit\u00e9 ou des questionnaires, contactez compliance@linguava.ai.',
        },
      ],
    },
  },
  footer: {
    landmarkLabel: 'Pied de page',
    tagline:
      'Traduction et localisation aliment\u00e9es par l\u2019IA pour les entreprises mondiales, appuy\u00e9es par une relecture humaine experte et une s\u00e9curit\u00e9 de niveau entreprise.',
    columns: {
      product: 'Produit',
      company: 'Entreprise',
      legal: 'Mentions l\u00e9gales',
    },
    productLinks: ['Traduction juridique', 'Traduction IA', 'MTPE', 'Localisation'],
    companyLinks: ['\u00c0 propos', 'Comment \u00e7a marche', 'T\u00e9moignages', 'Contact'],
    legalLinks: ['Politique de confidentialit\u00e9', 'Conditions d\u2019utilisation', 'S\u00e9curit\u00e9', 'Conformit\u00e9'],
    bottom: {
      copyright: '\u00a9 {year} Linguava. Tous droits r\u00e9serv\u00e9s.',
      privacy: 'Confidentialit\u00e9',
      terms: 'Conditions',
      contact: 'Contact',
    },
  },
};

export default fr;
