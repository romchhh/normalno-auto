export const siteConfig = {
  name: 'WayOfProcessing',
  title: 'WayOfProcessing — Stripe Payment Processing',
  titleRu:
    'Процессинг Stripe под ключ | Аренда и покупка Stripe аккаунтов — WayOfProcessing',
  titleEn:
    'Buy or Rent Verified Stripe Account | Stripe Processing Service — WayOfProcessing',
  description:
    'Stripe payment processing for any niche from 1.5%. Warmed-up accounts, 99.9% uptime, CRM access and unlimited withdrawals in EUR, USD, PLN and USDT.',
  descriptionRu:
    'Аренда и покупка прогретых Stripe аккаунтов. Процессинг платежей под любые ниши от 1.5%. Вывод в EUR/USD/USDT. Регистрация юрлиц. Поддержка 24/7.',
  descriptionEn:
    'Buy or rent verified warmed Stripe accounts. Turnkey payment processing for any niche from 1.5%. Payouts in EUR, USD, USDT. Company registration. 24/7 support.',
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
    'процессинг Stripe',
    'процессинг Stripe аккаунтов под ключ',
    'услуга процессинг Stripe аккаунтов',
    'аренда Stripe аккаунта',
    'покупка Stripe аккаунта',
    'прогретый Stripe аккаунт',
    'готовый Stripe аккаунт купить',
    'верифицированный Stripe аккаунт',
    'Stripe аккаунт с оборотом',
    'Stripe аккаунт без блокировки',
    'подключение Stripe',
    'приём платежей через Stripe',
    'международные платежи Stripe',
    'Stripe для высокорисковых ниш',
    'high risk payment processing',
    'вывод Stripe в USDT',
    'вывод Stripe в EUR',
    'регистрация компании для Stripe',
    'юрлицо под Stripe',
    'buy stripe account',
    'rent stripe account',
    'buy verified stripe account',
    'Stripe payment processing',
    'Stripe processing service',
    'WayOfProcessing',
    'wayofprocessing.com',
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
