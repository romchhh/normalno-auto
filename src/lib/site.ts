export const siteConfig = {
  name: 'WayOfProcessing',
  title: 'WayOfProcessing — Stripe Payment Processing',
  titleRu:
    'WayOfProcessing — процессинг Stripe от 1.5% | Прогретые аккаунты и приём платежей',
  titleEn:
    'WayOfProcessing — Stripe Processing from 1.5% | Warmed Accounts & Payment Acceptance',
  description:
    'Stripe payment processing for any niche from 1.5%. Warmed-up accounts, 99.9% uptime, CRM access and unlimited withdrawals in EUR, USD, PLN and USDT.',
  descriptionRu:
    'Процессинг Stripe под любые ниши от 1.5%. Прогретые аккаунты с оборотом, аптайм 99.9%, CRM, вывод в EUR/USD/USDT. Бесплатная консультация эксперта.',
  descriptionEn:
    'Stripe payment processing for any niche from 1.5%. Warmed accounts, 99.9% uptime, CRM and withdrawals in EUR, USD, USDT. Free expert consultation.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wayofprocessing.com',
  email: 'hello@wayofprocessing.com',
  telegram: '@wayofprocessing',
  telegramChannelUrl: 'https://t.me/wayofprocessing',
  telegramOperatorUrl: 'https://t.me/wayofprocessing',
  locale: 'ru_RU',
  alternateLocale: 'en_US',
  ogImage: '/images/hero-stripe.png',
  ogImageAlt: 'WayOfProcessing — международный процессинг платежей через Stripe',
  themeColor: '#635BFF',
  keywords: [
    'Stripe processing',
    'Stripe payment processing',
    'payment processing',
    'Stripe accounts',
    'warmed Stripe accounts',
    'card processing',
    'international payments',
    'high-risk processing',
    'payment routing',
    'Stripe integration',
    'Stripe Connect',
    'прогретые Stripe аккаунты',
    'процессинг Stripe',
    'приём платежей',
    'подключение Stripe',
    'международные платежи',
    'процессинг платежей',
    'Stripe для бизнеса',
    'аренда Stripe аккаунта',
    'Stripe high-risk',
    'Stripe СНГ',
    'вывод средств Stripe',
    'Stripe CRM',
    'WayOfProcessing',
  ],
  seo: {
    slogan: 'Международный процессинг Stripe от 1.5%',
    disclaimer:
      'WayOfProcessing — независимый сервис и не является аффилированным лицом, партнёром или дочерней компанией Stripe, Inc.',
    disclaimerEn:
      'WayOfProcessing is an independent service and is not affiliated with, endorsed by, or a subsidiary of Stripe, Inc.',
    contentLanguages: 'ru, en',
    knowsAbout: [
      'Stripe payment processing',
      'Stripe account setup',
      'Warmed Stripe accounts',
      'Payment routing',
      'International payment acceptance',
      'High-risk payment processing',
      'Stripe API integration',
      'E-commerce checkout',
      'PCI DSS compliance',
      'Chargeback management',
      'Stripe webhooks',
      'Cross-border payments',
    ],
    stats: {
      accountsCreated: 1100,
      yearsExperience: 7,
      clientVolume: '$53M+',
      uptime: '99.9%',
      commissionFrom: '1.5%',
    },
    areaServed: ['Worldwide', 'European Union', 'United Kingdom', 'United States', 'CIS'],
  },
  pages: {
    blog: {
      title: 'Блог WayOfProcessing — Stripe, процессинг и интеграции',
      titleEn: 'WayOfProcessing Blog — Stripe, processing and integrations',
      description:
        'Статьи WayOfProcessing о процессинге Stripe, прогретых аккаунтах, интеграциях, payment routing и приёме международных платежей для бизнеса.',
      descriptionEn:
        'WayOfProcessing articles on Stripe processing, warmed accounts, integrations, payment routing and accepting international payments.',
    },
    privacy: {
      title: 'Политика конфиденциальности WayOfProcessing',
      titleEn: 'WayOfProcessing Privacy Policy',
      description:
        'Как WayOfProcessing собирает, использует и защищает персональные данные при использовании сайта и отправке заявок.',
      descriptionEn:
        'How WayOfProcessing collects, uses and protects personal data when you use our website and contact forms.',
    },
  },
}
